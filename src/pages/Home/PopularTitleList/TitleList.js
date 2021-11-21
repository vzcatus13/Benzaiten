import { useQuery } from "@apollo/client";
import { useCallback, useEffect, useRef, useState } from "react";
import { isMobileOnly } from "react-device-detect";
import { GET_POPULAR_TITLES } from "../../../api/anilist-v2";

import ScrollableCarousel from "../../../components/ScrollableCarousel";
import { TitleCard, TitleCardSkeleton } from "../../../components/TitleCard";

import { ComponentWrapper, ListCategory, List } from "./TitleList.styled";

const TitleList = ({ listName, variables }) => {
  const cardDimensions = isMobileOnly
    ? { width: "100px", height: "150px" }
    : { width: "130px", height: "200px" };

  const scrollableRef = useRef();

  const [options, setOptions] = useState({
    page: variables.page,
    hasNextPage: true,
  });

  const [list, setList] = useState([]);

  const { loading, refetch: fetchMoreTitles } = useQuery(GET_POPULAR_TITLES, {
    variables: variables,
    onCompleted: (data) => {
      setList([...list, ...data.Page.media]);

      console.log("completed", data);

      setOptions((options) => {
        return { ...options, hasNextPage: data.Page.pageInfo.hasNextPage };
      });
    },
    fetchPolicy: "no-cache",
    notifyOnNetworkStatusChange: true,
  });

  const fetchMore = useCallback(
    (page) => {
      options.hasNextPage &&
        fetchMoreTitles({
          page: page,
        });
    },
    [fetchMoreTitles, options.hasNextPage]
  );

  useEffect(() => {
    if (options.page === variables.page) return;

    fetchMore(options.page);
  }, [options.page, variables.page, fetchMore]);

  useEffect(() => {
    if (list.length === 0) return;

    scrollableRef.current &&
      scrollableRef.current.scrollWidth <= scrollableRef.current.offsetWidth &&
      setOptions((options) => {
        if (options.hasNextPage) {
          return { ...options, page: options.page + 1 };
        }

        return options;
      });
  }, [list]);

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

  return (
    <ComponentWrapper>
      <ListCategory>{listName}</ListCategory>
      <ScrollableCarousel
        disableScroll={list.length === 0}
        hideButtons={list.length === 0 || isMobileOnly}
        onScroll={infiniteScroll}
        ref={scrollableRef}
      >
        <List>
          {list.map((element) => {
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
                height={cardDimensions.height}
                width={cardDimensions.width}
              />
            );
          })}

          {list.length === 0 &&
            loading &&
            new Array(13).fill().map((_, index) => {
              return (
                <TitleCardSkeleton
                  key={`tcs-${index}`}
                  height={cardDimensions.height}
                  width={cardDimensions.width}
                />
              );
            })}

          {list.length > 0 &&
            new Array(1).fill().map((_, index) => {
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
    </ComponentWrapper>
  );
};

export default TitleList;
