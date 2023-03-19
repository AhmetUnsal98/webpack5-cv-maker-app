import React, { useState } from "react";
import "./iexperience.scss";
import { IoTrashBinOutline } from "react-icons/io5";
import { uid } from "uid";
import { useSelector, useDispatch } from "react-redux";
import {
  addToExperiences,
  removeFromExperiences,
} from "../../../redux/resumeSlice";
import { useInputs } from "../../../hooks/useInputs";
import { motion } from "framer-motion";
const IExperienceForm = () => {
  const [inputs, setInputs] = useInputs({
    companyName: "",
    jobTitle: "",
    startingDate: "",
    finishingDate: "",
    desc: "",
  });

  const dispatch = useDispatch();
  const experiences = useSelector(
    (state: any) => state.resume.initialExperiencesState.experiences
  );
  function clearInputs() {
    setInputs({});
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="experience"
    >
      <div className="experience-upper">
        <div className="experience-column">
          <span>Company Name</span>
          <input
            type="text"
            name="companyName"
            placeholder=""
            value={inputs.companyName}
            onChange={setInputs}
          ></input>
        </div>
        <div className="experience-column">
          <span>Job Title</span>
          <input
            type="text"
            name="jobTitle"
            placeholder=""
            value={inputs.jobTitle}
            onChange={setInputs}
          ></input>
        </div>
      </div>

      <div className="experience-upper">
        <div className="experience-column">
          <span>Starting Date</span>

          <input
            type="date"
            name="startingDate"
            placeholder=""
            value={inputs.startingDate}
            onChange={setInputs}
          ></input>
        </div>

        <div className="experience-column">
          <span>Finish Date</span>

          <input
            type="date"
            name="finishingDate"
            placeholder=""
            value={inputs.finishingDate}
            onChange={setInputs}
          ></input>
        </div>
      </div>
      <div className="description">
        <span>Job Description</span>
        <input
          type="text"
          className="desc"
          name="desc"
          placeholder=""
          value={inputs.desc}
          onChange={setInputs}
        ></input>
        <button
          onClick={() => {
            dispatch(
              addToExperiences({
                id: uid(),
                inputs,
              })
            );
            clearInputs();
          }}
        >
          Ekle
        </button>
        {experiences?.map((item: any) => (
          <div className="exp-set">
            <p>Company Name : {item.inputs.companyName}</p>
            <p> Title : {item.inputs.jobTitle}</p>
            <IoTrashBinOutline
              onClick={() => {
                dispatch(removeFromExperiences(item.id));
              }}
              size={30}
              color="gray"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default IExperienceForm;
