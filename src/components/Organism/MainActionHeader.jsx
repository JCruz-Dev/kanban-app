import React from 'react';
import { IconButton } from '../Atoms/Button';
import TitleIcon from '../Molecules/TitleIcon';
import { InputSearch, InputCheckIcon } from '../Molecules/Inputs';
import { GlobalDispatchContext, GlobalStateContext } from '../../hooks/context';
import { SEARCH_CONTENT } from '../../hooks/constants';

const MainActionHeader = () => {
    const state = React.useContext(GlobalStateContext);
    const dispatch = React.useContext(GlobalDispatchContext);
    const [Check, setChecked] = React.useState([]);

    const handleSearchChange = (event) => {
        let searchTerm = event.target.value;
        let isSearchActive = event.target.value.length > 0 ? true : false;
        let data = { ...state.columnContent };
        let filteredData = Object.entries(data).map(([columnId, _]) =>
            data[columnId].items.filter(
                (item) =>
                    item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >
                    -1
            )
        );

        dispatch({
            type: SEARCH_CONTENT,
            payload: {
                filteredColumns: {
                    ['0o9h87f']: {
                        name: data['0o9h87f'].name,
                        items: filteredData[0],
                    },
                    ['11q2wef']: {
                        name: data['11q2we'].name,
                        items: filteredData[1],
                    },
                    ['20kduy']: {
                        name: data['0o9h87f'].name,
                        items: filteredData[2],
                    },
                },
                searchActive: isSearchActive,
            },
        });
    };

    const handleFilterTag = (value) => {
        //Search if the values in in Check state
        const currentTag = Check.indexOf(value);
        const newChecked = [...Check];
        //Checks if currentTag is on array. IF not, adds it to the Check state or remove it.
        if (currentTag === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentTag, 1);
        }
        let data = { ...state.columnContent };

        //Checks the Filter data by tag with the Check State
        let filteredByTag = Object.entries(data).map(([columnId, _]) =>
            data[columnId].items.filter((item) => newChecked.includes(item.tag))
        );
        setChecked(newChecked);
        //Checks is any on the filters are still enabled.
        //I used new
        let isFilterActive = newChecked.length > 0 ? true : false;
        dispatch({
            type: SEARCH_CONTENT,
            payload: {
                filteredColumns: {
                    ['0o9h87f']: {
                        name: data['0o9h87f'].name,
                        items: filteredByTag[0],
                    },
                    ['11q2wef']: {
                        name: data['11q2we'].name,
                        items: filteredByTag[1],
                    },
                    ['20kduy']: {
                        name: data['0o9h87f'].name,
                        items: filteredByTag[2],
                    },
                },
                searchActive: isFilterActive,
            },
        });
    };
    return (
        <div className='header_container action_header'>
            <TitleIcon
                name='Statuses'
                icon='visibility'
                containerClasses='action_status'
                titleClasses='action_status_title'
            />
            <div className='action_header_options'>
                <div className='filter_content'>
                    <IconButton
                        iconName='filter_list'
                        buttonName='Filter'
                        buttonClasses='action_header_options_filter'
                        nameClasses='action_header_options_filter_title'
                    />
                    <div className='tags_container'>
                        <InputCheckIcon
                            name='SEO article'
                            onChange={handleFilterTag}
                            id='1'
                        />
                        <InputCheckIcon
                            name='Longform'
                            onChange={handleFilterTag}
                            id='2'
                        />
                        <InputCheckIcon
                            name='Blog post'
                            onChange={handleFilterTag}
                            id='3'
                        />
                    </div>
                </div>
                <IconButton
                    iconName='sort'
                    buttonName='Sort'
                    buttonClasses='action_header_options_filter'
                    nameClasses='action_header_options_filter_title'
                />
                <InputSearch
                    onChange={handleSearchChange}
                    placeholder={'Search'}
                />
            </div>
        </div>
    );
};

export default MainActionHeader;
