import { useState } from "react";
import NewarrivalsCards from "./NewarrivalsCards";

function NewArrivals() {
 const [show, SetShow] = useState(false);
  return (
    <div className="newarrivals my-[72px]">
      <div className="container">
        <div className="newarrivals__wrap flex items-center gap-[55px] flex-col " id="newarrivals">
          <h1 className="newarrivals-title font-(family-name:--second-family) font-bold text-5xl max-[700px]:text-[42px] max-[500px]:text-[34px]">NEW ARRIVALS</h1>
          <NewarrivalsCards show={show}/>
          <button
            className="newarrivals__button border-[1px] border-[#0000001a] rounded-[62px] py-4 px-[54px] font-normal text-[16px] cursor-pointer max-[885px]:px-10 max-[650px]:w-full max-[500px]:text-[14px]"
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
