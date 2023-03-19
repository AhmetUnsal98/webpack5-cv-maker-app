import React, { useEffect, useState } from "react";
import "./iskill.scss";
import { IoAddCircleOutline, IoTrashBinOutline } from "react-icons/io5";
import { uid } from "uid";
import { useSelector, useDispatch } from "react-redux";
import {
  addToLangugages,
  addToSkills,
  removeFromLanguages,
  removeFromSkills,
} from "../../../redux/resumeSlice";
import { useInputs } from "../../../hooks/useInputs";
import { motion } from "framer-motion";
const ISkillForm = () => {
  const [inputs, setInputs] = useInputs({
    skillName: "",
    skillLevel: "",
    languageName: "",
    languageLevel: "",
  });
  const dispatch = useDispatch();
  const skills = useSelector(
    (state: any) => state.resume.initialSkillsState.skills
  );
  const languages = useSelector(
    (state: any) => state.resume.initialLanguagesState.languages
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="skill"
    >
      <div className="skill-half">
        <span>Add Your Skill</span>

        <div className="skill-row">
          <input
            type="text"
            name="skillName"
            placeholder="Skill Name"
            value={inputs.skillName}
            onChange={setInputs}
          ></input>
          <input
            type="text"
            name="skillLevel"
            placeholder="Level"
            value={inputs.skillLevel}
            onChange={setInputs}
          ></input>
          <button
            onClick={() => {
              dispatch(
                addToSkills({
                  id: uid(),
                  skillName: inputs.skillName,
                  skillLevel: inputs.skillLevel,
                })
              );
            }}
          >
            <IoAddCircleOutline className="trash" size={40} />
          </button>
        </div>
        {skills?.map((item: any) => (
          <div className="skill-set">
            <div className="skill-set-name">
              <p>Skill Name : {item.skillName}</p>
            </div>
            <div className="skill-set-name">
              <p>Skill Level : {item.skillLevel}</p>
            </div>
            <div>
              <IoTrashBinOutline
                style={{ cursor: "pointer" }}
                color="gray"
                size={30}
                onClick={() => {
                  dispatch(removeFromSkills(item.id));
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="skill-half">
        <span>Add Your Language</span>

        <div className="skill-row">
          <input
            type="text"
            name="languageName"
            placeholder="Language"
            value={inputs.languageName}
            onChange={setInputs}
          ></input>
          <input
            type="text"
            name="languageLevel"
            placeholder="Level"
            value={inputs.languageLevel}
            onChange={setInputs}
          ></input>
          <button
            type="submit"
            onClick={() => {
              dispatch(
                addToLangugages({
                  id: uid(),
                  languageName: inputs.languageName,
                  languageLevel: inputs.languageLevel,
                })
              );
            }}
          >
            <IoAddCircleOutline className="trash" size={40} />
          </button>
        </div>
        {languages?.map((item: any) => (
          <div className="skill-set">
            <div className="skill-set-name">
              <p>Skill Name : {item.languageName}</p>
            </div>
            <div className="skill-set-name">
              <p>Skill Level : {item.languageLevel}</p>
            </div>
            <div>
              <IoTrashBinOutline
                style={{ cursor: "pointer" }}
                color="gray"
                size={30}
                onClick={() => {
                  dispatch(removeFromLanguages(item.id));
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ISkillForm;
