import { useState, useEffect } from "react";
import CloseIcon from "./CloseIcon";
import Modal from "./Modal";
import Swal from "sweetalert2";

const ProfileImg = ({ imageProfile, setImageProfile, handleBlur }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(
    imageProfile === "" ? "https://placehold.co/250x250" : imageProfile
  );

  useEffect(() => {
    if (imageProfile !== "") {
      setAvatarUrl(imageProfile);
    } else if (imageProfile === undefined) {
      setAvatarUrl("https://placehold.co/250x250");
    }
  }, [imageProfile]);
  const updateAvatar = (imageProfile) => {
    setAvatarUrl(imageProfile);
    setImageProfile(imageProfile);
    handleBlur("image", imageProfile);
  };

  const handleClickClose = () => {
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
          text: "Your profile image has been deleted.",
          icon: "success",
        });
        setAvatarUrl("https://placehold.co/250x250");
        handleBlur("image", "");
      }
    });
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="relative border-2 border-black rounded-full overflow-hidden w-[150px] h-[150px] xl:w-[250px] xl:h-[250px]">
        <button className="" onClick={() => setModalOpen(true)}>
          <img
            src={
              imageProfile === undefined
                ? "https://placehold.co/250x250"
                : avatarUrl
            }
            alt="Avatar"
          />
        </button>
        <button
          className="flex absolute bottom-6 ml-auto right-6  xl:right-12  w-fit p-[.35rem] rounded-full bg-white hover:bg-gray-700 border border-black"
          title="Change photo"
          onClick={handleClickClose}
        >
          <CloseIcon />
        </button>
      </div>

      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
          size="profile"
        />
      )}
    </div>
  );
};

export default ProfileImg;
