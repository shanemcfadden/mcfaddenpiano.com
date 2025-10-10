import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Mukta/Mukta-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Mukta-Regular"
    />,
    <link
      rel="preload"
      href="/fonts/Mukta/Mukta-Bold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Mukta-Bold"
    />,
    <link
      rel="preload"
      href="/fonts/Josefin-Sans/JosefinSans-VariableFont_wght.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Josefin-Sans-Regular"
    />,
    <link
      rel="preload"
      href="/fonts/Josefin-Sans/JosefinSans-Italic-VariableFont_wght.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Josefin-Sans-Italic"
    />,
  ]);
};
