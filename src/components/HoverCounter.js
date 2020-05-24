import React, { Component } from 'react'
import MyHoc from "./WithCounter";
class HoverCounter extends Component {


    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>
                    Hover {count} Times</h2>
            </div>
        )
    }
}

export default MyHoc(HoverCounter, 10)
