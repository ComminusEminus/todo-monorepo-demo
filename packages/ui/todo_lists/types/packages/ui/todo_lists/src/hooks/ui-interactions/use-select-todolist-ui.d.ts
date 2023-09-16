export declare const useSelectTodoListUI: () => {
    readonly selectListForDetailViewHandler: (id: string) => void;
    readonly resultValues: {
        listsData: import("@core/entities").ITodoList | null;
        selectedTodoListId: string | null | undefined;
    };
};
