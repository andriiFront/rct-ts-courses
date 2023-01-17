import { CourseItem } from '../types'

export const useCourseStorage = () => ({
  getCourseFromStorage: (): CourseItem[] | undefined => {
    const course = localStorage.getItem("COURSES")

    return course ? JSON.parse(course) : undefined
  },
  setCourseToStorage: (value: CourseItem[]) => 
    localStorage.setItem("COURSES", JSON.stringify(value)),
})

