import {SET_ADDRESS,SET_NAME, SET_TYPE, SET_ID,SET_PAGE, SET_ITEMS,SET_SEARCH,SET_ITEM} from "../constants/action_types";

export const setAddress  = address => ({
    type:SET_ADDRESS, // reducer 액션 처리를 위한 문자열
    payload:address
})

export const setName = name => ({
    type:SET_NAME,
    payload:name
})

export const setType = type => ({
    type:SET_TYPE,
    payload:type
})

export const setId = id => ({
    type:SET_ID,
    payload:id
})

export const setPage = page => ({
    type:SET_PAGE,
    payload:page

})

export const setItems = items => ({
    type:SET_ITEMS,
    payload:items
})
export const setSearch = search => ({
    type:SET_SEARCH,
    payload:search
})

export const setItem = item =>({
    type:SET_ITEM,
    payload:item
})