/// <reference types="react" />
import { DialogStyleProps } from './IDialogStyleProps';
interface DialogProps extends DialogStyleProps {
    children?: JSX.Element | JSX.Element[] | string;
}
export type { DialogProps };
