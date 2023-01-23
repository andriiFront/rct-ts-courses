import { useEffect, useState } from 'react'
import { COURSE_URL } from '../urls'
import { CourseData, CourseItem, AsyncStatus } from '../types'
import initialData from '../data.json'

export const useCourses = () => {
  const [response, setResponse] = useState<AsyncStatus<CourseData>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(COURSE_URL)
      .then(response => {
        if(response.ok) {
          return response.json()
        }

        throw new Error('Network failed', { cause: response.status })
      })
      .then(data => setResponse({ data, status: 'ok' }))
      .catch(error => setResponse({ error, status: 'failed' }))
  }, [])

  return { response }
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
