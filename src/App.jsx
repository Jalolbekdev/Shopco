import { Route, Routes } from "react-router"
import { routes } from "./routes/routes"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"





function App() {
 

  return (
    <>
   
      <Header />
      <Routes>
        {
          routes.map(item => (
            <Route path={item.path} element={item.element} key={item.id} />
          ))
        }

      </Routes>
      <Footer />
    </>
  )
}

export default App
