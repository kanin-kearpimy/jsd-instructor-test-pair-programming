import React, { useContext, useState } from "react";
import { Modal, FloatingLabel } from "flowbite-react";
import styled from "styled-components";
import { UserContext } from "../../UserContext";
import ActivityImg from "../../CropImage/ActivityImg";

const AddActivity = () => {
  const { createActivity } = useContext(UserContext);
  const [type, setType] = useState("");
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [note, setNote] = useState();
  const [imgSrc, setImgSrc] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleType = (e) => {
    setType(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleStart = (e) => {
    setStart(e.target.value);
  };
  const handleEnd = (e) => {
    setEnd(e.target.value);
  };
  const handleNote = (e) => {
    setNote(e.target.value);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="-mt-6">
      <button onClick={() => setOpenModal(true)}>
        <img src="/assets/images/icon/Add-icon.svg" alt="Add-icon" />
      </button>
      <Modal
        dismissible
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
      >
        <Modal.Header />
        <Modal.Body className="overflow-hidden">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
              Add Activity
            </h3>
            <InputWrapper>
              <StyledSelect
                name="type"
                id="type"
                value={type}
                onChange={handleType}
              >
                <option value=""></option>
                <option value="Run">Run</option>
                <option value="Walk">Walk</option>
                <option value="Bike">Bike</option>
                <option value="Swim">Swim</option>
                <option value="Hike">Hike</option>
              </StyledSelect>
              <StyledLabel>Type:</StyledLabel>
            </InputWrapper>

            <InputWrapper>
              <FloatingLabel
                className="text-[1.25rem] text-black border-black "
                variant="outlined"
                label="Name:"
                onChange={handleName}
                required
              />
            </InputWrapper>

            <InputWrapper>
              <DateLabel>Date:</DateLabel>
              <DateInput type="date" onChange={handleDate} />
            </InputWrapper>

            <div className="flex justify-between">
              <InputWrapper>
                <TimeLabel>Start:</TimeLabel>
                <TimeInput
                  className="text-base w-[10.15625rem] rounded-[10px] border-black pt-4 pb-2.5"
                  type="time"
                  name=""
                  id=""
                  onChange={handleStart}
                />
              </InputWrapper>
              <InputWrapper>
                <TimeLabel>End:</TimeLabel>
                <TimeInput
                  className="text-base w-[10.15625rem] rounded-[10px] border-black pt-4 pb-2.5"
                  type="time"
                  name=""
                  id=""
                  onChange={handleEnd}
                />
              </InputWrapper>
            </div>

            <InputWrapper>
              <FloatingLabel
                className="text-[1.25rem] text-black border-black "
                variant="outlined"
                label="Note:"
                onChange={handleNote}
              />
            </InputWrapper>
            <ActivityImg imgSrc={imgSrc} setImgSrc={setImgSrc} />
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-between border ">
          <button
            className="border-[1px] rounded-[10px] px-6 p-4 "
            color="gray"
            onClick={() => setOpenModal(false)}
          >
            Cancle
          </button>
          <button
            className="border-[1px] rounded-[10px] bg-[#ECF229] text-black border-[black] px-6 p-4"
            onClick={() => {
              setOpenModal(false);
              createActivity(type, name, date, start, end, note, imgSrc);
            }}
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const StyledLabel = styled.label`
  position: absolute;
  top: 0.825rem;
  left: 1rem;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 1rem 1rem 0.635rem;
  font-size: inherit;
  text-align: center;
  border-color: black;
  border-radius: 10px;

  &::after {
    content: "Type:";
    position: absolute;
  }
`;

const TimeLabel = styled.label`
  font-size: 1.25rem;
  position: absolute;
  left: 1rem;
  top: 0.825rem;
`;
const TimeInput = styled.input`
  text-align: end;
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    background: none;
    width: 100%;
  }
`;

const DateLabel = styled.label`
  font-size: 1.25rem;
  position: absolute;
  left: 1rem;
  top: 0.825rem;
`;

const DateInput = styled.input`
  width: 100%;
  font-size: 1.25rem;
  text-align: end;
  border-color: black;
  border-radius: 10px;
  padding: 1rem 1rem 0.635rem;

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    width: 100%;
    background: none;
    -webkit-appearance: none;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  font-size: 1.25rem;
  max-height: 3.5rem;
`;

export default AddActivity;
