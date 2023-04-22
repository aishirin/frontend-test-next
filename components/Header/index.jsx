import { useState } from "react";
import logo from "../../public/logo.svg"
import menu from "../../public/menu.svg"
export const Header  = () => {
   const [scroll,setScroll]=useState("")
   if (typeof window !== 'undefined') {
      console.log('You are on the browser');
    
      
      console.log(window.innerWidth);
    
      window.addEventListener('scroll', function() {
         if (window.pageYOffset > 10) {
           setScroll("header-scroll")
         } else if (window.pageYOffset < 10){
            setScroll("")
         }
       });
    } else {
      console.log('You are on the server');

    }
   
   return(<header className={`${scroll} header`}>
   <img className="header__img" src={logo}></img>
   <div className="header__menu"><p>Меню</p>
   <img src={menu}></img></div>

   </header>   )
}