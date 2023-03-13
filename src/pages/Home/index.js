import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  const { user } = useAuth();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user]);

  return <div>HomePage{JSON.stringify(user)}</div>;
};

export default HomePage;
