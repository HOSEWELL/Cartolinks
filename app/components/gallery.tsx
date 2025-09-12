import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&auto=format&fit=crop&q=80",
  "https://i.pinimg.com/736x/fe/45/ca/fe45ca8f276912b43a124a85da30e65a.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Gallery</h3>
        <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((src, i) => (
          <div key={i} className="card overflow-hidden relative aspect-[4/3]">
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
