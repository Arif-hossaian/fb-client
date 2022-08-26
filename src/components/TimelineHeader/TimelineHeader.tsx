import { FC } from 'react';
import { useSelector } from 'react-redux';

const TimelineHeader: FC = () => {
  const { auth } = useSelector((state: any) => state);
  return (
    <div className="mx-auto max-w-screen-lg shadow">
      <div className="relative h-96 rounded-b flex justify-center">
        <img
          src="https://picsum.photos/id/1018/3000"
          className="object-cover w-full h-full rounded-b"
          alt="cover"
        />
        <div className="absolute -bottom-6">
          <img
            src={auth.user?.profile_picture}
            className="object-cover border-4 border-white w-40 h-40 rounded-full"
            alt="cover"
          />
        </div>
      </div>
      <div className="text-center mt-6 text-3xl font-bold text-fBlack">
        {auth.user?.name}
      </div>
      <div className="border border-fGrey mt-6 border-opacity-10" />
    </div>
  );
};

export default TimelineHeader;
