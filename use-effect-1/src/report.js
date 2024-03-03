
import cloudy from './images/cloudy.jpg'
import  rainy from './images/rainy.jpg'
import sunny from './images/sunny.png'


export const Report =({response})=>{
    const temp = response.days[3].tempmax-273;s
    console.log(temp);
    const Image = temp>80?sunny :temp<70 ? cloudy :rainy;
    return(
     
<div className="report" style={{backgroundImage :`url(${Image})`}}>
    <p >description:{response.description}</p>
    <p>date:{response.days[0].datetime}</p>
    <p>tempmax:{response.days[3].tempmax}</p>
    <p>tempmin:{response.days[4].tempmin}</p>
    <p>conditions:{response.conditions}</p>
    <p>sunrise:{response.sunrise}</p>
</div>
    )
}