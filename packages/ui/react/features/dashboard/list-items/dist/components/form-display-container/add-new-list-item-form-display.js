"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNewListItemFormDisplay = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _entities = require("@core/entities");
var _common = require("@reactui/common");
var _contexts = require("@reactui/contexts");
var _addnewTodoListItemFormPresentation = require("../add-new-list-item-form/presentation/addnew-todo-list-item-form-presentation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var AddNewListItemFormDisplay = function AddNewListItemFormDisplay() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    state = _useUIContext.state;
  var formType = state.formType;
  var theme = (0, _styledComponents.useTheme)();
  if (formType === _entities.FormType.NEW_TODOLIST_ITEM) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_common.FormDisplayContainer, {
      title: 'Add New Todo List Item',
      formComponent: /*#__PURE__*/_react["default"].createElement(_addnewTodoListItemFormPresentation.AddNewTodoListItemFormPresentation, null)
    }));
  } else {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  }
};
exports.AddNewListItemFormDisplay = AddNewListItemFormDisplay;