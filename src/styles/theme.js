import styled from "styled-components";

const pixelToRem = size => `${size / 16}rem`;

const fontSizes = {
    title:pixelToRem(24),
    subtitle:pixelToRem(20),
    smallTitle:pixelToRem(15),
    smallText:pixelToRem(12),
}
const fontWeight = {
    title:700,
    subtitle:400,
    smallTitle:400,
    smallText:400,
}


export const dark = {
    fontSizes,
    fontWeight,
    colors : {
        redOrange:"#FF5C00",
        orange:"#FF8616",
        darkBlue:"#001881",
        blue:"#0019FA",
        lightBlue:"#0A5DFF",
        skyBlue:"#6EA2F0",
        gray1:"#F8F8FD",
        gray2:"#CACAD0",
        gray3:"#9C9DA4",
        gray4:"#6E6F77",
        gray5:"#40414A",
    }
}
export const light = {
    fontSizes,
    fontWeight,
    colors : {
        redOrange:"#FF5C00",
        orange:"#FF8616",
        darkBlue:"#001881",
        blue:"#0019FA",
        lightBlue:"#0A5DFF",
        skyBlue:"#6EA2F0",
        gray1:"#F8F8FD",
        gray2:"#CACAD0",
        gray3:"#9C9DA4",
        gray4:"#6E6F77",
        gray5:"#40414A",
    }
}