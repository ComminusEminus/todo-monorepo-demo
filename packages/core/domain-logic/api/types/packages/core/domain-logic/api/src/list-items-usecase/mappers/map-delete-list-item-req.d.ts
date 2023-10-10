import { IDeleteListItemRequestDTO } from '@core/entities';
export declare const mapDeleteListItemRequest: (body: IDeleteListItemRequestDTO) => {
    listId: string;
    listItemId: string;
    error: boolean;
};
