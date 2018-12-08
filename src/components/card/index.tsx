import * as React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  flex?: 'reverse' | 'column',
  prefixCls?: string,
}

export default class Card extends React.Component<CardProps> {
  static defaultProp: CardProps = {
    flex: 'column',
    prefixCls: 'card'
  }

  static propTypes = {
    flex: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  }

  render() {
    const {flex, prefixCls, children, className, ...other} = this.props;
    const classes = classNames({
      [`${prefixCls}-${flex}`]: flex
    }, prefixCls, className)

    return(
      <div className={classes} {...other}>
        <LazyLoad>
          <img src="./210.jpg"></img>
        </LazyLoad>
        {children}
      </div>
    )
  }
}
