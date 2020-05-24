import React, { Component } from 'react'
import MyHoc from "./WithCounter";
class ClickCounter extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <button onClick={incrementCount}>
                {this.props.name} Clicked {count} Times</button>
        )
    }
}

export default MyHoc(ClickCounter, 5)
