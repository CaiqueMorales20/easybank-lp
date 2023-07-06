// Imports
import { createGlobalStyle } from "styled-components";

// Styled Components
export const GlobalStyle = createGlobalStyle`
  /* ==================== CSS Variables ==================== */
  :root{
    /* Colors */
    --clr-blue: hsl(233, 26%, 24%);
    --clr-green: hsl(136, 65%, 51%);
    --clr-cyan: hsl(192, 70%, 51%);

    --clr-neutral-800: hsl(233, 8%, 62%);
    --clr-neutral-700: hsl(220, 16%, 96%);
    --clr-neutral-500: hsl(0, 0%, 98%);
    --clr-neutral-400: hsl(0, 0%, 100%);

    /* Typography */
    --fz-normal: 18px;

    --fw-semibold: 700;
    --fw-normal: 400;
    --fw-light: 300;

    --ff-body: 'Public Sans', sans-serif;
  }

  /* ==================== HTML Reseting ==================== */
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body{
    font-family: var(--ff-body);
  }
`;
