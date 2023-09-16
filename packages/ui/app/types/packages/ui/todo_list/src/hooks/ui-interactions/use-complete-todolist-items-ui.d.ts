import { CompleteState } from '@core/entities';
import { IUpdateListItemResponseDTO } from '@core/entities';
export declare const useCompleteTodoListItemUI: () => {
    completeState: CompleteState | null;
    completeHandler: () => void;
    completeApiState: {
        loading: boolean;
        returnValue: IUpdateListItemResponseDTO;
        error: boolean;
    };
};
