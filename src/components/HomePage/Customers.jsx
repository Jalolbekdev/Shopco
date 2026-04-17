import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Rate } from "antd";
import { useEffect, useState } from "react";
function Customers() {
  const [data, Setdata] = useState([]);
  useEffect(() => {
    fetch("https://d9c81dd38cc5b9fc.mokky.dev/comments")
      .then((res) => res.json())
      .then((data) => Setdata(data));
  }, []);
  return (
    <div className="customers">
      <div className="container">
        <div className="customers__wrap">
          <p className="customers__title">OUR HAPPY CUSTOMERS</p>
          <div className="customers__contents">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
              }}
              modules={[Autoplay]}
              className="customers__myswiper"
            >
              {data &&
                data.map((item) => {
                  return (
                    <SwiperSlide
                      className="customers__myswiper-item"
                      key={item.id}
                    >
                      <Rate defaultValue={5} disabled />
                      <p className="customers__myswiper-title">{item.name}</p>
                      <p className="customers__myswiper-subtitle">
                        {item.subtitle}
                      </p>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
