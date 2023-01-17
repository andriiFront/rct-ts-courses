import styled from "styled-components";
import { CourseList } from "./CourseLIst"
import { Loader } from "../ui/Loader"
import data from "../data.json"

console.log(data)

const Page = styled.main`
  box-sizing: border-box;
  padding: 0 36px;
  width: 100%;
`

export const CoursePage = () => {
  
  return (
    <Page>
      {data?.title && <h1>{data?.title}</h1>}
      {true 
        ? <CourseList initialCourses={data.lessons} />
        : <Loader /> 
      }
    </Page>
  )
}
