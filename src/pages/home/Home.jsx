import "./home.css"; 
import human from "../../assets/human.png"
import line1 from "../../assets/line1.png"
import line2 from "../../assets/line2.png"
import line3 from "../../assets/line3.png"
import string from "../../assets/string.png"

const Home = () => {
  return (
    <div className="home">
        <div className="home__container">
            <div className="home__left">
              
                <h1>
                    <span>upto 60% off</span><br/>
                    on every new <br/>
                    arrival <br/>
                    collection <br/>
                </h1>
                <button className="explore-btn">Explore Now</button>
            </div>
            <div className="home__right">
                <img className="home__right-image" src={human} alt="a stylish man" />
                {/* <span><img className="string" src={string} alt="" /></span> */}
            </div>
        </div>
      
    </div>
  )
}

export default Home