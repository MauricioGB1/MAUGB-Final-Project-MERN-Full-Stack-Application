
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

//import front1 from "../assets/images/projects/image1.jpg";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';



const items = [
  {
    src: '/images/imggp4.jpg',
    altText: '',
    caption: 'Hospitality',
    key: 1,
  },
  {
    src: '/images/ap01a.jpg',
    altText: '',
    caption: 'Health',
    key: 2,
  },
  {
    src: '/images/ap01.jpg',
    altText: '',
    caption: 'Research & Institutional Development',
    key: 3,
  },
  {
    src: '/images/imgres03.jpg',
    altText: '',
    caption: 'Residential',
    key: 4,
  }, 

  {
    src: '/images/comm-slider.jpg',
    altText: '',
    caption: 'Commercial',
    key: 5,
  }, 
  {
    src: '/images/attstadium.jpg',
    altText: '',
    caption: 'Sports & Events',
    key: 6,
  }, 
];

function Slider(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Slider;