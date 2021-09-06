import { useState, useRef, useEffect } from "react";
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
  const scrollableRef = useRef();

  const [recommendationsOptions, setRecommendationsOptions] = useState({
    nextPage: startingPage,
    perPage: perPage,
  });

  const {
    data: recommendationsList,
    loading,
    networkStatus,
    fetchMore: fetchMoreRecommendations,
    refetch,
  } = useQuery(GET_RECOMMENDATIONS_BY_ID, {
    variables: {
      id: id,
      page: recommendationsOptions.nextPage,
      perPage: recommendationsOptions.perPage,
    },
    onCompleted: (data) => {
      if (data.Page.pageInfo.hasNextPage) {
        const nextPage = ++recommendationsOptions.nextPage;

        setRecommendationsOptions({
          nextPage,
          ...recommendationsOptions,
        });

        scrollableRef.current &&
          scrollableRef.current.scrollWidth <=
            scrollableRef.current.offsetWidth &&
          fetchMore();

        console.log(perPage, data.Page.pageInfo.hasNextPage, data);
      }
    },
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    notifyOnNetworkStatusChanged: true,
  });

  const fetchMore = (page) => {
    recommendationsList?.Page.pageInfo.hasNextPage &&
      refetch({
        variables: {
          page: page ?? recommendationsOptions.nextPage,
        },
      });
  };

  useEffect(() => {
    console.log(
      "page: ",
      recommendationsOptions.nextPage,
      ", perPage: ",
      recommendationsOptions.perPage
    );
  }, [recommendationsOptions]);

  const cardDimensions = isMobileOnly
    ? { width: "100px", height: "150px" }
    : { width: "130px", height: "200px" };

  if (recommendationsList?.Page.recommendations.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <Title>Recommendations</Title>
      <ScrollableCarousel
        CustomButtonLeft={sQButtonLeft}
        CustomButtonRight={sQButtonRight}
        hideButtons={isMobileOnly || !recommendationsList}
        disableScroll={!recommendationsList}
        ref={scrollableRef}
      >
        <List>
          {recommendationsList &&
            recommendationsList.Page.recommendations.map((element) => {
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

          {!recommendationsList &&
            new Array(13).fill().map((_, index) => {
              return (
                <TitleCardSkeleton
                  key={index}
                  width={cardDimensions.width}
                  height={cardDimensions.height}
                />
              );
            })}

          {console.log("net status:", networkStatus)}

          {recommendationsList &&
            loading &&
            new Array(recommendationsOptions.perPage).fill().map((_, index) => {
              return (
                <TitleCardSkeleton
                  key={index}
                  width={cardDimensions.width}
                  height={cardDimensions.height}
                />
              );
            })}
        </List>
      </ScrollableCarousel>
      <button
        onClick={() => {
          fetchMore();
          console.log("fetched from button");
        }}
      >
        Fetch more
      </button>
    </Wrapper>
  );
};

export default Recommendations;
