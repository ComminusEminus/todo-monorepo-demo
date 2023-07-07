import React from 'react';
interface ScrimProps {
    borderRadius?: string;
    animateState?: string;
    background?: string;
    scrimType?: string;
    children?: JSX.Element | JSX.Element[] | string;
}
export declare const Scrim: (props: ScrimProps) => React.JSX.Element;
export declare const SideSheetScrim: (props: ScrimProps) => React.JSX.Element;
export declare const BottomSheetScrim: (props: ScrimProps) => React.JSX.Element;
export declare const DialogScrim: (props: ScrimProps) => React.JSX.Element;
export {};
//# sourceMappingURL=Scrim.d.ts.map