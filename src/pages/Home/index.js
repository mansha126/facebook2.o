import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Header } from "../../components";

const HomePage = () => {
  const { user } = useAuth();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user]);

  return <div className="h-screen w-full bg-[#f0f2f5]"><Header/>{JSON.stringify(user)}</div>;
};

export default HomePage;
