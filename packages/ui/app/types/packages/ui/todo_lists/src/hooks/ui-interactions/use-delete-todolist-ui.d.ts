import { VisibilityState } from '@core/entities';
export declare const useDeleteTodoListUI: () => {
    readonly visibilityState: VisibilityState;
    readonly visibilityHandler: () => void;
    readonly deleteListApiState: {
        loading: boolean;
        errorMessage: any;
        returnValue: import("@core/entities").IUpdateListItemResponseDTO;
    };
};
