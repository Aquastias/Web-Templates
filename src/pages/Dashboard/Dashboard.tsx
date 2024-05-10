import React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const Aside = styled(Box)(({ theme }) => ({
  gridArea: "aside",
  minWidth: "300px",
  backgroundColor: theme.palette.background.paper,
})).withComponent("aside");

const Header = styled(Box)(({ theme }) => ({
  gridArea: "header",
  backgroundColor: theme.palette.background.default,
})).withComponent("header");

const Main = styled(Box)(({ theme }) => ({
  gridArea: "main",
  backgroundColor: theme.palette.background.default,
})).withComponent("main");

const Footer = styled(Box)(({ theme }) => ({
  gridArea: "footer",
  backgroundColor: theme.palette.background.default,
})).withComponent("footer");

const StyledDashboard = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gridTemplateRows: "auto 1fr auto",
  gridTemplateAreas: `
    "aside header"
    "aside main"
    "aside footer"
  `,
  height: "100dvh",
})).withComponent("section");

const Dashboard: React.FC = () => {
  return (
    <StyledDashboard>
      <Aside>Aside</Aside>
      <Header>Header</Header>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </StyledDashboard>
  );
};

export default Dashboard;
