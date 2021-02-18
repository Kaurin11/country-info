import React from 'react';
import './style.scss';

const Header = () => {

    return(
        <div className="header">
           <div className="header__text">
                <p>Where in the world?</p>
           </div>
           <div className="header__mode">
               <div className="header__mode--icon">
                    <ion-icon size="large" name="sunny-outline"></ion-icon>
               </div>
               <div className="header__mode--text">
                   Light mode
               </div>
            </div>
        </div>
    )
}

export default Header;