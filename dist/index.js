'use strict';var _extends=Object.assign||function(a){for(var d,b=1;b<arguments.length;b++)for(var e in d=arguments[b],d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e]);return a},_createClass=function(){function a(b,d){for(var f,e=0;e<d.length;e++)f=d[e],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,d,e){return d&&a(b.prototype,d),e&&a(b,e),b}}(),_react=require('react'),_react2=_interopRequireDefault(_react),_elementResizeEvent=require('element-resize-event'),_elementResizeEvent2=_interopRequireDefault(_elementResizeEvent);Object.defineProperty(exports,'__esModule',{value:!0}),exports.Resize=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){var e={};for(var d in a)0<=b.indexOf(d)||Object.prototype.hasOwnProperty.call(a,d)&&(e[d]=a[d]);return e}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var Resize=exports.Resize=function(a){function b(d){_classCallCheck(this,b);var e=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,d));return e.state={element:null},e.scaleToAspectRatio=e.scaleToAspectRatio.bind(e),e}return _inherits(b,a),_createClass(b,[{key:'componentDidMount',value:function componentDidMount(){var f=this,_props$onChange=this.props.onChange,d=void 0===_props$onChange?function(){}:_props$onChange,e=this.wrap;this.setState({element:e}),this.scaleToAspectRatio(e),(0,_elementResizeEvent2.default)(e,function(g){d(e,g),f.scaleToAspectRatio(e)})}},{key:'aspectRatioMultiplier',value:function aspectRatioMultiplier(d){if(!d)return 0;if(1!==(d.match(/:/g)||[]).length)return console.log('invalid aspect ratio'),0;var e=d.split(':');return e[1]/e[0]}},{key:'scaleToAspectRatio',value:function scaleToAspectRatio(d){var f=d||this.state.element,e=this.props.aspectRatio,g=this.aspectRatioMultiplier(e);g&&this.changeHeight(f,f.offsetWidth*this.aspectRatioMultiplier(e))}},{key:'changeHeight',value:function changeHeight(d,e){d.style.height=e+'px'}},{key:'render',value:function render(){var g=this,_props=this.props,d=_props.aspectRatio,_props$style=_props.style,f=void 0===_props$style?{}:_props$style,e=_objectWithoutProperties(_props,['aspectRatio','style']);return _react2.default.createElement('div',_extends({style:_extends({width:'100%'},f)},e,{ref:function ref(h){g.wrap=h}}),this.props.children)}}]),b}(_react.Component);Resize.propTypes={children:_react.PropTypes.node.isRequired,aspectRatio:_react.PropTypes.string,style:_react.PropTypes.object,onChange:_react.PropTypes.func},exports.default=Resize;
