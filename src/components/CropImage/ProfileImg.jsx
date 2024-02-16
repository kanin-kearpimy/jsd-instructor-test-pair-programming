import { useRef, useState, useEffect, useContext } from "react";
import CloseIcon from "./CloseIcon";
import Modal from "./Modal";

const ProfileImg = ({ imageProfile, setImageProfile, handleBlur }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  // console.log(imageProfile);

  useEffect(() => {
    if (imageProfile !== "") {
      setAvatarUrl(imageProfile);
    } else {
      setAvatarUrl("https://placehold.co/150x150");
    }
  }, [imageProfile]);

  const updateAvatar = (img) => {
    setAvatarUrl(img);
    setImageProfile(img);
    handleBlur("image", img);
  };

  const handleClickClose = () => {
    setAvatarUrl("https://placehold.co/150x150");
    handleBlur("image", "");
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="relative border-2 border-black rounded-full overflow-hidden w-[150px] h-[150px]">
        <button className="" onClick={() => setModalOpen(true)}>
          <img src={avatarUrl} alt="Avatar" />
        </button>
        <button
          className="flex absolute bottom-4 ml-auto  right-6  w-fit p-[.35rem] rounded-full bg-white hover:bg-gray-700 border border-black"
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
