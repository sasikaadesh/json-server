import React from 'react';
import ReactDOM from 'react-dom';
import { maxHeaderSize } from 'http';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: "green" };
//   }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
//   shouldComponentUpdate() {
//     return false;
//   }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
        <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <button type="button" onClick={this.changeColor}>Change color</button>
            <div id="mydiv"></div>
        </div>
    );
  }
}

export default Header;
// ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));