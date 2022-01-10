import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Header = styled.View`
width: 100%;
padding: ${getStatusBarHeight() + 32}px 24px;
background-color: ${({ theme }) => theme.colors.header};
`;

export const Image = styled.Image`
align-self: flex-start;
width: 100%;
height: 100px;
`;

export const Button = styled.Button`

`;