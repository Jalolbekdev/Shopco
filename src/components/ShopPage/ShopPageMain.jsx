import { useContext, useEffect, useState } from "react";
import { message, Pagination } from "antd";
import { Rate } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CardContext } from "../../contexts/CartContext";
import { Link } from "react-router";
function ShopPageMain() {
  const [data, Setdata] = useState([]);
  const [messageApi,contextHolder] = message.useMessage();
  useEffect(() => {
    const Fetchdata = async () => {
      const res = await fetch("https://d9c81dd38cc5b9fc.mokky.dev/cards");
      const data = await res.json();
      Setdata(data);
    };
    Fetchdata();
  }, []);
  let count = 0;
  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a className="shop__main-pagination-prev">Previous</a>;
    }
    if (type === "next") {
      return <a className="shop__main-pagination-prev">Next</a>;
    }
    return originalElement;
  };
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Saved to cart",
    });
  };
  const { addCard,addDetails } = useContext(CardContext);

  const Handlclick = (data) => {
    addCard(data);
    success();
  };
   const Clicked = (data) => {
    addDetails(data);
    
  };
  return (
    <main className="shop__main">
      <div className="shop__main-top">
        <p className="shop__main-title">Casual</p>
        <p className="shop__main-subtitle">
          Showing 1-10 of 100 ProductsSort by:
        </p>
      </div>
      <div className="shop__main-products">
        {contextHolder}

        {data.map((item) => {
          count++;
          if (count <= 9) {
            return (
              <div className="shop__main-products__item" key={item.id}>
                <Link to={"/details"} className="shop__main-products-images">
                <div className="shop__main-products-img" onClick={() => Clicked(item)}>
                  <img
                    src={item.image}
                    alt="image"
                    
                  />
                </div>
                </Link>
                <div className="shop__main-products__main">
                  <p className="shop__main-products-title">{item.title}</p>
                  <div className="shop__main-products-rangs">
                    <small>
                      <Rate allowHalf defaultValue={4.5} />
                    </small>
                  </div>
                  <div className="shop__main-products-price">
                    <span className="shop__main-products-new-price">
                      ${item.price}
                    </span>
                    {item.oldPrice && (
                      <span className="shop__main-products-old-price">
                        ${item.oldPrice}
                      </span>
                    )}
                    {item.discount && (
                      <span className="shop__main-products-discount">
                        -{item.discount}%
                      </span>
                    )}
                  </div>
                </div>
                <span
                  className="shop__main-products-basket"
                  onClick={() => Handlclick(item)}
                >
                  <ShoppingCartOutlined />
                </span>
              </div>
            );
          }
        })}
      </div>
      <div className="shop__main-pagination">
        <Pagination
          align="start"
          defaultCurrent={1}
          total={50}
          itemRender={itemRender}
        />
      </div>
    </main>
  );
}

export default ShopPageMain;
