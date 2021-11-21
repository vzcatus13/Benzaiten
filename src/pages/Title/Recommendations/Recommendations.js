import { useRef, useCallback, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
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

import { GET_RECOMMENDATIONS_BY_ID } from "../../../api/anilist-v2";

const Recommendations = ({ id, startingPage, perPage }) => {
  const cardDimensions = isMobileOnly
    ? { width: "100px", height: "150px" }
    : { width: "130px", height: "200px" };

  const scrollableRef = useRef();

  const [options, setOptions] = useState({
    page: startingPage,
    hasNextPage: true,
  });

  const [recommendationsList, setRecommendationsList] = useState([]);

  const { loading, refetch: fetchMoreRecommendations } = useQuery(
    GET_RECOMMENDATIONS_BY_ID,
    {
      variables: {
        id: id,
        page: options.page,
        perPage: perPage,
      },
      onCompleted: (data) => {
        setRecommendationsList([
          ...recommendationsList,
          ...data.Page.recommendations,
        ]);
        console.log("completed", data);

        setOptions((options) => {
          return { ...options, hasNextPage: data.Page.pageInfo.hasNextPage };
        });

        data.Page.pageInfo.hasNextPage &&
          scrollableRef.current &&
          scrollableRef.current.scrollWidth <=
            scrollableRef.current.offsetWidth &&
          setOptions((options) => {
            return { ...options, page: options.page + 1 };
          });
      },
      fetchPolicy: "no-cache",
      notifyOnNetworkStatusChange: true,
    }
  );

  const fetchMore = useCallback(
    (page) => {
      options.hasNextPage &&
        fetchMoreRecommendations({
          page: page,
        });
    },
    [fetchMoreRecommendations, options.hasNextPage]
  );

  useEffect(() => {
    if (options.page === startingPage) return;

    fetchMore(options.page);
  }, [options.page, startingPage, fetchMore]);

  const infiniteScroll = useCallback(
    (event) => {
      if (!options.hasNextPage) return;

      event.target.scrollWidth -
        event.target.scrollLeft -
        event.target.offsetWidth <
        parseInt(cardDimensions.width) / 4 &&
        !loading &&
        setOptions((options) => {
          return { ...options, page: options.page + 1 };
        });
    },
    [loading, cardDimensions.width, options]
  );

  if (recommendationsList.length === 0 && !loading) {
    return null;
  }

  return (
    <Wrapper>
      <Title>Recommendations</Title>
      <ScrollableCarousel
        CustomButtonLeft={sQButtonLeft}
        CustomButtonRight={sQButtonRight}
        hideButtons={isMobileOnly || recommendationsList.length === 0}
        disableScroll={recommendationsList.length === 0}
        onScroll={infiniteScroll}
        ref={scrollableRef}
      >
        <List>
          {recommendationsList.map((element) => {
            if (!element.mediaRecommendation) return null;

            const [id, title, imgSrc] = [
              element.mediaRecommendation.id,
              element.mediaRecommendation.title.romaji,
              element.mediaRecommendation.coverImage.large,
            ];

            return (
              <TitleCard
                key={id}
                id={id}
                title={title}
                imgSrc={imgSrc}
                width={cardDimensions.width}
                height={cardDimensions.height}
              />
            );
          })}

          {recommendationsList.length === 0 &&
            loading &&
            new Array(13).fill().map((_, index) => {
              return (
                <TitleCardSkeleton
                  key={`tcs-${index}`}
                  width={cardDimensions.width}
                  height={cardDimensions.height}
                />
              );
            })}

          {recommendationsList.length > 0 &&
            loading &&
            new Array(perPage).fill().map((_, index) => {
              return (
                <TitleCardSkeleton
                  key={`tcs-${index}`}
                  width={cardDimensions.width}
                  height={cardDimensions.height}
                />
              );
            })}
        </List>
      </ScrollableCarousel>
    </Wrapper>
  );
};

export default Recommendations;
