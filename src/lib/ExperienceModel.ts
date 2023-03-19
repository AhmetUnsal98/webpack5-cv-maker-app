export interface ExperienceModel {
  id: string;
  companyName: string;
  jobTitle: string;
  expStartingDate: string;
  expFinishingDate: string;
  desc: string;
}
export interface ExperienceArray {
  experiences: ExperienceModel[];
}
