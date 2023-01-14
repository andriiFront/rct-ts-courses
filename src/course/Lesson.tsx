import { Badge } from '../ui/Badge'
import styled from "styled-components";
import { BACKGROUND_ACCENTED } from '../ui/colors';

const StyledForm = styled.form`
  background-color: ${BACKGROUND_ACCENTED};
  margin-top: 32px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px
`

export const Lesson = () => {
  
  return (
    <div style={{marginTop: '64px'}}>
      <h2>
        {'React-lesson'}
        <Badge
          style={{verticalAlign: 'middle'}}
          tipe={'negative'}
        >
          {'Published / Unpublished'}
        </Badge>
      </h2>

      <dl>
        <dt>Short summary</dt>
        <dd>{'This lesson is about react...bla-bla-bla...'}</dd>
      </dl>

      <a href={'https://www.youtube.com/watch?v=uiRHFI6A3iU'}>
        Youtube link
      </a>

      <StyledForm>
        <label>
          <input
            type="checkbox"
            checked={true}
            onChange={() => console.log('hello')}
          />
          Completed
        </label>

        <label htmlFor='lesson_form'>
          Note for the course
        </label>
        <textarea
          name="note"
          id="lesson_form"
          rows={5}
          value={'alsdkfj'}
          onChange={() => console.log('hello hello')}
        ></textarea>
        
      </StyledForm>
    </div>
  )
}
