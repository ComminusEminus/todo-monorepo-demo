import {Responses} from '../common/enum'
import {ITodoListItem} from './entities'


export interface IAddNewListItemResponseDTO{
    message?: Responses
    error?: any
}
export interface IDeleteListItemResponseDTO{
    message?: Responses
    error?: any
}
export interface IGetListItemByIdResponseDTO{
    listItem?: ITodoListItem | null
    message?: Responses
    error?: any
}
export interface IUpdateListItemResponseDTO{
    message?: Responses
    error?: any
}