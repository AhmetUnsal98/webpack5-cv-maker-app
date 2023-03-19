import { createSlice } from "@reduxjs/toolkit";
import { SkillArray } from "../lib/SkillModel";
import { ExperienceArray } from "../lib/ExperienceModel";
import { LanguageArray } from "../lib/LanguageModel";
import { Resumes } from "../lib/ResumeModel";
import { SocialArray } from "../lib/SocialModel";
const initialSkillsState: SkillArray = {
  skills: [],
};
const initialLanguagesState: LanguageArray = {
  languages: [],
};
const initialExperiencesState: ExperienceArray = {
  experiences: [],
};
const initialSocialitiesState: SocialArray = {
  socials: [],
};
const initialResumeState: Resumes[] = [];

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    initialResumeState,
    initialSkillsState,
    initialLanguagesState,
    initialExperiencesState,
    initialSocialitiesState,
  },
  reducers: {
    addToDataToResume: (state, action) => {
      state.initialResumeState.push(action.payload);
    },

    addToSkills: (state, action) => {
      state.initialSkillsState.skills.push(action.payload);
    },
    removeFromSkills: (state, action) => {
      const newSkills = state.initialSkillsState.skills.filter(
        (item) => item.id !== action.payload
      );
      state.initialSkillsState.skills = newSkills;
    },
    addToLangugages: (state, action) => {
      state.initialLanguagesState.languages.push(action.payload);
    },
    removeFromLanguages: (state, action) => {
      const newLanguages = state.initialLanguagesState.languages.filter(
        (item) => item.id !== action.payload
      );
      state.initialLanguagesState.languages = newLanguages;
    },
    addToExperiences: (state, action) => {
      state.initialExperiencesState.experiences.push(action.payload);
    },
    removeFromExperiences: (state, action) => {
      const newExperiences = state.initialExperiencesState.experiences.filter(
        (item) => item.id !== action.payload
      );
      state.initialExperiencesState.experiences = newExperiences;
    },
    addToSocialities: (state, action) => {
      state.initialSocialitiesState.socials.push(action.payload);
    },
    removeFromSocialities: (state, action) => {
      const socialities = state.initialSocialitiesState.socials.filter(
        (item) => item.id !== action.payload
      );
      state.initialSocialitiesState.socials = socialities;
    },
  },
});
export const {
  addToDataToResume,
  addToSkills,
  removeFromSkills,
  addToLangugages,
  removeFromLanguages,
  addToExperiences,
  removeFromExperiences,
  addToSocialities,
  removeFromSocialities,
} = resumeSlice.actions;
export default resumeSlice.reducer;
