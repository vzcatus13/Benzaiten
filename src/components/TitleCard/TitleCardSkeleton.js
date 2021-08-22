import { Container, Caption, ImageWrapper } from "./TitleCard.styled";
import Skeleton from "../Skeleton";

const TitleCardSkeleton = ({ width, height, CustomContainer }) => {
  return (
    <CustomContainer $width={width}>
      <ImageWrapper as="div" $height={height} $width={width}>
        <Skeleton
          variant="rect"
          height={height}
          animation={false}
          $borderRadius="6px"
        />
      </ImageWrapper>
      <Caption>
        <Skeleton
          variant="rect"
          height={parseInt(height) / 13}
          animation={false}
          $borderRadius="4px"
        />
      </Caption>
    </CustomContainer>
  );
};

TitleCardSkeleton.defaultProps = {
  width: "130px",
  height: "200px",
  CustomContainer: Container,
};

export default TitleCardSkeleton;
