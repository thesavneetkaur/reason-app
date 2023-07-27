import React, { useState } from "react";
import {
  MobileIcon,
  Nav,
  NavIcon,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavbarContainer,
} from "../style";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useAllPrismicDocumentsByType } from "@prismicio/react";

function Navbar() {
  const [clicked, setClick] = useState(false);

  const handleClick = () => setClick(!clicked);

  const [menuItems] = useAllPrismicDocumentsByType("menuitems", "index");
  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              GOOD THINGS
            </NavLogo>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}>
              <MobileIcon onClick={handleClick}>
                {clicked ? <FaTimes /> : <FaBars />}
              </MobileIcon>

              <NavMenu onClick={handleClick} click={clicked}>
                {menuItems
                  ?.sort((a, b) => a?.data?.index - b?.data?.index)
                  ?.map((menuItem) => (
                    <NavItem>
                      <NavLinks to={menuItem?.data?.to}>
                        {menuItem?.data?.itemname}
                      </NavLinks>
                    </NavItem>
                  ))}
              </NavMenu>
            </div>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
