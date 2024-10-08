import React from "react";
import Card from "./Card";

const Employee = (props) => {
    // pdtName, pdtImg,
    const {pdtCode, pdtPrice, pdtDescription, avgFeedback: rating} = props.productDetail;
    return (
        <div className="thumbnail">
            <div className="row>">
                <div >
                    <img src="{`http://localhost:4000${pdtImg}`}" alt="product" style={{ "width": "100%" }} className={"img img-rounded img-responsive"} />
                </div>
                <div className="col-sm-6">
                    <div className={"caption"}>
                        <a href={`/productDetails/${pdtCode}`}>
                        <h3>{pdtCode}</h3></a>
                        <h4><span style={{ "color": "red" }}>Rs.{pdtPrice}</span></h4>
                        {props.status ? <h5 style={{ "color": "red", "font-weight": "bold" }}>The product is discontinued.</h5> : <p className={"description"}>{pdtDescription}</p>}
                        <Card value={rating} maxlength="6" />&nbsp; &nbsp;
                        <span style={{ "fontSize": "9px" }}>{rating}/5</span>
                    </div> <br/>
                </div>
            </div><br/>
            
        </div>
    )
}

export default Employee;