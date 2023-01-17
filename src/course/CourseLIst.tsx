import { useEffect, useState } from 'react'
import { Lesson } from "./Lesson"
import { CourseItem } from "../types"
import { useCourseStorage } from '../hooks/useCourseStorage'

export const CourseList = (
  { initialCourses }: { initialCourses: any[] }
) => {

  const { getCourseFromStorage, setCourseToStorage } = useCourseStorage()

  const [courses, setCourses] = useState<CourseItem[]>(
    getCourseFromStorage() ?? initialCourses
  )

  useEffect(() => {
    setCourseToStorage(courses)
  }, [courses])
  
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
