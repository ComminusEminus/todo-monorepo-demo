import { IAddNewTodoListItemRequestDTO } from '@core/entities';
export declare const mapCreateNewListItemRequest: (body: IAddNewTodoListItemRequestDTO) => {
    title: string;
    description: string;
    listId: string;
    error: boolean;
};
