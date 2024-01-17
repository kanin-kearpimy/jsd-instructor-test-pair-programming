import React from "react";
import AddActivity from "./AddActivity";
import styled from "styled-components";
const Nav = () => {
  const links = [
    {
      url: "#",
      path: "/src/assets/images/icon/Home-icon.svg",
      des: "Home",
    },
    {
      url: "#",
      path: "/src/assets/images/icon/Stat-icon.svg",
      des: "Stat",
    },
    {
      path: "AddActivity",
    },
    {
      url: "#",
      path: "/src/assets/images/icon/Setting-icon.svg",
      des: "Setting",
    },
    {
      url: "#",
      path: "/src/assets/images/icon/User-icon.svg",
      des: "User",
    },
  ];
  return (
    <NavWrapper>
      <Navbar>
        {links.map((link, index) => {
          if (link.path === "AddActivity") {
            return (
              <NavList key={index}>
                <AddActivity />
              </NavList>
            );
          } else {
            return (
              <NavList key={index}>
                <NavLink href={link.url}>
                  <Icon src={link.path} alt={`${link.des}-icon`} />
                  <p>{link.des}</p>
                </NavLink>
              </NavList>
            );
          }
        })}
      </Navbar>
    </NavWrapper>
  );
};
const NavWrapper = styled.nav`
  background: #151718;
  margin-inline: -2rem;
  padding: 0 2rem 0.25rem;
`;
const Navbar = styled.ul`
  font-family: "Orbitron", sans-serif;
  font-weight: 500;
  color: #ecf229;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  /* padding-top: 1rem; */
`;

const NavList = styled.li`
  border-top: 4px solid #ecf229;
  padding-top: 1rem;
  list-style: none;
`;

const NavLink = styled.a`
  width: fit-content;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 40px;
  aspect-ratio: 1;
  margin: 0 auto;
`;

export default Nav;
