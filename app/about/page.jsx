"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
    <Header/>
    <div
      className="mt-16 min-h-screen bg-cream text-brand px-4 md:px-8 py-12"
      style={{
        backgroundImage: 'url("/images/curated/Dominos.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-xl shadow-md max-w-7xl mx-auto flex flex-col md:flex-row gap-8 min-h-[80vh]">
        {/* Left: Text */}
        <div className="flex-1 space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-footer">About La Tête En Fleurs</h1>
            <p className="text-lg leading-relaxed mb-4 text-footer">
                Based in Montreal, Canada, I am a small business owner and floral preservation artist. 
            </p>
            <div> </div>
            <p className="text-lg leading-relaxed mb-4 text-footer">
                I work primarily as a strategic planner for the United Nations system, supporting teams to design more relevant
                and results-based programmes in humanitarian and development contexts. Through this work, I have been able to 
                travel all over the world - often at historic or turbulent moments in a country's history. For years, wherever I went,
                I pressed a flower or leaf in a book - to remember the context, the people and the natural environments that 
                moved me. Unfortunately, many of those people and places are now lost to conflict. 
            </p>

            <p className="text-lg leading-relaxed mb-4 text-footer">
               Discovering epoxy resin was a personal and sentimental evolution for me, as it is the ideal material for immortalizing
               memory. Much like freezing time in a bottle, this art process both preserves and elevates natural materials, giving one the 
               ability to trap and then celebrate a special place, time or moment with a loved one in an enduring and beautiful manner.
            </p>

            <p className="text-lg leading-relaxed text-footer">
               I am self taught. I started small, with crafts and functional objects, capturing memories for myself and my family at home. 
               Gradually, my craft has evolved into art, with more ambitious shapes, forms and messages emerging. I am now exploring 
               "before and after" materials, which point to the fragility of the environment, our societies and our places in them.                                                                                                                                
            </p>

            <p className="text-footer leading-relaxed">
                <strong>- Stephanie Kleschnitzki</strong>
            </p>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 h-auto relative min-h-[300px]">
          <Image
            src="/images/Stephie.png" // 👉 Replace with your image
            alt="Loom or Artisan"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
