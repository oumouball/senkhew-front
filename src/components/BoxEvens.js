import React from 'react';
import "../css/bootstrap.min.css";
import "../css/style.css";
import { GrAddCircle } from "react-icons/gr";

const BoxEvens = (props) => {
    return (
        <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-delay="0.3s">
            <div className=" position-relative">
<<<<<<< HEAD
                <img className="img-fluid rounded w-100 event-img imgage" src= {props.image} alt="" />
=======
                <img className="img-fluid event-img rounded w-100 imgage" id='imgSpecial' src= {props.image} alt="" />
>>>>>>> e5f2a2ade660fc256a6131eff109a0a5e3bb6814
                <div className="event-overlay d-flex flex-column p-4">
                    <h4 className="me-auto">{props.nom}</h4>
                    {/* <a href="" data-lightbox="event-6" className="my-auto"> */}
                        {/* <GrAddCircle /> */}
                    {/* </a> */}
                </div>
            </div>
        </div>
    );
}

export default BoxEvens;
