import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../Nav";
import TitleComponent from "../TitleComponent";
import { SectionWrapper } from "../../Style/Wrapper";

const Profile = () => {
  const [weight, setWeight] = useState(56);
  const [height, setHeight] = useState(168);
  const [age, setAge] = useState(27);
  return (
    <SectionWrapper>
      <TitleComponent title="Profile" />
      {/* Profile Image section */}
      <p>Jessica Anonymous</p>
      <BmiWrapper>
        <Blue></Blue>
        <Green></Green>
        <Yellow></Yellow>
        <Orange></Orange>
        <Red></Red>
      </BmiWrapper>
      <DetailWrapper>
        <SubDetailWrapper>
          <p>
            <DetailInput
              className="max-w-[30px] bg-transparent border-0 p-0"
              value={weight}
              type="number"
              onChange={(e) => setWeight(e.target.value)}
            />
            kg
          </p>
          <p>Weight</p>
        </SubDetailWrapper>
        <SubDetailWrapper>
          <p>
            <DetailInput
              className="max-w-[30px] bg-transparent border-0 p-0"
              value={height}
              type="number"
              onChange={(e) => setHeight(e.target.value)}
            />{" "}
            cm
          </p>
          <p>Height</p>
        </SubDetailWrapper>
        <SubDetailWrapper>
          <p>{age}</p>
          <p>Age</p>
        </SubDetailWrapper>
      </DetailWrapper>
      <Nav />
    </SectionWrapper>
  );
};
const BmiWrapper = styled.ul`
  display: flex;
  width: 100%;
  /* background: black; */
  border-radius: 10px;
  height: 0.5rem;
  overflow: hidden;
`;
const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SubDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`;

const DetailInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const BmiBar = styled.li`
  flex: 1;
`;

const Blue = styled(BmiBar)`
  background-color: #0085ff;
  opacity: 0.2;
`;
const Green = styled(BmiBar)`
  background-color: #00ff0a;
`;
const Yellow = styled(BmiBar)`
  background-color: #ebff00;
  opacity: 0.2;
`;
const Orange = styled(BmiBar)`
  background-color: #ff8a00;
  opacity: 0.2;
`;
const Red = styled(BmiBar)`
  background-color: #ff0000;
  opacity: 0.2;
`;
export default Profile;
