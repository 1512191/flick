import React, { Component } from 'react';
import PictureItem from './PictureItem';
class ListPicture extends Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.name = "Explode"
    }

    handleScroll = (e) => {
        const { totalPage, page, scroll } = this.props;
        if (scroll) return;
        if (totalPage <= page) return;
        let lastDivOffset = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        let pageOffset = window.pageYOffset + window.innerHeight;
        var bottomOffset = 20;
        if (pageOffset > lastDivOffset - bottomOffset) {
            this.loadMore();
        }

    }
    loadMore = () => {
        if (this._isMounted) {
            this.props.updatePage(this.props.page)
            let page = this.props.page
            this.props.getPage(page)
        }

    }
    componentDidMount() {
        this.props.menu(this.name);
        this.scrollListener = window.addEventListener('scroll', (e) => {
            this.handleScroll(e)
        })
        this._isMounted = true;
        if (this._isMounted) {
            this.props.clearPhoto();
            this.props.getData()
        }
        else {
            this.props.scrollFlag();
        }
        if (this.props.page >= this.props.totalPage) {
            this.props.scrollFlag();
        }


    }
    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener('scroll', this.handleScroll());
    }


    render() {

        let list =[];
        list = this.props.photos;
       let images =[]
        images = list.map((item, index) => (
            <PictureItem shape={this.props.gometry.boxes[index]} item={item} key={index}></PictureItem>
        ))
        return (


            <div className="container">

                <div id="mygallery" className="main fluid-centered">
                    <div className="view photo-list-view" style={this.props.gometry ? { height: this.props.gometry.containerHeight } : {}}>
                        {images}
                    </div>
                </div>
            </div>

        );
    }
}

export default ListPicture;