import { useEffect } from "react";
import {
  Container,
  Text,
} from "../../components/ErrorBoundary/ErrorBoundary.styled";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "404. Not Found";
  }, []);

  return (
    <Container>
      <Text>404. Page Not Found</Text>
    </Container>
  );
};

export default PageNotFound;
