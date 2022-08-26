import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../shared/LoginInput/LoginInput';
import { FormSubmit, InputChange, RootStore } from '../utils/Types';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { login } from '../redux/actions/authAction';
import { AppDispatch } from '../redux/store';

const Login: FC = () => {
  const initialState = { email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const [showPassword, setShowPassword] = useState(false);
  const { auth } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token) navigate('/');
  }, [auth.token, navigate]);

  const handleChangeInput = (e: InputChange) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    dispatch(login(userData));
  };
  return (
    <div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
            Get started today
          </h1>

          <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            onSubmit={handleSubmit}
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          >
            <p className="text-lg font-medium">Sign in to your account</p>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>

              <div className="relative mt-1">
                <LoginInput
                  type="email"
                  name="email"
                  onChange={handleChangeInput}
                  value={email}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div className="mb-4 relative">
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                Password
              </label>
              <LoginInput
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={password}
                className="mt-1 rounded-md dark:text-white"
                onChange={handleChangeInput}
              />
              <small
                className="dark:text-white absolute top-2/4 right-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon className="h-6 font-extralight dark: fill-blue-500" />
                ) : (
                  <EyeSlashIcon className="h-6 font-extralight dark: fill-blue-500" />
                )}
              </small>
            </div>

            <button
              type="submit"
              className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
            >
              Sign in
            </button>

            <p className="text-sm text-center text-gray-500">
              email: joeadam@gmail.com && pass: testjoeadam
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
