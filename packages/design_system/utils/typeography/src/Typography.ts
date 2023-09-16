import styled, {createGlobalStyle} from 'styled-components'
import albertSans from '../fonts/Albert_Sans/AlbertSans_Bold.ttf'
import barlowExtraLigt from '../fonts/Barlow/Barlow_ExtraLight.ttf'



export const TypographyStyle = createGlobalStyle`
    @font-face{
        font-family: 'Albert_Sans';
        src: url(${albertSans})format('truetype');
    };
    @font-face{
        font-family: 'Barlow';
        src: url(${barlowExtraLigt}) format('truetype');
    }
`