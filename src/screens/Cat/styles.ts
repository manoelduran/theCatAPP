import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
`;

export const Header = styled.View`
width: 100%;
height: 250px;
background-color: ${({ theme }) => theme.colors.header};
justify-content: center;
padding: 24px;
padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Image = styled.Image`
align-self: flex-start;
width: 100%;
height: 100px;
`;
export const Content= styled.ScrollView`
padding: 0px 24px;
`;
export const Details = styled.View``;
export const Origin = styled.Text``;
export const Extra = styled.Text``;
export const Name = styled.Text``;
export const Description = styled.Text``;
export const Separator = styled.View``;
export const Temperament = styled.Text``;
export const Levels = styled.Text``;

export const Button = styled.Button`

`;
