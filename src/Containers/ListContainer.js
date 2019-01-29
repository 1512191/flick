import React, { Component } from 'react';
import ListPicture from './../Component/ListPicture'
import { connect } from "react-redux";
import { actionGetDataRequest, actionloadMore, actionScroll, actionClearPhoto, actionPage } from "./../Actions/List";
function mapStateToProps(state) {
    return {
        photos: state.listReducer.photos,
        page: state.listReducer.page,
        totalPage: state.listReducer.totalPage,
        gometry: state.listReducer.gometry,
        scroll: state.listReducer.scroll
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
        }
    }
}
class ListContainer extends Component {
    render() {
        const { photos, page, totalPage, gometry, scroll, getData, getPage, updatePage, clearPhoto, scrollFlag } = this.props;
        return (

            <ListPicture
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
export default connect(mapStateToProps, mapDispatchToProps)(ListPicture);