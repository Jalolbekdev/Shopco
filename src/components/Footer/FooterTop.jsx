import { EmailIcon } from "../../assets/icons";
function FooterTop() {
  return (
    <>
      <div className="footer__top">
        <p className="footer__top-title">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
        <form className="footer__top__form">
          <div className="footer__top-email">
            <EmailIcon />
            <input type="email" placeholder="Enter your email address" />
          </div>
          <button type="submit" className="footer__top-btn">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </>
  );
}

export default FooterTop;
