import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback }) => (
    <StyledStartButton onClick={callback}>
        Start the game
    </StyledStartButton>
);

export default StartButton;