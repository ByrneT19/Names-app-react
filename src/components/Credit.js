import React from 'react';

//A stateless component - these two pieces of code are equivalent

export default () =>
    <div className="credit">
        <p>
            Source of names list:
            {' '}
            <a href="  https://www.yahoo.com/news/atticus-tops-baby-names-2015-124073377716.html">Yahoo - Top Baby Names in 2015</a>
        </p>
    </div>

// class Credit extends React.Component {
//     render() {
//         return (
//             <div className="credit">
//                 <p>
//                     Source of names list:
//                     {' '}
//                     <a href="  https://www.yahoo.com/news/atticus-tops-baby-names-2015-124073377716.html">Yahoo - Top Baby Names in 2015</a>
//                 </p>
//             </div>
//         )
//     }
// }

// export default Credit;