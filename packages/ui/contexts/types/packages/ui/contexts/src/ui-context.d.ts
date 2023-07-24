import React from 'react';
import { IMappedUserProfile } from '@core/entities';
export interface IUIContext {
    addNewListItemForm?: string;
    setAddNewListItemForm: (arg: string) => void;
    update?: string;
    setUpdate?: (arg: string) => void;
    userProfile?: IMappedUserProfile;
    setUserProfile: (arg: IMappedUserProfile | undefined) => void;
    viewTodoList?: string;
    setViewTodoList?: (arg: string) => void;
    viewTodoListItem?: string;
    setViewTodoListItem?: (arg: string) => void;
    formsState?: string;
    setFormsState?: (arg: string) => void;
}
export declare const UIContext: React.Context<IUIContext>;
export declare const useUIContext: () => {
    addNewListItemForm?: string | undefined;
    setAddNewListItemForm: (arg: string) => void;
    update?: string | undefined;
    setUpdate?: ((arg: string) => void) | undefined;
    userProfile?: IMappedUserProfile | undefined;
    setUserProfile: (arg: IMappedUserProfile | undefined) => void;
    viewTodoList?: string | undefined;
    setViewTodoList?: ((arg: string) => void) | undefined;
    viewTodoListItem?: string | undefined;
    setViewTodoListItem?: ((arg: string) => void) | undefined;
    formsState?: string | undefined;
    setFormsState?: ((arg: string) => void) | undefined;
};
export interface IUIProvider {
    children?: JSX.Element | JSX.Element[];
}
export declare const UIProvider: (props: IUIProvider) => import("react/jsx-runtime").JSX.Element;
