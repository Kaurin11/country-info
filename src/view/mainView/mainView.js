import React, { useEffect, useState } from 'react';
import Countries from '../../components/countries/countries';
import Dropdown from '../../components/dropdown/dropdown';
import { allCountriesUrl } from '../../constants/services/services';
import Header from '../header/header';

const MainView = () => {

    const [countries , setCountry] = useState([]);

    useEffect(() => {
        fetchCountry();
    },[]);

    const fetchCountry = async() => {
        try{
            const {data} = await allCountriesUrl();
            console.log(data)
            setCountry(data);
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div>
            <Header />
            <div className="main-view">
                <div className="search">
                    <div className="search-input">
                        <input placeholder="search"></input>
                    </div>
                    <div className="search__dropdown">
                        <Dropdown />
                    </div>
                </div>
                <div className="countries">
                {countries.map((country) => {
                    return(
                        <Countries
                            key={country.name}
                            name={country.name}
                            flag={country.flag}
                            region={country.region}
                            population={country.population}
                            capital={country.capital} />
                    )
                })}
                </div>
            </div>
        </div>

    )
}

export default MainView;