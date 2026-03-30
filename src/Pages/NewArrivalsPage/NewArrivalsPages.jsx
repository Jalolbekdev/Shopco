
import { useState } from "react";
import NewarrivalsCards from "./NewarrivalsCards";
function NewArrivalsPages() {
 const [show, SetShow] = useState(false);
  return (
    <div className="newarrivals">
      <div className="container">
        <div className="newarrivals__wrap" id="newarrivals">
          <h1 className="newarrivals-title">NEW ARRIVALS</h1>
          <NewarrivalsCards show={show}/>
          <button
            className="newarrivals__button"
            onClick={() => SetShow(!show)}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewArrivalsPages;
