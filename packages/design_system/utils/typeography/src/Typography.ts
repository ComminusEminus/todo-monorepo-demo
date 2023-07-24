import styled, {createGlobalStyle} from 'styled-components'
import AlbertSans_Bold from './AlbertSans_Bold.ttf'
import Barlow_ExtraLight from './Barlow_ExtraLight.ttf'



export const TypographyStyle = createGlobalStyle`
    @font-face{
        font-family: 'Albert_Sans';
        src: url(${AlbertSans_Bold})format('truetype');
    };
    @font-face{
        font-family: 'Barlow';
        src: url(${Barlow_ExtraLight}) format('truetype');
    }
`