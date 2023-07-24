import { ITodoListItem } from '@core/entities';
export declare const useDisplayListItemDetails: () => {
    readonly handler: (listItemId: string) => Promise<void>;
    readonly displayItem: ITodoListItem | undefined;
};
