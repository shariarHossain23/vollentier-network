import React from 'react';

const Registerperson = ({vollunter}) => {
    
 const {name,email,number} = vollunter;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Registerperson;