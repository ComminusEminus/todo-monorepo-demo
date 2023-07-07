import * as UC from '@todo/domain-logic';
declare const addNewTodoList: UC.AddNewTodoListUseCase;
declare const deleteTodoList: UC.DeleteTodoListUseCase;
declare const getAllTodoLists: UC.GetAllTodoListsUseCase;
declare const getTodoListById: UC.GetTodoListByIdUseCase;
declare const addNewListItem: UC.AddNewListItemUseCase;
declare const deleteListItem: UC.DeleteListItemUseCase;
declare const updateListItem: UC.UpdateListItemUseCase;
declare const getTodoListItemById: UC.GetTodoListItemByIdUseCase;
declare const logoutUser: UC.LogoutUserUseCase;
declare const updateUserProfile: UC.UpdateUserProfileUseCase;
declare const loginUser: UC.LoginUserUseCase;
declare const createNewUser: UC.CreateNewUserUseCase;
export { getTodoListItemById, addNewListItem, addNewTodoList, deleteListItem, deleteTodoList, getTodoListById, updateListItem, getAllTodoLists, logoutUser, updateUserProfile, loginUser, createNewUser };
//# sourceMappingURL=injection.d.ts.map