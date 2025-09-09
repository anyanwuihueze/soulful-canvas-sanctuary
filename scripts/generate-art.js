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

async function run() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt = "Analyze the provided image of an art piece. Based on its visual elements, mood, and potential symbolism, generate a fitting title, a primary emotion it evokes, and a short, poetic story or description that captures the essence of the artwork. Return the response as a JSON object with the following keys: title, emotion, story.";

  try {
    const files = await fs.promises.readdir(uploadsFolderPath);
    const imageFiles = files.filter(file => /\.(png|jpe?g|gif)$/i.test(file));

    const artworksData = await fs.promises.readFile(artworksFilePath, "utf-8");
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
      const imagePart = fileToGenerativePart(filePath, "image/png");

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
