import React from "react";


class News extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }


    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
                <h1>Hello, everybody!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )

    }

}


export default News;