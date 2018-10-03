import React from 'react';
import Header from './components/Header';

export default class App extends React.Component {
constructor(){
  super();
  //lifecycle method 1
  // initial values for State
  // state is whats tide to the component , state is like property

  this.state = {
    day: 'wednesday'
  }

}

componentWillMount(){
 // added just before the screen
 // lifecycle method 2

 console.log(this.state.day)
}

componentDidMount(){
// after your stuff is on the screen
// lifecycle mthod 4

// fetch calls made here

console.log(this.state.day)

}

  render() {
    // life cycle mthod 3
    // Do not change state here
    console.log(this.state.day)
    return (
      
      <React.Fragment>

        <Header />
        <main>
          <p>Inside the frag</p>
        </main>

      </React.Fragment>
    );
  }
}

