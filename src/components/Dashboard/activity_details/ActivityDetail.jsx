import { React, useState, useEffect, useContext } from "react";
import { Datepicker, Modal, Textarea, Alert } from "flowbite-react";
import ActivityImg from "../../CropImage/ActivityImg";
import { HiInformationCircle } from "react-icons/hi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../UserContext";
import axios from "axios";
import Swal from "sweetalert2";
const ActivityDetail = () => {
  const navigate = useNavigate();
  const { activityId } = useParams();
  const { reload, updateActivity, setActivityData, deleteActivity } =
    useContext(UserContext);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [note, setNote] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [showAlert, setshowAlert] = useState("hidden");
  const [imgSrc, setImgSrc] = useState(""); //! Change to recieve from server

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://127.0.0.1:3000/api/activityDetail/${activityId}`,
        {
          withCredentials: true,
        }
      );

      console.log(response.data);
      if (response.status === 200 && response.data) {
        setType(response.data.type);
        setName(response.data.name);
        setImage(response.data.image);
        setDate(response.data.date);
        setStart(response.data.start);
        setEnd(response.data.end);
        setNote(response.data.note);
      }
    };
    getData();
  }, [reload]);

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

    const updateData = { name, start, end, note };
    updateActivity(activityId, updateData);

    Swal.fire({
      position: "center",
      icon: "success",
      title: `Your ${ariaLabel} has been updated`,
      showConfirmButton: false,
      timer: 1500,
    });

    console.log("บันทึกข้อมูลสำเร็จ");
  };

  const handleDatePickerChange = (date) => {
    const year = date.getFullYear();
    const currentYear = new Date().getFullYear();
    // if currentYear < year; จะ setOpenModal(false); แต่ถ้าไม่ค่อย set ค่าต่างๆ
    if (currentYear > year) {
      setshowAlert("");
      setOpenModal(false);
    } else {
      // Set other values if the condition is not met
      setshowAlert("hidden");
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months start from 0, so add 1

      const formattedDate = `${year}-${month}-${day}`;
      handleBlur("activity date");
      setDate(formattedDate);
    }

    //console.log(`วัน: ${day}, เดือน: ${month}, ปี: ${year}`);
    setOpenModal(false);
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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleStartChange = (event) => {
    setStart(event.target.value);
  };

  const handleEndChange = (event) => {
    setEnd(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <div>
      <div className="flex mb-6">
        <div className="flex justify-center items-center bg-black w-[65px] h-[65px] rounded-lg  mr-2">
          <img
            src={`/assets/images/icon/activity-type-icon/${type.toLowerCase()}-icon.svg`}
          />
        </div>
        <div className=" flex flex-col  grow">
          <div className="">
            <span className="">{type}</span>
          </div>

          <div className="relative bg-[#ECF229] text-left h-full flex items-center rounded-lg shadow-lg">
            <input
              type="text"
              className="w-full bg-transparent border-none"
              placeholder="Activity Name"
              defaultValue={name}
              onBlur={handleBlur}
              onChange={handleNameChange}
              aria-label="activity name"
            />
            <div className="icon absolute top-2 right-3 ">
              <img src="/assets/images/icon/Subtract.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <ActivityImg setImgSrc={image} />
      <Alert
        className={`py-2 my-2 ${showAlert}`}
        color="failure"
        icon={HiInformationCircle}
      >
        <span className="">
          Pick a year equal to or greater than the current !
        </span>
      </Alert>
      <Modal show={openModal} onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body className="text-center">
          <Datepicker
            inline
            showClearButton={null}
            showTodayButton={null}
            onSelectedDateChanged={handleDatePickerChange}
            aria-label="activity date"
          />
        </Modal.Body>
      </Modal>
      <div className="bg-white flex border-2 h-[60px] border-black items-center rounded-lg mt-4 p-2 mb-4">
        <span className="">Date :</span>

        <button
          className="grow  justify-center  h-full text-left ml-2"
          onClick={() => setOpenModal(true)}
        >
          {date}
        </button>

        <button onClick={() => setOpenModal(true)} className="icon h-full p-2">
          <img src="/assets/images/icon/Subtract.svg" alt="" />
        </button>
        {/* <input className="bg-transparent  border-none" type="date" /> */}
      </div>

      <div className="bg-white flex border-2 h-[60px] border-black items-center rounded-lg mt-4 p-2 mb-4">
        <span>Start :</span>

        <input
          className="bg-transparent grow h-full border-none"
          icon={null}
          type="time"
          defaultValue={start}
          onBlur={handleBlur}
          onChange={handleStartChange}
          aria-label="start timer"
        />
      </div>

      <div className="bg-white flex border-2 h-[60px] border-black items-center rounded-lg mt-4 p-2 mb-4">
        <span>End :</span>

        <input
          className="bg-transparent grow border-none"
          type="time"
          defaultValue={end}
          onBlur={handleBlur}
          onChange={handleEndChange}
          aria-label="end timer"
        />
      </div>

      <div className="bg-white flex border-2 border-black  rounded-lg mt-4 p-2 mb-4">
        <span className="mt-[7px] mr-[1px]">Note :</span>
        <div className=" max-w-md grow input relative">
          <label htmlFor="comment">
            <Textarea
              className="bg-transparent  border-none"
              id="comment"
              required
              rows={3}
              defaultValue={note}
              onBlur={handleBlur}
              onChange={handleNoteChange}
              aria-label="activity note"
            />
            <div className="icon absolute top-1 right-2 ">
              <img src="/assets/images/icon/Subtract.svg" alt="" />
            </div>
          </label>
        </div>
      </div>

      <div className="mt-4 flex justify-between">
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

export default ActivityDetail;
