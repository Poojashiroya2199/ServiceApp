import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Button } from "@material-ui/core";
const slideImages = [
  "https://cdn-b.medlife.com/2018/01/fruits-and-vegetables-to-consume-in-winter.png",
  "https://cdn-b.medlife.com/2018/01/fruits-and-vegetables-to-consume-in-winter.png",
  "https://cdn-b.medlife.com/2018/01/fruits-and-vegetables-to-consume-in-winter.png"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

export default function Slideshow() {
  return (
    <div className="setslide">
      <div className="slide">
        <Slide {...properties}>
          <div className="each-slide ">
            <div
              style={{
                backgroundImage: `url(${slideImages[0]})`,
                height: "550px",
                backgroundRepeat: "no-repeat"
              }}
              className="content"
            >
              <div className="slides">
                <span className="headcontent">Organic food</span>
                <span className="bodycontent">
                  Looking for the fresh organic food
                </span>
                <div>
                  <Button className="btn" color="inherit">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[1]})`,
                height: "550px",
                backgroundRepeat: "no-repeat"
              }}
              className="content"
            >
              <div className="slides">
                <span className="headcontent">Organic food</span>
                <span className="bodycontent">
                  Looking for the fresh organic food
                </span>
                <div>
                  <Button className="btn" color="inherit">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[2]})`,
                height: "550px",
                // widht: "1000px",
                backgroundRepeat: "no-repeat"
              }}
              className="content"
            >
              <div className="slides">
                <span className="headcontent">Organic food</span>
                <span className="bodycontent">
                  Looking for the fresh organic food
                </span>
                <div>
                  <Button className="btn" variant="contained" color="inherit">
                    Shop Now
                  </Button>
                </div>
              </div>
              {/* <span>Slide 3</span> */}
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}
