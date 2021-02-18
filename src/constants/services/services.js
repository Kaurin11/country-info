import Axios from "axios";

export const baseRequest = "https://restcountries.eu/rest/v2";

export const allCountriesUrl = () => Axios.get(`${baseRequest}/all`);

export const oneCountrieUrl = (name) =>
  Axios.get(`${baseRequest}/name/${name}?fullText=true`);

export const regionUrl = (region) =>
  Axios.get(`${baseRequest}/region/${region}`);

export const borderCountriUrl = (code) =>
  Axios.get(`${baseRequest}/alpha/${code}`);