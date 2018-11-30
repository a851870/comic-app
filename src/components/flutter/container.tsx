import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSize } from './mixin';
import ContainerContext from './ContainerContext'

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number,
  flex?: 'row' | 'column',
  fh?: number | string,
  fw?: number | string,
  prefixCls?: string,
  percent?: number
}

export default class Container extends React.Component<ContainerProps> {
  static propTypes = {
    flex: PropTypes.string,
    fh: stringOrNumber,
    fw: stringOrNumber,
    className: PropTypes.string,
    children: PropTypes.node
  }

  render() {
    const {
      fh, fw, prefixCls = 'container', style, children, flex, gutter, ...others
    } = this.props;

    const classes = classNames({
      [`${prefixCls}`]: prefixCls,
      [`${prefixCls}-${flex}`]: flex,
    })

    const containerHeight = getSize(fh, 'height');
    const containerWidth = getSize(fw, 'width');

    let boundaryStyle = {}
    if(!flex || flex as string === 'row') {
      boundaryStyle = (gutter as number) > 0 ? {
        marginLeft: (gutter as number) / -2,
        marginRight: (gutter as number) / -2,
      } : {};
    } else if(flex as string === 'column') {
      boundaryStyle = (gutter as number) > 0 ? {
        marginTop: (gutter as number) / -2,
        marginBottom: (gutter as number) / -2,
      } : {};
    }


    const containerStyle = { ...style, ...containerHeight, ...containerWidth, ...boundaryStyle}

    return (
      <ContainerContext.Provider value={{ gutter, flex }}>
        <div {...others} className={classes} style={containerStyle}>
          {children}
        </div>
      </ContainerContext.Provider>
    )
  }

}
