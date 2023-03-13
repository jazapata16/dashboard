let runScripts=()=>{
    let chart_bars = document.getElementById("chart-bars");
    console.log(chart_bars);
    let icons = document.getElementsByTagName("i");
    for (let icon of icons){
        console.log(icons);
    }
    let cards= document.getElementsByClassName("card");
    for (let card of cards){
        console.log(card);
    }
}

runScripts();

let modifyText=()=>{

    let listOfP = document.getElementsByTagName("p");
    let elementP= listOfP[3]
    elementP.innerHTML="Dinero Actual"

    let listOfH4 = document.getElementsByTagName("h4");
    let elementH4= listOfP[0]
    elementH4.innerHTML="301k"

}
modifyText();