import { Container, Reload, Text } from "./ErrorBoundary.styled";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    document.title = "Error (x_x)";
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Text>
            Something went wrong. Try{" "}
            <Reload onClick={() => window.location.reload()}>reload</Reload>{" "}
            page, or else ¯\_(ツ)_/¯
          </Text>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
