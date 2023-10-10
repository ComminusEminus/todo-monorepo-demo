import React from 'react'
import {SvgIconStyle} from '@design/svgicon'

interface SVGIconProps{
    viewBox?: string;
    width?: string;
    height?: string;
    path?: string;
    fill?: string;

}

export const SvgIcon = (props: SVGIconProps) => {
    return (
        <SvgIconStyle 
            viewBox= {props.viewBox}
            width= {props.width}
            height= {props.height}
        >
            <path 
                d= {props.path}
                fill = {props.fill} 
            />
        </SvgIconStyle>
    )
}