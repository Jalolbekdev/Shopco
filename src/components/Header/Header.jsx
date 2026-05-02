import { NavLink } from "react-router";
import {
  HeadermenubtnIcon,
  HeadersearchIcon,
  HeaderSerachresIcon,
  HeadershopIcon,
  HeaderuserIcon,
} from "../../assets/icons";
import { Badge } from "antd";
import { useContext, useEffect, useState } from "react";
import HeaderMenu from "./HeaderMenu";
import { CardContext } from "../../contexts/CartContext";

function Header() {
  const { card } = useContext(CardContext);
  const [open, setOpen] = useState(false);
  const [showserach, Setsearchshow] = useState(false);  
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <span className="header__menu-btn" onClick={() => setOpen(true)}>
              <HeadermenubtnIcon />
            </span>
            {open && <HeaderMenu open={open} setOpen={setOpen} />}
            <NavLink to={"/"} className="header__logo">
              SHOP.CO
            </NavLink>
            <nav className="header__nav">
              <NavLink to={"/shop"} className="header__nav-item">
                Shop
              </NavLink>
              <a href="#onsale" className="header__nav-item">
                On Sale
              </a>
              <a href="#newarrivals" className="header__nav-item">
                New Arrivals
              </a>
              <a href="#browse" className="header__nav-item">
                Brands
              </a>
            </nav>
          </div>
          <div className="header__right">
            <div className="header__buttons">
              <NavLink to={"/basket"} className="header-button">
                <Badge count={card.length}>
                  <HeadershopIcon />
                </Badge>
              </NavLink>
              <NavLink to="/login" className="header-button">
                <HeaderuserIcon />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
