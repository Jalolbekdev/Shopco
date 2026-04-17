import  { useEffect, useState } from "react";
import { Link } from "react-router";

function BrowseProducts() {
  const [data, Setdata] = useState([]);
  useEffect(() => {
    fetch("https://d9c81dd38cc5b9fc.mokky.dev/products")
      .then((res) => res.json())
      .then((data) => Setdata(data));
  }, []);
  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <Link to={"/shop"}
              className="browse__product"
              key={item.id}
             
            >
              <img src={item.image} alt="" className="browse__product-img" />
              <p className="browse__product-title">{item.title}</p>
            </Link>
          );
        })}
    </>
  );
}

export default BrowseProducts;
