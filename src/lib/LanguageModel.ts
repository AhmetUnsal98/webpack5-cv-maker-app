export interface LanguageModel {
  id: string;
  languageName: string;
  languageLevel: string;
}
export interface LanguageArray {
  languages: LanguageModel[];
}
