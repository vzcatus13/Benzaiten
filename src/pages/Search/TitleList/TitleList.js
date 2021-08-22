import { CardContainer, List, NothingFound } from "./TitleList.styled";
import { TitleCard, TitleCardSkeleton } from "../../../components/TitleCard";
import { isMobileOnly } from "react-device-detect";

const TitleList = ({ data, loading }) => {
  return (
    <List>
      {data &&
        data.Page.media.map((element) => {
          return (
            <TitleCard
              CustomContainer={CardContainer}
              key={`${element.id}-${element.idMal}`}
              id={element.id}
              title={
                Object.entries(element.title)
                  .filter((element) => element[0] !== "__typename")
                  .filter((element) => element[1] !== null)
                  .shift()[1]
              }
              imgSrc={element.coverImage.large}
              width={isMobileOnly ? "120px" : "180px"}
              height={isMobileOnly ? "160px" : "260px"}
            />
          );
        })}

      {loading &&
        new Array(13).fill().map((_, index) => {
          return (
            <TitleCardSkeleton
              CustomContainer={CardContainer}
              key={index}
              width={isMobileOnly ? "120px" : "180px"}
              height={isMobileOnly ? "160px" : "260px"}
            />
          );
        })}

      {data && data.Page.media.length === 0 && (
        <NothingFound>{"Nothing was found (>_<)"}</NothingFound>
      )}

    </List>
  );
};

// width={200}
//       height={270}

export default TitleList;
