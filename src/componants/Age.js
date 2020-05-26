import React from 'react';

function Age(props){
    return (
        <div>
            <button onClick = {() => props.dis(' 52')}>name</button>
        </div>
    )
}

export default Age;