import { DetailsBottomContents } from "../../Utils/DetailsBottomContent";

function DetailsTabs1() {
  return (
    <div className="details__bottom-item">
      <p className="details__bottom-title">Product specifications</p>
      <div className="details__bottom-content">
        {DetailsBottomContents.map((item) => {
          return (
            <div className="details__bottom-content-item" key={item.id}>
              <p className="details__bottom-content-title">{item.title}</p>
              <p className="details__bottom-content-subtitle">
                {item.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetailsTabs1;
