import React from 'react';

const Dropdown = () => {

    return(
        <div>
            <div className="dropdown">
                <select >
                    <option value="">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

        </div>
    )
}

export default Dropdown;