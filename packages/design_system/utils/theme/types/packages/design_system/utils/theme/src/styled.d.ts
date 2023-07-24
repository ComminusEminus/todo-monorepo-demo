import 'styled-components';
declare module 'styled-components' {
    interface DefaultTheme {
        colors: {
            primary: {
                base: string;
                onBase: string;
                baseContainer: string;
                onBaseContainer: string;
                baseHover: string;
                baseFocus: string;
                baseDisabled: string;
            };
            secondary: {
                base: string;
                onBase: string;
                baseContainer: string;
                onBaseContainer: string;
                baseHover: string;
                baseFocus: string;
                baseDisabled: string;
            };
            tertiary: {
                base: string;
                onBase: string;
                baseContainer: string;
                onBaseContainer: string;
                baseHover: string;
                baseFocus: string;
                baseDisabled: string;
            };
            neutral: {
                background: string;
                onBackground: string;
                surface: string;
                surfaceHigh: string;
                surfaceLow: string;
                onSurface: string;
                surfaceVariant: string;
                onSurfaceVariant: string;
                outline: string;
                scrim: string;
            };
            inverse: {
                inverseSurface: string;
                inverseOnSurface: string;
                inversePrimary: string;
            };
            semantic: {
                success: string;
                successHover: string;
                successFocus: string;
                onSuccress: string;
                warning: string;
                onWarning: string;
                error: string;
                errorHover: string;
                errorFocus: string;
                onError: string;
                info: string;
                onInfo: string;
                disabled: string;
                onDisabled: string;
            };
        };
        space: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        borderRadius: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        shadow: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        opacityState: {
            hover: number;
            focus: number;
            press: number;
            drag: number;
            disabledContainer: number;
            disabledStateLayer: number;
        };
    }
}
