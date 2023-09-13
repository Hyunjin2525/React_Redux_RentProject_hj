import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {fetchRentMainList,fetchRentMainMakerList} from "../../actions/rentActions";

function Home(){

    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchRentMainList())
        dispatch(fetchRentMainMakerList())
    }, []);

    const rentList=useSelector((state)=>state.rents.rent_main)
    console.log(rentList)
    const rentMarkerList=useSelector((state)=>state.rents.rent_main_maker)
    const html=rentList.map((r,key)=>{
        return(
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                <div className="block2">
                    <div className="block2-pic hov-img0">
                        <img src={r.image} alt="IMG-PRODUCT"/>

                        <NavLink to={"/rent/detail/"+r.rno} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                            상품 보기
                        </NavLink>
                    </div>

                    <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                            <NavLink to={"/rent/detail/"+r.rno} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                {r.car_name}
                            </NavLink>

                            <span className="stext-105 cl3">
                                       <i className="fa-solid fa-won-sign" style={{"color":"black"}}></i> {r.price}
                        </span>
                        </div>


                    </div>
                </div>
            </div>
        )
    })

    const html2=rentMarkerList.map((rm,key)=>{
        return(
        <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <div className="block1 wrap-pic-w">

                <img src={rm.image} alt="IMG-BANNER" style={{"height":"290px"}}/>

                <NavLink to={"/rent/detail/"+rm.rno} className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                    <div className="block1-txt-child1 flex-col-l">
								<span className="block1-name ltext-102 trans-04 p-b-8">
									HYUNDAI
								</span>

                    </div>

                    <div className="block1-txt-child2 p-b-4 trans-05">
                        <div className="block1-link stext-101 cl0 trans-09">
                            View Now
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
        )
    })

    return(
        <Fragment>


            <section className="section-slide">
                <div className="wrap-slick1" >
                    <div className="slick1" >
                        <div className="item-slick1" style={{"backgroundImage": 'url("static/images/car.webp")'}}>
                        </div>
                    </div>
                </div>
            </section>
            <div className="sec-banner bg0 p-t-80 p-b-50">
                <div className="container">
                    <div className="p-b-10" style={{"marginBottom":"20px"}}>
                        <h3 className="ltext-103 cl5">
                            HYUNDAI CAR
                        </h3>
                    </div>
                    <div className="row">
                        {html2}
                    </div>
                </div>
            </div>


            <section className="bg0 p-t-23 p-b-140">
                <div className="container">
                    <div className="p-b-10" style={{"marginBottom":"20px"}}>
                        <h3 className="ltext-103 cl5">
                            Row Price
                        </h3>
                    </div>
                    <div className="row isotope-grid">
                        {html}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default Home;