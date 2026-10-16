const left_button = document.getElementById("left")
const right_button = document.getElementById("right")
const forward_button = document.getElementById("forward")
const backward_button = document.getElementById("backward")

console.log("left", left_button);
console.log("right", right_button);
console.log("forward", forward_button);
console.log("backward", backward_button);

let IPAddress = "192.168.43.234"

setInterval(async () => {

     try {

        
    let a = await fetch(`http://${IPAddress}/connexion`, {
        targetAddressSpace : "local"
    })
    a = (await a.text()).toString()
 

    if (a == "connected") {
        document.getElementById("state-yes").style.display = "inline"
        document.getElementById("state-not").style.display = "none"
    }


        
    } catch (error) {
        alert("Error: " + error)
    }
    

}, 100);


left_button.addEventListener("pointerdown", async()=>{
    left_button.style.backgroundColor = "black"
    let a = await fetch(`http://${IPAddress}/left`,
         {
        targetAddressSpace : "local"
    }
    )
    a = (await a.text()).toString()
})


left_button.addEventListener("pointerup", async()=>{
    left_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch(`http://${IPAddress}/left/stop`,
         {
        targetAddressSpace : "local"
    }
    )
    a = (await a.text()).toString()
})

left_button.addEventListener("pointerleave", async()=>{
     left_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch(`http://${IPAddress}/left/stop`,
         {
        targetAddressSpace : "local"
    }
    )
    a = (await a.text()).toString()
})


left_button.addEventListener("pointercancel", async()=>{
     left_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch(`http://${IPAddress}/left/stop`,
         {
        targetAddressSpace : "local"
    }
    )
    a = (await a.text()).toString()
})




right_button.addEventListener("pointerdown", async()=>{
    right_button.style.backgroundColor = "black"
    let a = await fetch(`http://${IPAddress}/right`,
         {
        targetAddressSpace : "local"
    }
    );
    a = (await a.text()).toString()
    
})


right_button.addEventListener("pointerup", async()=>{
    right_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch(`http://${IPAddress}/right/stop`,
         {
        targetAddressSpace : "local"
    }
    );
    a = (await a.text()).toString()
  

})


right_button.addEventListener("pointerleave", async()=>{
     right_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch(`http://${IPAddress}/right/stop`,
         {
        targetAddressSpace : "local"
    }
    )
    a = (await a.text()).toString()
  
})



right_button.addEventListener("pointercancel", async()=>{
     right_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch(`http://${IPAddress}/right/stop`,
         {
        targetAddressSpace : "local"
    }
    )
    a = (await a.text()).toString()
  
})




forward_button.addEventListener("pointerdown", async()=>{
    forward_button.style.backgroundColor = "black"
    let a = await fetch(`http://${IPAddress}/forward`,
         {
        targetAddressSpace : "local"
    }
    )
    a = (await a.text()).toString()
   
})


forward_button.addEventListener("pointerup", async()=>{
    forward_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch(`http://${IPAddress}/forward/stop`,
         {
        targetAddressSpace : "local"
    }
    )
    a = (await a.text()).toString()
    
})


forward_button.addEventListener("pointerleave", async()=>{
     forward_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch(`http://${IPAddress}/forward/stop`,
         {
        targetAddressSpace : "local"
    }
    )
    a = (await a.text()).toString()
   
})


forward_button.addEventListener("pointercancel", async()=>{

   
     forward_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch(`http://${IPAddress}/forward/stop`,
         {
        targetAddressSpace : "local"
    }
    )
    a = (await a.text()).toString()
   
})





backward_button.addEventListener("pointerdown", async()=>{
    backward_button.style.backgroundColor = "black"
    let a = await fetch(`http://${IPAddress}/backward`,
         {
        targetAddressSpace : "local"
    }
    )
    a = (await a.text()).toString()
    
})



backward_button.addEventListener("pointerup", async()=>{
    backward_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch(`http://${IPAddress}/backward/stop`,
         {
        targetAddressSpace : "local"
    }
    )
    a = (await a.text()).toString()
   
})


backward_button.addEventListener("pointerleave", async()=>{
     backward_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch(`http://${IPAddress}/backward/stop`,
         {
        targetAddressSpace : "local"
    }
    )
    a = (await a.text()).toString()
    
})


backward_button.addEventListener("pointercancel", async()=>{
     backward_button.style.backgroundColor = "rgb(255, 80, 188)"
    let a = await fetch(`http://${IPAddress}/backward/stop`,
         {
        targetAddressSpace : "local"
    }
    )
    a = (await a.text()).toString()
   
})



