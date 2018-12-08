import * as React from 'react';
import Header from '../view/header';
import {Banner, Card} from '../components';
import './App.scss'

class App extends React.Component {
  public render() {
    return (
      <div className="comic_container">
        <Header></Header>
        {/* <!-- 轮播显示 --> */}
        <Banner>
          <div  className="ts_img">1</div>
          <div  className="ts_img">2</div>
          <div  className="ts_img">3</div>
          <div  className="ts_img">4</div>
        </Banner>
        <div className="comic_br"></div>
        {/* <!-- nav导航 --> */}
        <nav>
          <ul className="comic_nav_ul">
            <li>
              <a>
                <i className="icon iconfont icon-Shapecopy"></i>
                <span>分类</span>
              </a>
            </li>
            <li>
              <a>
                <i className="icon iconfont icon-paixing"></i>
                <span>排行</span>
              </a>
            </li>
            <li>
              <a>
                <i className="icon iconfont icon-shoucang"></i>
                <span>收藏</span>
              </a>
            </li>
            <li>
              <a>
                <i className="icon iconfont icon-lishi"></i>
                <span>历史</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="comic_br"></div>
        {/* <!-- 编辑推荐 --> */}
        <section>
          <h2 className="comic_title">
            <strong className="title-content" style={{background: "url("+require('../assets/imges/sc_img_index.png')+") no-repeat -5.25rem 0rem"}}>[无良の推荐]</strong>
            <a className="link-more" style={{background: "url("+require('../assets/imges/sc_img_index.png')+") no-repeat -17rem -2.25rem"}}>[更多]</a>
          </h2>
        </section>
        <Card>23</Card>
      </div>
    )
  }
}

export default App;

