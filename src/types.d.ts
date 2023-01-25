export type CourseItemDto = {
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

export type CourseItem = {
  name: string;
  title: string;
  type: "Lecture" | "Workshop";
  published?: boolean;
  links?: { title: string; url: string }[];
  hidden?: boolean;
  shortSummary?: string;
  keyPoints: string[];
  takeaways: string[];
  youtube?: string;
  prerequisite: string[];
  hometask: string[];
  note?: string;
  completed?: boolean; 
};

export type CourseDataDto = {
  title: string;
  lessons: CourseItemDto[];
}

export type CourseData = {
  title: string;
  lessons: CourseItem[];
}

type AsyncStatusLoading = {
  status: 'loading';
}

type AsyncStatusFailed = {
  status: 'failed';
  error: Error
}

type AsyncStatusOk<T> = {
  status: 'ok';
  data: T
}

export type AsyncStatus<T> = AsyncStatusFailed | AsyncStatusLoading | AsyncStatusOk<T>
