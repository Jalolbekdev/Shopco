import FooterEnd from "./FooterEnd";
import FooterTop from "./FooterTop";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
         <FooterTop/>
          <div className="footer__end">
           <FooterEnd/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
