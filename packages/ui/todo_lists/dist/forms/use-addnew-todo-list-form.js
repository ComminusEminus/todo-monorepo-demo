"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAddNewTodoListForm = void 0;
var _reactHookForm = require("react-hook-form");
var _yup = require("@hookform/resolvers/yup");
var yup = _interopRequireWildcard(require("yup"));
var _di = require("@core/di");
var _contexts = require("@ui/contexts");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var schema = yup.object().shape({
  title: yup.string().required()
}).required();
var useAddNewTodoListForm = function useAddNewTodoListForm() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    setUpdate = _useUIContext.setUpdate,
    userProfile = _useUIContext.userProfile;
  var _useForm = (0, _reactHookForm.useForm)({
      resolver: (0, _yup.yupResolver)(schema)
    }),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.formState.errors;
  var onSubmit = handleSubmit(function (data) {
    if (!userProfile) {
      return;
    }
    try {
      var response = _di.addNewTodoList.execute(data, userProfile.id);
      setUpdate === null || setUpdate === void 0 ? void 0 : setUpdate("New list has been added");
    } catch (_unused) {
      //create error boudary
      console.log('An error occured adding new todo item');
    }
  });
  return {
    onSubmit: onSubmit,
    register: register,
    handleSubmit: handleSubmit,
    errors: errors
  };
};
exports.useAddNewTodoListForm = useAddNewTodoListForm;