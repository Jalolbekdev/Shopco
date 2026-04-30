import { useContext } from "react";
import { Link } from "react-router";
import { CardContext } from "../contexts/CartContext";
import {DeletebtnIcon, MinusIcon,PlusIcon}from "../assets/icons";
function BasketProducts() {
  const { card, incrementCard, decrementCard, deleteCard, addDetails } =
    useContext(CardContext);
  let cound = 0;
  let foiz = 0;
  let percent = 0;
  const fullSenafnc = () => {
    return card.map((item) => {
      cound += item.price * item.count;
    });
  };
  fullSenafnc();
  const Percent = () => {
    return card.map((item) => {
      if (item.oldPrice) {
        foiz += item.oldPrice - item.price;
        foiz = foiz * item.count;
      }
    });
  };
  Percent();
  const Discount = () => {
    return card.map((item) => {
      if (item.discount) {
        percent = Math.floor(foiz / (full / 100));
      }
    });
  };
  let full = cound + foiz;
  Discount();

  const Clicked = (data) => {
    addDetails(data);
  };

  return (
    <div className="basket__main">
      {card.length > 0 && (
        <div className="basket__cards">
          {card &&
            card.map((item) => {
              return (
                <div className="basket__card" key={item.id}>
                  <div className="basket__card-content">
                    <Link to={"/details"} className="basket__images">
                      <div
                        className="basket__img"
                        onClick={() => Clicked(item)}
                      >
                        <img src={item.image} alt="" />
                      </div>
                    </Link>
                    <div className="basket__card-content-main">
                      <p className="basket__card-title">{item.title}</p>
                      <p className="basket__card-subtitle">
                        Size: <span>Large</span>
                      </p>
                      <p className="basket__card-subtitle">
                        Color: <span>Brown</span>
                      </p>
                      <div className="basket__card-content-price">
                        <span className="basket__card-content-new-price">
                          ${item.price}
                        </span>
                        {item.oldPrice && (
                          <span className="basket__card-content-old-price">
                            ${item.oldPrice}
                          </span>
                        )}
                        {item.discount && (
                          <span className="basket__card-content-discount">
                            -{item.discount}%
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="basket__card-right">
                    <button
                      onClick={() => deleteCard(item)}
                      className="basket__card-delete-btn"
                    >
                      <DeletebtnIcon />
                    </button>
                    <div className="basket__card-count">
                      <button
                        className="basket__card-count-minus"
                        onClick={() => decrementCard(item)}
                      >
                        <MinusIcon />
                      </button>
                      <span className="basket__card-count-number">
                        {item.count}
                      </span>
                      <button
                        className="basket__card-count-plus"
                        onClick={() => incrementCard(item)}
                      >
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      {card.length > 0 && (
        <div className="basket__order">
          <p className="basket__order-title">Order Summary</p>
          <div className="basket__order-main">
            <div className="basket__order-content">
              <span className="basket__order-subtitle">Subtotal</span>
              <span className="basket__order-sena">${full}</span>
            </div>
            <div className="basket__order-content">
              <span className="basket__order-subtitle">
                Discount -{percent}%
              </span>
              <span className="basket__order-percent">-${foiz}</span>
            </div>
            <div className="basket__order-content">
              <span className="basket__order-subtitle">Delivery Free</span>
              <span className="basket__order-sena">Free</span>
            </div>
            <div className="basket__order-content">
              <span className="basket__order-total">Total</span>
              <span className="basket__order-full-price">${cound}</span>
            </div>
          </div>
          <button className="basket__order-btn">Go to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default BasketProducts;
