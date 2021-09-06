import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { forwardRef, useEffect, useRef, useState } from "react";

import {
  ScrollableWrapper,
  ButtonLeft,
  ButtonRight,
  ScrollableContainer,
} from "./ScrollableCarousel.styled";

const ScrollableCarousel = forwardRef(
  (
    {
      children,
      buttonSize,
      buttonColor,
      buttonHoverColor,
      buttonBackgroundColor,
      buttonShadowColor,
      buttonZIndex,
      hideButtons,
      disableScroll,
      onScroll,
      CustomButtonLeft,
      CustomButtonRight,
    },
    ref
  ) => {
    const scrollableContainerRef = useRef();

    const [dimensions, setDimensions] = useState({
      width: 0,
      scrollWidth: 0,
      height: 0,
    });

    const [leftButtonVisibility, setLeftButtonVisibility] = useState(false);
    const [rightButtonVisibility, setRightButtonVisibility] = useState(true);

    const isEnd = (width, scrollWidth, scrollLeft) =>
      Math.round(scrollWidth) - Math.round(scrollLeft) <= Math.round(width);

    useEffect(() => {
      if (ref) {
        ref.current = scrollableContainerRef.current;
      }
    }, [scrollableContainerRef, ref]);

    useEffect(() => {
      const ref = scrollableContainerRef.current;
      if (ref) {
        setDimensions({
          width: ref.offsetWidth,
          scrollWidth: ref.scrollWidth,
          height: ref.offsetHeight,
        });
      }
    }, [children]);

    useEffect(() => {
      if (dimensions.scrollWidth <= dimensions.width) {
        setLeftButtonVisibility(false);
        setRightButtonVisibility(false);
      }

      if (dimensions.scrollWidth > dimensions.width) {
        setRightButtonVisibility(true);
      }

      if (scrollableContainerRef.current) {
        if (
          isEnd(
            dimensions.width,
            dimensions.scrollWidth,
            scrollableContainerRef.current.scrollLeft
          )
        ) {
          setRightButtonVisibility(false);
        }

        if (scrollableContainerRef.current.scrollLeft > 0) {
          setLeftButtonVisibility(true);
        }
      }
    }, [dimensions]);

    const handleScroll = (e) => {
      const { scrollLeft } = e.target;
      if (scrollLeft > 0) {
        setLeftButtonVisibility(true);
      } else {
        setLeftButtonVisibility(false);
      }

      if (!isEnd(dimensions.width, dimensions.scrollWidth, scrollLeft)) {
        setRightButtonVisibility(true);
      } else {
        setRightButtonVisibility(false);
      }

      onScroll instanceof Function && onScroll(e);
    };

    const scrollLeft = (e) => {
      if (scrollableContainerRef.current) {
        scrollableContainerRef.current.scrollBy({
          left: -dimensions.width,
          behavior: "smooth",
        });

        scrollableContainerRef.current.scrollLeft <= 0 &&
          setLeftButtonVisibility(false);
      }
    };

    const scrollRight = (e) => {
      if (scrollableContainerRef.current) {
        scrollableContainerRef.current.scrollBy({
          left: dimensions.width,
          behavior: "smooth",
        });

        isEnd(
          dimensions.width,
          dimensions.scrollWidth,
          scrollableContainerRef.current.scrollLeft
        ) && setRightButtonVisibility(false);
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
          onScroll={handleScroll}
          ref={scrollableContainerRef}
          disableScroll={disableScroll}
        >
          {children}
        </ScrollableContainer>
      </ScrollableWrapper>
    );
  }
);

ScrollableCarousel.defaultProps = {
  buttonSize: 24,
  buttonZIndex: 666,
  CustomButtonLeft: ButtonLeft,
  CustomButtonRight: ButtonRight,
};

export default ScrollableCarousel;
