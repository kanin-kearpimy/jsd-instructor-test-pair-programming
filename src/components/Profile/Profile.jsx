import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Nav from "../Nav";
import TitleComponent from "../TitleComponent";
import { SectionWrapper } from "../../Style/Wrapper";
import { ButtonWrapper } from "../../Style/ButtonStyles";
import ProfileImg from "../CropImage/ProfileImg";
import { UserContext } from "../UserContext";
import Swal from "sweetalert2";
import calculateBMI from "../../../utils/bmiCalculate";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constant";
import { sortOrderType } from "../../../utils/sortOrderType";

const Profile = () => {
  const { data, updateUser, setReload, reload } = useContext(UserContext);
  const [weight, setWeight] = useState(data?.weight);
  const [height, setHeight] = useState(data?.height);
  const [gender, setGender] = useState(data?.gender);
  const [bmi, setBmi] = useState("");
  const [age, setAge] = useState(data?.age);
  const [imageProfile, setImageProfile] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");
  const [bmiCategory, setBmiCategory] = useState("");
  const [sumActivities, setActivities] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/dashboard`, {
        withCredentials: true,
      });

      if (response.status === 200 && response.data) {
        setImageProfile(response.data.profileimg);
        setWeight(response.data.weight);
        setHeight(response.data.height);
        setGender(response.data.gender);
      }
    };
    getData();

    const getSumActivity = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/sumactivity`, {
        withCredentials: true,
      });

      if (response.status === 200 && response.data) {
        setActivities(response.data);
      }
    };
    getSumActivity();
  }, [reload]);

  useEffect(() => {
    const { bmi, message, category } = calculateBMI(weight, height, gender);
    setBmi(bmi);
    setBmiMessage(message);
    setBmiCategory(category);
  }, [weight, height, gender]);

  const categoryColors = {
    blue: "#0085ff",
    green: "#00ff0a",
    yellow: "#ebff00",
    orange: "#ff8a00",
    red: "#ff0000",
  };

  const handleBlur = (eventOrLabel, profileimg) => {
    let ariaLabel;
    if (typeof eventOrLabel === "string") {
      // Directly use the label if a string is provided
      ariaLabel = eventOrLabel;
    } else if (eventOrLabel && eventOrLabel.target) {
      // Extract aria-label from the event target if an event is provided
      ariaLabel = eventOrLabel.target.getAttribute("aria-label");
    } else {
      // Default label or error handling
      ariaLabel = "item";
    }

    const updateData = { weight, height, age, profileimg };
    updateUser(updateData);

    Swal.fire({
      position: "center",
      icon: "success",
      title: `Your ${ariaLabel} has been updated`,
      showConfirmButton: false,
      timer: 1500,
    });

    console.log("บันทึกข้อมูลสำเร็จ");
  };

  sortOrderType(sumActivities);
  return (
    <SectionWrapper>
      <TitleComponent title="Profile" />
      {/* Profile Image section */}
      <ProfileImg
        imageProfile={imageProfile}
        setImageProfile={setImageProfile}
        handleBlur={handleBlur}
      />
      <p className="text-2xl font-bold text-center mt-4">
        {data?.firstName} {data?.lastName}
      </p>
      <BmiWrapper>
        {Object.keys(categoryColors).map((key) => (
          <BmiBar
            key={key}
            color={categoryColors[key]}
            aria-selected={bmiCategory === key ? "true" : "false"} //If BMI are in green and check with key if equal then return true
          />
        ))}
      </BmiWrapper>
      <DetailWrapper>
        <SubDetailWrapper>
          <p>
            <DetailInput
              className="max-w-[30px] bg-transparent border-0 p-0"
              defaultValue={weight}
              type="number"
              onChange={(e) => setWeight(String(Number(e.target.value)))}
              onBlur={handleBlur}
              aria-label="weight"
            />
            kg
          </p>
          <p>Weight</p>
        </SubDetailWrapper>
        <SubDetailWrapper>
          <p>
            <DetailInput
              className="max-w-[30px] bg-transparent border-0 p-0"
              defaultValue={data?.height}
              type="number"
              onChange={(e) => setHeight(e.target.value)}
              onBlur={handleBlur}
              aria-label="height"
            />{" "}
            cm
          </p>
          <p>Height</p>
        </SubDetailWrapper>
        <SubDetailWrapper>
          <DetailInput
            className="max-w-[30px] bg-transparent border-0 p-0 text-center"
            defaultValue={data?.age}
            type="number"
            onChange={(e) => setAge(e.target.value)}
            onBlur={handleBlur}
            aria-label="age"
          />
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
            <p className="text-lg">{bmiMessage}</p>
            <div className="flex items-center">
              <p className="text-xs">You BMI is {bmi}</p>
            </div>
          </div>
        </div>
      </ButtonWrapper>

      <ActivitySection className="activity-summery ">
        <h3 className="text-3xl font-bold">Activity Summary</h3>

        {sumActivities?.map((activitys, index) => (
          <ActivityCard key={index}>
            <div className="flex justify-between items-center w-full">
              <img
                src={`/assets/images/icon/activitys-icon/${activitys.type.toLowerCase()}-icon-dark.svg`}
                alt=""
                className="max-w-16 aspect-square "
              />
              <h3 className="text-2xl">{activitys.type}</h3>
            </div>
            <div>
              <p>Duration: {(activitys.totalDuration / 60).toFixed(1)} Hr.</p>
              <p>Frequency: {activitys.activities} Acts.</p>
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
  background-color: ${(props) => props.color};
  opacity: ${(props) =>
    props["aria-selected"] === "true"
      ? 1
      : 0.2}; //if show return true then set opacity to 1
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
