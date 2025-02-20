import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useContext } from "react";
import ProductionTracking from "./ProductionTracking";
import Client from "../Components/Client";
import Clients from "./Clients";
import Orders from "./Orders";
import Order from "../Components/Order";
import LeftSideBar from "../Components/LeftSideBar";
import RightSideBar from "../Components/RightSideBar";
import { PageContext } from "../Context/PageContext";
import Main1 from "../Components/Main1";
import UserLogin from "./users"; // User Login Page
import Sales from "./sales";
import Designer from "./designer";
import Founder from "./founder";
import Production from "./production";
import HR from "./hr";
import Manager from "./manager";
import QualityCheck from "./quality-check";
import Packing from "./packing";
import Courier from "./courier";
import Newsupplier from "../Components/Newsupplier";


function Home() {
  const { setLogin, navigate, login } = useContext(PageContext);

  const onClickHandler = () => {
    setLogin(false);
    localStorage.removeItem("login");
    navigate("/login");
  };

  return (
    <>
      <div className="flex">
        <ToastContainer autoClose={2000} />
        <LeftSideBar />
        <div className="flex-1">
          <Routes>
            <Route path="/productionTracking" element={<ProductionTracking />} />
            <Route path="orders/:orderId" element={<Order />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="clients/:clientId" element={<Client />} />
            <Route path="*" element={<Main1 />} />
            <Route path="/user" element={<UserLogin />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/designer" element={<Designer />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/production" element={<Production />} />
            <Route path="/hr" element={<HR />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/quality-check" element={<QualityCheck />} />
            <Route path="/packing" element={<Packing />} />
            <Route path="/courier" element={<Courier />} />
            <Route path="/Newsupplier" element={<Newsupplier />} />
           
          </Routes>
        </div>
        <RightSideBar />
      </div>
    </>
  );
}

export default Home;
