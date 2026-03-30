import { Breadcrumb } from "antd";
import Sidebar from "./Sidebar";
import { Link } from "react-router";
import ShopPageMain from "./ShopPageMain";

function ShopPage() {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop__wrap">
          <div className="shop__crumb">
            <Breadcrumb
              items={[
                {
                  title: <Link to="/">Home</Link>,
                },
                {
                  title: "Shop",
                },
              ]}
            />
          </div>
          <Sidebar />
          <ShopPageMain />
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
