import React, { Component } from 'react'
import { Redirect } from 'react-router';

class ErrorBoundry extends Component {

    state = {hasError: false}

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }  

    render() {
    if (this.state.hasError) {
       return <div className='content'>
           <h2>Что-то пошло не так... </h2>
           <h3>Попробуйте перезагрузить страницу!</h3>
            <Redirect to='/news/' />
       </div> 
      }
    return this.props.children
    }
}

export default ErrorBoundry
