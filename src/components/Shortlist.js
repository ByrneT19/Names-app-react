import React from 'react';

export default ({data, favourites}) => {
    const idList = favourites.map(id => {
        console.log(id)
    })
    return (
        <div className="favourites">
            <h4>Click on a name to shortlist it...</h4>
        </div>
    )
}
