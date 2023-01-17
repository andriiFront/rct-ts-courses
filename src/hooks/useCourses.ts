import { useEffect, useState } from 'react'
import { COURSE_URL } from '../urls'
import { CourseData, CourseItem } from '../types'
import initialData from '../data.json'

export const useCourses = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<CourseData>();

  useEffect(() => {
    console.log('use effect works')
    setLoading(true);
    fetch(COURSE_URL)
      .then(data => data.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
