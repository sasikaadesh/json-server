import React, { Component } from 'react';
import ChildComponent from './firstChild';  // we need to import the child component first
import Header from './Header';
class ParentComponent extends Component {
  render() {
    return (
        <div>
          <Header/>
          <h1>
            I'm the parent component.
            <ChildComponent text={"I'm the 1st child"} />
            <ChildComponent text={"I'm the 2nd child"} />
            <ChildComponent text={"I'm the 3rd child"} />
          </h1>
      </div>
    );
  }
}
export default ParentComponent;