import React, { Component } from 'react'
// import { connect } from 'react-redux'

class Portfolio extends Component {
  constructor() {
    super()
    // initialize your options array on your state
    this.state = {
      options: []
    }
  }

  onChange(e) {
    // current array of options
    const options = this.state.options
    let index

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(+e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(+e.target.value)
      options.splice(index, 1)
    }

    // update the state with the new array of options
    this.setState({ options: options })
  }

  render() {
    return (
      <main className='portfolio'>

        <form>
          <div className="input-group">
            <label>cb1</label>
            <input type="checkbox" value={1} onChange={this.onChange.bind(this)} />
          </div>
          <div className="input-group">
            <label>cb2</label>
            <input type="checkbox" value={2} onChange={this.onChange.bind(this)} />
          </div>
          <div className="input-group">
            <label>cb3</label>
            <input type="checkbox" value={3} onChange={this.onChange.bind(this)} />
          </div>
        </form>

        <div className="selected-items">
          {this.state.options.map(number => 
             <p key={number}>item: {number}</p>
          )}
        </div>

      </main>
    )
  }
}

export default Portfolio;