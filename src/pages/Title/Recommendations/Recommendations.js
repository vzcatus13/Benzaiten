import { isMobileOnly } from "react-device-detect";

import {
  Wrapper,
  Title,
  List,
  sQButtonLeft,
  sQButtonRight,
} from "./Recommendations.styled";

import ScrollableCarousel from "../../../components/ScrollableCarousel";
import { TitleCard, TitleCardSkeleton } from "../../../components/TitleCard";

const Recommendations = ({ data }) => {
  if (data && data.Page.recommendations.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <Title>Recommendations</Title>
      <ScrollableCarousel
        CustomButtonLeft={sQButtonLeft}
        CustomButtonRight={sQButtonRight}
        hideButtons={isMobileOnly && !data}
        disableScroll={!data}
      >
        <List>
          {data &&
            data.Page.recommendations.map((element) => {
              if (!element.mediaRecommendation) return null;

              const [id, title, imgSrc] = [
                element.mediaRecommendation.id,
                element.mediaRecommendation.title.romaji,
                element.mediaRecommendation.coverImage.large,
              ];

              return (
                <TitleCard key={id} id={id} title={title} imgSrc={imgSrc} />
              );
            })}

          {!data &&
            new Array(13).fill().map((_, index) => {
              return <TitleCardSkeleton key={index} />;
            })}
        </List>
      </ScrollableCarousel>
    </Wrapper>
  );
};

export default Recommendations;
