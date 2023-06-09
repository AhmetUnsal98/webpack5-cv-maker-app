import React, { CSSProperties, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { uid } from "uid";
import { ResumeModel } from "../../lib/ResumeModel";
import "./resume.scss";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "purple",
  position: "absolute",
  left: "50%",
  top: "50%",
};
const Resume = () => {
  const resumes = useSelector((state: any) => state.resume.initialResumeState);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const skills = useSelector(
    (state: any) => state.resume.initialSkillsState.skills
  );
  const languages = useSelector(
    (state: any) => state.resume.initialLanguagesState.languages
  );
  const socials = useSelector(
    (state: any) => state.resume.initialSocialitiesState.socials
  );
  const experiences = useSelector(
    (state: any) => state.resume.initialExperiencesState.experiences
  );

  const [currentResume, setCurrentResume] = useState<ResumeModel>({
    id: uid(),
    fullName: "",
    birthDate: "",
    title: "",
    location: "",
    schoolName: "",
    degree: "",
    eduStartDate: "",
    eduFinishDate: "",
    skills: skills,
    languages: languages,
    socials: socials,
    email: "",
    phone: "",
    experiences: experiences,
  });
  useEffect(() => {
    //Finding resume
    for (var i = 0; i < resumes.length; i++) {
      if (resumes[i].id === id) {
        setCurrentResume(resumes[i]);
      }
    }
  }, []);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <ClipLoader cssOverride={override} loading={loading} size={100} />
      ) : (
        <div className="resume">
          <div className="wrapper">
            <div className="resume-header">
              <div className="left-wrapper-header">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <h2>{currentResume.fullName}</h2>
                  <p>{"( " + currentResume.title + " )"}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p className="comm">
                    <b>İletişim : </b> {currentResume.phone} /
                    {currentResume.email}
                  </p>
                  {currentResume.socials.map((item: any) => (
                    <p className="comm">
                      <b>{item.socialName} : </b> {item.link}
                    </p>
                  ))}
                </div>
              </div>
              <div className="right-wrapper-header">
                <div className="profile-photo">Photo</div>
              </div>
            </div>
            <div className="section-name">
              <h2>Personal Informations</h2>
            </div>
            <div className="resume-row">
              <div className="left-wrapper">
                <p>
                  <b>Name Surname :</b>
                </p>
                <p>
                  <b>Birth Date :</b>
                </p>
                <p>
                  <b>Location :</b>
                </p>
              </div>
              <div className="right-wrapper">
                <p>{currentResume.fullName}</p>
                <p>{currentResume.birthDate}</p>
                <p>{currentResume.location}</p>
              </div>
            </div>
            <div className="section-name">
              <h2>Education Informations</h2>
            </div>
            <div className="resume-row">
              <div className="left-wrapper">
                <p>
                  <b>School Name :</b>
                </p>
                <p>
                  <b>Program Name :</b>
                </p>
                <p>
                  <b>Start Finish Dates :</b>
                </p>
              </div>
              <div className="right-wrapper">
                <p>{currentResume.schoolName}</p>
                <p>{currentResume.degree}</p>
                <p>
                  {currentResume.eduStartDate} - {currentResume.eduFinishDate}
                </p>
              </div>
            </div>
            <div className="section-name">
              <h2>Work Experiences</h2>
            </div>
            {currentResume.experiences.map((item: any) => (
              <div className="resume-row">
                <div className="left-wrapper">
                  <p>
                    <b>Company Name :</b>
                  </p>
                  <p>
                    <b>Department :</b>
                  </p>
                  <p>
                    <b>Start Finish Date :</b>
                  </p>
                  <p>
                    <b>Description :</b>
                  </p>
                </div>
                <div className="right-wrapper">
                  <p>{item.inputs.companyName}</p>
                  <p>{item.inputs.jobTitle}</p>
                  <p>
                    {item.inputs.startingDate} - {item.inputs.finishingDate}
                  </p>
                  <p>{item.inputs.desc}</p>
                </div>
              </div>
            ))}

            <div className="section-name">
              <h2>My Skills</h2>
            </div>
            {currentResume.skills?.map((item: any) => (
              <div className="resume-row">
                <div className="left-wrapper">
                  <p>
                    <b>{item.skillName}</b>
                  </p>
                </div>
                <div className="right-wrapper">
                  <p>{item.skillLevel}</p>
                </div>
              </div>
            ))}
            <div className="section-name">
              <h2>Languages</h2>
            </div>
            {languages.map((item: any) => (
              <div className="resume-row">
                <div className="left-wrapper">
                  <p>
                    <b>{item.languageName}</b>
                  </p>
                </div>
                <div className="right-wrapper">
                  <p>{item.languageLevel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Resume;
