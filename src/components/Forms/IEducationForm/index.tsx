import React from "react";
import "./ieducation.scss";
import { motion } from "framer-motion";
const IEducationForm = ({ resumeData, setResumeData }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="education"
    >
      <div className="education-upper">
        <div className="education-column">
          <span>School Name</span>
          <div className="education-bottom">
            <input
              type="text"
              value={resumeData.schoolName}
              onChange={(e) => {
                setResumeData({ ...resumeData, schoolName: e.target.value });
              }}
            ></input>
          </div>
        </div>
        <div className="education-column">
          <span>Degree</span>
          <div className="education-bottom">
            <input
              type="text"
              value={resumeData.degree}
              onChange={(e) => {
                setResumeData({ ...resumeData, degree: e.target.value });
              }}
            ></input>
          </div>
        </div>
      </div>

      <div className="education-upper">
        <div className="education-column">
          <span>Starting Date</span>
          <div className="education-bottom">
            <input
              type="date"
              value={resumeData.eduStartDate}
              onChange={(e) => {
                setResumeData({ ...resumeData, eduStartDate: e.target.value });
              }}
            ></input>
          </div>
        </div>

        <div className="education-column">
          <span>Finish Date</span>
          <div className="education-bottom">
            <input
              type="date"
              placeholder=""
              value={resumeData.eduFinishDate}
              onChange={(e) => {
                setResumeData({ ...resumeData, eduFinishDate: e.target.value });
              }}
            ></input>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IEducationForm;
