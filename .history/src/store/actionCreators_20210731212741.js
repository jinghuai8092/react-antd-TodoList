import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM } from "./actionTypes"

export const getInputChangeAction=(value)=>{
    type: CHANGE_INPUT_VALUE,
    value
}
export const getAddItemAction=()=>{
    type: ADD_TODO_ITEM
}