'use client';

import 'react-toastify/dist/ReactToastify.css';

import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { bodyDesign, errorToast } from './style.css';


type Props = {
  children: React.ReactNode;
};

export const ToastProvider: FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        className={errorToast}
        closeOnClick={true}
        pauseOnHover={false}
        hideProgressBar={true}
        autoClose={3000}
        bodyClassName={bodyDesign}
      />
    </>
  );
};
