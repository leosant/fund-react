import React from 'react';

import If from "./If";


export default props => {

    const user = props.user || {};
    console.log('user>>>', user)

    return (
        <div>
            <If expression={user && user.name}>
                <span>nome: {user.name} nota: {user.note} é nerd? {user.isNerd ? 'Verdade' : 'Falso'}</span>
            </If>
        </div>
    )
}