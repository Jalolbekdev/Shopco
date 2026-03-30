import { Rate } from "antd";
import { useEffect, useState } from "react";

function DetailsTabs2() {
  const [data, Setdata] = useState([]);
  let count=0
  useEffect(() => {
    fetch("https://d9c81dd38cc5b9fc.mokky.dev/comments")
      .then((res) => res.json())
      .then((data) => Setdata(data));
  }, []);
  return (
    <div className="details__bottom-item">
      <p className="details__bottom-title">All Reviews(451)</p>
      <div className="details__bottom-products">
        {data &&
          data.map((item) => {
            count++
            if(count<=6){
                return (
                  <div className="details__bottom-product">
                    <Rate defaultValue={5} disabled />
                    <p className="details__bottom-product-title">{item.name}</p>
                    <p className="details__bottom-product-subtitle">
                      {item.subtitle}
                    </p>
                  </div>
                );

            }
          })}
      </div>
    </div>
  );
}

export default DetailsTabs2;
