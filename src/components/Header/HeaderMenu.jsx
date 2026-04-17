import { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router";
function HeaderMenu({ open, setOpen }) {
  const [placement, setPlacement] = useState("left");
  const [size, setSize] = useState(300);
  return (
    <>
      <Drawer
        title={<span>SHOP.CO</span>}
        placement={placement}
        onClose={() => setOpen(false)}
        open={open}
        key={placement}
        size={size}
        resizable={{
          onResize: (newSize) => setSize(newSize),
        }}
      >
        <div>
          <div className="header__menu-main ">
            <Link
              to={"/shop"}
              className="header__menu-item"
              onClick={() => setOpen(false)}
            >
              Shop
            </Link>
            <a href="#onsale" className="header__menu-item">
              On Sale
            </a>
            <a
              href="#newarrivals"
              className="header__menu-item"
              onClick={() => setOpen(false)}
            >
              Newarrivals
            </a>
            <a
              href="#browse"
              className="header__menu-item"
              onClick={() => setOpen(false)}
            >
              Browse
            </a>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default HeaderMenu;
