import { Brightness4Rounded, Search } from "@material-ui/icons";
import {
  HeaderContainer,
  HeaderWrapper,
  IconContainer,
  IconsWrapper,
  Left,
  LogoContainer,
  Right,
} from "./Header.styled";

import { Link, useLocation } from "react-router-dom";

const Header = ({ darkModeToggler }) => {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Left>
          <LogoContainer aria-label="Home Page" to="/">
            Benzaiten
          </LogoContainer>
        </Left>
        <Right>
          <IconsWrapper>
            {location.pathname !== "/search" && (
              <IconContainer>
                <Link to="/search" aria-label="Go to Search">
                  <Search style={{ height: "24px", width: "24px" }} />
                </Link>
              </IconContainer>
            )}
            <IconContainer
              onClick={darkModeToggler}
              role="button"
              aria-label="Change Dark Mode"
            >
              <Brightness4Rounded style={{ height: "24px", width: "24px" }} />
            </IconContainer>
          </IconsWrapper>
        </Right>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
