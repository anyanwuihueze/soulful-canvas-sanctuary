export default function GallerySection() {
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Our Gallery</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-square bg-gray-300"></div>
        <div className="aspect-square bg-gray-300"></div>
        <div className="aspect-square bg-gray-300"></div>
        <div className="aspect-square bg-gray-300"></div>
      </div>
    </section>
  );
}
