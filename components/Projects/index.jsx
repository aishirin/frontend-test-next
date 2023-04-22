import Cover1 from "../../public/media/Cover1.png";
import Cover2 from "../../public/media/Cover2.png";
import Cover3 from "../../public/media/Cover3.png";
import Cover4 from "../../public/media/Cover4.png";
import Description from "../../public/media/Description.png";
export const Projects = () => {
  return (
    <div className="projects">
      <h2>Проекты, которыми мы гордимся</h2>
      <hr></hr>
      <div className="projects__main">
        <img src={Cover1} alt="cover" />
        <div className="projects__main__second">
          <img className="second__img1" src={Cover2} alt="cover" />
          <img className="second__img2" src={Cover3} alt="cover" />
        </div>
        <img src={Cover4} alt="coe" />
      </div>
      <img className="projects__description" src={Description} alt="des" />
      <hr></hr>
    </div>
  );
};
