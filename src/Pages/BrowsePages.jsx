import BrowseProducts from "./BrowseProducts"


function BrowsePages() {
  return (
    <div className="browse">
        <div className="container">
            <div className="browse__wrap" id="browse">
                <p className="browse__title">BROWSE BY DRESS STYLE</p>
                <div className="browse__content">
                   <BrowseProducts/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BrowsePages