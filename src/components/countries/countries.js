import React from 'react';
import { useHistory } from 'react-router';
import { getGenerteCountryDetailRoute } from '../../constants/routes/routes';

const Countries = ({name,flag,population,region,capital,onClick}) => {

    const history = useHistory();

    const getDetailHandler = (name) => {
        var lowerCaseName = name.toLowerCase();
        history.push(getGenerteCountryDetailRoute(name))
    }

    return(
        <div className="country-card" onClick={() => getDetailHandler(name)}>
            <div >
                <img className="country-card__flag u-margin-bottom-small" src={flag} alt='flag' />
            </div>
            <div className="country-card__content">
                <div className="country-card__content--name">{name}</div>
                <p>Populutain: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
        </div>
    )
}

export default Countries;