export declare const useSelectListHandler: () => {
    readonly selectListHandler: (id: string) => void;
    readonly resultValues: {
        listsData: import("@core/entities").ITodoList | null;
        selectedTodoListId: string | null | undefined;
    };
};
