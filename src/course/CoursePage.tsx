import styled from "styled-components";
import { CourseList } from "./CourseLIst"
import { Loader } from "./Loader"

const Page = styled.main`
  box-sizing: border-box;
  padding: 0 36px;
  width: 100%;
`

export const CoursePage = () => {
  
  return (
    <Page>
      {true ? <CourseList /> : <Loader /> }
    </Page>
  )
}
