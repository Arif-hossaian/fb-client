import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Feeling from '../../icons/Feeling';
import ImageIcon from '../../icons/ImageIcon';
import { AppDispatch } from '../../redux/store';
import Modal from '../../shared/Modal/Modal';

const STATUS = 'STATUS';

const CreatePost = () => {
  const { auth } = useSelector((state: any) => state);
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(false);
  const handleClickModal = () => setIsOpen(!isOpen);
  return (
    <div>
      <div className="w-full shadow-fb rounded bg-white p-4">
        <div className="flex space-x-2">
          <img
            src="https://picsum.photos/id/1015/500"
            alt="img"
            className="h-10 w-10 rounded-full"
          />
          <button
            className="bg-fFill px-4 py-3 w-full focus:outline-none rounded-full text-left text-gray-500"
            onClick={handleClickModal}
          >
            {auth.user?.username}, what are you thinking?
          </button>
          {isOpen && <Modal handleClickModal={handleClickModal} />}
        </div>
        <div className="border border-fGray border-opacity-10 mt-4" />
        <div className="flex justify-between">
          <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
            <ImageIcon />
            <span className="text-fGrey text-opacity-80 font-medium ml-2">
              Photo/Video
            </span>
          </button>
          {/* <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
            <TagIcon />
            <span className="text-fGrey text-opacity-80 font-medium ml-2">
              Tag Friends
            </span>
          </button> */}
          <button className="flex justify-center items-center w-1/3 focus:outline-none mt-4 py-2">
            <Feeling />
            <span className="text-fGrey text-opacity-80 font-medium ml-2">
              Feelling/Activity
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
