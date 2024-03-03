const endpoint = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Rampur,India?key=JA2H5PCDJPWQE5JGJNE4USZ96";


const apikey = "JA2H5PCDJPWQE5JGJNE4USZ96";

export  function getEndpoint(cityName){

// return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=${apikey}`;
return`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline//${cityName}?key=${apikey}`;


} 
