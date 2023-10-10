import React, {useEffect, useState} from 'react'
import { Filter } from '@core/entities'
import { filterList } from '../../components/filter-list-button-group/helpers/fliter-list'
import {GetListHook} from './get-list-hook'

export const ListItemViewHook = () => {
    const { list } = GetListHook()
    const [filterListState, setFilterListState] = useState<string>(Filter.ALL_LIST_ITEMS)
    const [filteredList, setFilteredList] = useState<any>(null)

    useEffect(() => {
        if (list) {
            filterList({ filterListState, setFilteredList, list })
        }
    }, [list, filterListState])
    
    const filterListHandler = (filterString: Filter) => {
        setFilterListState(filterString);
    }
    
    return { filterListHandler, filterListState, filteredList };
}