import { IDeleteListRequestDTO } from '@core/entities';
export declare const mapTodoListDeleteRequest: (body: IDeleteListRequestDTO) => {
    listId: string;
    error: boolean;
};
