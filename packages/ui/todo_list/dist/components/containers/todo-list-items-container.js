"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoListItemContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _text = require("@design/text");
var _styledComponents = require("styled-components");
var _mapTodoListItems = require("../other/map-todo-list-items");
var _common = require("@ui/common");
var _useOpenNewListItemForm = require("../../hooks/ui-interactions/use-open-new-list-item-form");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TodoListItemContainer = function TodoListItemContainer(_ref) {
  var filteredList = _ref.filteredList;
  var _useOpenAddNewListIte = (0, _useOpenNewListItemForm.useOpenAddNewListItemForm)(),
    openAddNewListItemFormHandler = _useOpenAddNewListIte.openAddNewListItemFormHandler,
    state = _useOpenAddNewListIte.state;
  var theme = (0, _styledComponents.useTheme)();
  if (!filteredList) {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      flexGrow: '2',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      background: theme.colors.neutral.surface
    }, /*#__PURE__*/_react["default"].createElement(_text.Text, {
      text: 'No List Selected',
      color: theme.colors.neutral.onBackground,
      fontSize: theme.space.md,
      fontFamily: 'Albert_Sans'
    }));
  } else if (filteredList.length > 0) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_container.Container, {
      background: theme.colors.neutral.background,
      width: '100%',
      maxHeight: '100%',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      flexGrow: '2',
      overflowx: 'hidden',
      overflowy: 'auto'
    }, /*#__PURE__*/_react["default"].createElement(_mapTodoListItems.MapTodoListItems, {
      list: filteredList
    })), /*#__PURE__*/_react["default"].createElement(_container.Container, {
      flexGrow: '0',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      background: theme.colors.neutral.surface
    }, /*#__PURE__*/_react["default"].createElement(_common.OpenFormButton, {
      onClick: openAddNewListItemFormHandler
    })));
  } else {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_container.Container, {
      flexGrow: '2',
      mt: '10px',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      background: theme.colors.neutral.surface
    }, /*#__PURE__*/_react["default"].createElement(_text.Text, {
      text: 'No Todo Items in List',
      color: theme.colors.neutral.onBackground,
      fontSize: theme.space.md,
      fontFamily: 'Albert_Sans'
    })), /*#__PURE__*/_react["default"].createElement(_container.Container, {
      flexGrow: '0',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      background: theme.colors.neutral.surface
    }, /*#__PURE__*/_react["default"].createElement(_common.OpenFormButton, {
      onClick: openAddNewListItemFormHandler
    })));
  }
};

/*

return(
        <>
            {
                filteredList === null && (
                    <Container flexDirection = {'column'} background = {theme.colors.neutral.surface}>
                        <Text text = {'No List Selected'} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Albert_Sans'} />
                    </Container>
                )
            }
            {
                filteredList.length > 0 && (
                    <Container flexDirection = {'column'} background = {theme.colors.neutral.surface}>
                        <FilterListButtonGroup filterListHandler = {filterListHandler} filterListState = {filterListState}/>
                        <MapTodoListItems list = {filteredList}/>
                        <OpenFormButton onClick = {useOpenAddNewListItemForm} />
                    </Container>
                )
            }
        </>
    )
    else if(filteredList.length === 0){
        return(
            <Container flexDirection = {'column'} background = {theme.colors.neutral.surface}>
                <Text text = {'Selected List Has No Todos!'} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Albert_Sans'} />
                <OpenFormButton onClick = {useOpenAddNewListItemForm} />
            </Container>
        )
    }

*/
exports.TodoListItemContainer = TodoListItemContainer;