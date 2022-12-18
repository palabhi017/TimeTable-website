import { Flex } from "@chakra-ui/layout";
import React from "react";
import { useState } from "react";
import { useEffect,useContext } from "react";
import { AuthContext } from "./Authcontext";
import MainDashCompo from "./MainDashCompo";
import SideCard from "./SideCard";

const Dashboard = () => {

  return (
    <>
      <div
        style={{
          width: "100%",
          margin: "auto",
          marginTop: "10px",
          // border: "1px solid red",
          display: "flex",
          gap: "50px",
          padding:"0 2%"
        }}
      >
        <SideCard />
        <MainDashCompo />
      </div>
    </>
  );
};

export default Dashboard;