import React from "react";
import { Link } from "react-router-dom";
import AddActivity from "./Dashboard/add_activity/AddActivity";
import styled from "styled-components";
const Nav = () => {
  const links = [
    {
      url: "/home",
      path: "/assets/images/icon/Home-icon.svg",
      des: "Home",
    },
    {
      url: "/stat",
      path: "/assets/images/icon/Stat-icon.svg",
      des: "Stat",
    },
    {
      path: "AddActivity",
    },
    {
      url: "/setting",
      path: "/assets/images/icon/Setting-icon.svg",
      des: "Setting",
    },
    {
      url: "/profile",
      path: "/assets/images/icon/Profile-icon.svg",
      des: "Profile",
    },
  ];
  return (
    <NavWrapper>
      <Navbar>
        {links.map((link, index) => {
          if (link.path === "AddActivity") {
            return (
              <NavList className="center-link" key={index}>
                <AddActivity />
              </NavList>
            );
          } else if (link.des === "Stat") {
            return (
              <NavList key={index} className="stat">
                <Link to={link.url}>
                  <NavLink>
                    <Icon src={link.path} alt={`${link.des}-icon`} />
                    <p className="xl:text-lg">{link.des}</p>
                  </NavLink>
                </Link>
              </NavList>
            );
          } else {
            return (
              <NavList key={index}>
                <Link to={link.url}>
                  <NavLink>
                    <Icon src={link.path} alt={`${link.des}-icon`} />
                    <p className="xl:text-lg">{link.des}</p>
                  </NavLink>
                </Link>
              </NavList>
            );
          }
        })}
      </Navbar>
    </NavWrapper>
  );
};
const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  bottom: 0;
  background: #151718;
  margin-top: 6rem;
  margin-inline: -2rem;
  padding: 0 1rem 0.5rem;
  z-index: 49;

  @media (min-width: 640px) {
    position: fixed;
    width: 100%;
  }

  @media (min-width: 1280px) {
    position: static;
    background: none;
    margin: 0;
    padding: 0;
  }
`;

const Navbar = styled.ul`
  font-family: "Orbitron", sans-serif;
  font-weight: 500;
  color: #ecf229;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  /* padding-top: 1rem; */

  @media (min-width: 1280px) {
    color: #151718;
    gap: 2rem;
    align-items: flex-start;
  }
`;

const NavList = styled.li`
  padding-top: 1rem;
  list-style: none;
  &.center-link {
    margin-top: -1.5rem;
    transform: translateY(-22px);

    @media (min-width: 1280px) {
      transform: translateY(10px);
      padding: 0;
      margin: 0;
    }
  }

  &.stat {
    margin-inline: 0.9rem;
  }
`;

const NavLink = styled.div`
  width: fit-content;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 40px;
  aspect-ratio: 1;
  margin: 0 auto;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export default Nav;
