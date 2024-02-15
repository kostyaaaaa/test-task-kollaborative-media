import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATHS } from '../../constants';

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate(PAGE_PATHS.CHECKOUT);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl text-center">Welcome to my test task!</h1>
      <h2 className="text-xl text-center">This is just a Home page</h2>
      <button
        onClick={handleClickButton}
        className="text-base"
        to={PAGE_PATHS.CHECKOUT}
      >
        Click here to redirect to Checkout page
      </button>
    </div>
  );
};

export default Home;
