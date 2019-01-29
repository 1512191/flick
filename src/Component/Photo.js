
import React, { Component } from 'react';
import api from './../api.service'
import './../photo.css'
import { NavLink } from 'react-router-dom'
class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inforPhoto: {},
            owner: '',
            title: '',
            url: '',
            tag: [],

        }
        this._isMounted = false;
        this.name = "Photo"
    }
    componentWillMount() {
        this.scrollListener = window.addEventListener('scroll', (e) => {
            document.body.scrollTop = 0
        })
        window.scrollTo(0, 0)
    }
    componentDidMount() {

        this.props.menu(this.name);
        const { match } = this.props;
        this._isMounted = true;
        if (match && this._isMounted) {
            const { id, secret } = match.params;
            this.getInfor(id, secret);
        }


    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    async getInfor(id, secret) {
        const res = await api.getphotoItem(id, secret);
        const { data } = await res;
        // console.log(data)
        if (this._isMounted && data.photo) {
            let photo = data.photo

            this.setState({
                inforPhoto: photo,

                owner: photo.owner.username,
                title: photo.title._content,
                tag: photo.tags.tag,
                url: photo.urls.url._content,
            })
        }
        else {
            console.log('Không có dữ liệu!')
        }
    }
    render() {
        const { owner, title, tag, inforPhoto } = this.state;
        let url = inforPhoto?`https://farm${inforPhoto.farm}.staticflickr.com/${inforPhoto.server}/${inforPhoto.id}_${inforPhoto.secret}.jpg`:"";
        let tagItem = tag?tag.map((item, index) => {
            return <NavLink className="btn btn-infor" key={index} to={`/tag/${item._content}`}><li key={index}>{item._content}</li></NavLink>
        }):[]
        let col1 = [];
        for (let i = 0; i < tagItem.length / 2; i++) {
            col1.push(tagItem[i]);
        }
        tagItem = tagItem.filter((index) => {
            return col1.indexOf(index) < 0;
        })
        return (



            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <img src={url} className="img-responsive" width="450px" height="300px" alt={title} />

                        <span className="label label-info info_photo">
                            <p>{`Title : ${title}`}</p>
                            <p>{`Owner : ${owner}`}</p>
                        </span>
                    </div>
                    <div className="col-md-4 tag">
                        <h1>TAGS</h1>
                        <div className="col-md-2 left autowidth">
                            {col1}
                        </div>
                        <div className="col-md-2 right autowidth">
                            {tagItem}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Photo;