import React, { Component, PropTypes } from 'react';
import elementResizeEvent from 'element-resize-event';


export class Resize extends Component {

  constructor(props) {
    super(props);

    this.state = {
      element: null,
    }

    this.scaleToAspectRatio = this.scaleToAspectRatio.bind(this);
  }

  componentDidMount() {
    const { onChange = () => {} } = this.props;
    const element = this.wrap;
    this.setState({ element });
    this.scaleToAspectRatio(element);
    elementResizeEvent(element, (event) => {
      onChange(element, event);
      this.scaleToAspectRatio(element);
    });
  }

  aspectRatioMultiplier(ratio) {
    if (!ratio) return 0;
    if ((ratio.match(/:/g) || []).length !== 1) {
      console.log('invalid aspect ratio');
      return 0;
    }
    const ratioValues = ratio.split(':');
    return ratioValues[1] / ratioValues[0];
  }

  scaleToAspectRatio(el) {
    const element = el || this.state.element;
    const { aspectRatio } = this.props;
    const arm = this.aspectRatioMultiplier(aspectRatio);
    if (!arm) return;
    this.changeHeight(element, element.offsetWidth * this.aspectRatioMultiplier(aspectRatio));
  }

  changeHeight(element, val) {
    element.style.height = `${val}px`;
  }

  render() {
    const { aspectRatio, style = {}, ...rest } = this.props;
    return (
      <div style={{ width: '100%', ...style }} {...rest} ref={(c) => { this.wrap = c;}}>
        {this.props.children}
      </div>
    );
  }

}

Resize.propTypes = {
  children: PropTypes.node.isRequired,
  aspectRatio: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
};


export default Resize;
