import {
    FETCH_NEWS,
    FETCH_PAGE,
    FETCH_RENT_DETAIL,
    FETCH_RENT_LIST,
    FETCH_RENT_MAIN,
    FETCH_RENT_MAIN_MARKER
} from "../actions/types";

// 데이터를 저장 = useState
// useSelector((state)=> cate_food)
const initialState={
    rent_list:[],
    rent_main:[],
    rent_detail:{},
    rent_main_maker:[],
    page_data:{},
    news_data:[]
}
/*
    react = JSP
    store = DispatcherServlet
    action = @RequestMapping(types), DAO
    reducer = Model(데이터 관리)
    request = state
    JSP => DispatcherServlet => @RequestMapping => DAO => request => React => store => reducer => state
    React => 이벤트 발생 == action({type,payload}) => reducer => store => reducer에서 state갱신 ==> re-rendering => 화면 변경


       action=  type:FETCH_CATEGORY,
                payload:res.data
 */
export default function (state=initialState,action){
    console.log("reducer function call...action(전송된 값)")
    switch (action.type) {
        case FETCH_RENT_MAIN:
            return {
                ...state,
                rent_main: action.payload
            }
        case FETCH_RENT_MAIN_MARKER:
            return {
                ...state,
                rent_main_maker:action.payload
            }
        case FETCH_RENT_LIST:
            return {
                ...state,
                rent_list: action.payload
            }
        case FETCH_PAGE:
            return {
                ...state,
                page_data: action.payload
            }
        case FETCH_NEWS:
            return {
                ...state,
                news_data: action.payload
            }
        case FETCH_RENT_DETAIL:
            return {
                ...state,
                rent_detail: action.payload
            }
        default:
            return state;
    }
}