interface ButtonStyleProps {
    width?: string;
    height?: string;
    size?: string;
    buttonStyle?: string;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    alignSelf?: string;
    type?: string;
    onClick?: Function;
    pt?: string;
    pb?: string;
    pl?: string;
    pr?: string;
    color?: string;
    border?: string;
    background?: string;
    fontFamily?: string;
    padding?: string;
    textAlign?: string;
}
export type { ButtonStyleProps };
export declare const ButtonStyle: import("styled-components").StyledComponent<"button", any, ButtonStyleProps, never>;
export declare const OutlineButtonStyle: import("styled-components").StyledComponent<"button", any, ButtonStyleProps, never>;
export declare const TextButtonStyle: import("styled-components").StyledComponent<"button", any, ButtonStyleProps, never>;
export declare const SvgButtonStyle: import("styled-components").StyledComponent<"button", any, ButtonStyleProps, never>;
