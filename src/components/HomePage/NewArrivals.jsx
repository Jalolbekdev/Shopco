import { useState } from "react";
import { NewArrivalsCards } from "../NewArrivalsCards";

function NewArrivals() {
 const [show, SetShow] = useState(false);
  return (
    <div className="newarrivals my-[72px]">
      <div className="container">
        <div className="newarrivals__wrap" id="newarrivals">
          <h1 className="newarrivals-title ">NEW ARRIVALS</h1>
          <NewArrivalsCards show={show}/>
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

export default NewArrivals;
