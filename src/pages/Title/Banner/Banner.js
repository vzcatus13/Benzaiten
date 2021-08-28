import Skeleton from "../../../components/Skeleton";
import { BannerWrapper } from "./Banner.styled";

const Banner = ({ data, loading }) => {
  let titles, title;

  if (!loading) {
    const imgSrc = data.Media.bannerImage
      ? data.Media.bannerImage
      : data.Media.coverImage.extraLarge;

    titles = Object.entries(data.Media.title)
      .filter((element) => element[0] !== "__typename")
      .filter((element) => element[1] !== null)
      .map((element) => element[1]);
    title = titles.shift();

    return (
      <BannerWrapper blur={!data.Media.bannerImage}>
        <img src={imgSrc} alt={title} />
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
