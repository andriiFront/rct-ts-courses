import styled from "styled-components";
import { NEGATIVE_COLOR, POSITIVE_COLOR } from "./colors"

export type BadgeType = 'positive' | 'negative'

const getColorFromType = (t: BadgeType) => {
  switch (t) {
    case 'negative':
      return NEGATIVE_COLOR
    
    case 'positive':
      return POSITIVE_COLOR
  }
}

export const Badge = styled.span<{
  tipe: BadgeType;
}>`
  background: ${({tipe}) => getColorFromType(tipe)};
  color: black;
  font-size: 0.5em;
  line-height: 1em;
  margin: 1em;
  padding: 0.25em 0.5em;
  border-radius: 0.5em
`
