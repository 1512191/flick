import * as TYPE from './../Constants/index';
import justified from "justified-layout";
import { imageRatio } from './../utils/utils';
let initialState = {
    photos: [],
    page: 1,
    totalPage: 1,
    gometry: [],
    scroll: false
}
const tagReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.GET_DATA:
            return {
                ...state,
                photos: state.photos.concat(action.photos),
                page: action.page,
                totalPage: action.totalPage,
                scroll: action.scroll,
                gometry: justified(imageRatio([...state.photos, ...action.photos]))
            }
        case TYPE.GET_PAGE:
            return {
                ...state,
                page: action.page,
                scroll: true,
            }
        case TYPE.CLEAR_PHOTOS:
            return {
                photos: [],
                page: 1,
                totalPage: 1,
                gometry: [],
                scroll: false
            };
        case TYPE.SCROLL:
            return Object.assign({}, state, {
                scroll: false
            })

        default:
            return state;
    }
}
export default tagReducer;
