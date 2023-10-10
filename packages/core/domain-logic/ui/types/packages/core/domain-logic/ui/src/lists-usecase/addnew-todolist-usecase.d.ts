import { ITodoListRepository } from '@core/abstractions';
import { IAddNewTodoListFormResponse, IHttpResponse } from '@core/entities';
export declare class AddNewTodoListUseCase {
    private readonly repository;
    constructor(repository: ITodoListRepository<IHttpResponse>);
    execute({ title }: IAddNewTodoListFormResponse): Promise<IHttpResponse>;
}
