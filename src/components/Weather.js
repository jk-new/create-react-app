import React from "react"
import "../App.css"

class Weather extends React.Component{
    render(){
        return(
            <div>
                    <i className={`wi ${this.props.weatherIcon}`}/>
                <div id="content">   
                    <p style={{display : this.props.city && this.props.country ? "block" : "none"}}><span>Location: </span>{this.props.city} , {this.props.country}</p>
                    <p style={{display : this.props.city && this.props.country ? "block" : "none"}}><span>Temperature: </span>{this.props.temperature}°C</p>
                    <p style={{display : this.props.city && this.props.country ? "block" : "none"}}><span>Humidity: </span>{this.props.humidity}%</p>
                    <p style={{display : this.props.city && this.props.country ? "block" : "none"}}><span>Wind: </span>{this.props.wind*3.6.toPrecision(1)} km/h</p>
                    <p style={{display : this.props.city && this.props.country ? "block" : "none"}}><span>Description: </span>{this.props.description}</p>
                    <p id='err' style={{display : !this.props.city && !this.props.country ? "block" : "none"}}>{this.props.error}</p>
                </div>  
            </div>
        )
    }
}

export default Weather