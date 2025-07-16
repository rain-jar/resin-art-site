"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Bowls() {
  return (
    <>
      <Header />

      <main className="px-4 py-8 md:px-16 md:py-12 bg-primary">
        {/* Staggered Grid */}
{/*
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-80 bg-footer text-accent p-6 rounded-lg shadow-lg flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold">Bowls</h2>
          </div>

          <div className="row-span-3">
            <Image
                src="/images/trays-coasters/Coasters.png"
                alt="Coasters"
                width={600}
                height={1000}
                className="rounded-lg shadow-lg object-cover w-full h-1000"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[20px]">
            <div>
                <Image
                    src="/images/trays-coasters/Row2-Img2.png"
                    alt="Coasters"
                    width={200}
                    height={200}
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                />
            </div>

            <div className="h-40 bg-footer text-accent p-6 rounded-lg shadow-lg flex items-center justify-center">
                <p className="text-lg leading-relaxed">
                Selection of pressed flowers and natural items gathered in Montreal and South Africa. Produced using
                silicone moulds and slow casting resin.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[20px]">
            <div>
                <Image
                    src="/images/trays-coasters/Row2-Img2.png"
                    alt="Coasters"
                    width={200}
                    height={400}
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                />
            </div>

                        <div>
                <Image
                    src="/images/trays-coasters/Row2-Img2.png"
                    alt="Coasters"
                    width={400}
                    height={200}
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                />
            </div>
        </div>
*/}

        <div className="columns-1 md:columns-2 lg:columns-2 gap-4">
            <div className="h-100 mb-4 break-inside-avoid rounded-lg shadow-lg bg-footer text-accent p-6">
                 <h1 className="text-3xl md:text-4xl font-bold">Bowls</h1>
            </div>
            <img src="/images/bowls/Img2.png" className="mb-4 break-inside-avoid rounded-lg shadow-lg w-full" />
            <img src="/images/bowls/Img1.png" className="mb-4 break-inside-avoid rounded-lg shadow-lg w-full" />
            <img src="/images/bowls/Img3.png" className="mb-4 break-inside-avoid rounded-lg shadow-lg w-full" />
            <div className="mb-4 break-inside-avoid rounded-lg shadow-lg bg-footer text-accent p-6">
                <p className="text-lg leading-relaxed">
                    Selection of flowers and natural items harvested in Montreal, dried in silica gel, produced with use of
                    silicon moulds and slow casting resin.
                </p>
            </div>
            <img src="/images/bowls/Img4.png" className="mb-4 break-inside-avoid rounded-lg shadow-lg w-full" />
        </div>

      </main>

      <Footer />
    </>
  );
}