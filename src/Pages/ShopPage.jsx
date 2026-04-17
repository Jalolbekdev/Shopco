import { Breadcrumb } from "antd";  
import { Link } from "react-router";
import ShopPageMain from "../components/ShopPage/ShopPageMain";
import Sidebar from "../components/ShopPage/Sidebar";




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
