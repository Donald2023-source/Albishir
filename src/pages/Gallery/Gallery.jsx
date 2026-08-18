export default function Gallery() {
  const images = [
    { name: 1, id: 1 },
    { name: 2, id: 2 },
    { name: 3, id: 3 },
    { name: 4, id: 4 },
    { name: 5, id: 5 },
    { name: 6, id: 6 },
    { name: 6, id: 7 },
  ];

  return (
    <div className="max-w-7xl w-full mx-auto px-4">
      <div className="md:w-[50%] flex items-center py-8 mx-auto flex-col text-center gap-6">
        <h2 className="font-header text-5xl">Gallery</h2>

        <p className="text-[#5A5A5ACC] md:text-lg">
          Explore moments from our work in rural communities, leadership
          development, empowerment programs, and faith-based initiatives.
        </p>
      </div>

      <div className="grid px-10 md:grid-cols-3 grid-rows-2 gap-4 h-[500px]">
        {images.map((img) => (
          <div
            key={img.id}
            className={`border rounded-xl overflow-hidden ${
              img.id === 1 ? "row-span-2" : ""
            } 
              ${img.id === 3 && "row-span-2"}
              ${img.id === 4 && "row-span-3"}
          
             `}
          >
            {img.name}
          </div>
        ))}
      </div>
    </div>
  );
}
