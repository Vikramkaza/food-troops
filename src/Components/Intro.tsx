import intro from "../assets/intro.png";
import "./Intro.css";
function Intro() {
  return (
    <div className="intro-container">
      <h1 className="v1">Food Lab Safety Services</h1>
      <img src={intro} alt="" />
      <p>
        Aperiam quia sapiente vel consequatur consequatur omnis sed autem quae.
        Ipsa et minus consequatur vero et doloribus. Ex error illum consequatur
        amet ea occaecati odit. Quia similique dolorum officiis distinctio
        magnam ut facilis. Et dolore est inventore ea et molestiae earum.
      </p>
    </div>
  );
}
export default Intro;
