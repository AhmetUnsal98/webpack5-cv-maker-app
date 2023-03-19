import React, { useEffect, useState } from "react";
import "./builder.scss";
import { BuilderLayout } from "../../layouts/BuilderLayout";
import IPersonal from "../../components/Forms/IPersonalForm";
import ICommuncationForm from "../../components/Forms/ICommunucationForm";
import IEducationForm from "../../components/Forms/IEducationForm";
import ISkillForm from "../../components/Forms/ISkillForm";
import IExperienceForm from "../../components/Forms/IExperienceForm";
import { useSelector, useDispatch } from "react-redux";
import { addToDataToResume } from "../../redux/resumeSlice";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";
import { ResumeModel } from "../../lib/ResumeModel";

const BuildPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const [page, setPage] = useState(1);
  console.log(
    "Languages" + languages + "Socials" + socials + "experiences" + experiences
  );
  const [resumeData, setResumeData] = useState<ResumeModel>({
    id: uid(),
    fullName: "",
    birthDate: "",
    title: "",
    schoolName: "",
    degree: "",
    eduStartDate: "",
    eduFinishDate: "",
    skills: skills,
    languages: languages,
    email: "",
    phone: "",
    socials: socials,
    experiences: experiences,
  });

  const PageDisplay = () => {
    if (page === 1) {
      return (
        <IPersonal resumeData={resumeData} setResumeData={setResumeData} />
      );
    } else if (page === 2) {
      return (
        <IEducationForm resumeData={resumeData} setResumeData={setResumeData} />
      );
    } else if (page === 3) {
      return <ISkillForm />;
    } else if (page === 4) {
      return (
        <ICommuncationForm
          resumeData={resumeData}
          setResumeData={setResumeData}
        />
      );
    } else if (page === 5) {
      return <IExperienceForm />;
    }
  };
  useEffect(() => {
    setResumeData({
      ...resumeData,
      skills: skills,
      languages: languages,
      socials: socials,
      experiences: experiences,
    });
  }, [skills, languages, socials, experiences]);

  return (
    <BuilderLayout>
      <div className="builder">
        <div className="progress-bar">
          <div style={{ width: `${page * 20}%` }} className="progressing"></div>
        </div>
        <h1>Please Tell About Yourself</h1>
        <div className="build-form">
          <div className="form-selector">
            <span
              onClick={() => setPage(1)}
              className={page === 1 ? "tag active" : "tag"}
            >
              Personal Informations
            </span>
            <span
              onClick={() => setPage(2)}
              className={page === 2 ? "tag active" : "tag"}
            >
              Educational Informations
            </span>
            <span
              onClick={() => setPage(3)}
              className={page === 3 ? "tag active" : "tag"}
            >
              Skills & Languages
            </span>
            <span
              onClick={() => setPage(4)}
              className={page === 4 ? "tag active" : "tag"}
            >
              Communcation & Socail Media
            </span>
            <span
              onClick={() => setPage(5)}
              className={page === 5 ? "tag active" : "tag"}
            >
              Experience
            </span>
          </div>
          <div style={{ height: "auto", width: "100%" }}>{PageDisplay()}</div>
          <div className="build-forms-buttons">
            <button
              disabled={page === 1}
              onClick={() => {
                setPage((prev) => prev - 1);
              }}
              className="prev-button"
            >
              Previous
            </button>
            {page !== 5 ? (
              <button
                disabled={page === 5}
                onClick={() => {
                  setPage((prev) => prev + 1);
                }}
                className="next-button"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(addToDataToResume(resumeData));
                  navigate("/resume/" + resumeData.id);
                }}
                className="next-button"
              >
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </BuilderLayout>
  );
};

export default BuildPage;
