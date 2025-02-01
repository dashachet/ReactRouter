import React, {ButtonHTMLAttributes, FC} from 'react';
import s from './superButton.module.css'

type SuperButtonProps = {
    onClick: () => void
    children: React.ReactNode
    color?: string
    disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const SuperButton: FC<SuperButtonProps> = (props) => {

    const {
        onClick,
        children,
        color,
        disabled,
        ...restProps
    } = props
    const onClickHandler = () => {
        onClick()
    }

    // const finalClassName = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : '')

    // const finalClassName=s.button + " " + s.red

    // const finalClassName = `
    // ${s.button}
    // ${color === 'red' ? s.red : s.secondary}
    //     `
    // const finalClassName = `
    // ${s.button}
    // ${color === 'red' ? s.red : s.secondary}
    // ${disabled ? s.disabled : ''}
    //     `

    const finalClassName = `
    ${s.button}
    ${color === 'red' ? s.red : color === 'blue'? s.secondary : s.default}
    ${disabled ? s.disabled : ''}
        `


    return (
        <button onClick={onClickHandler}  {...restProps} className={finalClassName}>{children}</button>
    );
};

//--------------------------------------------------------------------------

// import React, {ButtonHTMLAttributes, FC} from 'react';
//
// type SuperButtonProps={
//     onClick:()=>void
//     name:string
//     // backgrounColor:string
//     // color:string
// }& ButtonHTMLAttributes<HTMLButtonElement>
//
// export const SuperButton:FC<SuperButtonProps> = ({onClick,name, ...restProps}) => {
//     const onClickHandler=()=>{
//         onClick()
//     }
//
//     return (
//         <button onClick={onClickHandler}  {...restProps}>{name}</button>
//     );
// };