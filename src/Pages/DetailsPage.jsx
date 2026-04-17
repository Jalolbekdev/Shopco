import { Breadcrumb, Tabs } from "antd";
import { Link } from "react-router";
import { useContext, useEffect } from "react";
import { CardContext } from "../contexts/CartContext";
import { DetailsItems } from "../Utils/DetailsItems";
import DetailsContent from "../components/DetailsPage/DetailsContent";

function DetailsPage() {
  const { detail } = useContext(CardContext);
  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(detail));
  }, [detail]);

  return (
    <div className="details">
      <div className="container">
        <div className="details__wrap">
          <div className="details__crumbs">
            <Breadcrumb
              items={[
                {
                  title: <Link to={"/"}>Home</Link>,
                },
                {
                  title: <Link to={"/shop"}>Shop</Link>,
                },
                {
                  title: "T-shirts",
                },
              ]}
            />
          </div>
          {detail.length > 0 &&
            detail.map((item) => {
              return (
                <div className="details__main" key={item.id}>
                  <div className="details__top">
                    <div className="details__images">
                      <div className="details__images-left">
                        <div className="details__images-item">
                          <img src={item.image} alt="iamge" />
                        </div>
                        <div className="details__images-item">
                          <img src="image/newarrivals-img2.png" alt="" />
                        </div>
                        <div className="details__images-item">
                          <img src="image/newarrivals-img3.png" alt="" />
                        </div>
                      </div>
                      <div className="details__images-right">
                        <img
                          src={item.image}
                          alt=""
                          className="details__images-right-item"
                        />
                      </div>
                    </div>
                    <DetailsContent item={item} />
                  </div>
                  <div className="details__bottom">
                    <Tabs defaultActiveKey="1" items={DetailsItems} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
