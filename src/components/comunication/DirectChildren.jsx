import React from 'react';

export default props => {
    console.log('Test Children>>>', props)
    return (
        <div>
            <span>{props.args}</span>
        </div>
    )
}