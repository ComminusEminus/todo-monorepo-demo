export declare const useSelectTodoListItem: () => {
    selectListItemForDetailViewHandler: (id: string) => void;
    resultValues: {
        listItemData: import("@core/entities").ITodoListItem | null;
        selectedTodoListItemId: string | null | undefined;
    };
};
