import { FC } from 'react';
import { useSelector } from 'react-redux';
import DownArrow from '../../icons/DownArrow';
import FacebookLogo from '../../icons/FacebookLogo';
import Feed from '../../icons/Feed';
import GroupsIcon from '../../icons/GroupIcon';
import HomeIcon from '../../icons/HomeIcon';
import MessengerIcon from '../../icons/MessengerIcon';
import NotificationIcon from '../../icons/NotificationIcon';
import PlusIcon from '../../icons/PlusIcon';
import SearchIcon from '../../icons/SearchIcon';
import WatchIcon from '../../icons/WatchIcon';

const Navbar: FC = () => {
  const { auth } = useSelector((state: any) => state);
  return (
    <div>
      <div className="h-14 flex justify-between max-w-screen-2xl shadow-fb px-4 py-2">
        <div className="flex">
          <FacebookLogo />
          <div className="h-10 w-64 ml-2 flex items-center rounded-full bg-fFill p-3">
            <SearchIcon />
            <input
              className="text-fGrey w-24 ml-2 bg-fFill focus:outline-none"
              placeholder="Search "
            />
          </div>
        </div>

        <div className="lg:flex space-x-24 items-center hidden">
          <button className="focus:outline-none">
            <HomeIcon />
          </button>
          <button className="focus:outline-none">
            <WatchIcon />
          </button>
          <button className="focus:outline-none">
            <GroupsIcon />
          </button>
          <button className="focus:outline-none">
            <Feed />
          </button>
        </div>

        <div className="lg:flex space-x-2 hidden">
          <button className="h-9 p-0.5 flex items-center rounded-full focus:outline-none">
            <img
              src={auth.user?.profile_picture}
              className="rounded-full border w-9 border-fButton"
              alt="profile"
            />
            <div className="text-fBlack font-medium ml-2 pr-3">
              {auth.user?.name}
            </div>
          </button>

          <div className="w-10 bg-fButton flex items-center justify-center relative rounded-full ">
            <div className="absolute rounded-full bg-fRed w-5 h-5 z-50 inset-x-6 -top-1 hidden">
              <div className="text-sm text-white text-center">3</div>
            </div>
            <PlusIcon />
          </div>

          <div className="w-10 bg-fButton flex items-center justify-center relative rounded-full">
            <div className="absolute rounded-full bg-fRed w-5 h-5 z-50 inset-x-6 -top-1 hidden">
              <div className="text-sm text-white text-center">3</div>
            </div>
            <MessengerIcon />
          </div>

          <div className="w-10 bg-fButton rounded-full flex justify-center items-center relative">
            <div className="absolute rounded-full bg-fRed w-5 h-5 z-50 inset-x-6 -top-1">
              <div className="text-sm text-white text-center">3</div>
            </div>

            <NotificationIcon />
          </div>

          <div className="w-10 bg-fButton flex items-center justify-center relative rounded-full">
            <div className="absolute rounded-full bg-fRed w-5 h-5 z-50 inset-x-6 -top-1 hidden">
              <div className="text-sm text-white text-center">3</div>
            </div>
            <DownArrow borderColor="#1d1f23" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
