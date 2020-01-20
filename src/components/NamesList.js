import React from 'react';

//Could this have default props to specify the data so I don't have to 
//call props when I invoke it?
export default ({data, filterText, addFavourite }) => {
  //Remove names that do not match current filter text
   const namesList = data
    .filter((name) => {
      return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
    })
    .map((name) => {
      return (
        <li 
          key={name.id} 
          className={name.sex}
          onClick={() => addFavourite(name.id)}   
          //name_to_delete
//           Yes, it is similar but would apply to each "Name" entity. And if the data is coming from db, 
//            you might need to change the schema to add that value as well. In reference to welocme in codevolution course
        >
          {name.name}
        </li>
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

