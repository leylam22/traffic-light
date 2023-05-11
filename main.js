const red = document.querySelector("#red")
const yellow = document.querySelector("#amber")
const green = document.querySelector("#green")

function trafficLight(){
    setTimeout(()=>{
        red.style.backgroundColor="red"
        red.style.boxShadow= '-5px 0px 72px 48px rgba(237,14,14,0.66)'
        yellow.style.backgroundColor="rgb(168, 168, 13)"
        green.style.backgroundColor="rgb(7, 65, 7)"
        green.style.boxShadow=' -6px -5px 81px -200px rgba(0,255,37,0.66)'
    },0)
    setTimeout(()=>{
        red.style.backgroundColor="rgb(159, 16, 16)"
        red.style.boxShadow=' -6px -5px 81px -185px rgba(237,14,14,0.66)'
        yellow.style.backgroundColor="yellow"
        yellow.style.boxShadow=' -6px -5px 81px 49px rgba(241,255,0,0.66)'
        green.style.backgroundColor="rgb(7, 65, 7)"
    },10000)
    setTimeout(()=>{
        red.style.backgroundColor="rgb(159, 16, 16)"
        yellow.style.backgroundColor="rgb(168, 168, 13)"
        yellow.style.boxShadow=' -6px -5px 81px -200px rgba(241,255,0,0.66)'
        green.style.backgroundColor="rgb(0, 255, 0)"
        green.style.boxShadow=' -6px -5px 81px 40px rgba(0,255,37,0.66)'
    },12000)
}
trafficLight()
setInterval(trafficLight,27000)


