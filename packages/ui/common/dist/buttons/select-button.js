"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectListButtonStyle = exports.SelectButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _buttons = require("@design/buttons");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject; //import {useSelectTodoListItem} from '../../hooks/ui-interactions/use-select-todolist-item'
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SelectListButtonStyle = (0, _styledComponents["default"])(_buttons.ButtonStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border-radius: 0px;\n    padding: 20px 50% 20px 20px;\n    width: ", ";\n    background: ", ";\n    font-family: ", ";\n    border: none;\n        \n"])), function (props) {
  return props.width;
}, function (props) {
  return props.background;
}, function (props) {
  return props.fontFamily;
});
exports.SelectListButtonStyle = SelectListButtonStyle;
var SelectButton = function SelectButton(props) {
  return /*#__PURE__*/_react["default"].createElement(SelectListButtonStyle, {
    type: 'button',
    buttonStyle: props.buttonStyle,
    value: props.value,
    onClick: function onClick() {
      return props.onClick;
    },
    width: '100%',
    background: props.background,
    color: props.color,
    fontFamily: props.fontFamily,
    display: 'flex',
    justifyContent: 'flex-end'
  }, props.text);
};

/*
export const SelectListItemButton = () => {
    const {selectListItemForDetailViewHandler, resultValues} = useSelectTodoListItem()
    const {listItemData} = resultValues

    const theme = useTheme()
    if(listItemData){
        return(
            <SelectListButton 
                //background = {theme.colors.neutral.surfaceLow} 
                color = {theme.colors.neutral.onSurfaceVariant} 
                fontFamily = {'Albert_Sans'}
                text = {listItemData.title}
                onClick = {selectListItemForDetailViewHandler}
            />
        )
    }else{
        return(
            <Text text = {'...Loading'} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Barlow'}/>
        )
    }

}


<Container onClick = {selectListItemForDetailViewHandler} flexDirection = {'column'}>
                <Text text = {listItemData.title} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Barlow'}/>
            </Container>

*/
exports.SelectButton = SelectButton;