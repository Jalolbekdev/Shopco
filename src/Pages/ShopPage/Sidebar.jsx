
import Filtericon from "../../assets/icons/Filtericon";
import { ShopSidebarCategoryItems } from "../../Utils/ShopSidebarCategorysItems";
import { ColorPicker, Slider } from "antd";
import { ShopSidebarSizeItem } from "../../Utils/ShopSidebarSizeItem";
import { useState } from "react";
function Sidebar() {
const [show,Setshow]=useState(false)
  
  return (
    <div className="sidebar">
      
        <div className="sidebar__wrap">
          <div className="sidebar__top">
              <p className="sidebar__top-title">Filters</p>
              <span><Filtericon/> </span>
          </div>
          <div className="sidebar__category">
            {ShopSidebarCategoryItems.map(item=>{
              return(
                <div className="sidebar__category-item" key={item.title}>
                  <p className="sidebar__category-title">{item.title}</p>
                  <span className="sidebar__category-icon">{item.icon}</span>
                </div>
              )
            })}
          </div>
          <div className="sidebar__price">
            <p className="sidebar__price-title">Price</p>
            <Slider range defaultValue={[0, 500]}  className="sidebar__price-slider" />

          </div>
          <div className="sidebar__size">
            <p className="sidebar__size-title">Size</p>
            <div className="sidebar__size-items">
              {ShopSidebarSizeItem.map(item=>{
                return(
                  <button className="sidebar__size-item" key={item.size} >
                    {item.size}
                  </button>
                )
              })}
            </div>
          </div>
          <button className="sidebar__btn">Apply Filter</button>
        </div>
      </div>
    
  );
}

export default Sidebar;
