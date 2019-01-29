import React, { Component } from 'react';
import { Link } from "react-router-dom";
class PictureItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    }
  }
  displayTitle() {
    this.setState({
      display: true,
    });
  }
  hideTitle() {
    this.setState({
      display: false,
    });
  }
  render() {
    const { item, shape } = this.props;

    let url = item?`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`:'';
    let display = "";
    if (this.state.display) {
      display = (
        <div className="interaction-view">
          <div className="photo-list-photo-interaction">
            {/* <a className="overlay no-outline">  </a> */}
            <div className="extra-tools"></div>
            <div className="interaction-bar">
              <div className="text">
                <div className="title">{item.title}</div>
                <div className="attribution">by {item.ownername} - {item.views} views</div>
              </div>
            </div>

          </div>
        </div>
      )
    }
    return (
      <Link to={`/photo/${item.id}/${item.secret}`}>
        <div className="photo-view" style={shape} onMouseOver={() => this.displayTitle()} onMouseLeave={() => this.hideTitle()}>
          {display}

          <img src={url} alt={item.title} />

        </div>
      </Link>


    );
  }
}

export default PictureItem;