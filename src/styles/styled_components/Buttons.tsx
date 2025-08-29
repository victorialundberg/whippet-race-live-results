import styled from "styled-components";
import { colors } from "../colors";

export const BaseButton = styled.button`
  border-radius: 10px;
  border: none;
  &:hover,
  &:focus {
    outline: 2px solid black;
    outline-offset: 2px;
  }
`;
export const IconButton = styled(BaseButton)`
  padding: 0;
  margin: 0;
  border-radius: 0;
  background-color: ${colors.white};
  display: flex;
`;

export const ScrollButton = styled(BaseButton)`
  position: fixed;
  bottom: 100px;
`;
