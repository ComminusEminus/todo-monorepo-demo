import { ITodoListItem } from '@core/entities';
export interface ITodoListItemContainer {
    filteredList: ITodoListItem[] | null | [];
}
export declare const TodoListItemContainer: ({ filteredList }: ITodoListItemContainer) => import("react/jsx-runtime").JSX.Element;
