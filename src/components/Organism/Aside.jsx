import React from 'react';
import Logo from '../Atoms/Logo';
import AsideOptions from './AsideOptions';
const Aside = () => {
    return (
        <aside className='sidebar'>
            <div className='aside_logo'>
                <Logo />
            </div>
            <AsideOptions />
        </aside>
    );
};
export default Aside;
