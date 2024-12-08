import Image from "next/image";

const BrowseByStyle = () => {
  return (
    <section className="px-4 py-8">
      <div className="bg-gray-100 rounded-2xl shadow-md p-12 max-w-[60%] mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-extrabold text-center mb-8">Browse by Dress Style</h2>

        {/* Row Layout */}
        <div className="flex flex-col grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-4">
          {/* Row 1 */}
          <div className="flex flex-wrap lg:flex-nowrap gap-2">
            <div className="flex-1 lg:flex-[1.2] bg-white rounded-lg shadow overflow-hidden h-[150px]">
              <Image
                src="/browseByStyle/r1-img-1.png"
                alt="Casual Style"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 lg:flex-[2] bg-white rounded-lg shadow overflow-hidden h-[150px]">
              <Image
                src="/browseByStyle/r1-img-2.png"
                alt="Formal Style"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap lg:flex-nowrap gap-2">
            <div className="flex-1 lg:flex-[2] bg-white rounded-lg shadow overflow-hidden h-[150px]">
              <Image
                src="/browseByStyle/r2-img-1.png"
                alt="Party Style"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 lg:flex-[1.2] bg-white rounded-lg shadow overflow-hidden h-[150px]">
              <Image
                src="/browseByStyle/r2-img-2.png"
                alt="Sportswear Style"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByStyle;
