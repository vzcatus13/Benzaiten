const shared = {
  headerHeight: "64px",
  iconOpacity: ".6",
  iconOpacityHover: ".8",
};

const light = {
  backgroundColor: "#fff",
  textColor: "#000",
  secondaryTextColor: "#666",
  scrollbarColor: "#999",
  iconColor: "#868686",
  iconBackgroundColorHover: "#696c7225",
  scrollableCarouselColor: {
    button: {
      background: "#fff",
      iconMain: "#70757a",
      iconHover: "#202124",
    },
  },
  skeletonColor: {
    background: "#00000020",
  },
  title: {
    banner: {
      backgroundLinear: `linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 1) 100%
      )`,
    },
    leadingInfo: {
      quickInfo: {
        grade: {
          color: {
            green: "#0f6611",
            orange: "#cf6900",
            red: "#de0000",
          },
        },
      },
    },
  },
  search: {
    searchBar: {
      backgroundColor: "#f5f5f6",
      height: "48px",
    },
  },
  ...shared,
};

const dark = {
  backgroundColor: "#181818",
  textColor: "#fff",
  secondaryTextColor: "#b4b4b4",
  scrollbarColor: "#ffffff4a",
  iconColor: "#d6d6d6",
  iconBackgroundColorHover: "#90969d30",
  scrollableCarouselColor: {
    button: {
      background: "#333",
      iconMain: "#ccc",
      iconHover: "#ccc4c4",
    },
  },
  skeletonColor: {
    background: "#ffffff13",
  },
  title: {
    banner: {
      backgroundLinear: `linear-gradient(
        to bottom,
        rgba(24, 24, 24, 0.1) 0%,
        rgba(24, 24, 24, 0.5) 60%,
        rgba(24, 24, 24, 1) 100%
      )`,
    },
    leadingInfo: {
      quickInfo: {
        grade: {
          color: {
            green: "#0ab40d",
            orange: "#ff7916",
            red: "#fc3d26",
          },
        },
      },
    },
  },
  search: {
    searchBar: {
      backgroundColor: "#393b3e",
      height: "48px",
    },
  },
  ...shared,
};

const theme = {
  light,
  dark,
};

export default theme;
