export declare const useSelectTodoListUI: () => {
    readonly selectListForDetailViewHandler: () => void;
    readonly resultValues: {
        listsData: import("@core/entities").ITodoList | null;
        selectedTodoListId: string | null | undefined;
    };
};
