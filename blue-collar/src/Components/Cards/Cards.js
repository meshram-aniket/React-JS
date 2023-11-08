import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./Cards.css";

export default function Cards() {
  const slideRef = useRef(null);

  const handleNext = () => {
    if (slideRef.current) {
      const lists = slideRef.current.querySelectorAll(".item");
      slideRef.current.appendChild(lists[0]);
    }
  };

  const handlePrev = () => {
    if (slideRef.current) {
      const lists = slideRef.current.querySelectorAll(".item");
      slideRef.current.prepend(lists[lists.length - 1]);
    }
  };




  
  return (
    <div className="Section">
      <div className="Card">
        <div id="slide" ref={slideRef}>
          <div
            className="item"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/1600x600/?welder)",
            }}
          >
            <div className="content">
              <div className="name">LUNDEV</div>
              <div className="des">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button className="btn btn-light">
                  Book Now
                </button>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url("https://source.unsplash.com/1600x600/?nature")`,
            }}
          >
            <div className="content">
              <div className="name">LUNDEV</div>
              <div className="des">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button href="#" className="btn btn-light">
                  Book Now
                </button>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url("https://source.unsplash.com/1600x600/?Mountain")`,
            }}
          >
            <div className="content">
              <div className="name">LUNDEV</div>
              <div className="des">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button href="#" className="btn btn-light">
                  Book Now
                </button>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url("https://source.unsplash.com/1600x600/?Water")`,
            }}
          >
            <div className="content">
              <div className="name">LUNDEV</div>
              <div className="des">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button href="#" className="btn btn-light">
                  Book Now
                </button>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url("https://source.unsplash.com/1600x600/?city")`,
            }}
          >
            <div className="content">
              <div className="name">LUNDEV</div>
              <div className="des">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button href="#" className="btn btn-light">
                  Book Now
                </button>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url("https://source.unsplash.com/1600x600/?sunset")`,
            }}
          >
            <div className="content">
              <div className="name">LUNDEV</div>
              <div className="des">
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button href="#" className="btn btn-light">
                  Book Now
                </button>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button id="prev" onClick={handlePrev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button id="next" onClick={handleNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
