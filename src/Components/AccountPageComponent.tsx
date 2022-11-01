import React, { useRef } from "react";
import { useAppSelector } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { motion } from 'framer-motion';
import axios, { AxiosResponse } from "axios";
import { refObj } from "../../Types";

interface UserInfo {
  Username: string,
  Email: string,
  FirstName: string,
  LastName: string,
  Password: string,
  id: number
}

export const AccountPage = () => {
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const Firstname = useRef<refObj>(null);
  const Lastname = useRef<refObj>(null);
  const Username = useRef<refObj>(null);
  const Email = useRef<refObj>(null);
  const Password = useRef<refObj>(null);
  const ConfirmPass = useRef<refObj>(null);

  async function handleSubmit() {
    try{

      //@ts-ignore
      axios.put<UserInfo[]>('http://localhost:3000/user/update', {Firstname: Firstname.current.value, Lastname: Lastname.current.value, Username: Username.current.value, Email: Email.current.value, Password: Password.current.value, id: user.id}).then(response => dispatch(login(response.data.userInfo)));
      //@ts-ignore
      // const updatedUser = axios.get('http://localhost:3000/user/sendBack', { id: user.id });
      // console.log(updatedUser);
    } catch (err) { 
      console.log(err);
    }
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 mb-20 flex flex-col justify-center items-center">
        <h1 className="text-blue-500 text-2xl mb-4">Account Details</h1>
        <div className="mb-10">
          <h1 className="text-xl mb-4">Current Opal Account Information</h1>
          <div className="flex justify-between w-full">
            <h2 className="">Username :</h2>
            <h2 className="">{user.username}</h2>
          </div>
          <div className="flex justify-between w-full">
            <h2 className="">First Name: </h2>
            <h2 className="">{user.firstname}</h2>
          </div>
          <div className="flex justify-between w-full">
            <h2 className="">Last Name :</h2>
            <h2 className="">{user.lastname}</h2>
          </div>
          <div className="flex justify-between w-full">
            <h2 className="">Email :</h2>
            <h2 className="">{user.email}</h2>
          </div>
        </div>
        <div className="flex w-full justify-center items-center">
          <div className="flex justify-center items-center bg-white drop-shadow-xl p-5 w-full xl:w-2/3 border-2 rounded space-x-10">
            <div className="w-2/3">
              <h1 className="mb-6 text-xl">
                Please edit any the fields you would like to change.
              </h1>
            </div>
            <div className="w-full grid">
              <div className='flex flex-col p-2'>
                <label className='mb-2' htmlFor="">First Name</label>
                <input
                  ref={Firstname}
                  placeholder="Enter your first name..."
                  className="border-2 border-sky-500 py-3 px-4 rounded-lg"
                  type="text"
                />
              </div>
              <div className='flex flex-col p-2'>
                <label className='mb-2' htmlFor="">Last Name</label>
                <input
                  ref={Lastname}
                  placeholder="Enter your last name..."
                  className="border-2 border-sky-500 py-3 px-4 rounded-lg"
                  type="text"
                />
              </div>
              <div className='flex flex-col p-2'>
                <label className='mb-2' htmlFor="">Username</label>
                <input
                  ref={Username}
                  placeholder="Enter your username..."
                  className="border-2 border-sky-500 py-3 px-4 rounded-lg"
                  type="text"
                />
              </div>
              <div className='flex flex-col p-2'>
                <label className='mb-2' htmlFor="">Email</label>
                <input
                  ref={Email}
                  placeholder="Enter your email..."
                  className="border-2 border-sky-500 py-3 px-4 rounded-lg"
                  type="text"
                />
              </div>
              <div className='flex flex-col p-2'>
                <label className='mb-2' htmlFor="">Password</label>
                <input
                  ref={Password}
                  placeholder="Enter your password..."
                  className="border-2 border-sky-500 py-3 px-4 rounded-lg"
                  type="text"
                />
              </div>
              <div className='flex flex-col p-2'>
                <label className='mb-2' htmlFor="">Confirm Password</label>
                <input
                  ref={ConfirmPass}
                  placeholder="Confirm your password..."
                  className="border-2 border-sky-500 py-3 px-4 rounded-lg"
                  type="text"
                />
              </div>
              {/* @ts-ignore */}
              <motion.button className="bg-sky-500 mt-4 mb-4 w-full p-4 rounded-lg text-white" whileTap={{ scale: 0.9 }} animate={{ y: 10 }} onClick={handleSubmit}>
                Submit
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
