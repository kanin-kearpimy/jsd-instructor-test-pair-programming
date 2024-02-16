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
  const { data, updateUser, setReload, reload } = useContext(UserContext);
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();
  const [imageProfile, setImageProfile] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");
  const [bmiCategory, setBmiCategory] = useState("");

  useEffect(() => {
    const bmi = calculateBMI(data?.weight, data?.height);
    if (bmi && data?.gender) {
      let message = "";
      let category = "";

      if (data.gender === "male") {
        if (bmi < 20) {
          message = "Underweight";
          category = "blue";
        } else if (bmi >= 20 && bmi < 22) {
          message = "Normal weight";
          category = "green";
        } else if (bmi >= 22 && bmi < 24) {
          message = "Normal weight";
          category = "yellow";
        } else if (bmi >= 24 && bmi < 28) {
          message = "Overweight";
          category = "orange";
        } else if (bmi >= 28 && bmi < 30) {
          message = "Overweight";
          category = "orange";
        } else {
          message = "Obesity";
          category = "red";
        }
      } else if (data.gender === "female") {
        if (bmi < 18.5) {
          message = "Underweight";
          category = "blue";
        } else if (bmi >= 18.5 && bmi < 21) {
          message = "Normal weight";
          category = "green";
        } else if (bmi >= 21 && bmi < 24) {
          message = "Normal weight";
          category = "yellow";
        } else if (bmi >= 24 && bmi < 27) {
          message = "Overweight";
          category = "orange";
        } else if (bmi >= 27 && bmi < 29) {
          message = "Overweight";
          category = "orange";
        } else {
          message = "Obesity";
          category = "red";
        }
      }

      setBmiMessage(message);
      setBmiCategory(category);
    } else {
      setBmiMessage(
        "BMI calculated. Please provide more specific information."
      );
      setBmiCategory("");
    }
  }, [data]);

  const categoryColors = {
    blue: "#0085ff",
    green: "#00ff0a",
    yellow: "#ebff00",
    orange: "#ff8a00",
    red: "#ff0000",
  };

  const handleBlur = (eventOrLabel) => {
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

    const updateData = { weight, height, age };
    updateUser(updateData);
    setReload(!reload);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Your ${ariaLabel} has been updated`,
      showConfirmButton: false,
      timer: 1500,
    });

    console.log("บันทึกข้อมูลสำเร็จ");
  };
  return (
    <SectionWrapper>
      <TitleComponent title="Profile" />
      {/* Profile Image section */}
      <ProfileImg />
      <p className="text-2xl font-bold text-center mt-4">Jessica Anonymous</p>
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
              defaultValue={data?.weight}
              type="number"
              onChange={(e) => setWeight(e.target.value)}
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
