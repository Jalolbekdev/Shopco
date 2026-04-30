import { Link } from "react-router";
import { BannerBrendsItem, BannerProductItem } from "../../Utils/data";


function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__wrap ">
          <div className="banner__left ">
            <div className="banner__content ">
              <p className="banner__title ">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </p>
              <p className="banner__subtitle ">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Link to={"/shop"} className="banner-btn  ">
                Shop Now
              </Link>
            </div>
            <div className="banner__product flex items-center ">
              {BannerProductItem.map((item) => {
                return (
                  <div className="banner__product-item " key={item.title}>
                    <p className="banner__product-num ">{item.num}</p>
                    <p className="banner__product-title ">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="banner__right">
            <img
              src="/image/banner-image.jpeg"
              alt="bannner-img"
              className="banner__img"
            />
            <span className="banner__design"></span>
          </div>
        </div>
      </div>
      <div className="banner__brands">
        {BannerBrendsItem.map((item) => {
          return <span key={item.id}>{item.icon}</span>;
        })}
      </div>
    </div>
  );
}

export default Banner;
