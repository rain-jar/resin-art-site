"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function TraysCoasters() {
  return (
    <>
      <Header />

      <main className="px-4 py-8 md:px-16 md:py-12 bg-primary">
        {/* Staggered Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-80 bg-footer text-accent p-6 rounded-lg shadow-lg flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold">Trays & Coasters</h2>
          </div>
          <Image
              src="/images/trays-coasters/Coasters.png"
              alt="Coasters"
              width={200}
              height={200}
              className="rounded-lg shadow-lg object-cover w-full h-80"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[20px]">

            <div className="row-span-2">
              <Image
                src="/images/trays-coasters/Row2-Img1.png"
                alt="Trays Set"
                width={600}
                height={800}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>

          {/* Box 2 - Small Image */}
          <div>
            <Image
              src="/images/trays-coasters/Row2-Img2.png"
              alt="Coasters"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Box 3 - Small Image */}
          <div>
            <Image
              src="/images/trays-coasters/Row2-Img3.png"
              alt="Coaster with Leaf"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Box 4 - Text Block */}
          <div className="row-span-3 bg-footer text-accent p-6 rounded-lg shadow-lg flex items-center justify-center">
            <p className="text-lg leading-relaxed">
              Selection of pressed flowers and natural items gathered in Montreal and South Africa. Produced using
              silicone moulds and slow casting resin.
            </p>
          </div>

          {/* Box 5 - Large Image */}
          <div className="row-span-2">
            <Image
              src="/images/trays-coasters/Row3-Img2.png"
              alt="Tray in Hand"
              width={600}
              height={800}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Box 3 - Small Image */}
          <div>
            <Image
              src="/images/trays-coasters/Row3-Img1.png"
              alt="Coaster with Leaf"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
