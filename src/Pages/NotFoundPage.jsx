import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="not__found">
      <div className="not__found-main">
        <p>
         404
          </p>
        <p >Not Foun<span>d</span></p>
      </div>
      <Link to={"/"} className="not__found-btn">Home</Link>
    </div>
  );
}

export default NotFoundPage;
