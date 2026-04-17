import { Collapse } from "antd";
import { DetailsFaq } from "../../Utils/DetailsFaq";
function DetailsTabs3() {
  return (
    <div className="details__bottom-item">
      <p className="details__bottom-title">Frequently asked questions</p>
      <div className="details__bottom-faq">
        <Collapse items={DetailsFaq} ghost />
      </div>
    </div>
  );
}

export default DetailsTabs3;
