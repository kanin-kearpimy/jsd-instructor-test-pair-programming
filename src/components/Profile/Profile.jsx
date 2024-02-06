import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../Nav";
import TitleComponent from "../TitleComponent";
import { SectionWrapper } from "../../Style/Wrapper";
import { ButtonWrapper } from "../../Style/ButtonStyles";
import ProfileImg from "./ProfileImg";

const activitySummary = {
  bike: {
    time: 60,
    activity: 60,
  },
  swim: {
    time: 30,
    activity: 10,
  },
  hike: {
    time: 30,
    activity: 10,
  },
  run: {
    time: 30,
    activity: 10,
  },
  walk: {
    time: 30,
    activity: 10,
  },
};

const Profile = () => {
  const [weight, setWeight] = useState(56);
  const [height, setHeight] = useState(168);
  const [age, setAge] = useState(27);
  return (
    <SectionWrapper>
      <TitleComponent title="Profile" />
      {/* Profile Image section */}
      <ProfileImg />
      <p className="text-2xl font-bold text-center mt-4">Jessica Anonymous</p>
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

      <ButtonWrapper>
        <div className="flex gap-4">
          <img
            className="w-10"
            src="/assets/images/icon/bmi-icon.svg"
            alt="Bmi-icon"
          />
          <div>
            <p className="text-lg">Less 1 kg in last day</p>
            <div className="flex items-center">
              <span>
                <img
                  src="/assets/images/icon/small-arrow-icon.svg"
                  alt="small-arrow-icon"
                />
              </span>
              <p className="text-xs">1.5%</p>
            </div>
          </div>
        </div>
      </ButtonWrapper>

      <ActivitySection className="activity-summery ">
        <h3 className="text-3xl font-bold">Activity Summary</h3>
        {Object.keys(activitySummary).map((activitys, index) => (
          <ActivityCard key={index}>
            <div className="flex justify-between items-center w-full">
              <img
                src={`/assets/images/icon/activitys-icon/${activitys}-icon-dark.svg`}
                alt=""
                className="max-w-16 aspect-square "
              />
              <h3 className="text-2xl">
                {activitys.charAt(0).toLocaleUpperCase() + activitys.slice(1)}
              </h3>
            </div>
            <div>
              <p>Time: {activitySummary[activitys].time} Hr.</p>
              <p>Activity: {activitySummary[activitys].activity} Act.</p>
            </div>
          </ActivityCard>
        ))}
      </ActivitySection>
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
  margin-top: 0.5rem;
`;
const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;
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

const ActivitySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 180px;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ActivityCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  max-width: 179px;
  background: white;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 1rem;
`;
export default Profile;
