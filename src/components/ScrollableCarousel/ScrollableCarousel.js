import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";

import {
  ScrollableWrapper,
  ButtonLeft,
  ButtonRight,
  ScrollableContainer,
} from "./ScrollableCarousel.styled";

const ScrollableCarousel = ({
  children,
  buttonSize,
  buttonColor,
  buttonHoverColor,
  buttonBackgroundColor,
  buttonShadowColor,
  buttonZIndex,
  hideButtons,
  disableScroll,
  CustomButtonLeft,
  CustomButtonRight,
}) => {
  const scrollableContainerRef = useRef();

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [leftButtonVisibility, setLeftButtonVisibility] = useState(false);
  const [rightButtonVisibility, setRightButtonVisibility] = useState(true);

  useEffect(() => {
    if (scrollableContainerRef.current) {
      const dimensionsObserver = new ResizeObserver((entries) => {
        setDimensions({
          width: entries[0].target.offsetWidth,
          height: entries[0].target.offsetHeight,
        });
      });

      dimensionsObserver.observe(scrollableContainerRef.current);

      return () => dimensionsObserver.disconnect();
    }
  }, []);

  const onScroll = (e) => {
    const { scrollLeft, scrollWidth, offsetWidth } = e.target;
    if (scrollLeft > 0) {
      setLeftButtonVisibility(true);
    } else {
      setLeftButtonVisibility(false);
    }

    if (
      Math.round(scrollWidth) - Math.round(scrollLeft) >
      Math.round(offsetWidth)
    ) {
      setRightButtonVisibility(true);
    } else {
      setRightButtonVisibility(false);
    }
  };

  const scrollLeft = (e) => {
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollBy({
        left: -dimensions.width,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (e) => {
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollBy({
        left: dimensions.width,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollableWrapper>
      {!hideButtons && (
        <CustomButtonLeft
          top={dimensions.height / 2 - buttonSize * 2}
          $size={buttonSize}
          color={buttonColor}
          hoverColor={buttonHoverColor}
          backgroundColor={buttonBackgroundColor}
          shadowColor={buttonShadowColor}
          zIndex={buttonZIndex}
          visible={leftButtonVisibility && scrollableContainerRef.current}
          onClick={scrollLeft}
        >
          {/* TODO: Icons can be independent with wrapper or else */}
          <NavigateBefore
            style={{ height: `${buttonSize}px`, width: `${buttonSize}` }}
          />
        </CustomButtonLeft>
      )}

      {!hideButtons && (
        <CustomButtonRight
          top={dimensions.height / 2 - buttonSize * 2}
          $size={buttonSize}
          color={buttonColor}
          hoverColor={buttonHoverColor}
          backgroundColor={buttonBackgroundColor}
          shadowColor={buttonShadowColor}
          zIndex={buttonZIndex}
          visible={rightButtonVisibility && scrollableContainerRef.current}
          onClick={scrollRight}
        >
          <NavigateNext
            style={{ height: `${buttonSize}px`, width: `${buttonSize}` }}
          />
        </CustomButtonRight>
      )}

      <ScrollableContainer
        onScroll={onScroll}
        ref={scrollableContainerRef}
        disableScroll={disableScroll}
      >
        {children}
      </ScrollableContainer>
    </ScrollableWrapper>
  );
};

ScrollableCarousel.defaultProps = {
  buttonSize: 24,
  buttonZIndex: 666,
  CustomButtonLeft: ButtonLeft,
  CustomButtonRight: ButtonRight,
};

export default ScrollableCarousel;
