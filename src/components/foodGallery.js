import * as React from "react";
import LightGallery from "lightgallery/react";
import { galleryItem } from "./foodGallery.module.css";

// Import images
import MughlaiParatha from "../images/MughlaiParatha.jpg";
import NYCishCheesecake from "../images/NYCishCheesecake.jpg";
import ThreePies from "../images/3Pies.jpg";
import Aush from "../images/Aush.jpg";
import Empanadas from "../images/Empanadas.jpg";
import RedWinePannaCotta from "../images/RedWinePannaCotta.jpg";
import Schnitzel from "../images/Schnitzel.jpg";
import Shorgoghal from "../images/Shorgoghal.jpg";
import Waterzooi from "../images/Waterzooi.jpg";

// Import styles for lightgallery
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// Import lightgallery plugins
import lgZoom from "lightgallery/plugins/zoom";

function FoodGallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  /* TODO: Try to get the animated thumbnails working without the double image*/
  return (
    <div style={{ textAlign: "center", paddingTop: "16px" }}>
      <LightGallery
        onInit={onInit}
        speed={500}
        download={false}
        zoomFromOrigin={false}
        plugins={[lgZoom]}
      >
        <a
          className={galleryItem}
          data-src={NYCishCheesecake}
          data-sub-html="<h4>NYC-ish cheesecake</h4><p>An NYC-style inspired cheesecake with a Digestive biscuit base</p>"
        >
          <img className="img-responsive" src={NYCishCheesecake} />
        </a>
        <a
          className={galleryItem}
          data-src={MughlaiParatha}
          data-sub-html="<h4>Mughlai Paratha (<span lang='bn'>মোগলাই পরোটা</span>)</h4><p>Spicy flatbread popular in Bengal, filled with eggs, onion, chiles, coriander and turmeric</p>"
        >
          <img className="img-responsive" src={MughlaiParatha} />
        </a>
        <a
          className={galleryItem}
          data-src={ThreePies}
          data-sub-html="<h4>Christmas reunion cakes</h4><p>Clockwise: Red wine pear cake, ganache and nuts cake, and goat cheese and fig cake</p>"
        >
          <img className="img-responsive" src={ThreePies} />
        </a>
        <a
          className={galleryItem}
          data-src={Aush}
          data-sub-html="<h4>Aush (<span lang='fa' dir='rtl'>آش</span>)</h4><p>Tomato-based soup with noodles from Afghanistan. Topped with a yogurt sauce</p>"
        >
          <img className="img-responsive" src={Aush} />
        </a>
        <a
          className={galleryItem}
          data-src={Empanadas}
          data-sub-html="<h4>Empanadas</h4><p>Argentinian empanadas, filled with meat and olives. They go very well with chimichurri</p>"
        >
          <img className="img-responsive" src={Empanadas} />
        </a>
        <a
          className={galleryItem}
          data-src={RedWinePannaCotta}
          data-sub-html="<h4>Red wine panna cotta</h4><p>Topped with berries!</p>"
        >
          <img className="img-responsive" src={RedWinePannaCotta} />
        </a>
        <a
          className={galleryItem}
          data-src={Schnitzel}
          data-sub-html="<h4>Schnitzel</h4><p>Austrian breaded veal cutlet</p>"
        >
          <img className="img-responsive" src={Schnitzel} />
        </a>
        <a
          className={galleryItem}
          data-src={Shorgoghal}
          data-sub-html="<h4>Shorgoghal (<span lang='az'>Şorqoğal</span>)</h4><p>Spice-filled buns from Azerbaijan. Typically baked for Persian New Year, they represent the sun.</p>"
        >
          <img className="img-responsive" src={Shorgoghal} />
        </a>
        <a
          className={galleryItem}
          data-src={Waterzooi}
          data-sub-html="<h4>Waterzooi</h4><p>Cream and chicken stew, originating from the Ghent, in the Flanders region of Belgium</p>"
        >
          <img className="img-responsive" src={Waterzooi} />
        </a>
      </LightGallery>
    </div>
  );
}

export default FoodGallery;
