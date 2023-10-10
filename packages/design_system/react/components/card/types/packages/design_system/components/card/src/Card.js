import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CardStyle } from './Card.style';
import { Container } from '@design/container';
import { Text } from '@design/text';
import { useTheme } from 'styled-components';
export var Card = function (props) {
    var theme = useTheme();
    return (_jsxs(CardStyle, { cardType: props.cardType, borderRadius: props.borderRadius, display: props.display, children: [props.headline && _jsx(Container, { fontFamily: "'Albert Sans', sans-serif", flexGrow: 1, flexShrink: 2, justifyContent: 'flex-start', alignItems: 'center', pl: "5%", pr: "5%", children: _jsx(Text, { text: props.headline, color: theme.colors.neutral.onBackground, fontSize: '25px' }) }), props.subHeader && _jsx(Container, { fontFamily: "'Barlow', sans-serif", flexGrow: 1, flexShrink: 2, justifyContent: 'flex-start', alignItems: 'center', pl: "5%", pr: "5%", children: _jsx(Text, { text: props.subHeader, color: theme.colors.neutral.onBackground, fontSize: '15px' }) }), props.content && _jsx(Container, { fontFamily: "'Barlow', sans-serif", flexGrow: 4, flexShrink: 0, justifyContent: 'flex-start', alignItems: 'center', pl: "5%", pr: "5%", children: _jsx(Text, { text: props.content, color: theme.colors.neutral.onBackground, fontSize: '12px' }) }), props.actionComponents && _jsx(Container, { flexGrow: 1, flexShrink: 2, justifyContent: 'flex-end', alignItems: 'center', pl: "5%", pr: "5%", children: props.actionComponents })] }));
};
