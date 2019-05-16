import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class App extends Component {
  render() {
    const { loading } = this.props.data
    console.log(this.props)
    if (loading) {
      return <div>Loading...</div>
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>{this.props.data.student.name}</p>
      </div>
    )
  }
}

export default graphql(gql`
  {
    student:getStudent(id: "1") {
      name
      courses {
        name
      }
    }
  }
`)(App)
