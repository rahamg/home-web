import React from "react";
import { Link } from "react-router-dom";
import CreateUser from "./User/CreateUser";
import ShowUser from "./User/ShowUser";
import { Route, Routes } from "react-router-dom";
import ShowTransaction from './Transaction/ShowTransaction';
import EditUser from "./User/EditUser";
import CreateTransaction from "./Transaction/CreateTransaction"
import User from "./User/User";
import Home from './TestHome';
export default function HomeRoutes() {
  return (
    <Routes>          
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<EditUser />} />
        <Route path="/listUser" element={<User />} />
        <Route path="/createUser" element={<CreateUser />} />

        <Route path="/Transaction/:id" element={<EditUser />} />
        <Route path="/listTransaction" element={<ShowTransaction />} />
        <Route path="/createTransaction" element={<CreateTransaction />} />

        <Route path="/Card/:id" element={<EditUser />} />
        <Route path="/listCard" element={<ShowTransaction />} />
        <Route path="/createCard" element={<CreateTransaction />} />

        <Route path="/Rent/:id" element={<EditUser />} />
        <Route path="/listRent" element={<ShowTransaction />} />
        <Route path="/createRent" element={<CreateTransaction />} />

        <Route path="/show-user" element={<ShowUser />} />
        <Route path="/listTransfer" element={<ShowTransaction />} />
        <Route path="/createTransfer" element={<CreateTransaction />} />
        <Route path="/edit-transaction" element={<ShowTransaction />} />
      </Routes>
  );
}