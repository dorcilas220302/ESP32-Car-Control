const left_button = document.getElementById("left")
const right_button = document.getElementById("right")
const forward_button = document.getElementById("forward")
const backward_button = document.getElementById("backward")

console.log("left", left_button);
console.log("right", right_button);
console.log("forward", forward_button);
console.log("backward", backward_button);


left_button.addEventListener("mousedown", async()=>{
    left_button.style.backgroundColor = "red"
    let a = await fetch("http://192.168.1.166/left")
    a = (await a.text()).toString()
    alert(a);
})


left_button.addEventListener("mouseup", async()=>{
    left_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch("http://192.168.1.166/left/stop")
    a = (await a.text()).toString()
    alert(a);
})


right_button.addEventListener("mousedown", async()=>{
    right_button.style.backgroundColor = "red"
    let a = await fetch("http://192.168.1.166/right");
    a = (await a.text()).toString()
    alert(a);
})


right_button.addEventListener("mouseup", async()=>{
    right_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch("http://192.168.1.166/right/stop");
    a = (await a.text()).toString()
    alert(a);

})


forward_button.addEventListener("mousedown", async()=>{
    forward_button.style.backgroundColor = "red"
    let a = await fetch("http://192.168.1.166/forward")
    a = (await a.text()).toString()
    alert(a);
})


forward_button.addEventListener("mouseup", async()=>{
    forward_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch("http://192.168.1.166/forward/stop")
    a = (await a.text()).toString()
    alert(a);
})




backward_button.addEventListener("mousedown", async()=>{
    backward_button.style.backgroundColor = "red"
    let a = await fetch("http://192.168.1.166/backward")
    a = (await a.text()).toString()
    alert(a);
})



backward_button.addEventListener("mouseup", async()=>{
    backward_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch("http://192.168.1.166/backward/stop")
    a = (await a.text()).toString()
    alert(a);
})


