// src/page.js
import { Link, useLocation, Outlet } from "react-router-dom"

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
      <Outlet />
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

//회사 소개(about) 하위 주소로 들어갈 페이지
export function Services(){
  return(<section>
    <h2>Our Services</h2>
    <p>대한민국의 영토는 한반도와 그 부속도서로 한다.
      새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 
      정부는 국회에서 예산안이 의결될 때까지 
      다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
      군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 
      중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 
      관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 
      군사법원의 재판을 받지 아니한다</p>
  </section>
  )
}
export function History(){
  return(<section>
    <h2>Our History</h2>
    <p>대한민국의 영토는 한반도와 그 부속도서로 한다.
      새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 
      정부는 국회에서 예산안이 의결될 때까지 
      다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
      군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 
      중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 
      관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 
      군사법원의 재판을 받지 아니한다</p>
  </section>
  )
}
export function Location(){
  return(
  <section>
    <h2>Location</h2>
    <p>대한민국의 영토는 한반도와 그 부속도서로 한다.
      새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 
      정부는 국회에서 예산안이 의결될 때까지 
      다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
      군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 
      중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 
      관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 
      군사법원의 재판을 받지 아니한다</p>
  </section>
  )
}
//page를 갖는 컴포넌트들을 여기에 모음

// import { Link, useLocation, Outlet } from "react-router-dom"

// export function Home(){
//   return(
//     <div>
//       <h1>[홈페이지]</h1>
//       <na>
//         <Link to="about">회사 소개</Link> -  
//         <Link to="events">이벤트</Link> - 
//         <Link to="products">제품 </Link> - 
//         <Link to="contact">고객 지원</Link>
//       </na>
//     </div>
//   )
// }

// export function Whoops404(){
//   let location=useLocation()
//   // console.log(location)
//   return(
//     <div>
//       <h1>Resource not Found at {location.pathname}</h1>
//     </div>
//   )
// }

// export function About(){
//   return (
//     <div>
//       <h1>[회사 소개]</h1>
//       <Outlet/> {/* Outlet 컴퍼넌트 추가 */}
//     </div>
//   )
// }
// export function Events(){
//   return (
//     <div>
//       <h1>[이벤트]</h1>
//     </div>
//   )
// }
// export function Products(){
//   return (
//     <div>
//       <h1>[제품]</h1>
//     </div>
//   )
// }
// export function Contact(){
//   return (
//     <div>
//       <h1>[고객지원]</h1>
//     </div>
//   )
// }

// //회사소개(about) 하위 주소로 들어갈 페이지
// export function Services(){
//   return ( //return이 있어야 화면에 보임
//   <section>
//     <h2>Our Services</h2>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
//       ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
//       in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
//       Excepteur sint occaecat cupidatat non proident, sunt in culpa 
//       qui officia deserunt mollit anim id est laborum.</p>
//   </section>
//   )
// }

// export function History(){
//   return (
//   <section>
//     <h2>Our History</h2>
//     <p>대한민국의 영토는 한반도와 그 부속도서로 한다.
//       새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 
//       정부는 국회에서 예산안이 의결될 때까지 
//       다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
//       군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 
//       중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 
//       관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 
//       군사법원의 재판을 받지 아니한다</p>
//   </section>
//   )
// }

// export function Location(){
//   return (
//   <section>
//     <h2>Our Location</h2>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
//       ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
//       in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
//       Excepteur sint occaecat cupidatat non proident, sunt in culpa 
//       qui officia deserunt mollit anim id est laborum.</p>
//   </section>
//   )
// }





//  export function Whoops404(){
//     let location=useLocation() //현재 주소창에 있는 주소가 자동으로 import됨
//     console.log(location)
//     return (
//       <div>
//         <h1>Resource not Found at{location.pathname}</h1> {/*잘못된 주소 가져오기*/}
//       </div>
//     )
//   }