import React from 'react';
import { StyledRulesButton } from './styles/StyledRulesButton';

const GameRules = () => {
    const showRules = () => {
        alert(
            'Arrange the blocks to fill the whole row - then they will disappear and you will get points. Move the blocks using the left and right arrows on your keyboard, while the upper arrow is used to rotate the current block. You can also accelerate the falling of the block using the bottom arrow. You lose when the stack of blocks reach the top of the board. Have fun! :)'
        )
    };

    return(<StyledRulesButton onClick={showRules}>?</StyledRulesButton>)
};

export default GameRules;