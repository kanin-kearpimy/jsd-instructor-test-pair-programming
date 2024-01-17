//import all needed libraries
import React, { useState } from "react";
import styled from "styled-components";
import bikeIcon from '../assets/Bicycle-icon.png'; 
import PropTypes from 'prop-types';

// Styled components
const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #ECF229;
  padding: 10px;
  border-radius: 8px;
  position: relative;
  width: fit-content; 
`;

const Icon = styled.div`
  background-image: url(${bikeIcon});
  background-size: cover;
  width: 40px; 
  height: 40px; 
  margin-right: 10px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Type = styled.div`
  font-weight: bold;
  font-size: 1.2em; 
  color: #000; 
`;

const Time = styled.div`
  font-size: 0.9em; 
  color: #333; 
`;

const Name = styled.div`
  font-size: 1em; 
  color: #000; 
`;

const Duration = styled.div`
  font-size: 0.9em; 
  color: #333; 
  margin-left: auto; 
  padding-right: 10px; 
`;

const MenuDots = styled.div`
  cursor: pointer;
  font-size: 24px; 
  color: #000; 
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 101;
`;

const MenuOptions = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  top: 100%; // Adjust as needed
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 100;
`;

const MenuItem = styled.div`
  padding: 8px;
  &:hover {
    background-color: #f0f0f0;
  }
`;


// Activity component
const Activity = ({
  type = "Activity Type",
  time = "12:00 - 12:30 PM",
  name = "Activity Name",
  duration = "120",
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Card>
      <Icon />
      <Details>
        <Type>{type}</Type>
        <Time>{time}</Time>
        <Name>{name}</Name>
      </Details>
      <Duration>{duration} min.</Duration>
      <MenuDots onClick={toggleMenu}>...</MenuDots>
      <MenuOptions show={showMenu}>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Delete</MenuItem>
      </MenuOptions>
    </Card>
  );
};

Activity.propTypes = {
  type: PropTypes.string,
  time: PropTypes.string,
  name: PropTypes.string,
  duration: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default Activity;
