import img1 from "../../assets/alb11.jpg";
import img2 from "../../assets/alb12.jpg";
import img3 from "../../assets/alb13.jpg";
import img4 from "../../assets/alb14.jpg";
import img5 from "../../assets/alb15.jpg";
import img6 from "../../assets/alb16.jpg";
import img7 from "../../assets/alb17.jpg";
import img8 from "../../assets/alb19.jpg";
import img9 from "../../assets/alb20.jpg";
import img10 from "../../assets/alb21.jpg";
import img11 from "../../assets/alb10.jpg";

export default function Gallery() {
  const images = [
    { src: img11, alt: "Community outreach", id: 1 },
    { src: img2, alt: "Leadership development", id: 2 },
    { src: img3, alt: "Empowerment program", id: 3 },
    { src: img4, alt: "Rural community initiative", id: 4 },
    { src: img5, alt: "Faith-based initiative", id: 5 },
    { src: img1, alt: "Faith-based initiative", id: 5 },

    { src: img8, alt: "Community engagement", id: 6 },
    { src: img3, alt: "Local empowerment project", id: 7 },
    { src: img6, alt: "Local empowerment project", id: 7 },
    { src: img7, alt: "Local empowerment project", id: 7 },
    { src: img8, alt: "Local empowerment project", id: 7 },
    { src: img10, alt: "Local empowerment project", id: 7 },
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

      <div className="grid md:px-10 py-8 md:grid-cols-3 auto-rows-[220px] gap-4">
        {images.map((img) => (
          <div
            key={img.id}
            className={`rounded-xl w-full overflow-hidden ${
              img.id === 1 ? "row-span-2" : ""
            } 
              ${img.id === 3 && "row-span-2"}
              ${img.id === 4 && "row-span-2"}
             `}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
