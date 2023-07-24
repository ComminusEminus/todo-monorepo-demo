interface ButtonStyleProps {
    width?: string;
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
}
export type { ButtonStyleProps };
export declare const ButtonStyle: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, ButtonStyleProps, never>;
export declare const OutlineButtonStyle: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, ButtonStyleProps, never>;
export declare const TextButtonStyle: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, ButtonStyleProps, never>;
export declare const SvgButtonStyle: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, ButtonStyleProps, never>;
