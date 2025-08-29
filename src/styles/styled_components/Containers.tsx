import styled from "styled-components";
import { colors } from "../colors";

export const NavHeader = styled.div`
  height: 100px;
  position: fixed;
  width: 100vw;
  background-color: ${colors.white};
  border-bottom: 2px solid ${colors.gray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  div {
    width: 30%;
  }
  button {
    height: 40px;
  }
  :first-child {
    margin-left: 1rem;
  }
  :last-child {
    margin-right: 1rem;
  }
  transition: transform 0.3s ease;
  transform: translateY(0);
  @media (min-width: 1024px) {
    transform: translateY(-100%);
    border: none;
  }
`;
