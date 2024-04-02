import Image from "next/image";
import Link from "next/link";

export default function ProfileGrid({
  vertical = false,
  hybrid = false,
  className = "",
  data = [],
}) {
  function VerticalCard({
    link = "#",
    image = "/images/defaultImage.jpg",
    name,
    designation,
    country,
  }) {
    
    return (
      <Link href={link} target={link != "#" ? "_blank" : "_self"}>
        <div
          className="flex flex-col items-center bg-[#31363F] bg-opacity-70 py-5 px-3 rounded-2xl shadow-white w-[200px] min-h-[321px] text-center hover:scale-[1.05] cursor-pointer"
          style={{ transition: "all 0.4s" }}
        >
          <div className="flex justify-center items-center">
            <Image
              src={image}
              height={200}
              width={200}
              alt={name}
              className="rounded-full border-white border-2 w-[125px] h-[125px] object-cover object-center"
            />
          </div>
          <div className="p-2 px-0 flex flex-col justify-center items-center pt-3">
            <h3 className="font-black text-white mb-1">{name}</h3>
            <h4 className="font-medium text-opacity-[0.6] text-white">
              {designation}
            </h4>
            <h4 className="font-medium text-opacity-[0.6] text-white">
              {country.toUpperCase()}
            </h4>
          </div>
        </div>
      </Link>
    );
  }

  function HorizontalCard({
    link = "#",
    image = "/images/defaultImage.jpg",
    name,
    designation,
    country,
  }) {
    return (
      <Link
        href={link}
        className={`h-full w-[400px] text-white ${className}`}
        target={link == "#" ? "_blank" : "_self"}
      >
        <div
          className="bg-[#31363F] bg-opacity-70 flex items-center gap-5 rounded-2xl hover:scale-[1.05] p-5 min-h-[120px] md:min-h-[150px] w-full shadow-md shadow-black"
          style={{ transition: "all 0.4s" }}
        >
          <Image
            src={image}
            height={200}
            width={200}
            alt="img"
            className="rounded-full w-[100px] h-[100px] object-center object-cover"
          />
          <div>
            <h1 className="font-extrabold">{name}</h1>
            <p className="font-medium text-opacity-5 opacity-80 text-sm pt-1">
              {designation}
            </p>
            <p className="font-medium text-opacity-5 opacity-80 text-sm pt-1">
              {country}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="overflow-y-auto max-h-[80vh] md:mx-20 my-5">
      {hybrid ? (
        <div>
          <div
            className={`hidden md:flex flex-wrap gap-3 md:gap-5 margin-auto w-full justify-center p-2 pt-5 md:p-5 ${className}`}
          >
            {data.map((card, index) => {
              return (
                <VerticalCard
                  key={index}
                  name={card.name}
                  image={card.img}
                  designation={card.designation}
                  country={card.country}
                  link={card.link}
                />
              );
            })}
          </div>
          <div
            className={`flex md:hidden flex-wrap gap-3 md:gap-5 margin-auto w-full justify-center p-2 pt-5 md:p-5 ${className}`}
          >
            {data.map((card, index) => {
              return (
                <HorizontalCard
                  key={index}
                  name={card.name}
                  image={card.img}
                  designation={card.designation}
                  country={card.country}
                  link={card.link}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div
          className={`flex flex-wrap gap-3 md:gap-5 margin-auto w-full justify-center p-2 pt-5 md:p-5 ${className}`}
        >
          {vertical
            ? data.map((card, index) => {
                return (
                  <VerticalCard
                    key={index}
                    name={card.name}
                    image={card.img}
                    designation={card.designation}
                    country={card.country}
                    link={card.link}
                  />
                );
              })
            : data.map((card, index) => {
                return (
                  <HorizontalCard
                    key={index}
                    name={card.name}
                    image={card.img}
                    designation={card.designation}
                    country={card.country}
                    link={card.link}
                  />
                );
              })}
        </div>
      )}
    </div>
  );
}

