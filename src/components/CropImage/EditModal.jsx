import CloseIcon from "./CloseIcon";
import EditImageCropper from "./EditImageCropper";

const EditModal = ({ updateAvatar, closeModal, size }) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="crop-image-dialog"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-all backdrop-blur-sm"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center px-2 py-12 text-center ">
          <div className="relative w-[95%] sm:w-[80%] min-h-[60vh] rounded-2xl bg-white text-black text-left shadow-xl transition-all">
            <div className="px-5 py-4">
              <button
                type="button"
                className="rounded-md p-1 inline-flex items-center justify-center bg-[#151718] text-[#ecf229] hover:bg-gray-700 focus:outline-none absolute top-2 right-2"
                onClick={closeModal}
              >
                <span className="sr-only">Close menu</span>
                <CloseIcon />
              </button>
              <EditImageCropper
                updateAvatar={updateAvatar}
                closeModal={closeModal}
                size={size}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditModal;
