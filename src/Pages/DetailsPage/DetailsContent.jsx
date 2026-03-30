import { message, Rate, Segmented, Tabs } from "antd";

import Minusicon from "../../assets/icons/Minusicon";
import { useContext, useState } from "react";
import { CardContext } from "../../contexts/CartContext";
import Plusicon from "../../assets/icons/Plusicon";

function DetailsContent({ item }) {
  const { incrementdetails, decrementdetails } = useContext(CardContext);
  const [alignValue, setAlignValue] = useState("center");
  const [messageApi,contextHolder] = message.useMessage();
  const { addCard } = useContext(CardContext);
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Saved to cart",
    });
  };
  const Handlclick = (data) => {
    addCard(data);
    success();
  };

  return (
    
    <div className="details__content" key={item.id}>
          {contextHolder}
      <p className="details__content-title">{item.title}</p>
      <div className="details__content-range">
        <Rate allowHalf defaultValue={4.5} />
        <span>4.5</span>
      </div>
      <div className="details__content-price">
        <span className="details__content-new-price">${item.price}</span>
        {item.oldPrice && (
          <span className="details__content-old-price">${item.oldPrice}</span>
        )}
        {item.discount && (
          <span className="details__content-discount">-{item.discount}%</span>
        )}
      </div>
      <div className="details__content-subtitle">
        <p>
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
      </div>
      <div className="details__content-size">
        <p className="details__content-size-title">Choose Size</p>
        <div className="details__content-size-items">
          <Segmented
            value={alignValue}
            style={{ marginBottom: 8 }}
            onChange={setAlignValue}
            options={["Small", "Medium", "Large", "X-Large", "XX-Large"]}
          />
          <Tabs
            defaultActiveKey="1"
            indicator={{
              size: (origin) => origin - 20,
              align: alignValue,
            }}
          />
        </div>
      </div>
      <div className="details__content-add">
        <div className="details__content-count">
          <button
            className="details__content-count-minus"
            onClick={() => decrementdetails(item)}
          >
            <Minusicon />
          </button>
          <span className="details__content-count-number">{item.count}</span>
          <button
            className="details__content-count-plus"
            onClick={() => incrementdetails(item)}
          >
            <Plusicon />
          </button>
        </div>
        <button
          className="details__content-btn"
          onClick={() => Handlclick(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default DetailsContent;
