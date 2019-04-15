import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { updateUser } from './actions/users-actions'

class App extends Component {

  constructor (props) {
    super(props)

    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  onUpdateUser (event) {
    this.props.onUpdateUser(event.target.value)
  }

  render () {
    return (
      <div className="App">
        <input onChange={ this.onUpdateUser }/>
        { this.props.user }
      </div>
    )
  }
}

const mapStateProps = state => ({
  products: state.products,
  user: state.user,
})

const mapActionsToProps = {
  onUpdateUser: updateUser,
}

export default connect(mapStateProps, mapActionsToProps)(App)
