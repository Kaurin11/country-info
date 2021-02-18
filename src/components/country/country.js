import React from 'react';
import { useHistory } from 'react-router';
import { mainViewRoute } from '../../constants/routes/routes';
import Countries from '../countries/countries';

const Country = ({flag,
    nativeName,
    name,
    region,
    population,
    capital,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    borders}) => {

        const history = useHistory();

        const backHandler = () => {
            history.push(mainViewRoute());
        }

        const borderHandler = () => {
            history.push(mainViewRoute());
        }

    return(
        <div className="country-detail ">
            <button onClick={backHandler} className="country-detail__btn btn">BACK</button>
            <div className="country-info ">
                <img src={flag} alt='flag'  className="country-info__flag "/>
                <div className="country-info__content " >
                    <div className="country-info__content--name">
                        {name}
                    </div>
                    <div className="country-info__content--detail">
                        <div className="country-info__content--detail--1">
                            <p>Nativ Name: {nativeName}</p>
                            <p>Population: {population}</p>
                            <p>Region: {region}</p>
                            <p>Subregion: {subregion}</p>
                            <p>Capital: {capital}</p>
                        </div>
                        <div className="country-info__content--detail--2">
                            <p>Top Level Domain: {topLevelDomain}</p>
                            <p>Currencies: {currencies}</p>
                            <p>Languages: {languages.map((lang) => {
                                return ( <span key={lang}> {lang} </span>);})}{" "}</p>
                        </div>
                    </div>
                    <div className="country-info__content--border">
                        <p>Borders: {borders.map((border) => {
                                return ( <span key={border} onClick={borderHandler}> {border} </span>);})}{" "}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Country;