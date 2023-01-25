import { useEffect, useState } from 'react'
import { COURSE_URL } from '../urls'
import { CourseDataDto, CourseData, CourseItem, AsyncStatus, CourseItemDto } from '../types'

export const useCourses = () => {
  const [response, setResponse] = useState<AsyncStatus<CourseData>>({
    status: 'loading'
  });

const mapCourseItemDtoToCourse = (dto: CourseItemDto): CourseItem => {
  return {
    youtube: dto.youtube,
    takeaways: dto.takeaways || [],
    links: dto.links?.map(([ title, url ]) => ({ title, url })),
    hometask: [],
    keyPoints: [],
    name: dto.name,
    prerequisite: dto.prerequisite ?? [],
    title: dto.title,
    type: dto.type,
    published: dto.published,
    shortSummary: dto.shortSummary
  }
}

const mapCourseDtoToCourse = (dto: CourseDataDto): CourseData => {
  return {
    lessons: dto.lessons.map(mapCourseItemDtoToCourse),
    title: dto.title ?? ''
  }
}

  useEffect(() => {
    fetch(COURSE_URL)
      .then((response: Response) => {
        if(response.ok) {
          return response.json()
        }

        throw new Error('Network failed', { cause: response.status })
      })
      .then((data: CourseDataDto) => {
        const isResponseValid = validateResponse(data)

        setResponse({
          data: mapCourseDtoToCourse(data),
          status: 'ok' 
        })
      })
      .catch(error => setResponse({ error, status: 'failed' }))
  }, [])

  return { response }
}

function validateResponse(courseData: CourseDataDto) {
  if (courseData === null) {
    throw new Error("Empty response")
  }

  if (!Array.isArray(courseData.lessons)) {
    throw new Error("Lessons in improper format")
  }
}

// export const useCourses = () => {
//   const [data, setData] = useState<any>();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<CourseData>();

//   useEffect(() => {
//     setLoading(true);
//     fetch(COURSE_URL)
//       .then(data => data.json())
//       .then(data => setData(data))
//       .catch(err => setError(err))
//       .finally(() => setLoading(false))
//   }, [])

//   return { data, loading, error }
// }
