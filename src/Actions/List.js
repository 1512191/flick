import *as TYPE from './../Constants/index'
import API from './../api.service';
export const actionGetDataRequest = (page = 1) => {
    return (dispatch) => {
        return API.getList(page, API.key).then(res => {
            let photos = res.data.photos.photo;
            let page = res.data.photos.page;
            let totalPage = res.data.photos.pages;
            let scroll = false;
            dispatch(actionGetData(photos, page, totalPage, scroll))
        })
    }
}
export const actionGetData = (photos, page, totalPage, scroll) => {
    return {
        type: TYPE.GET_DATA,
        photos,
        page,
        totalPage,
        scroll
    }
}
export const actionloadMore = (page) => {
    return (dispatch) => {
        return API.getList(page, API.key).then(res => {
            let photos = res.data.photos.photo;
            let page = res.data.photos.page;
            let totalPage = res.data.photos.pages;
            let scroll = false;
            dispatch(actionGetData(photos, page, totalPage, scroll))
        })
    }
}
export const actionPage = (page) => {
    return {
        type: TYPE.GET_PAGE,
        page: page + 1
    }
}
export const actionClearPhoto = () => {
    return {
        type: TYPE.CLEAR_PHOTOS
    }
}
export const actionScroll = () => {
    return {
        type: TYPE.SCROLL
    }
}