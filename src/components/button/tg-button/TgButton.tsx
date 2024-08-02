import React, { FC } from 'react';
import './TgButton.css';

type TgButtonProps = {
    className: string
}
const tgButton: FC<TgButtonProps> = (props) => {
    return (
        <button {...props} className={'button ' + props.className}></button>
    )
}

export default tgButton;