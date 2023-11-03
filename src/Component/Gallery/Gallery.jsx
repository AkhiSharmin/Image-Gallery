import "./Gallery.css";

import clock1 from "../../assets/clock (1).jpg";
import clock2 from "../../assets/clock (2).jpg";
import clock3 from "../../assets/clock (3).jpg";

import headphone1 from "../../assets/headphone (1).jpg";
import headphone2 from "../../assets/headphone (2).jpg";
import headphone3 from "../../assets/headphone (3).jpg";
import headphone4 from "../../assets/headphone (4).jpg";
import headphone5 from "../../assets/headphone (5).jpg";
import headphone6 from "../../assets/headphone (6).jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="parent">
        <div className="div1">
          <img className="img" src={clock1} alt="" />
        </div>
        <div className="div2">
          <img className="img" src={clock2} alt="" />
        </div>
        <div className="div3">
          <img className="img" src={clock3} alt="" />
        </div>
        <div className="div4">
          <img src={headphone1} className="img" alt="" />{" "}
        </div>
        <div className="div5">
          <img src={headphone4} className="img" alt="" />{" "}
        </div>
        <div className="div6">
          <img src={headphone5} className="img" alt="" />{" "}
        </div>
        <div className="div7">
          <img src={headphone2} className="img" alt="" />{" "}
        </div>
        <div className="div8">
          <img src={headphone3} className="img" alt="" />{" "}
        </div>
        <div className="div9">
          <img src={headphone6} className="img" alt="" />{" "}
        </div>
        <div className="div10">
          <img src={headphone1} className="img" alt="" />{" "}
        </div>
        <div className="div11">
          <img src={headphone4} className="img" alt="" />{" "}
        </div>
        <div className="div12"></div>
      </div>{" "}
    </section>
  );
};

export default Gallery;
