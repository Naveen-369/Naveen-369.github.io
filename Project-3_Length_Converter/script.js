converter=()=>{
    var convert=document.getElementById("OutputMeasurement");
    var value=document.getElementById("InputMeasurement").value;
    value/=2.54;
    convert.innerHTML=value.toFixed(3)+ " inches";
}