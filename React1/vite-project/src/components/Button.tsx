import {MouseEvent, ReactNode} from 'react'

interface Props {
    children: ReactNode;
    color?: 'primary' | 'info' | 'danger';
    onClick: ()=>void;
}

function Button({children, color='primary', onClick}: Props) {
    
    return <button type="button" className={"btn btn-"+ color} onClick={onClick}>{children}</button>
}

export default Button