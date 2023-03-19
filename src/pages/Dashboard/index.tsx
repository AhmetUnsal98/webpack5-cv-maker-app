import React from "react";
import MainLayout from "../../layouts/MainLayout";
import "./dashboard.scss";
import img from "../../assets/dash.png";
import Card from "./components/Card/Card";
import Banner from "./components/Banner/Banner";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="dashboard">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="first-section"
        >
          <div className="info-container">
            <h1>Hurry Up! Create your cv free now...</h1>
            <div className="buttons">
              <button
                onClick={() => navigate("/build")}
                className="button-link"
              >
                Start to create now
              </button>

              <button>Subscribe</button>
            </div>
          </div>
          <div className="image-container">
            <img src={img}></img>
          </div>
        </motion.div>
        <div className="second-section">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="third-section">
          <Banner direction={"right"} />
          <Banner direction={"leftt"} />
        </div>
      </div>
    </MainLayout>
  );
};
