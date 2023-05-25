// function Person({ age, hobbies, name }) {
//     const voteText = age >= 18
//         ? "Go vote!"
//         : "Go study!";

//     // your browser will issue a stern warning about this; we'll learn how to fix
//     // that later.
//     const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);

//     return (
//         <div>
//             <p>Learn some information about this person:</p>
//             <ul>
//                 <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
//                 <li>Age: {age}</li>
//                 <ul>
//                     Hobbies: {hobbiesLIs}
//                 </ul>
//             </ul>
//             <h3>{voteText}</h3>
//         </div>
//     );
// }

function Person({ name, age, hobbies }) {
    const MAX_NAME_LENGTH_TO_SHOW = 8;
    const voteText = age >= 18 ? "Go vote!" : "Go study!";

    const hobbiesLIs = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);

    return (
        <div className="doc-body">
            <div className="row px-4">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <p>Learn some information about this person:</p>
                            <ul>
                                <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
                                <li>Age: {age}</li>
                                <li>Hobbies:</li>
                                <ul>{hobbiesLIs}</ul>
                            </ul>
                            <h3>{voteText}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

