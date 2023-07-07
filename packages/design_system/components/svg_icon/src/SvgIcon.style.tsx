import styled from 'styled-components';

export const SvgIconStyle =  styled.svg.attrs({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
  })`
    height: ${props => props.height};
    width: ${props => props.width};
  `
