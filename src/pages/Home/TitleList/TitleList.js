import { isMobileOnly } from "react-device-detect";

import ScrollableCarousel from "../../../components/ScrollableCarousel";
import { TitleCard, TitleCardSkeleton } from "../../../components/TitleCard";

import { ComponentWrapper, ListCategory, List } from "./TitleList.styled";

const TitleList = ({ listName, data, loading }) => {
  return (
    <ComponentWrapper>
      <ListCategory>{listName}</ListCategory>
      <ScrollableCarousel
        disableScroll={loading}
        hideButtons={loading || isMobileOnly}
      >
        <List>
          {!loading
            ? data.Page.media.map((element) => {
                return (
                  <TitleCard
                    key={`${element.id}-${element.idMal}`}
                    id={element.id}
                    title={
                      Object.entries(element.title)
                        .filter((element) => element[0] !== "__typename")
                        .filter((element) => element[1] !== null)
                        .shift()[1]
                    }
                    imgSrc={element.coverImage.large}
                  />
                );
              })
            : new Array(13).fill().map((_, index) => {
                return <TitleCardSkeleton key={index} />;
              })}
        </List>
      </ScrollableCarousel>
    </ComponentWrapper>
  );
};

export default TitleList;
