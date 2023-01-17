import { Badge } from '../ui/Badge'
import styled from "styled-components";
import { BACKGROUND_ACCENTED } from '../ui/colors';
import { CourseItem } from '../types'

const StyledForm = styled.form`
  background-color: ${BACKGROUND_ACCENTED};
  margin-top: 32px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px
`

export const Lesson = (
  { lesson, onLessonChange }:{
    lesson: CourseItem;
    onLessonChange: (newState: CourseItem) => void;
  }
) => {
  
  return (
    <div style={{marginTop: '64px'}}>
      <h2>
        {lesson.title}
        <Badge
          style={{verticalAlign: 'middle'}}
          tipe={'negative'}
        >
          {lesson.published ? 'Published' : 'Unpublished'}
        </Badge>
      </h2>

      <dl>
        <dt>Short summary</dt>
        <dd>{lesson.shortSummary}</dd>
      </dl>

      <a href={lesson.youtube} target="_blank">
        Youtube link
      </a>

      <StyledForm>
        <label>
          <input
            type="checkbox"
            checked={lesson?.completed ?? false}
            onChange={(e) => onLessonChange({
              ...lesson,
              completed: e.target.checked
            })}
          />
          Completed
        </label>

        <label htmlFor={lesson.name + "_form"}>
          Note for the course
        </label>
        <textarea
          name="note"
          id={lesson.name + "_form"}
          rows={5}
          value={lesson.note}
          onChange={(e) => onLessonChange({
            ...lesson,
            note: e.target.value
          })}
        ></textarea>
        
      </StyledForm>
    </div>
  )
}
