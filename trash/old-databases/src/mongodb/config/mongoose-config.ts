import {
    ListContainer,
    ListItem,
    List,
    User,
}from '../schemas'

import {
    CreateNewListItemService,
    DeleteListItemService,
    GetListItemByIdService,
    UpdateListItemService,
    CreateNewListService,
    DeleteListService,
    GetListByIdService,
    CreateNewUserService,
    GetUserByIdService,
    LoginUserService,
    UpdateUserProfileService,
    GetAllListsService,
    CreateNewListContainerService
} from '../services'

const createNewListItem = new CreateNewListItemService(ListItem, List)
const deleteListItem = new DeleteListItemService(ListItem, List)
const getListItemById = new GetListItemByIdService(ListItem)
const upDateListItem = new UpdateListItemService(ListItem)

const createNewList= new CreateNewListService(ListContainer, List)
const deleteList = new DeleteListService(ListContainer, List)
const getListById = new GetListByIdService(List)
const getAllLists = new GetAllListsService(ListContainer)

const createNewListContainer = new CreateNewListContainerService(ListContainer)

const createNewUser = new CreateNewUserService(User, ListContainer)
const getUserById = new GetUserByIdService(User)
const loginUser = new LoginUserService(User)
const updateUserProfile = new UpdateUserProfileService(User)


export {
    createNewListItem,
    deleteListItem,
    getListItemById,
    upDateListItem,
    createNewList,
    deleteList,
    getListById,
    createNewUser,
    getUserById,
    loginUser,
    updateUserProfile,
    getAllLists,
    createNewListContainer
}