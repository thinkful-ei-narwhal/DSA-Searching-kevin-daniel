import React, { Component } from 'react'

export class App extends Component {

  state = {
    input: {value: '', touched: false},
    arr: [
      89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 
      50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21,
      88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65,
      38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97,
      82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13,
      17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83,
      6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
    linSearches: null,
    binSearches: null,
    message: null
  }

  linearSearch = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i + 1;
        }
    }
    return -1;
};

  binarySearch = (array, value, start, end, count = 0) => {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return count;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return count;
    }
    else if (item < value) {
        return this.binarySearch(array, value, index + 1, end, count + 1);
    }
    else if (item > value) {
        return this.binarySearch(array, value, start, index - 1, count +1);
    }
  };

  setInput = input => {
    this.setState({input: {value: input, touched: true}});
  }

  handleLinSubmit = () => {
    this.setState({linSearches: null, message: null});
    let value = Number(this.state.input.value);
    let result = this.linearSearch(this.state.arr, value);
    if (result < 0) {
      this.setState({message: 'Could Not Find The Item!'});
    } else {
      this.setState({binSearches: result});
    }
    
  }

  handleBinSubmit = () => {
    this.setState({binSearches: null, message: null});
    let value = Number(this.state.input.value);
    let result = this.binarySearch(this.state.arr, value);
    if (!result) {
      this.setState({message: 'Could Not Find The Item!'});
    } else {
      this.setState({binSearches: result});
    }
  }

  render() {
    return (
      <div className="App">
        <form>
          <label for="search">Search our Array:</label>
          <input type="text" id="search" name="search" value={this.state.input.value} onChange={e => this.setInput(e.target.value)}/>
          <button type="submit" onClick={(e) => {
            e.preventDefault();
            this.handleLinSubmit();
          }}>Linear Search!</button>
          <button type="submit" onClick={(e) => {
            e.preventDefault();
            this.handleBinSubmit();
          }}>Binary Search!</button>
        </form>
        {this.state.linSearches && <span>This took {this.state.linSearches} searches!</span>}
        {this.state.binSearches && <span>This took {this.state.binSearches} searches!</span>}
        {this.state.message}
      </div>
    )
  }
}

export default App
