import * as React from 'react';
import * as style from './index.scss';
import * as PropTypes from 'prop-types';

export interface SwiperState {
  activeIndex: number;
  height?: number;
  x?: number;
  y?: number;
  width: number;
}

class Banner extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  state: SwiperState= {
    activeIndex: 0,
    height: 0,
    x: 0,
    y: 0,
    width: 0,
  };

  wrapper: any;
  count: number;

  reset() {
    const wrapperWidth = this.wrapper.offsetWidth;
    this.setState({
      width: wrapperWidth
    })
  }

  getWrapperRef = (node: any) => {
    if(!this.wrapper && node) {
      this.wrapper = node;
      this.reset()
    }
  }

  public render() {
    const { children } = this.props;
    const { width } = this.state;

    this.count = React.Children.count(children);
    const childrens = React.Children.map(children,
      (child: React.ReactElement<any>, index: number)=> {
        // let left: number = index * width
        const childStyles: any = {};

        childStyles.width = width

        return React.cloneElement((
          <div className={style.slide} style={childStyles}>{child}</div>
        ),{})
      }
    )
    return (
      <section>
        <div  ref={this.getWrapperRef} className={style.banner}>
          { childrens }
        </div>
      </section>
    );
  }
}

export default Banner;
