import { React, useState, useEffect, useContext } from "react";
import { Textarea } from "flowbite-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../UserContext";
import axios from "axios";
import Swal from "sweetalert2";
import { BACKEND_URL } from "../../../../utils/constant";
import EditActivityImg from "../../CropImage/EditActivityImg";
import styled from "styled-components";
import validateForm from "../../../../utils/validateForm";
import { ErrorMessage } from "../add_activity/AddActivity";
const ActivityDetail = () => {
  const navigate = useNavigate();
  const { activityId } = useParams();
  const { reload, updateActivity, setActivityData, deleteActivity } =
    useContext(UserContext);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [note, setNote] = useState("");
  const [editImage, setEditImage] = useState(""); //! กลับไปสร้าง modal กับ imageCropper เหมือนเดิม
  const [errors, setErrors] = useState({});
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `${BACKEND_URL}/api/activityDetail/${activityId}`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200 && response.data) {
        setType(response.data.type);
        setName(response.data.name);
        setEditImage(response.data.image); //รับ Image มาจาก database
        setDate(response.data.date);
        setStart(response.data.start);
        setEnd(response.data.end);
        setNote(response.data.note);
      }
    };
    getData();
  }, [reload]);

  const handleBlur = (eventOrLabel, image) => {
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

    const formErrors = validateForm(type, name, date, start, end, note);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const updateData = { name, start, date, end, note, image };
      updateActivity(activityId, updateData, ariaLabel);
    } else {
      console.error("Validation errors:", formErrors);
    }
  };

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
        }).then(() => {
          navigate("/home");
        });
        deleteActivity(id);
        setActivityData((currentActivities) =>
          currentActivities.filter((activity) => activity._id !== id)
        );
      }
    });
  };

  return (
    <div className="xl:px-40 xl:py-16">
      <div className="flex">
        <div className="flex justify-center items-center bg-black w-[65px] h-[65px] rounded-lg  mr-2">
          <img
            src={`/assets/images/icon/activity-type-icon/${type.toLowerCase()}-icon.svg`}
          />
        </div>
        <div className=" flex flex-col grow">
          <div className="">
            <span className="">{type}</span>
          </div>

          <div className="relative bg-[#ECF229] text-left h-full flex items-center rounded-lg shadow-lg  max-h-10 mb-2">
            <input
              type="text"
              className="w-full bg-transparent border-none"
              placeholder="Activity Name"
              defaultValue={name}
              onBlur={handleBlur}
              onChange={(e) => setName(e.target.value)}
              aria-label="activity name"
            />
            <div className="icon absolute top-2 right-3 ">
              <img src="/assets/images/icon/Subtract.svg" alt="" />
            </div>
          </div>
          <div className="h-6">
            {errors.name && (
              <ErrorMessage className="h-6 text-[#b31b1b]">
                {errors.name}
              </ErrorMessage>
            )}
          </div>
        </div>
      </div>

      <div className="xl:flex  xl:gap-8 xl:mb-8">
        <div className="mb-4 xl:mb-0">
          <EditActivityImg
            editImage={editImage}
            setEditImage={setEditImage}
            handleBlur={handleBlur}
          />
        </div>
        <div className="xl:grow">
          <div className=" bg-white flex border-2 h-[60px] border-black items-center rounded-lg  p-2">
            <span className="">Date :</span>

            <div className="flex relative grow">
              <DateInput
                className="flex w-full justify-between border-none relative z-10 opacity-0"
                type="date"
                onBlur={handleBlur}
                onChange={(e) => setDate(e.target.value)}
                aria-label="date"
              />
              <input
                className="absolute border-none"
                type="text"
                defaultValue={date}
              />
              <div className="icon absolute top-2  right-4 ">
                <img src="/assets/images/icon/Subtract.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="h-6">
            {errors.date && (
              <ErrorMessage className="h-6 text-[#b31b1b]">
                {errors.date}
              </ErrorMessage>
            )}
          </div>

          <div className="xl:flex xl:gap-4">
            <div className="bg-white grow flex border-2 h-[60px] border-black items-center rounded-lg  p-2">
              <span>Start :</span>

              <input
                className="bg-transparent grow h-full border-none"
                icon={null}
                type="time"
                defaultValue={start}
                onBlur={handleBlur}
                onChange={(e) => setStart(e.target.value)}
                aria-label="start timer"
              />
            </div>
            <div className="h-6">
              {errors.start && (
                <ErrorMessage className="h-6 text-[#b31b1b]">
                  {errors.start}
                </ErrorMessage>
              )}
            </div>

            <div className="xl:grow">
              <div className="bg-white grow flex border-2 h-[60px] border-black items-center rounded-lg p-2">
                <span>End :</span>

                <input
                  className="bg-transparent grow border-none"
                  type="time"
                  defaultValue={end}
                  onBlur={handleBlur}
                  onChange={(e) => setEnd(e.target.value)}
                  aria-label="end timer"
                />
              </div>
              <div className="h-6">
                {errors.end && (
                  <ErrorMessage className="h-6 text-[#b31b1b]">
                    {errors.end}
                  </ErrorMessage>
                )}
              </div>
              <div className="h-6">
                {!errors.end && errors.time && (
                  <ErrorMessage className="h-6 text-[#b31b1b]">
                    {errors.time}
                  </ErrorMessage>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex border-2 border-black  rounded-lg  p-2 mb-4">
        <span className="mt-[7px] mr-[1px]">Note :</span>
        <div className=" nput w-full relative">
          <label htmlFor="comment">
            <Textarea
              className="bg-transparent border-none"
              id="comment"
              required
              rows={3}
              cols={10}
              defaultValue={note}
              onBlur={handleBlur}
              onChange={(e) => setNote(e.target.value)}
              aria-label="activity note"
            />
            <div className="icon absolute top-1 right-2 ">
              <img src="/assets/images/icon/Subtract.svg" alt="" />
            </div>
          </label>
        </div>
      </div>

      <div className=" flex justify-between">
        <Link
          to="/home"
          className="relative w-[144px] h-[64px] bg-[#ECF229] border-2 flex items-center justify-center  border-black text-black rounded-lg shadow-lg font-bold"
        >
          <img
            src="/assets/images/icon/back-icon.svg"
            className="absolute top-[15px] left-3"
          />
          Back
        </Link>
        <button
          className="w-[144px] h-[64px] bg-[#dc3535] border-2 border-white text-white shadow-lg  rounded-lg"
          onClick={() => {
            deleteButton(activityId);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const DateInput = styled.input`
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: none;
    opacity: 0; /* Hide the default indicator */
    z-index: 2; /* Ensure it's clickable */
  }
`;

export default ActivityDetail;
