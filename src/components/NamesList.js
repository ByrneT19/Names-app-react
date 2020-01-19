import React from 'react';

//Could this have default props to specify the data so I don't have to 
//call props when I invoke it?
export default ({data, filterText}) => {
  //Remove names that do not match current filter text
   const namesList = data
    .filter((name) => {
      return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
    })
    .map((name) => {
      return (
        <li key={name.id} className={name.sex}>{name.name}</li>
      )
    })
    return (
      <div>
        <ul>
          {namesList}
        </ul>
      </div>
    )
}
