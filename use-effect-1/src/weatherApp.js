import { useEffect, useState } from "react";
import { SearchCity } from "./searchCity";
import {getEndpoint} from './endpoint';
import { getweatherReportByCity } from "./fetchdata";
import "./style.css";
import { Report } from "./report";

export default function App(){

const [cityName,setCityName]=useState("");
const [response,setResponse]=useState(null);
const [error,setError]=useState("");

const changeCityName =(newcityName)=>{
setCityName(newcityName);

}

 useEffect(function(){
    //  if(cityName){  this is also a method 
    //     fetch(getEndpoint(cityName)).
    //     then(response=>response.json())
    //     .then(data=>setResponse(data))
    //     .catch((error)=>setError(error));
    //  }
(async function(){
    if(cityName.trim()){
    const response = await getweatherReportByCity(cityName);
    response.status ==="success"? setResponse(response.data):setError(response.data);
}})();
 
},[cityName]);
useEffect(()=>{
    if(error){
    setTimeout(()=>{setError("")},3000)
    }
},[error]);


    return(
        <div className="container">
        <SearchCity changeCityName={changeCityName}/>
        
         {/* {response && JSON.stringify(response)}
         {error && JSON.stringify(error)}  */}
         { error && <p style={{color:"red"}}>{error}</p>}
    { response && <Report response={response}/>}
</div>)

        }
// {"queryCost":1,"latitude":28.7783,"longitude":79.0254,"resolvedAddress":"Rampur, Uttar Pradesh, India",
// "address":"rampur","timezone":"Asia/Kolkata","tzoffset":5.5,
// "description":"Warming up with a chance of rain tomorrow & Monday.",
// "days":[{"datetime":"2024-03-02","datetimeEpoch":1709317800,"tempmax":71,
// "tempmin":59.8,"temp":65.6,"feelslikemax":71,"feelslikemin":59.8,"feelslike":65.6,"dew":51.5,
// "humidity":62.1,"precip":0.187,"precipprob":100,"precipcover":70.83,"preciptype":["rain"],
// "snow":0,"snowdepth":0,"windgust":26.4,"windspeed":16.8,"winddir":78.3,"pressure":1012.8,"
// cloudcover":92.1,"visibility":14.3,"solarradiation":56.8,"solarenergy":5,"uvindex":4,"severerisk":10,
// "sunrise":"06:37:49","sunriseEpoch":1709341669,"sunset":"18:14:36","sunsetEpoch":1709383476,
// "moonphase":0.73,"conditions":"Rain, Overcast","description":"Cloudy skies throughout the day 
// with a chance of rain throughout the day.","icon":"rain","stations":["remote"],"source":"com
