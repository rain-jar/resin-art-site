"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Tables() {
  return (
    <>
      <Header />

      <main className="px-4 py-8 md:px-16 md:py-12 bg-primary">
        {/* Staggered Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-80 bg-footer text-accent p-6 rounded-lg shadow-lg flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold">Tables</h2>
          </div>
          <Image
              src="/images/tables/table1.png"
              alt="Coasters"
              width={200}
              height={200}
              className="rounded-lg shadow-lg object-cover w-full h-80"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-[20px]">
          <div className="bg-footer text-accent p-6 rounded-lg shadow-lg flex items-center justify-center">
            <p className="text-lg ml-8 mr-8 leading-relaxed text-center">
              Upcycled IKEA tables filled with a selection of flowers and natural items from South Africa, Montreal and Muskoka,Canada, dried in silica gel, slow casting 
              and durable top coat resin.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[20px]">

            <div className="row-span-3">
              <Image
                src="/images/tables/table2.png"
                alt="Trays Set"
                width={600}
                height={800}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>

          {/* Box 2 - Small Image */}
          <div className="row-span-2">
            <Image
              src="/images/tables/table3.png"
              alt="Coasters"
              width={600}
              height={800}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Box 3 - Small Image */}
          <div>
            <Image
              src="/images/tables/table4.png"
              alt="Coaster with Leaf"
              width={200}
              height={200}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}