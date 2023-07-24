import { DefaultTheme } from 'styled-components'; 
import {colors} from './colors'
import {space} from './space'
import {borderRadius} from './borderRadius'
import {shadow} from './shadow'
import {breakpoints} from './breakpoints'
import {opacityState} from './opacityState'


export const BaseTheme: DefaultTheme = {
    colors: colors,
    space: space,
    borderRadius: borderRadius,
    shadow: shadow,
    breakpoints: breakpoints,
    opacityState: opacityState,
}
