import { OpenInNew, Star } from "@material-ui/icons";
import parse from "html-react-parser";
import { useContext } from "react";
import { isMobileOnly } from "react-device-detect";
import { ThemeContext } from "styled-components";

import Skeleton from "../../../components/Skeleton";

import {
  Container,
  Description,
  Genres,
  InfoSection,
  Poster,
  PosterWrapper,
  QuickInfo,
  Grade,
  Titles,
  ButtonLinkOutside,
  ButtonsWrapper,
  RecommendationsWrapper,
  RecommendationTitle,
  RecommendationList,
  sQButtonLeft,
  sQButtonRight,
} from "./LeadingInfo.styled";

import ScrollableCarousel from "../../../components/ScrollableCarousel";
import { TitleCard } from "../../../components/TitleCard";

const LeadingInfo = ({ data, loading }) => {
  let titles, title;

  const themeContext = useContext(ThemeContext);
  const scoreToColor = (score) => {
    if (score > 0 && score <= 40) {
      return themeContext.title.leadingInfo.quickInfo.grade.color.red;
    } else if (score > 40 && score <= 80) {
      return themeContext.title.leadingInfo.quickInfo.grade.color.orange;
    } else if (score > 80 && score <= 100) {
      return themeContext.title.leadingInfo.quickInfo.grade.color.green;
    }

    return themeContext.textColor;
  };

  if (!loading) {
    titles = Object.entries(data.Media.title)
      .filter((element) => element[0] !== "__typename")
      .filter((element) => element[1] !== null)
      .map((element) => element[1]);
    title = titles.shift();
  }

  return (
    <>
      <Container>
        <PosterWrapper>
          <Poster>
            {!loading ? (
              <img src={data.Media.coverImage.extraLarge} alt={title} />
            ) : isMobileOnly ? (
              <Skeleton variant="rect" height="200px" $borderRadius="6px" />
            ) : (
              <Skeleton variant="rect" height="350px" $borderRadius="6px" />
            )}
          </Poster>

          {/* TODO: Buttons can have its own component. At this situation and at
        this page raw button without any customization can be used */}
          {!loading && (
            <ButtonsWrapper>
              <ButtonLinkOutside
                variant="contained"
                fullWidth
                endIcon={<OpenInNew />}
                href={`https://anilist.co/anime/${data.Media.id}`}
                target="_blank"
              >
                Open on AniList
              </ButtonLinkOutside>
            </ButtonsWrapper>
          )}
        </PosterWrapper>
        <InfoSection $loading={loading}>
          {!loading ? (
            <Titles>
              <h1>{title}</h1>
              {titles.length !== 0 && <h2>{titles.join(" / ")}</h2>}
            </Titles>
          ) : (
            <>
              <Skeleton width="70%" height="15%" />
              <Skeleton width="60%" height="15%" />
            </>
          )}

          {!loading && (
            <QuickInfo>
              <Genres>
                {data.Media.genres && data.Media.genres.join(", ")}
              </Genres>
              <Grade color={scoreToColor(data.Media.averageScore)}>
                <span>{(data.Media.averageScore / 10).toFixed(1)}</span>
                <Star style={{ height: 16, width: 16 }} />
              </Grade>
            </QuickInfo>
          )}

          {!loading ? (
            <Description>{parse(data.Media.description)}</Description>
          ) : (
            <Skeleton width="30%" />
          )}
        </InfoSection>
      </Container>

      {data && data.Media.recommendations.nodes.length !== 0 && (
        <RecommendationsWrapper>
          <RecommendationTitle>Recommended</RecommendationTitle>
          <ScrollableCarousel
            CustomButtonLeft={sQButtonLeft}
            CustomButtonRight={sQButtonRight}
            hideButtons={isMobileOnly}
          >
            <RecommendationList>
              {data.Media.recommendations.nodes.map((element) => {
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
            </RecommendationList>
          </ScrollableCarousel>
        </RecommendationsWrapper>
      )}
    </>
  );
};

export default LeadingInfo;
