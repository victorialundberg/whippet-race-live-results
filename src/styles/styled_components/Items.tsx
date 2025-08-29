import styled from "styled-components";

export const MenuOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: none;

  &.open {
    display: block;
  }

  @media (min-width: 1024px) {
    &.open {
      display: none;
    }
  }
`;
