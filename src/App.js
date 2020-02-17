import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3000/posts"
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let posts = data.map((post, index) => {
          return (
              <tr key={index}>
                <td>
                  <h4>{post.title}</h4>
                </td>
                <td>
                  <p>Tags: {post.tags}</p>
                </td>                 
              </tr>
          )
      })
      this.setState({posts: posts});
    })
  }

  render() {
    return (
        <div className="App">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.posts}
                </tbody>
              </table>
        </div>
    );
  }
}

export default App;