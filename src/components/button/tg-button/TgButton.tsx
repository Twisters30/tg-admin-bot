import React, { FC } from 'react';

type TgButtonProps = {
    className: string
}
const tgButton: FC<TgButtonProps> = (props) => {
    return (
        <button {...props} className={'button ' + props.className}></button>
    )
}

export default tgButton;