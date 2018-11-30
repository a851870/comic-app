import * as React from 'react';
import * as styles from './index.scss';
import * as logo from './logo.svg';

class Header extends React.Component {
  public render() {
    return (
      <header className={styles.header}>
        <h1 className="hide">漫画</h1>
        <div className={styles.logo}>
          <a title="漫画" href="/" className="logo_a">
            <img src={logo} className={styles.svg}></img>
          </a>
        </div>
        <a title="搜索" href="/" className="header_icon">
          <i className="icon iconfont icon-sousuo"></i>
        </a>
      </header>
    );
  }
}

export default Header;
