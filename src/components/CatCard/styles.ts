import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
width: 100%;
margin-bottom: 16px;
align-items: center;
justify-content: center;
border-radius: 5px;
background-color: ${({ theme }) => theme.colors.background_secundary};
`;

export const Image = styled.Image`
align-self: flex-start;
width: 100%;
height: 100px;
`;
export const DataContainer = styled.View`
padding: 0px 24px;
`;
export const Name = styled.Text`
margin-top: 10px;
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.medium};
color: ${({ theme }) => theme.colors.header};
text-transform: uppercase;
`;
export const Description = styled.Text`
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.regular};
color: ${({ theme }) => theme.colors.header};
text-align: justify;
margin-top: 15px;

`;

