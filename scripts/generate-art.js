require('dotenv').config(); // Load environment variables from .env file
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const path = require("path");

const artworksFilePath = path.join(__dirname, '../src/artworks.json');
const uploadsFolderPath = path.join(__dirname, '../public/lovable-uploads');

// Function to convert file to generative part
function fileToGenerativePart(filePath, mimeType) {
    const fileData = fs.readFileSync(filePath);
    return {
        inlineData: {
            data: Buffer.from(fileData).toString("base64"),
            mimeType
        },
    };
}

// Initialize Gemini AI
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error("❌ No Gemini API key found! Check your .env file.");
    process.exit(1);
}

console.log("✅ Using Gemini API key:", GEMINI_API_KEY.substring(0, 10) + "...");

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

// Function to generate artwork metadata using AI
async function generateArtworkMetadata(imagePath, filename) {
    try {
        console.log(`🎨 Analyzing ${filename}...`);
        
        const imagePart = fileToGenerativePart(imagePath, "image/jpeg");
        
        const prompt = `
        Analyze this artwork and provide a JSON response with the following structure:
        {
            "title": "A creative, artistic title for this piece",
            "emotion": "The primary emotion this artwork evokes (one word: Serene, Vibrant, Mysterious, Joyful, Melancholic, etc.)",
            "story": "A short, poetic description (2-3 sentences) about what this artwork represents or the story it tells",
            "category": "The artistic style/category (Abstract, Portrait, Landscape, Digital, Contemporary, etc.)"
        }
        
        Be creative and insightful. The title should be unique and memorable.
        `;

        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        const text = response.text();
        
        // Extract JSON from the response
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        } else {
            throw new Error("No JSON found in response");
        }
        
    } catch (error) {
        console.error(`❌ Error analyzing ${filename}:`, error.message);
        // Return fallback metadata
        return {
            title: `Untitled ${Date.now()}`,
            emotion: "Mysterious",
            story: "A captivating digital artwork that invites contemplation and wonder.",
            category: "Digital"
        };
    }
}

// Main function to process all images
async function generateArtworkData() {
    try {
        console.log("🚀 Starting artwork generation...");
        
        // Check if uploads folder exists
        if (!fs.existsSync(uploadsFolderPath)) {
            console.log("📁 Creating uploads folder...");
            fs.mkdirSync(uploadsFolderPath, { recursive: true });
        }

        // Get all image files from uploads folder
        const imageFiles = fs.readdirSync(uploadsFolderPath)
            .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));

        if (imageFiles.length === 0) {
            console.log("⚠️ No images found in uploads folder. Creating sample data...");
            
            // Create sample artworks data
            const sampleArtworks = [
                {
                    id: 1,
                    title: "Digital Dreams",
                    image: "/placeholder.svg",
                    emotion: "Serene",
                    story: "A peaceful journey through digital landscapes where reality meets imagination.",
                    category: "Abstract"
                },
                {
                    id: 2,
                    title: "Neon Reflections",
                    image: "/placeholder.svg", 
                    emotion: "Vibrant",
                    story: "Bold colors dance in harmony, creating an electric symphony of light and shadow.",
                    category: "Contemporary"
                },
                {
                    id: 3,
                    title: "Ethereal Moments",
                    image: "/placeholder.svg",
                    emotion: "Mysterious",
                    story: "Capturing fleeting moments that exist between dreams and reality.",
                    category: "Digital"
                }
            ];

            // Save sample data
            fs.writeFileSync(artworksFilePath, JSON.stringify(sampleArtworks, null, 2));
            console.log("✅ Sample artworks.json created with placeholder data");
            return;
        }

        console.log(`🖼️ Found ${imageFiles.length} images to process...`);
        
        const artworks = [];
        
        for (let i = 0; i < imageFiles.length; i++) {
            const filename = imageFiles[i];
            const imagePath = path.join(uploadsFolderPath, filename);
            
            console.log(`Processing ${i + 1}/${imageFiles.length}: ${filename}`);
            
            // Generate metadata using AI
            const metadata = await generateArtworkMetadata(imagePath, filename);
            
            const artwork = {
                id: i + 1,
                title: metadata.title,
                image: `/lovable-uploads/${filename}`,
                emotion: metadata.emotion,
                story: metadata.story,
                category: metadata.category
            };
            
            artworks.push(artwork);
            console.log(`✅ Generated: "${artwork.title}" (${artwork.emotion})`);
            
            // Add delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        // Save artworks to JSON file
        fs.writeFileSync(artworksFilePath, JSON.stringify(artworks, null, 2));
        
        console.log(`\n🎉 SUCCESS! Generated ${artworks.length} artworks in artworks.json`);
        console.log("📄 File saved to:", artworksFilePath);
        
    } catch (error) {
        console.error("💥 Error generating artwork data:", error);
    }
}

// Run the script
if (require.main === module) {
    generateArtworkData();
}
async function run() {
  // Use VITE_GEMINI_API_KEY for consistency
  const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);
  // Use gemini-2.5-flash as specified by the user
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = "Analyze the provided image of an art piece. Based on its visual elements, mood, and potential symbolism, generate a fitting title, a primary emotion it evokes, and a short, poetic story or description that captures the essence of the artwork. Return the response as a JSON object with the following keys: title, emotion, story.";

  try {
    const files = await fs.promises.readdir(uploadsFolderPath);
    const imageFiles = files.filter(file => /\.(png|jpe?g|gif|webp)$/i.test(file)); // Added webp to supported formats

    let artworksData;
    try {
      artworksData = await fs.promises.readFile(artworksFilePath, "utf-8");
    } catch (readError) {
      if (readError.code === 'ENOENT') {
        artworksData = '[]'; // Initialize if file doesn't exist
      } else {
        throw readError;
      }
    }
    
    const existingArtworks = JSON.parse(artworksData);
    const existingImagePaths = existingArtworks.map(art => art.image);
    
    const newArtworks = [];

    for (const file of imageFiles) {
      const imagePath = `/lovable-uploads/${file}`;
      if (existingImagePaths.includes(imagePath)) {
        console.log(`Skipping existing artwork: ${file}`);
        continue;
      }

      console.log(`Processing new artwork: ${file}`);
      const filePath = path.join(uploadsFolderPath, file);
      
      // Determine mime type based on file extension
      let mimeType = "application/octet-stream";
      const ext = path.extname(file).toLowerCase();
      if (ext === ".png") mimeType = "image/png";
      else if (ext === ".jpg" || ext === ".jpeg") mimeType = "image/jpeg";
      else if (ext === ".gif") mimeType = "image/gif";
      else if (ext === ".webp") mimeType = "image/webp"; // Added webp mime type

      const imagePart = fileToGenerativePart(filePath, mimeType);

      const result = await model.generateContent([prompt, imagePart]);
      const response = await result.response;
      const text = response.text();

      const { title, emotion, story } = JSON.parse(text);

      newArtworks.push({
        id: existingArtworks.length + newArtworks.length + 1,
        title,
        image: imagePath,
        emotion,
        story,
        category: "Portrait",
      });
    }

    if (newArtworks.length > 0) {
      const allArtworks = [...existingArtworks, ...newArtworks];
      await fs.promises.writeFile(artworksFilePath, JSON.stringify(allArtworks, null, 2), "utf-8");
      console.log(`Successfully added ${newArtworks.length} new artwork(s) to the gallery.`);
    } else {
      console.log("No new artworks to add.");
    }

  } catch (error) {
    console.error("Error processing artworks:", error);
  }
}

run();
