import * as React from 'react';
import Header from '../view/header';
import Banner from '../view/banner';

// import { Row, Col } from '../components/grid'
// import { Container, Box } from '../components/flutter'

class App extends React.Component {
  public render() {
    return (
      <div className="comic_container">
        <Header></Header>
        <Banner><div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div></Banner>
      </div>
    )
  }
}

export default App;

