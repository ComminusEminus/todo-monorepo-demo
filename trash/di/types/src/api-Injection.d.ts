import { AddNewListItemApiUseCase, DeleteListItemApiUseCase, GetListItemByIdApiUseCase, UpdateListItemApiUseCase, AddNewListApiUseCase, DeleteListApiUseCase, GetAllTodoListsApiUseCase, GetTodoListByIdApiUseCase, CreateNewUserApiUseCase, FindUserApiUseCase, UpdateUserProfileApiUseCase } from '@core/domain-logic';
import { ModelRepository } from '@core/data';
import { ITodoListContainerDocument, IUserDocument } from '@core/models';
import { ITodoListItem, ITodoList } from '@core/entities';
declare const listItemModel: ModelRepository<ITodoListItem>;
declare const listModel: ModelRepository<ITodoList>;
declare const listContainerModel: ModelRepository<ITodoListContainerDocument>;
declare const userModel: ModelRepository<IUserDocument>;
declare const addnewListItemApi: AddNewListItemApiUseCase;
declare const deleteListItemApi: DeleteListItemApiUseCase;
declare const getListItemByIdApi: GetListItemByIdApiUseCase;
declare const updateListItemApi: UpdateListItemApiUseCase;
declare const addNewListApi: AddNewListApiUseCase;
declare const deleteListApi: DeleteListApiUseCase;
declare const getAllTodoListApi: GetAllTodoListsApiUseCase;
declare const getTodoListByIdApi: GetTodoListByIdApiUseCase;
declare const createNewUserApi: CreateNewUserApiUseCase;
declare const findUserApi: FindUserApiUseCase;
declare const updateUserApi: UpdateUserProfileApiUseCase;
export { listItemModel, listModel, listContainerModel, userModel, addnewListItemApi, deleteListItemApi, getListItemByIdApi, updateListItemApi, addNewListApi, deleteListApi, getAllTodoListApi, getTodoListByIdApi, createNewUserApi, findUserApi, updateUserApi, };