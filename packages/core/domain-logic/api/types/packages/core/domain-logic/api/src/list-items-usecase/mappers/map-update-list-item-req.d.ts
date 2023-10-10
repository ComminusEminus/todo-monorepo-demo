import { IUpdateListItemRequestDTO } from '@core/entities';
export declare const mapUpdateListItemRequest: (body: IUpdateListItemRequestDTO) => {
    _id: string;
    title: string;
    description: string;
    complete: string;
    error: boolean;
};
