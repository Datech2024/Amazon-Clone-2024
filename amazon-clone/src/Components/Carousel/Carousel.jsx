import React from "react";
import { Carousel } from "react-responsive-carousel";
import { imges} from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
	return (
		<>
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				showIndicators={false}
				showThumbs={false}
			>
				{imges.map((imageItemLink) => {
					return <img src={imageItemLink} />;
				})}
			</Carousel>
            <div className="classes.hero_img"></div>
		</>
	);
}

export default CarouselEffect;
