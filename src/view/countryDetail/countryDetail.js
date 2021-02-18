import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import Country from '../../components/country/country';
import { oneCountrieUrl } from '../../constants/services/services';
import Header from '../header/header';

const CountryDetail = () => {

    const [countriesDetail , setCountriesDetail] = useState([]);
    const match = useRouteMatch()

    useEffect(() => {
        fetchDetail();
    },[])

    const fetchDetail = async() => {
        const {name} = match.params; 
        try{
            const {data} = await oneCountrieUrl(name);
            setCountriesDetail(data);
            console.log(data)
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div>
            <Header />
            {countriesDetail.map((countrie) => {
        return ( 
          <Country
            key={countrie.name}
            name={countrie.name}
            flag={countrie.flag}
            nativeName={countrie.nativeName}
            population={countrie.population}
            region={countrie.region}
            subregion={countrie.subregion}
            capital={countrie.capital}
            topLevelDomain={countrie.topLevelDomain}
            borders={countrie.borders}
            currencies={countrie.currencies.map((curr) => curr.name)}
            languages={countrie.languages.map((lang) => lang.name)}
          />
        );
      })}
        </div>
    )
}

export default CountryDetail;