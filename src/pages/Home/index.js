import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Header } from "../../components";

const HomePage = () => {
  // const { user } = useAuth();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user]);

  return (
    <div className="h-screen w-full bg-[#f0f2f5]">
      <Header />
      <main className="flex items-stretch justify-between h-full">
        {/* Left col */}
        <div className="overflow-y-scroll "></div>
        {/* Mid col */}
        <div className="overflow-y-scroll min-w-[680px]"></div>
        {/* Right col */}
        <div className="overflow-y-scroll "></div>
      </main>
    </div>
  );
};

export default HomePage;
