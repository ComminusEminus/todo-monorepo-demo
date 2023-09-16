import { ITodoListItem } from '@core/entities';
export declare const useDisplayListItemDetails: () => {
    readonly fetchListItemDetails: (listItemId: string) => Promise<void>;
    readonly displayItem: ITodoListItem | undefined;
};
