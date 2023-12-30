// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, text: 'Count is Even'}

  getRandomNumber = () => {
    const {text} = this.state
    const number = Math.ceil(Math.random() * 999)
    this.setState({count: number})
    if (number % 2 === 0) {
      this.setState({text: 'Count is Even'})
    } else {
      this.setState({text: 'Count is Odd'})
    }
  }

  render() {
    const {count, text} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading-text">
          Count <span>{count}</span>
        </h1>
        <p className="odd-even-text">{text}</p>
        <button type="button" className="btn" onClick={this.getRandomNumber}>
          Increment
        </button>
        <p className="para-text">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
