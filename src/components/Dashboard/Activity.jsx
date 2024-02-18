//import all needed libraries
import React, { useContext, useState, useEffect } from "react";
import { Dropdown } from "flowbite-react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import User, { UserContext } from "../UserContext";
import axios from "axios";
import Swal from "sweetalert2";
import { BACKEND_URL } from "../../../utils/constant";

const Activity = ({ monthFilter, dayFilter }) => {
  const { data } = useContext(UserContext);
  const { setActivityData, activityData, formatDuration, deleteActivity } =
    useContext(UserContext);
  const { reload } = useContext(UserContext);

  const dayAndMonth = {
    month: monthFilter,
    day: dayFilter,
  };
  console.log(dayAndMonth);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.post(
        `${BACKEND_URL}/api/filterActivity`,
        dayAndMonth,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200 && response.data) {
        setActivityData(response.data);
      }
    };
    getData();
  }, [reload, monthFilter, dayFilter]);

  const deleteButton = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          timer: 2000,
          timerProgressBar: true,
          willClose: () => {
            clearInterval(100);
          },
          title: "Deleted!",
          text: "Your activity has been deleted.",
          icon: "success",
        });
        deleteActivity(id);
        setActivityData((currentActivities) =>
          currentActivities.filter((activity) => activity._id !== id)
        );
      }
    });
  };
  return (
    <div>
      {activityData?.length !== 0 ? (
        <CardWrapper>
          {activityData?.map((activity, index) => (
            <Card key={index}>
              <Icon>
                <img
                  src={`/assets/images/icon/activity-type-icon/${activity.type.toLowerCase()}-icon.svg`}
                  alt="Activity-icon"
                />
              </Icon>
              <Details>
                <HeaderDetail>
                  <Type>{activity.type}</Type>
                  <Dropdown
                    className="border-black border-2 rounded-lg "
                    label=""
                    dismissOnClick={false}
                    renderTrigger={() => (
                      <span className="cursor-pointer">
                        <img
                          src="/assets/images/icon/more-menu-icon.svg"
                          alt="More-menu"
                        />
                      </span>
                    )}
                  >
                    <Dropdown.Item className="border-b-[1px]">
                      <Link to={`/activityDetail/${activity._id}`}>Edit</Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="border-t-[1px]"
                      onClick={() => {
                        deleteButton(activity._id);
                      }}
                    >
                      Delete
                    </Dropdown.Item>
                  </Dropdown>
                </HeaderDetail>
                <BodyDetail>
                  <Time>
                    {activity.start} - {activity.end}
                  </Time>
                  <Duration>
                    {formatDuration(activity.start, activity.end)}
                  </Duration>
                </BodyDetail>
                <Name>{activity.name}</Name>
              </Details>
            </Card>
          ))}
        </CardWrapper>
      ) : (
        <></>
      )}
    </div>
  );
};

// Styled components
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 31.25rem;
  overflow-y: auto;
  background: #fff;
  border: 2px solid #000;
  border-radius: 10px;
  padding: 1rem;

  @media (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2rem;
    padding: 2rem;
  }
`;

const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  background-color: #ecf229;
  border-radius: 8px;
  padding: 8px;

  @media (min-width: 1280px) {
    flex: 1 1 330px;
    max-width: 360px;
    padding: 0.5rem 1rem;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  background-size: cover;
  border-radius: 10px;
  width: 85px;
  aspect-ratio: 1;

  & img {
    width: 50px;
    aspect-ratio: 1;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (min-width: 1280px) {
    gap: 0.5rem;
  }
`;

const Type = styled.div`
  font-weight: bold;
  font-size: 1.2em;
  color: #000;
  @media (min-width: 1280px) {
    font-size: 1.5em;
  }
`;

const Time = styled.div`
  font-size: 0.875rem;
  text-align: center;
  color: #333;
  width: 100%;
  max-width: 7.2rem;
  background: white;
  border-radius: 5px;
  padding: 0.25rem 0.3rem;
  @media (min-width: 1280px) {
    font-size: 1em;
  }
`;
const HeaderDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BodyDetail = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

const Name = styled.div`
  font-size: 1em;
  color: #000;
  @media (min-width: 1280px) {
    font-size: 1.25em;
  }
`;

const Duration = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  font-size: 0.9em;
  color: #ffffff;
  background: black;
  border-radius: 5px;
  width: 100%;
  max-width: 6.025rem;
  max-height: 29px;
  padding: 0.25rem 0.5rem;
  @media (min-width: 1280px) {
    font-size: 1em;
  }
`;

export default Activity;
