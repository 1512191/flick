import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionGetDataRequest, actionloadMore, actionClearPhoto, actionScroll, actionPage } from "./../Actions/Tag";
import Tag from './../Component/Tag'
function mapStateToProps(state) {
    return {
        photos: state.tagReducer.photos,
        page: state.tagReducer.page,
        totalPage: state.tagReducer.totalPage,
        gometry: state.tagReducer.gometry,
        scroll: state.tagReducer.scroll
    }


}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getData: (tag) => {
            dispatch(actionGetDataRequest(tag))
        },
        getPage: (tag, page) => {
            dispatch(actionloadMore(tag, page))
        },
        updatePage: (page) => {
            dispatch(actionPage(page))
        },
        clearPhoto: () => {
            dispatch(actionClearPhoto())
        },
        scrollFlag: () => {
            dispatch(actionScroll())
        },
    }
}
class TagContainer extends Component {
    render() {
        const { photos, page, totalPage, gometry, scroll, getData, getPage, updatePage, clearPhoto, scrollFlag } = this.props;
        return (

            <Tag
                photos={photos}
                page={page}
                totalPage={totalPage}
                gometry={gometry}
                scroll={scroll}
                getData={getData}
                getPage={getPage}
                updatePage={updatePage}
                clearPhoto={clearPhoto}
                scrollFlag={scrollFlag}

            />

        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tag);