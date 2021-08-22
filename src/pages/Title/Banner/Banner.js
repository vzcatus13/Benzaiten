import Skeleton from "../../../components/Skeleton";
import { BannerWrapper } from "./Banner.styled";

const Banner = ({ data, loading }) => {
  if (!loading) {
    const imgSrc = data.Media.bannerImage
      ? data.Media.bannerImage
      : data.Media.coverImage.extraLarge;

    return (
      <BannerWrapper blur={!data.Media.bannerImage}>
        <img src={imgSrc} alt={data.Media.title.english} />
      </BannerWrapper>
    );
  }

  return (
    <BannerWrapper>
      <Skeleton variant="rect" height="100%" width="100%" />
    </BannerWrapper>
  );
};

export default Banner;
