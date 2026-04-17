import { Link } from "react-router";
import { FooterItems, FooterPayItems } from "../../Utils";
import { socialsData } from "../../Utils/Socials";

function FooterEnd() {
  return (
    <>
      <div className="footer__end-left">
        <Link to={"/"} className="footer__end-logo">
          SHOP.CO
        </Link>
        <p className="footer__end-subtitle">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <div className="footer__end-socials">
          {socialsData.map((item) => {
            return (
              <div className="footer__end-social" key={item.id}>
                {item.icon}
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer__end-content">
        {FooterItems.map((item) => {
          return (
            <div className="footer__end-item" key={item.id}>
              <p>{item.title}</p>
              <span>{item.subtitle}</span>
              <span>{item.subtitletwo}</span>
              <span>{item.subtitlethree}</span>
              <span>{item.subtitlefour}</span>
            </div>
          );
        })}
      </div>
      <div className="footer__end__bottom">
        <p className="footer__end-text">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="footer__end__pay-managers">
          {FooterPayItems.map((item) => {
            return (
              <div className="footer__end__pay-managers-item" key={item.id}>
                <span>{item.icon}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FooterEnd;
