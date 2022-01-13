import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import styled from "styled-components/native";
interface LabelProps {
    active: boolean;
  }
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

export const Title = styled.Text`
font-size: ${RFValue(25)}px;
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.shape};
margin-top: 24px;
`;

export const Image = styled.Image`
align-self: flex-start;
width: 100%;
height: 100px;
`;
export const Content= styled.ScrollView`
padding: 0px 24px;
`;
export const Details = styled.View`
margin-top: 10px;
flex-direction: row;
align-items: center;
justify-content: flex-start;
`;
export const Origin = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.title};
`;
export const Icon = styled(Feather)<LabelProps>`
margin-left: 15px;
color: ${({ active ,theme }) => active ? theme.colors.header : theme.colors.title}; 
`;

export const Name = styled.Text`
margin-top: 10px;
font-size: ${RFValue(20)}px;
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.title};
`;
export const Description = styled.Text`
margin-top: 10px;
font-size: ${RFValue(15)}px;
text-align: justify;
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.title};
`;
export const Separator = styled.View`
margin-top: 10px;
width: 100%;
height: 2px;
background-color: ${({theme}) => theme.colors.header};
`;
export const Temperament = styled.Text`
margin-top: 10px;
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.title};
`;

export const LevelDiv = styled.View`
align-items: flex-start;
margin-top: 20px;
`;
export const LevelName = styled.Text`
font-size: ${RFValue(20)}px;
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.title};
`;

export const Footer = styled.View`
    width: 100%;
    padding: 24px 24px;
    padding-bottom: ${getBottomSpace() + 24}px;
`;

export const Button = styled.Button`

`;
