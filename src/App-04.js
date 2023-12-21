import {Routes,Route,Navigate} from "react-router-dom"
import { 
  About, Contact, Events,
  Home, Products, Whoops404,
  Services,History,Location
 } from "./page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="services" element={<Services/>}/>
          <Route path="history" element={<History/>}/>
          <Route path="location" element={<Location/>}/>
        </Route>
        <Route path="/events" element={<Events/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Whoops404/>}/>
        {/* 
          리디렉션(redirection) 어떤 한 주소에서 다른 주소로
          바로 바꿔주는 것
          rootURL/about/service
          rootURL/service-> rootURL/about/service
        */}
        <Route path="/services" element={
          <Navigate replace to="/about/services" />} />
      </Routes>
    </div>
  )
}

export default App;
