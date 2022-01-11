import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
flex-direction: row;
padding: 0px 24px;
margin-top: 20px;
`;

export const IconContainer = styled.View`
justify-content: center;
align-items: center;
width: 55px;
height: 56px;
background-color: ${({theme}) => theme.colors.background_secundary};
`;
export const Separator = styled.View`
width: 2px;
height: 56px;
background-color: ${({theme}) => theme.colors.line};
`;
export const InputText = styled(TextInput)`
flex: 1;
padding: 0 23px;
background-color: ${({theme}) => theme.colors.background_secundary};
`;
