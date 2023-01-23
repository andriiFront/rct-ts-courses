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
  const { response } = useCourses();
  
  if(response.status === 'loading') {
    return <Loader />
  }
  
  if(response.status === 'failed') {
    console.log(response)
    return <>Failed {response.error.message}, {response.error.cause}</>
  }

  return (
    <Page>
      <h1>{response.data.title}</h1>
      <CourseList initialCourses={response.data.lessons} />
    </Page>
  )
}
