import { ITodoListItem, IHttpResponse, CompleteState } from '@core/entities';
export declare const mapGetListItemByIdResponse: (response: IHttpResponse) => (listItem: ITodoListItem) => {
    _id: string;
    title: string;
    description: string;
    complete: CompleteState;
};
