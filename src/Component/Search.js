import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }
    onChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        let tag = this.state.search;
        let { history } = this.props;
        history.push(`/tag/:${tag}`);
    }
    handleKeyUp = (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
            let tag = this.state.search;
            let { history } = this.props;
            history.push(`/tag/:${tag}`);
        }
    }
    render() {
        return (

            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" onKeyUp={(e) => this.handleKeyUp(e)} onChange={(e) => this.onChange(e)} name="search" placeholder="Search.." defaultValue={this.state.search} />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>

        );
    }
}

export default withRouter(Search);