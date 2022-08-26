import { FC, ReactNode, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../redux/actions/postAction';
import { AppDispatch } from '../../redux/store';

interface ModalProps {
  children?: ReactNode;
  handleClickModal: any;
}

const Modal: FC<ModalProps> = ({ handleClickModal }) => {
  const { auth } = useSelector((state: any) => state);
  const dispatch = useDispatch<AppDispatch>();
  const [content, setContent] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (content?.length === 0) return alert('please enter your text');
    dispatch(createPost({ content, auth }));
    console.log(content);

    setContent('');
  };
  return (
    <div
      id="defaultModal"
      className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center  flex bg-black bg-opacity-50"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Create Post
            </h3>
            <button
              onClick={handleClickModal}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6 space-y-6">
              <textarea
                name="content"
                value={content}
                required
                placeholder={`${auth.user.username} what are you thinking?`}
                className="outline-none w-full h-32"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <button
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-5"
              type="submit"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
