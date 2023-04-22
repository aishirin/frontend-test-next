import { Header } from "components/Header"
import designer from "../../public/media/designer.png"
import arrow from "../../public/arrow.svg"
import circle1 from "../../public/circle1.svg"
import circle2 from "../../public/circle2.svg"
import circle3 from "../../public/circle3.svg"
export const About = () => {
    return (
        <div className='about'>
         <Header/>
        <div className="about__title"> <h1>
         Комплексное развитие бизнеса с упором на Маркетинг, Бренд & Автоматизацию.
         </h1></div>
         <img className="about__img" src={designer}></img>
         <p className="about__info">Креативная студия дизайна и разработки.</p>
         <hr></hr>
         <div  className="about__text"><p>
         Передадим ценности вашей компании с помощью разработки и продвижения сайта / сервиса / приложения
         </p>
         <div>
         <p>Обсудить проект</p>
         <button><img src={arrow} alt="arrowbtn" /></button>
         </div>
         </div>
         <div className="about__circle">
            <img className="about__circle__img1" src={circle1} alt="circle" />
            <img className="about__circle__img2" src={circle2} alt="circle" />
            <img className="about__circle__img3" src={circle3} alt="circle" />
           
         </div>
         
        </div>
    )
}