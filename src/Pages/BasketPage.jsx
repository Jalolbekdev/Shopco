import { Breadcrumb } from "antd";
import { Link } from "react-router";
import { FrownOutlined } from "@ant-design/icons";
import { CardContext } from "../contexts/CartContext";
import { useContext, useEffect } from "react";
import BasketProducts from "../components/BasketProducts";

function BasketPage() {
  const { card } = useContext(CardContext);
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(card));
  }, [card]);

  return (
    <div className="basket">
      <div className="container">
        <div className="basket__wrap">
          <Breadcrumb
            items={[
              {
                title: <Link to={"/"}>Home</Link>,
              },
              {
                title: "Basket",
              },
            ]}
          />
          <p className="basket-title">your cart</p>
          {card.length == 0 && (
            <div className="basket__not">
              <div className="basket__not-icon">
                <FrownOutlined />
              </div>
              <div className="basket__not-title">
                <span>Your shopping cart is empty.</span>
              </div>
              <Link to={"/shop"} className="basket__not-btn">
                Shop Now
              </Link>
            </div>
          )}
          <BasketProducts />
        </div>
      </div>
    </div>
  );
}

export default BasketPage;
