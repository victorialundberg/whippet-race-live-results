import styled from "styled-components";
import { colors } from "../colors";

export const Wrapper = styled.div`
  width: 400px;
  padding: 0 2rem 0 2rem;
  /* padding-top: 100px; */
  @media (min-width: 1024px) {
    padding-top: 0;
    /* margin-left: 250px; */
  }
`;

export const MenuWrapper = styled.div`
  background-color: ${colors.white};
  height: 100vh;
  margin: 0;
  width: 20%;
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 3;
  max-width: 250px;

  transition: transform 0.3s ease;
  transform: translateX(-100%);

  @media (min-width: 1024px) {
    transform: translateX(0);
  }
  @media (max-width: 1024px) {
    width: 30%;
  }
  @media (max-width: 720px) {
    width: 50%;
  }
  @media (max-width: 400px) {
    width: 100vw;
  }

  &.open {
    transform: translateX(0);
  }

  > :first-child {
    justify-content: center;
    margin: 1rem auto;
    width: 90%;
    @media (min-width: 1024px) {
      display: none;
    }
  }
  > :last-child {
    font-size: 1.5rem;
    margin-top: auto;
    margin-bottom: 1rem;
  }
`;
export const NavbarWrapper = styled.div`
  width: 100%;
  li:first-child {
    border-top: 1px solid lightgray;
    button {
      background-color: ${colors.white};
      display: flex;
    }
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    list-style: none;
    font-size: 1.3rem;
    cursor: pointer;
    &:hover {
      background-color: lightgray;
    }
    span {
      flex-grow: 1;
      padding: 1rem 0 1rem 1rem;
    }
    svg {
      flex-shrink: 0;
      padding-right: 1rem;
    }
    a {
      color: ${colors.black};
      display: block;
      width: 100%;
      padding: 1rem 0 1rem 1rem;
    }
  }
`;
// export const LogoWrapper = styled.div`
//   width: 20%;
//   max-width: 476px;
//   height: auto;

//   @media (max-width: 768px) {
//     max-width: 357px;
//   }

//   @media (max-width: 480px) {
//     max-width: 179px;
//   }
// `;

// export const LogoWrapperMenu = styled(LogoWrapper)`
//   width: 60%;
//   margin: 0 auto;
//   padding: 0.6em 0;
// `;
