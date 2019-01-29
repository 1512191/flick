import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import ListContainer from './../Containers/ListContainer';
import TagContainer from './../Containers/TagContainer'
import Photo from './../Component/Photo';


class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={(props) => <ListContainer {...props} menu={this.props.menu} ></ListContainer>} ></Route>
                    <Route exact path="/photo/:id/:secret" render={(props) => (<Photo {...props} menu={this.props.menu}></Photo>)} ></Route>
                    <Route exact path="/tag/:tag" render={(props) => (<TagContainer {...props} menu={this.props.menu}></TagContainer>)}></Route>
                </Switch>
            </div>
        );
    }
}
export default RouterURL;