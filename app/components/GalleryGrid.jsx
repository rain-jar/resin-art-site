"use client";

import curatedData from "../data/curatedCollection.json";

export default function GalleryGrid() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl text-accent font-semibold mb-8 text-center">Curated Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {curatedData.map((item) => (
          <a href={item.link} key={item.id} className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-4 text-center bg-[#683930]">
              <h3 className="text-xl text-accent font-medium">{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

  