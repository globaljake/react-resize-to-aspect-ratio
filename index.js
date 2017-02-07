import React, { Component, PropTypes } from 'react';
import elementResizeEvent from 'element-resize-event';

export class Resize extends Component {

  constructor(props) {
    super(props);

    this.changeHeight = this.changeHeight.bind(this);
    this.aspectRatioMultiplier = this.aspectRatioMultiplier.bind(this);
    this.scaleToAspectRation = this.scaleToAspectRation.bind(this);
  }

  componentDidMount() {
    const { onChange = () => {} } = this.props;
    const element = document.querySelector('#resize');
    this.scaleToAspectRation(element);
    elementResizeEvent(element, (event) => {
      onChange(element, event);
      this.scaleToAspectRation(element);
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

  scaleToAspectRation(element) {
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
      <div id="resize" style={{ width: '100%', ...style }} {...rest}>
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
