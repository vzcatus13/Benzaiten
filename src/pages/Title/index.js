import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Fragment } from "react";

import Banner from "./Banner";
import LeadingInfo from "./LeadingInfo";
import Recommendations from "./Recommendations";

import NotFoundPage from "../404";

import { GET_TITLE_BY_ID } from "../../api/anilist-v2";

const Title = () => {
  const { id } = useParams();

  useEffect(() => {
    if (!titleInfo.loading && !titleInfo.error) {
      document.title = Object.entries(titleInfo.data.Media.title)
        .filter((element) => element[0] !== "__typename")
        .filter((element) => element[1] !== null)
        .shift()[1];
    }
  });

  const titleInfo = useQuery(GET_TITLE_BY_ID, {
    variables: { id: id },
  });

  if (titleInfo.error && titleInfo.error.graphQLErrors[0].status === 404) {
    return <NotFoundPage />;
  }

  return (
    <Fragment key={id}>
      <Banner data={titleInfo.data} loading={titleInfo.loading} />
      <LeadingInfo data={titleInfo.data} loading={titleInfo.loading} />
      <Recommendations id={id} startingPage={1} perPage={5} />
    </Fragment>
  );
};

export default Title;
