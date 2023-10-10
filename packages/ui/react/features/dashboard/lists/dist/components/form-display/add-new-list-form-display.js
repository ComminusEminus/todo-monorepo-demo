"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNewListFormDisplay = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _entities = require("@core/entities");
var _common = require("@reactui/common");
var _contexts = require("@reactui/contexts");
var _addnewTodoListFormPresentation = require("../add-new-list-form/presentation/addnew-todo-list-form-presentation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var AddNewListFormDisplay = function AddNewListFormDisplay() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    state = _useUIContext.state;
  var formType = state.formType;
  var theme = (0, _styledComponents.useTheme)();
  if (formType === _entities.FormType.NEW_TODOLIST) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_common.FormDisplayContainer, {
      title: 'Add New Todo List',
      formComponent: /*#__PURE__*/_react["default"].createElement(_addnewTodoListFormPresentation.AddNewTodoListFormPresentation, null)
    }));
  } else {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  }
};
exports.AddNewListFormDisplay = AddNewListFormDisplay;