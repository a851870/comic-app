import * as PropTypes from 'prop-types';
import * as React from 'react';
import classNames from 'classnames';
import ContainerContext from './ContainerContext'
import { getSize } from './mixin';

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  order?: number,
  bh?: number | string,
  bw?: number | string,
  prefixCls?: string,
}

export default class Box extends React.Component<BoxProps> {
  static propTypes = {
    order: PropTypes.number,
    bh: stringOrNumber,
    bw: stringOrNumber,
    className: PropTypes.string,
    children: PropTypes.node
  }

  render() {
    const props = this.props
    const {
      order, bh, bw, className, prefixCls = 'fbox', children, ...others
    } = props;

    const classes = classNames({
      [`${prefixCls}`]: prefixCls,
    }, className)

    const boxHeight = getSize(bh, 'height');
    const boxWidth = getSize(bw, 'width');

    others.style = {...others.style, ...boxHeight, ...boxWidth}

    return (
      <ContainerContext.Consumer>
        {({ gutter, flex }) => {
          let style = others.style;
          if(!flex || flex as string === 'row') {
            if ((gutter as number) > 0) {
              style = {
                marginLeft: (gutter as number) / 2,
                marginRight: (gutter as number) / 2,
                ...style,
              }
            }
          } else if(flex as string === 'column') {
            if ((gutter as number) > 0 ) {
              style = {
                marginTop: (gutter as number) / 2,
                marginBottom: (gutter as number) / 2,
                ...style,
              }
            }
          }
          console.log(gutter, flex,  style)
          return <div {...others} style={style} className={classes}>{children}</div>;
        }}
      </ContainerContext.Consumer>
    )
  }
}
