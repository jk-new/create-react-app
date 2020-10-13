import React from "react"
import "../App.css"

class Form extends React.Component{
    render(){
        return(
            <form name="form1" onSubmit = {this.props.GetWeather}>
                <input type="text" autoComplete="off" name="city" placeholder="City..." ></input>
                <input type="text" autoComplete="off" name="country" placeholder="Country..."></input>
                <button>Get Weather</button>
            </form>
        )
    }

}

export default Form

