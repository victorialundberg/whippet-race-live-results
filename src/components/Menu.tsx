// import { useEffect, useState } from "react";
// import { NavHeader } from "../styles/styled_components/Containers";
// import { IconButton } from "../styles/styled_components/Buttons";
// import { MenuIcon } from "../styles/icons/MenuIcon";
// import { MenuOverlay } from "../styles/styled_components/Items";
// import { MenuWrapper } from "../styles/styled_components/Wrappers";
// import { CloseIcon } from "../styles/icons/CloseIcon";
// import { Navbar } from "./Navbar";
// import WRlogo from "../assets/images/WRlogo.svg";

export const Menu = () => {
  return <></>;
  //   const [isOpen, setIsOpen] = useState(false);
  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };
  //   useEffect(() => {
  //     if (isOpen) {
  //       document.body.style.overflow = "hidden";
  //     } else {
  //       document.body.style.overflow = "";
  //     }
  //     return () => {
  //       document.body.style.overflow = "";
  //     };
  //   }, [isOpen]);
  //   return (
  //     <>
  //       <NavHeader role="banner">
  //         <IconButton
  //           onClick={toggleMenu}
  //           aria-expanded={isOpen}
  //           aria-controls="menu"
  //           aria-label="Open main menu"
  //         >
  //           <MenuIcon></MenuIcon>
  //         </IconButton>
  //         {/* <img src={WRlogo} alt="ikon med springande whippet" height={50} /> */}
  //       </NavHeader>
  //       <MenuOverlay
  //         className={isOpen ? "open" : ""}
  //         onClick={() => setIsOpen(false)}
  //         aria-hidden="true"
  //       />
  //       <MenuWrapper
  //         id="menu"
  //         className={isOpen ? "open" : ""}
  //         role="navigation"
  //         aria-label="Main menu"
  //         // aria-hidden={!isOpen}
  //         onClick={() => setIsOpen(false)}
  //       >
  //         <IconButton onClick={() => setIsOpen(false)} aria-label="Close menu">
  //           <CloseIcon />
  //         </IconButton>
  //         {/* <Navbar /> */}
  //       </MenuWrapper>
  //     </>
  //   );
};
