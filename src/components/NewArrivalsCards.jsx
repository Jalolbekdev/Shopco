import { message, Rate } from "antd";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import { Loader } from "./HomePage/LoadingImage";
import { CardContext } from "../contexts/CartContext";

export function NewArrivalsCards({ show }) {
  const [data, Setdata] = useState([]);
  const [loader, Setloader] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Saved to cart",
    });
  };

  let count = 0;
  const Fetchdata = async () => {
    Setloader(true);
    const res = await fetch("https://d9c81dd38cc5b9fc.mokky.dev/cards");
    const data = await res.json();
    Setloader(false);
    Setdata(data);
  };

  useEffect(() => {
    Fetchdata();
  }, []);
  const { addCard, addDetails } = useContext(CardContext);

  const Handlclick = (data) => {
    addCard(data);
    success();
  };

  const Clicked = (data) => {
    addDetails(data);
  };

  return (
    <div className="newarrivals__cards">
      {contextHolder}
      {data.map((item) => {
        count++;
        if (count <= 4) {
          return (
            <div className="newarrivals__cards__item" key={item.id}>
              <Link
                to={"/details"}
                className="newarrivals__cards-img"
                onClick={() => Clicked(item)}
              >
                {loader && <Loader />}
                {!loader && <img src={item.image} alt="image" />}
              </Link>

              <div className="newarrivals__cards__main">
                <p className="newarrivals__cards-title">
                  {item.title.length > 20
                    ? `${item.title.slice(0, 21)}...`
                    : item.title}
                </p>
                <div className="newarrivals__cards-rangs">
                  <small>
                    <Rate allowHalf defaultValue={4.5} />
                  </small>
                </div>
                <div className="newarrivals__cards-price ">
                  <span className="newarrivals__cards-new-price">
                    ${item.price}
                  </span>
                  {item.oldPrice && (
                    <span className="newarrivals__cards-old-price">
                      ${item.oldPrice}
                    </span>
                  )}
                  {item.discount && (
                    <span className="newarrivals__cards-discount">
                      -{item.discount}%
                    </span>
                  )}
                </div>
              </div>
              <span
                className="newarrivals__cards-basket"
                onClick={() => Handlclick(item)}
              >
                <ShoppingCartOutlined />
              </span>
            </div>
          );
        } else if (show && count > 0) {
          return (
            <div className="newarrivals__cards__item" key={item.id}>
              <Link
                to={"/details"}
                className="newarrivals__cards-img"
                onClick={() => Clicked(item)}
              >
                {loader && <Loader />}
                {!loader && <img src={item.image} alt="image" />}
              </Link>
              <div className="newarrivals__cards__main">
                <p className="newarrivals__cards-title">
                  {item.title.length > 20
                    ? `${item.title.slice(0, 21)}...`
                    : item.title}
                </p>
                <div className="newarrivals__cards-rangs  ">
                  <small>
                    <Rate allowHalf defaultValue={4.5} />
                  </small>
                </div>
                <div className="newarrivals__cards-price">
                  <span className="newarrivals__cards-new-price">
                    ${item.price}
                  </span>
                  {item.oldPrice && (
                    <span className="newarrivals__cards-old-price">
                      ${item.oldPrice}
                    </span>
                  )}
                  {item.discount && (
                    <span className="newarrivals__cards-discount">
                      -{item.discount}%
                    </span>
                  )}
                </div>
              </div>
              <span
                className="newarrivals__cards-basket"
                onClick={() => Handlclick(item)}
              >
                <ShoppingCartOutlined />
              </span>
            </div>
          );
        }
      })}
    </div>
  );
}


