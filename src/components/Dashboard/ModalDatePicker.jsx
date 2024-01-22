import React from "react";
import { Modal, Datepicker } from "flowbite-react";
const ModalDatePicker = ({
  openModal,
  setOpenModal,
  handleDatePickerChange,
}) => {
  return (
    <Modal
      className="text-center"
      show={openModal}
      onClose={() => setOpenModal(false)}
    >
      <Modal.Header className="bg-[#ECF229] border-2 border-black border-b-1 " />

      <Modal.Body className=" border-l-2 border-r-2 border-b-2  border-black  ">
        <Datepicker
          inline
          showClearButton={null}
          showTodayButton={null}
          onSelectedDateChanged={handleDatePickerChange}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalDatePicker;
