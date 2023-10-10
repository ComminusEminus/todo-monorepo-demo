"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterListButtonGroup = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _entities = require("@core/entities");
var _common = require("@reactui/common");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//import { useFilterListItemsHandler } from '../hooks/use-filter-list-items-handler'

var FilterListButtonGroup = function FilterListButtonGroup(_ref) {
  var filterListHandler = _ref.filterListHandler,
    filterListState = _ref.filterListState;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_common.Container, {
    width: '100%',
    flexBasis: '0',
    flexGrow: '0',
    justifyContent: 'stretch'
  }, /*#__PURE__*/_react["default"].createElement(_common.GroupButton, {
    type: 'button',
    background: filterListState === _entities.Filter.ALL_LIST_ITEMS ? theme.colors.primary.baseFocus : '#ffffff',
    text: 'All',
    onClick: function onClick() {
      return filterListHandler(_entities.Filter.ALL_LIST_ITEMS);
    }
  }), /*#__PURE__*/_react["default"].createElement(_common.GroupButton, {
    type: 'button',
    background: filterListState === _entities.Filter.COMPLETE_LIST_ITEMS ? theme.colors.primary.baseFocus : '#ffffff',
    text: 'Complete',
    onClick: function onClick() {
      return filterListHandler(_entities.Filter.COMPLETE_LIST_ITEMS);
    }
  }), /*#__PURE__*/_react["default"].createElement(_common.GroupButton, {
    type: 'button',
    background: filterListState === _entities.Filter.INCOMPLETE_LIST_ITEMS ? theme.colors.primary.baseFocus : '#ffffff',
    text: 'Incomplete',
    onClick: function onClick() {
      return filterListHandler(_entities.Filter.INCOMPLETE_LIST_ITEMS);
    }
  })));
};

/*
const FilterButtonStyle = styled(ButtonStyle)<ButtonProps>`
    border-radius: 0px;
    padding: 5px;
    width: ${props => props.width};
    background: ${props => props.background};
`   

interface IFilterButton{
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
    borderRadius?: string;
    elevation?: string;
    buttonStateWidth?: string;
    type?: 'button' | 'submit'| 'reset'| undefined;
    onClick?: () => void;
    size?: string;
    alignSelf?: string;
    width?: string;
    children?: JSX.Element | JSX.Element[] | string;
    icon?: string;
    buttonStyle?: string;
    display?: string;
    color?: string;
    text?: string;
    value?: string;
    background?: string;
    
}

const FilterButton = (props: IFilterButton) => {
    return(
        <FilterButtonStyle
            type = {'button'} 
            buttonStyle = { props.buttonStyle}
            value = {props.value}
            onClick = {props.onClick}
            width = {'100%'}
            background = {props.background}
            color = {props.color}
        >
            {props.text}
        </FilterButtonStyle>
    )
}
*/
exports.FilterListButtonGroup = FilterListButtonGroup;