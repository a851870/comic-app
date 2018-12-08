import * as React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import {setTransitionDuration} from '../common/Dom'
import {SwiperProps, SwiperState} from './propsType';
import './index.scss';

export default class Banner extends React.Component<SwiperProps> {
  static defaultProps: SwiperProps = {
    autoplay: true,
    speed: 300,
    delay: 3000,
    easing: 'ease',
    pagination: true
  }

  static propTypes = {
    speed: PropTypes.number,
    delay: PropTypes.number,
    autoplay: PropTypes.bool,
    pagination: PropTypes.bool,
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
  slider: any;
  count: number;
  autoPlayTimer: any;
  isMobile: boolean;

  constructor(props: SwiperProps) {
    super(props);
    this.isMobile = 'ontouchstart' in document;
  }

  componentWillMount() {
    if(this.props.autoplay) {
      this.startAutoplay();
    }
  }

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

  getBulletItem = (bullets: number[]) => {
    return bullets.map((v: number) =>{
      const styleClass = classNames(
        "pagination-bullet",
        {
          "pagination-bullet-active": this.state.activeIndex === v
        }
      );
      return (<div key={v} className={styleClass}/>);
    })
  }

  swipeStart = () => {

  }

  swipeMove = () => {

  }

  swipeEnd = () => {

  }

  slideNext = (disabled: boolean = true) => {
    if (disabled) {
      return;
    }
    let {activeIndex} = this.state;
    activeIndex++;
    this.slideTo(activeIndex);
  }

  slideTo = (index: number) => {
    const {width} = this.state;
    let style: any;
    let activeIndex = index;

    if (activeIndex < 0) {
        activeIndex = this.count - 1;
    } else if (activeIndex >= this.count) {
        activeIndex = 0;
    }

    style = {
      x: -(width * activeIndex),
      activeIndex,
    }

    this.setState(style, ()=>{})
  }


  startAutoplay(): any {
    if(this.autoPlayTimer) {
      return false;
    }
    this.autoPlayTimer = setInterval(() => {
      setTransitionDuration(this.wrapper, this.props.speed!)
      this.slideNext(false)
    }, this.props.delay)
  }

  public render() {
    const { children, pagination, speed, easing } = this.props;
    const { width, x} = this.state;
    const bullets: number[] = [];

    this.count = React.Children.count(children);
    const childrens = React.Children.map(children,
      (child: React.ReactElement<any>, index: number)=> {
        const childStyles: any = {};
        childStyles.width = width;
        bullets.push(index);
        return React.cloneElement((
          <div className="slide" style={childStyles}>{child}</div>
        ),{})
      }
    )

    const styles = {
      transform: `translate3d(${x}px, 0, 0)` ,
      WebkitTransform: `translate3d(${x}px, 0, 0)` ,
      msTransform: `translate3d(${x}px, 0, 0)`,
      WebkitTransition: `-webkit-transform ${speed}ms ${easing}`,
      transition: `transform ${speed}ms ${easing}`,
    };

    return (
      <section className="banner">
        <div
          ref={this.getWrapperRef}
          style={styles}
          onMouseDown={this.isMobile ? () => false : this.swipeStart}
          onMouseMove={this.isMobile ? () => false : this.swipeMove}
          onMouseUp={this.isMobile ? () => false : this.swipeEnd}
          onMouseLeave={this.isMobile ? () => false : this.swipeEnd}
          onTouchStart={this.isMobile ? this.swipeStart : () => false}
          onTouchMove={this.isMobile ? this.swipeMove : () => false}
          onTouchEnd={this.isMobile ? this.swipeEnd : () => false}
          className="wrapper">
          { childrens }
        </div>
        {pagination ? (
          <div className="pagination">
            {this.getBulletItem(bullets)}
          </div>) : null
        }
      </section>
    );
  }
}
