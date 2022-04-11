import React from "react";
import styles from './styles.css';

export default ({black}) => {
    return(
        <header className={black ? 'black' : '' /*Modifica a transparencia do header*/}>
            <div className="header--logo">
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo da Netflix"/>
                </a>
            </div>

            <div className="header--user">
                <a href="#">
                    <img alt="Logo de usuario" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
                </a>
            </div>
            
        </header>
    );
}
