import styled from "styled-components";
import { CourseList } from "./CourseLIst"
import { Loader } from "../ui/Loader"
import { useCourses } from "../hooks/useCourses";

const Page = styled.main`
  box-sizing: border-box;
  padding: 0 36px;
  width: 100%;
`
export const CoursePage = () => {
  const { data } = useCourses();
  
  return (
    <Page>
      {data?.title && <h1>{data?.title}</h1>}
      {data?.lessons 
        ? <CourseList initialCourses={data.lessons} />
        : <Loader /> 
      }
    </Page>
  )
}
