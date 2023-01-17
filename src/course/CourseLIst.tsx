import { useState } from 'react'
import { Lesson } from "./Lesson"
import { CourseItem } from "../types"

export const CourseList = (
  { initialCourses }: { initialCourses: any[] }
) => {

  const [courses, setCourses] = useState<CourseItem[]>(initialCourses)
  
  return (
    <div>
      {courses.map((lesson, index) => 
        lesson.hidden 
          ? null
          : (
            <Lesson 
              key={lesson.name}
              lesson={lesson}
              onLessonChange={(newState) => {
                setCourses(prev => {
                  const nextState = [...prev]
                  nextState[index] = newState
                  
                  return nextState
                })
              }
                
              }
            />
          )
      )}
    </div>
  )
}
