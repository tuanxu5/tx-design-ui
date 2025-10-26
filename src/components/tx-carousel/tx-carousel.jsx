import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import {
  CarouselArrow,
  CarouselContainer,
  CarouselCounter,
  CarouselDot,
  CarouselDots,
  CarouselSlide,
  CarouselWrapper,
} from "./styled";

export const TxCarousel = ({
  children,
  autoplay = false,
  autoplaySpeed = 3000,
  speed = 500,
  dots = true,
  arrows = true,
  infinite = true,
  height = "300px",
  showCounter = false,
  initialSlide = 0,
  onChange,
  className,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef(null);
  const slides = Array.isArray(children) ? children : [children];
  const totalSlides = slides.length;

  useEffect(() => {
    if (autoplay && !isHovered && totalSlides > 1) {
      autoplayRef.current = setInterval(() => {
        goToNext();
      }, autoplaySpeed);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, autoplaySpeed, isHovered, currentSlide]);

  const goToNext = () => {
    setCurrentSlide(prev => {
      const next = prev + 1;
      if (next >= totalSlides) {
        return infinite ? 0 : prev;
      }
      return next;
    });
  };

  const goToPrev = () => {
    setCurrentSlide(prev => {
      const next = prev - 1;
      if (next < 0) {
        return infinite ? totalSlides - 1 : prev;
      }
      return next;
    });
  };

  const goToSlide = index => {
    setCurrentSlide(index);
    if (onChange) {
      onChange(index);
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(currentSlide);
    }
  }, [currentSlide]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <CarouselWrapper className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...props}>
      <CarouselContainer currentSlide={currentSlide} speed={speed}>
        {slides.map((slide, index) => (
          <CarouselSlide key={index} height={height}>
            {slide}
          </CarouselSlide>
        ))}
      </CarouselContainer>

      {arrows && totalSlides > 1 && (
        <>
          <CarouselArrow direction="prev" onClick={goToPrev} disabled={!infinite && currentSlide === 0}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </CarouselArrow>
          <CarouselArrow direction="next" onClick={goToNext} disabled={!infinite && currentSlide === totalSlides - 1}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </CarouselArrow>
        </>
      )}

      {dots && totalSlides > 1 && (
        <CarouselDots>
          {slides.map((_, index) => (
            <CarouselDot key={index} active={index === currentSlide} onClick={() => goToSlide(index)} />
          ))}
        </CarouselDots>
      )}

      {showCounter && totalSlides > 1 && (
        <CarouselCounter>
          {currentSlide + 1} / {totalSlides}
        </CarouselCounter>
      )}
    </CarouselWrapper>
  );
};

TxCarousel.propTypes = {
  children: PropTypes.node.isRequired,
  autoplay: PropTypes.bool,
  autoplaySpeed: PropTypes.number,
  speed: PropTypes.number,
  dots: PropTypes.bool,
  arrows: PropTypes.bool,
  infinite: PropTypes.bool,
  height: PropTypes.string,
  showCounter: PropTypes.bool,
  initialSlide: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

TxCarousel.defaultProps = {
  autoplay: false,
  autoplaySpeed: 3000,
  speed: 500,
  dots: true,
  arrows: true,
  infinite: true,
  height: "300px",
  showCounter: false,
  initialSlide: 0,
  onChange: undefined,
  className: "",
};
