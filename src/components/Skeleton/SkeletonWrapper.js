import styled, { css } from "styled-components";

import { Skeleton } from "@material-ui/lab";

const SkeletonWrapper = styled(({ theme, color, ...props }) => (
  <Skeleton classes={{ root: "root" }} {...props} />
))`
  &.root {
    background-color: ${({ theme, color }) =>
      theme.skeletonColor.background || color};

    ${(props) =>
      props.$borderRadius &&
      props.variant === "rect" &&
      css`
        border-radius: ${(props) => props.$borderRadius};
      `}
  }
`;

SkeletonWrapper.defaultProps = {
  theme: {
    skeletonColor: {
      background: "#00000020",
    },
  },
};

export default SkeletonWrapper;
