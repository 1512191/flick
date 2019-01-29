import React, { Component } from 'react';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Explode"
        }
    }

    render() {

        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.menu}</h3>
                </div>

            </div>
        );
    }
}

export default Panel;