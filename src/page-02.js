// src/page.js

import { Link, useLocation } from "react-router-dom"

export function Home(){
  return(
    <div>
      <h1>[홈페이지]</h1>
      <na>
        <Link to="about">회사 소개</Link> -  
        <Link to="events">이벤트</Link> - 
        <Link to="products">제품 </Link> - 
        <Link to="contact">고객 지원</Link>
      </na>
    </div>
  )
}

export function Whoops404(){
  let location=useLocation()
  // console.log(location)
  return(
    <div>
      <h1>Resource not Found at {location.pathname}</h1>
    </div>
  )
}

export function About(){
  return (
    <div>
      <h1>[회사 소개]</h1>
    </div>
  )
}
export function Events(){
  return (
    <div>
      <h1>[이벤트]</h1>
    </div>
  )
}
export function Products(){
  return (
    <div>
      <h1>[제품]</h1>
    </div>
  )
}
export function Contact(){
  return (
    <div>
      <h1>[고객지원]</h1>
    </div>
  )
}

//회사소개(about) 하위 주소로 들어갈 페이지
export function Services(){
  <section>
    <h2>Our Services</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa 
      qui officia deserunt mollit anim id est laborum.</p>
  </section>
}

export function History(){
  <section>
    <h2>Our History</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa 
      qui officia deserunt mollit anim id est laborum.</p>
  </section>
}

export function Location(){
  <section>
    <h2>Our Location</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa 
      qui officia deserunt mollit anim id est laborum.</p>
  </section>
}





//  export function Whoops404(){
//     let location=useLocation() //현재 주소창에 있는 주소가 자동으로 import됨
//     console.log(location)
//     return (
//       <div>
//         <h1>Resource not Found at{location.pathname}</h1> {/*잘못된 주소 가져오기*/}
//       </div>
//     )
//   }