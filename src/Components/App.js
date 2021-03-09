import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const App = (props) => {
  return (
    <Container>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100%;
`;

export default App;
