export type CourseItem = {
  name: string;
  title: string;
  type: "Lecture" | "Workshop";
  published?: boolean;
  links?: [string, string][];
  hidden?: boolean;
  shortSummary?: string;
  keyPoints?: string[];
  takeaways?: string[];
  youtube?: string;
  prerequisite?: string[];
  hometask?: string[];
  note?: string;
  completed?: boolean; 
};

export type CourseData = {
  title: string;
  lessons: CourseItem[];
}
