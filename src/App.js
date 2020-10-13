import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Weather from "./components/Weather"
import "./weather-icons/css/weather-icons.css"

const API_Key = "e8101523bf5aaaf9f4b98f06ed73d602"

class App extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        temperature : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        wind : undefined,
        description : undefined,
        error : undefined,
        weatherIcon : undefined,
      }
      this.GetWeather = this.GetWeather.bind(this)

      this.weatherIcon={
        Thunderstorm : "wi-thunderstorm",
        Drizzle : "wi-sleet",
        Rain : "wi-storm-showers",
        Snow : "wi-snow",
        Atmosphere : "wi-fog",
        Clear : "wi-day-sunny",
        Clouds : "wi-day-fog"
      }
  }

get_WeatherIcon(icon,rangeID){
  if(rangeID >=200 && rangeID <=232){this.setState({icon:this.weatherIcon.Thunderstorm})}
    else if(rangeID >=300 && rangeID <=321){this.setState({icon:this.weatherIcon.Drizzle})}
      else if(rangeID >=500 && rangeID <=531){this.setState({icon:this.weatherIcon.Rain})}  
        else if (rangeID >=600 && rangeID <=622){this.setState({icon:this.weatherIcon.Snow})}
          else if (rangeID >=701 && rangeID <=781){this.setState({icon:this.weatherIcon.Atmosphere})}  
            else if (rangeID ===800){this.setState({icon:this.weatherIcon.Clear})}
  else {this.setState({icon:this.weatherIcon.Clouds})} 
  }

  GetWeather = async(event) => {
    event.preventDefault()
    const City = event.target.elements.city.value
    const Country = event.target.elements.country.value
    const API_Call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=${API_Key}&units=metric`)
    const Data = await API_Call.json()

        if(City && Country){   
          //console.log(Data)
          if(Data.cod!=='404'){
          this.setState({
              temperature : Data.main.temp,
              city : Data.name,
              country : Data.sys.country,
              humidity : Data.main.humidity,
              wind : Data.wind.speed,
              description : Data.weather[0].description,
              error : "",
            })

            this.get_WeatherIcon(this.weatherIcon,Data.weather[0].id)

          }
            else{
              this.setState({error : "Please Enter Valid Values!"})
            }
        }
      
        else{
          this.setState({
            error : "Please Enter City and Coutry."
          })
        }
      }
      
  render(){
    return(
      <div>
        <Header/>
        <Form GetWeather={this.GetWeather}/>
        <Weather 
          temperature = {this.state.temperature}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          wind = {this.state.wind}
          description = {this.state.description}
          error = {this.state.error}
          weatherIcon = {this.state.icon}    
        />
      </div>
    )   
  }   
}

export default App;
