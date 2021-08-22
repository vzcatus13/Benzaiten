import {
  Container,
  ImageWrapper,
  Image,
  Caption,
  Title,
} from "./TitleCard.styled";

const TitleCard = ({ width, height, id, title, imgSrc, CustomContainer }) => {
  return (
    <CustomContainer $width={width}>
      {/* Was working version */}
      {/* <ImageWrapper height={height} style={{ backgroundImage: `url(${imgSrc})` }} /> */}
      <ImageWrapper $height={height} $width={width} to={`/title/${id}`}>
        <Image src={imgSrc} alt={title} />
      </ImageWrapper>
      <Caption>
        <Title to={`/title/${id}`}>{title}</Title>
      </Caption>
    </CustomContainer>
  );
};

TitleCard.defaultProps = {
  width: "130px",
  height: "200px",
  CustomContainer: Container,
};

export default TitleCard;
