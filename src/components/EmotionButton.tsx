/** @jsxRuntime classic /
/* @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FC } from 'react';

const buttonStyle = css({
  padding: '32px',
  backgroundColor: 'hotpink',
  fontSize: '24px',
  borderRadius: '4px',
  ':hover': {
    color: 'white',
  },
});

const EmotionButton: FC = () => {
  return <div css={buttonStyle}>Hover to change color.</div>;
};

export default EmotionButton;
