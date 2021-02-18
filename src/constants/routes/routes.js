export const mainViewRoute = () => '/mainView';

export const getCountryDetailRoute = () => `/countrie/:name`;
export const getGenerteCountryDetailRoute = (name) =>
                getCountryDetailRoute().replace(":name", name);