let $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Slider({ items }) {
  return (
    <OwlCarousel
      className="mt-5 justify-center"
      autoplay={true}
      nav={false}
      loop={true}
      dots={false}
      center={true}
      responsive={{
        0: { items: 1 },
        600: { items: 3.5 },
        1536: { items: 6 },
      }}
    >
      {items}
    </OwlCarousel>
  );
}
