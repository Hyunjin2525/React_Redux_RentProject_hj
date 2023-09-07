import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchPage, fetchRentList} from "../../actions/rentActions";

function List(){
    const [fd,setFd]=useState('')
    const dispatch=useDispatch()


    useEffect(() => {
        dispatch(fetchRentList(fd,1))
        dispatch(fetchPage(fd,1))
     }, []);


    //검색 리스트
    const findChange = (e) => {
        setFd(e.target.value)
    }

    const findBtn = () => {

        dispatch(fetchRentList(fd,1))
        dispatch(fetchPage(fd,1))
    }
    const rentList=useSelector((state)=>state.rents.rent_list)
    const pageData=useSelector((state)=>state.rents.page_data)

    const html=rentList.map((r,key)=>{
        return(
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                <div className="block2">
                    <div className="block2-pic hov-img0">
                        <img src={r.image} alt="IMG-PRODUCT"/>

                        <NavLink to={"/shop/detail/"+r.rno} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                            상품 보기
                        </NavLink>
                    </div>

                    <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                            <NavLink to={"/shop/detail/"+r.rno} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                {r.car_name}
                            </NavLink>

                            <span className="stext-105 cl3">
                                       <i className="fa-solid fa-won-sign" style={{"color":"black"}}></i> {r.price}
                        </span>
                        </div>

                        <div className="block2-txt-child2 flex-r p-t-3">
                            {r.maker}
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    //페이지
    const paging=(page)=>{
        dispatch(fetchRentList(fd,page))
        dispatch(fetchPage(fd,page))
    }


    const pagePrev=(page)=>{
        paging(page)
    }
    const pageNext=(page)=>{
        paging(page)
    }




    return(
        <Fragment>
            <div className="bg0 m-t-23 p-b-140">
                <div className="container">
                    <div className="flex-w flex-sb-m p-b-52">
                        <div className="panel-search w-full p-t-10 p-b-15">
                            <div className="bor8 dis-flex p-l-15" style={{"width":"350px"}}>
                                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04" onClick={findBtn}>
                                    <i className="zmdi zmdi-search"></i>
                                </button>
                                <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" value={fd}  placeholder="자동차명 검색" onChange={findChange}/>
                            </div>
                        </div>

                    </div>

                    <div className="row isotope-grid">
                            {html}
                    </div>
                    <div className="flex-l-m flex-w w-full p-t-10 m-lr--7" style={{ "display": "flex", "justify-content": "center", "align-items": "center"}}>
                        <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1" onClick={()=>pagePrev(pageData.curpage>1?pageData.curpage-1:pageData.curpage)}>
                            이전
                        </a>
                       <strong>{pageData.curpage} page/ {pageData.totalpage} pages</strong>
                        <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1" onClick={()=>pageNext(pageData.curpage<pageData.totalpage?pageData.curpage+1:pageData.curpage)}>
                            다음
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default List;