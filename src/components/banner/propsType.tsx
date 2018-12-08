export interface SwiperState {
  activeIndex: number;
  height?: number;
  x?: number;
  y?: number;
  width: number;
}

export interface SwiperProps {
  autoplay:boolean,
  pagination: boolean,
  speed: number,
  delay: number,
  easing: string
}
