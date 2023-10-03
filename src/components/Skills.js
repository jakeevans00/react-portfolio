import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../assets/img/c-plus.png";
import skill2 from "../assets/img/python.png";
import skill3 from "../assets/img/mlearning.png";
import skill4 from "../assets/img/scrum.png";
import skill5 from "../assets/img/database.png";
import skill6 from "../assets/img/react.png";

export const Skills = () => {
  const responsive = {
    superLarge: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Tools I've used in my projects to build cool stuff.<br></br>{" "}
                Always looking to deepen my knowledge and develop new skills!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={skill3} alt="machine learning" />
                  <h5>Machine Learning</h5>
                </div>
                <div className="item">
                  <img src={skill5} alt="web dev" />
                  <h5>Database</h5>
                </div>
                <div className="item">
                  <img src={skill1} alt="c++" />
                  <h5>Programming in C++</h5>
                </div>
                <div className="item">
                  <img src={skill2} alt="python" />
                  <h5>Python Development</h5>
                </div>
                <div className="item">
                  <img src={skill4} alt="scrum" />
                  <h5>Scrum Management</h5>
                </div>
                <div className="item">
                  <img src={skill6} alt="web frameworks" />
                  <h5>Web Frameworks</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={} alt="Image" /> */}
    </section>
  );
};
