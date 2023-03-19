import React, { useState } from "react";
import "./icommunucation.scss";
import { IoAddCircleOutline, IoTrashBinOutline } from "react-icons/io5";
import { uid } from "uid";
import { useSelector, useDispatch } from "react-redux";
import {
  addToSocialities,
  removeFromSocialities,
} from "../../../redux/resumeSlice";
import { useInputs } from "../../../hooks/useInputs";
import { motion } from "framer-motion";

const ICommuncationForm = ({ resumeData, setResumeData }: any) => {
  const [inputs, setInputs] = useInputs({ socialName: "", link: "" });

  const dispatch = useDispatch();
  const socials = useSelector(
    (state: any) => state.resume.initialSocialitiesState.socials
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="communucation"
    >
      <div className="comm-wrapper">
        <div className="comm-column">
          <span>E-Mail</span>
          <input
            type="text"
            value={resumeData.email}
            onChange={(e) => {
              setResumeData({ ...resumeData, email: e.target.value });
            }}
          ></input>
        </div>
        <div className="comm-column">
          <span>Phone</span>
          <input
            type="text"
            value={resumeData.phone}
            onChange={(e) => {
              setResumeData({ ...resumeData, phone: e.target.value });
            }}
          ></input>
        </div>
      </div>
      <div className="comm-wrapper">
        <div className="comm-column">
          <span>Socail Media</span>
          <input
            type="text"
            name="socialName"
            value={inputs.socialName}
            onChange={setInputs}
          ></input>
        </div>
        <div className="comm-column">
          <span>Link</span>
          <input
            type="text"
            name="link"
            value={inputs.link}
            onChange={setInputs}
          ></input>
        </div>
        <div className="comm-column-button">
          <button
            onClick={() => {
              dispatch(
                addToSocialities({
                  id: uid(),
                  socialName: inputs.socialName,
                  link: inputs.link,
                })
              );
            }}
          >
            Add
          </button>
        </div>
      </div>
      {socials.map((item: any) => (
        <div className="social-media-set">
          <p>Social Media : {item.socialName}</p>
          <p>Link : {item.link}</p>
          <IoTrashBinOutline
            onClick={() => {
              dispatch(removeFromSocialities(item.id));
            }}
            style={{ cursor: "pointer" }}
            color="gray"
            size={30}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default ICommuncationForm;
