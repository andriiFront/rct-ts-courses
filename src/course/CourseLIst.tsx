import { Lesson } from "./Lesson"
import { CourseItem } from "../types"

export const CourseList = (
  { initialCourses }: { initialCourses: any[] }
) => {
  
  return (
    <div>
      {initialCourses.map((lesson, index) => 
        lesson.hidden 
          ? null
          : (
            <Lesson 
              key={lesson.name}
              lesson={lesson}
            />
          )
      )}
    </div>
  )
}
