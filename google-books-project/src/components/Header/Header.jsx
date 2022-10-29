import React from 'react';
import style from './Header.module.scss';

const Header = () => {
    return (
        <div className={style.Header}>
            <h1 className={style.Header__Title}>Google Book Directory</h1>
        </div>
    );
};

export default Header;