import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { button } from "./carouselBase.module.css";

export default function Carousel({
  naturalSlideWidth,
  naturalSlideHeight,
  imgs,
  alts,
  visibleSlides = 1,
  maxWidth = "325px",
}) {
  return (
    <div style={{ maxWidth: maxWidth, margin: "auto", position: "relative" }}>
      <CarouselProvider
        naturalSlideWidth={naturalSlideWidth}
        naturalSlideHeight={naturalSlideHeight}
        infinite={true}
        totalSlides={imgs.length}
        visibleSlides={visibleSlides}
      >
        <div style={{ marginLeft: "36px", marginRight: "36px" }}>
          <Slider>
            {imgs.map((item, index) => {
              return (
                <Slide index={index}>
                  <Image
                    src={item}
                    hasMasterSpinner={false}
                    alt={alts[index]}
                  />{" "}
                </Slide>
              );
            })}
          </Slider>
        </div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <ButtonBack>
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </ButtonBack>
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: 0,
          }}
        >
          <ButtonNext>
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
}
