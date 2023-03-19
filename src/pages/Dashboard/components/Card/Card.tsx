import React from "react";
import "./card.scss";
import img from "../../../../assets/dash.png";
import { motion } from "framer-motion";
const Card = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="card"
    >
      <div className="card-img-container">
        <img src={img}></img>
      </div>
      <div className="card-info-container">
        <span>Card Title</span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, vero
          minus.
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
