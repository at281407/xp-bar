import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const animations = {
  fadeIn: {
    time: "500ms",
    keyframes: fadeIn
  },
  fadeOut: {
    time: "500ms",
    keyframes: fadeOut
  },
  rotate: {
    time: "700ms",
    keyframes: rotate
  }
}