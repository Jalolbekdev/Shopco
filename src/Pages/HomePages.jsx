import Banner from "./Banner"
import BrowsePages from "./BrowsePages"
import Customers from "./Customers"
import NewArrivalsPages from "./NewArrivalsPage/NewArrivalsPages"

export function HomePages() {
  return (
    <>
      <Banner/>
      <NewArrivalsPages/>
      <BrowsePages/>
      <Customers/>
    </>
  )
}


