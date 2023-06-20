import { createGlobalStyle } from "styled-components";
import { fontPrincipal } from "./ui/variaveis";


export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: ${fontPrincipal};
    margin: 0;
    padding: 0;
    text-decoration: none;
}
`