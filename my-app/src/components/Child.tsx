import React from 'react';

type Props = {
    message: string
    children: React.ReactNode
}

const Child: React.FC<Props> = ({ message, children }) => {
    return (
        <div>
            { children }
            <p>{ message }</p>
        </div>
    )
}

export default Child;