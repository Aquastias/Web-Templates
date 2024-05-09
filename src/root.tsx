"use client";

import * as React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider, THEME_ID } from "@mui/material";
import { CssBaseline } from "@mui/material";
import theme from "./theme";

export type TRootProps = {
  children: React.ReactNode;
};

export const Root: React.FC<TRootProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        />
        <title>Web Templates</title>
      </Helmet>
      <ThemeProvider theme={{ [THEME_ID]: theme }}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </HelmetProvider>
  );
};
