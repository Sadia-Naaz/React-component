import { getEndpoint } from "./endpoint";


export async function getweatherReportByCity(cityName){

try{
   if(!cityName.trim()){
   throw new Error("Please provide a valid city name!")
   }


    const response = await fetch(getEndpoint(cityName));
    const data = await response.json();
    return {status: "success", data};
}
catch(error){
  return{ status:"error",data: error.message||"SomeThing went wrong!"};
}


}
