import { Component } from "react";

class ProfCard extends Component{
    constructor(props){
        super(props);
       
    }

    render(){
        let {image, name, field, email, age, city } = this.props
        return(
           <section className="card">
                        <div>
                            <div className="card-details">
                                <img src={image} ></img>
                                <h4>{name}</h4>
                                <span>{field}</span>
                                <a href="javascript:void(0)">{email}</a>
                                <p>{age}</p>
                                <p>{city}</p>
                            </div>
                        </div>


           </section>
        )
    }
};

export default ProfCard;



