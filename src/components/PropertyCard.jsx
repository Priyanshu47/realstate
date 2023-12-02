import React from "react";
import pic from "../../assets/property/propertyImg.jpg";
import pic1 from "../../assets/property/pic1.jpg";
import pic2 from "../../assets/property/pic2.jpg";
import pic3 from "../../assets/property/pic3.jpg";
import pic4 from "../../assets/property/pic4.jpg";
import { Link } from "react-router-dom";

export const PropertyCard = () => {
  const data = [
    {
      images: pic1,
      heading: "Green House",
      dollar: "$84949",
      chair: "4",
      bath: "3",
      sqft: "2300",
      paths: { path: "/" },
    },
    {
      images: pic2,
      heading: "Green House",
      dollar: "$44949",
      chair: "1",
      bath: "2",
      sqft: "3600",
    },
    {
      images: pic3,
      heading: "Green House",
      dollar: "$32949",
      chair: "2",
      bath: "2",
      sqft: "2400",
    },
    {
      images: pic4,
      heading: "Green House",
      dollar: "$32949",
      chair: "2",
      bath: "2",
      sqft: "2400",
    },
  ];
  return (
    <article className="grid grid-cols-2 mt-4 gap-3 max-sm:grid-cols-1 max-sm:p-5">
      {data.map((val, index) => {
        return (
          <div className="card mb-4 md:mb-0" key={index}>
            <span className="absolute end-3 rounded my-3 bg-zinc-500 text-white">
              <label className="px-1 text-sm">FOR SALES</label>
            </span>
            <Link to={val.paths}>
              <img src={val.images} alt="" />
            </Link>
            <div className="card-body space-y-2 p-3">
              <h3 className="text-1xl">{val.heading}</h3>
              <span className="flex">
                <p className="text-cyan-500 text-1xl">{val.dollar}</p>
                <p style={{ marginLeft: "100px" }}>
                  <i className="fa-solid fa-chair ml-5"></i> {val.chair}
                  <span>
                    <i className="fa-solid fa-shower ml-5"></i> {val.chair}
                  </span>
                  <span>
                    <i className="fa-solid fa-ruler-triangle ml-5"></i>{" "}
                    {val.sqft}
                  </span>
                </p>
              </span>
            </div>
          </div>
        );
      })}
    </article>
  );
};
