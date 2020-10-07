import React from 'react';
import TitleIcon from '../Molecules/TitleIcon';
import { header_options } from '../../data';
import AsideHeaderItem from '../Molecules/AsideHeaderItem';

const AsideOptions = () => {
    return (
        <>
            {header_options.map(({ icon, name, items }, index) => (
                <div className='aside_options' key={index}>
                    <TitleIcon
                        iconClasses='aside_header_icon'
                        titleClasses='aside_header_title'
                        name={name}
                        icon={icon}
                        containerClasses='aside_header'
                    />
                    <div className='aside_header_items_container'>
                        {items.map(
                            (
                                { name, has_arrow, has_beta, isActive },
                                index
                            ) => (
                                <AsideHeaderItem
                                    key={index}
                                    has_arrow={has_arrow}
                                    has_beta={has_beta}
                                    activeItem={isActive}
                                    name={name}
                                    classes='aside_header_item'
                                    featureClasses='aside_header_item_beta'
                                    arrowClasses='aside_header_item_arrow'
                                />
                            )
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};
export default AsideOptions;
