import { ExperienceArray } from "./ExperienceModel";
import { LanguageArray } from "./LanguageModel";
import { SkillArray } from "./SkillModel";
import { SocialArray } from "./SocialModel";

export interface ResumeModel {
  id: string;
  fullName: string;
  birthDate: string;
  title: string;
  schoolName: string;
  degree: string;
  eduStartDate: string;
  eduFinishDate: string;
  skills: [];
  socials: [];
  languages: [];
  email: string;
  phone: string;
  experiences: [];
}
export interface Resumes {
  id: string;
  fullName: string;
  birthDate: string;
  title: string;
  schoolName: string;
  degree: string;
  eduStartingDate: string;
  eduFinishingDate: string;
  skills: SkillArray;
  socials: SocialArray;
  languages: LanguageArray;
  email: string;
  phone: string;
  experiences: ExperienceArray;
}
