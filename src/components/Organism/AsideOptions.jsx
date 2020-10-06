import React from 'react';
import TitleIcon from '../Molecules/TitleIcon';
import { Icon } from '@material-ui/core';

const AsideOptions = () => {
    const header_options = [
        {
            icon: 'show_chart',
            name: 'REPORTING',
            items: [
                { name: 'Overview' },
                { name: 'LeadManagerFX', has_arrow: true },
                { name: 'CallTrackerFX', has_arrow: true },
                { name: 'CompanyTrackerFx' },
                { name: 'CPLdashboardFX', has_arrow: true },
                { name: 'ContentAnalyticsFX', has_arrow: true },
                { name: 'CustomExport' },
            ],
        },
        {
            icon: 'fingerprint',
            name: 'MARKETING & INTELLIGENCE',
            items: [
                { name: 'CompetitorSpyFX', has_arrow: true },
                { name: 'PredictionGeniusFX', has_arrow: true },
                { name: 'LeadNurtureFX', has_arrow: true },
                { name: 'ReviewBoostFX', has_arrow: true },
                { name: 'PersonalizeFX', has_arrow: true },
                { name: 'ClickBoostFX', has_arrow: true },
                { name: 'Audience Targeting', has_beta: true },
                { name: 'Local FX', has_arrow: true, has_beta: true },
            ],
        },
        {
            icon: 'layers',
            name: 'CONTENT',
            items: [
                { name: 'ContentGeniusFX', isActive: true },
                { name: 'Link Campaing History' },
                { name: 'DeepLearningFX', has_beta: true },
            ],
        },
        {
            icon: 'settings',
            name: 'CONFIGURATION',
            items: [{ name: 'Settings' }],
        },
    ];
    return (
        <>
            {header_options.map(({ icon, name, items }, index) => (
                <div className='' key={index}>
                    <TitleIcon
                        iconClasses='aside_header_icon'
                        titleClasses='aside_header_title'
                        name={name}
                        icon={icon}
                    />
                    <div className='aside_header_items_container'>
                        {items.map(
                            (
                                { name, has_arrow, has_beta, isActive },
                                index
                            ) => (
                                <div
                                    key={index}
                                    className={`aside_header_item
                                    ${isActive ? 'aside_item_active' : ''} 
                                    ${
                                        has_arrow && !has_beta
                                            ? 'sidebar_items_two_columns'
                                            : ''
                                    }
                                    ${
                                        has_beta && has_arrow
                                            ? 'sidebar_items_third_columns'
                                            : ''
                                    }
                                    ${
                                        has_beta && !has_arrow
                                            ? 'sidebar_items_two_columns_beta'
                                            : ''
                                    }
                                    `}
                                >
                                    {name}
                                    {has_beta ? (
                                        <span className='aside_header_item_beta'>
                                            Beta
                                        </span>
                                    ) : null}
                                    {has_arrow && (
                                        <Icon
                                            fontSize='small'
                                            className='aside_header_item_arrow'
                                        >
                                            keyboard_arrow_down
                                        </Icon>
                                    )}
                                </div>
                            )
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};
export default AsideOptions;
