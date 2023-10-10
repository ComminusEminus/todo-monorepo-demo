var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
export var CardStyle = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    min-width: 20vw;\n    min-height: 30vh;\n    display: ", ";\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: stretch;\n    ", "\n    ", "\n"], ["\n    min-width: 20vw;\n    min-height: 30vh;\n    display: ", ";\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: stretch;\n    ", "\n    ", "\n"])), function (props) { return props.display || 'inline-flex'; }, function (props) {
    if (props.borderRadius === 'sm') {
        return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["border-radius: ", ";"], ["border-radius: ", ";"])), props.theme.borderRadius.sm);
    }
    else if (props.borderRadius === 'md') {
        return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["border-radius: ", ";"], ["border-radius: ", ";"])), props.theme.borderRadius.md);
    }
    else if (props.borderRadius == 'lg') {
        return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["border-radius: ", ";"], ["border-radius: ", ";"])), props.theme.borderRadius.lg);
    }
    else if (props.borderRadius === 'xl') {
        return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["border-radius: ", ";"], ["border-radius: ", ";"])), props.theme.borderRadius.xl);
    }
    else {
        return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["border-radius: ", ";"], ["border-radius: ", ";"])), props.theme.borderRadius.md);
    }
}, function (props) {
    if (props.cardType === 'shadow') {
        return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                    box-shadow: ", ";\n                "], ["\n                    box-shadow: ", ";\n                "])), props.theme.shadow.md);
    }
    else if (props.cardType === 'filled') {
        return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                    background: ", ";\n                "], ["\n                    background: ", ";\n                "])), props.theme.colors.primary.baseContainer);
    }
    else if (props.cardType === 'outline') {
        return css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n                    border: ", " solid ", ";\n                "], ["\n                    border: ", " solid ", ";\n                "])), props.theme.space.xs, props.theme.colors.primary.baseContainer);
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
