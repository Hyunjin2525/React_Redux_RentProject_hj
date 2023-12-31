import {
    FETCH_NEWS,
    FETCH_PAGE,
    FETCH_RENT_DETAIL,
    FETCH_RENT_LIST,
    FETCH_RENT_MAIN,
    FETCH_RENT_MAIN_MARKER
} from "./types";
import axios from "axios";
import {type} from "@testing-library/user-event/dist/type";



// 메인
export const fetchRentMainList=()=>dispatch=>{
    axios.get('http://localhost/rent/main_list_react').then(res=>dispatch({
        type:FETCH_RENT_MAIN,
        payload:res.data
    }))
}

export const fetchRentMainMakerList=()=>dispatch=>{
    axios.get('http://localhost/rent/main_list_three_react').then(res=>dispatch({
        type:FETCH_RENT_MAIN_MARKER,
        payload:res.data
    }))
}

//리스트
export const fetchRentList=(fd,page)=>dispatch=>{
    axios.get('http://localhost/rent/list_react',{
        params:{
            fd:fd,
            page:page
        }
    }).then(res=>dispatch({
        type:FETCH_RENT_LIST,
        payload:res.data
    }))
}

export const fetchPage=(fd,page)=>dispatch=>{
    axios.get('http://localhost/rent/rent_page_react',{
        params:{
            fd:fd,
            page:page
        }
    }).then(res=>dispatch({
        type:FETCH_PAGE,
        payload:res.data
    }))
}

// 디테일
export const fetchRentDetail=(rno)=>dispatch=>{
    axios.get('http://localhost/rent/rent_detail',{
        params:{
            rno:rno
        }
    }).then(res=>dispatch({
        type:FETCH_RENT_DETAIL,
        payload:res.data
    }))
}

//뉴스
export const fetchNews=(fd)=>dispatch=>{
    axios.get('http://localhost/news/news_find_react',{
        params:{
            fd:fd
        }
    }).then(res=>dispatch({
        type:FETCH_NEWS,
        payload:res.data
    }))
}

