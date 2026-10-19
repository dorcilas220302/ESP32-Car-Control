const left_button = document.getElementById("left")
const right_button = document.getElementById("right")
const forward_button = document.getElementById("forward")
const backward_button = document.getElementById("backward")

console.log("left", left_button);
console.log("right", right_button);
console.log("forward", forward_button);
console.log("backward", backward_button);




let IPAddress = "192.168.1.166"

// setInterval(async () => {

//      try {

        
//     let a = await fetch(`http://${IPAddress}/connexion`, {
//         targetAddressSpace : "local"
//     })
//     a = (await a.text()).toString()
 

//     if (a == "connected") {
//         document.getElementById("state-yes").style.display = "inline"
//         document.getElementById("state-not").style.display = "none"
//     }


        
//     } catch (error) {
//         alert("Error: " + error)
//     }
    

// }, 100);



async function checkConnection() {
    try {
        const response = await fetch(
            `http://${IPAddress}/connexion`,
            {
                targetAddressSpace: "local"
            }
        );

        const message = await response.text();

        if (message.trim() === "connected") {
            document.getElementById("state-yes").style.display = "inline";
            document.getElementById("state-not").style.display = "none";
        }
    } catch (error) {
        console.error("ESP32 connection failed:", error);

        // document.getElementById("state-yes").style.display = "none";
        // document.getElementById("state-not").style.display = "inline";
    }
}

checkConnection();
setInterval(checkConnection, 2000);

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




//key down event : 

document.addEventListener("keydown", async(e)=>{
   
    let key = e.key
    
    switch (key) {
        case "ArrowUp":
            
        try {

          let a = await fetch(`http://${IPAddress}/forward`,
           {
           targetAddressSpace : "local"
            }
          )
          a = (await a.text()).toString()
            
        } catch (error) {
            alert("there is an error while pressing up : ", error)
        }

         break;


         case "ArrowDown" : 

         try {

             let b = await fetch(`http://${IPAddress}/backward`,
              {
               targetAddressSpace : "local"
               }
                )

            b= (await b.text()).toString()
            
         } catch (errorb) {
             alert('there is an error while pressing down : ', errorb)
         }


         break;
    


     case "ArrowLeft" :
        try {
             let c = await fetch(`http://${IPAddress}/left`,
           {
            targetAddressSpace : "local"
            }
          )
          c = (await c.text()).toString()
        } catch (errorc) {
            alert("there is an error while pressing left : ", errorc)
        }

         break;


         case "ArrowRight" :
             try {
             let d = await fetch(`http://${IPAddress}/right`,
           {
            targetAddressSpace : "local"
            }
          )
          d = (await d.text()).toString()
        } catch (errord) {
            alert("there is an error while pressing right : ", errord)
        }
         break;


    }
   
})



document.addEventListener("keyup", async(e)=>{
   
    let key = e.key
    
    switch (key) {
        case "ArrowUp":
            
        try {

          let a = await fetch(`http://${IPAddress}/forward/stop`,
           {
           targetAddressSpace : "local"
            }
          )
          a = (await a.text()).toString()
            
        } catch (error) {
            alert("there is an error while pressing up up : ", error)
        }

         break;


         case "ArrowDown" : 

         try {

             let b = await fetch(`http://${IPAddress}/backward/stop`,
              {
               targetAddressSpace : "local"
               }
                )

            b= (await b.text()).toString()
            
         } catch (errorb) {
             alert('there is an error while pressing down up : ', errorb)
         }


         break;
    


     case "ArrowLeft" :
        try {
             let c = await fetch(`http://${IPAddress}/left/stop`,
           {
            targetAddressSpace : "local"
            }
          )
          c = (await c.text()).toString()
        } catch (errorc) {
            alert("there is an error while pressing left up : ", errorc)
        }

         break;


         case "ArrowRight" :
             try {
             let d = await fetch(`http://${IPAddress}/right/stop`,
           {
            targetAddressSpace : "local"
            }
          )
          d = (await d.text()).toString()
        } catch (errord) {
            alert("there is an error while pressing right up : ", errord)
        }
         break;


    }
   
})


//speed write : 

const speedWrite = document.getElementById("speed-write");
const MinusButton = document.getElementById("minus");
const PlusButton = document.getElementById("plus")

const SpeedBody = document.getElementById("speed-body")



console.log("minus",MinusButton);
console.log("plus",PlusButton);


let content_speed = 50;



MinusButton.addEventListener("click", ()=>{


    if (content_speed > 0) {
          content_speed = content_speed - 1;

       speedWrite.textContent = `${content_speed}%`

         SpeedBody.style.width = `${content_speed}%`
    }


})



PlusButton.addEventListener("click", ()=>{

    console.log("okey ve");
    

    if (content_speed < 100) {
        
    content_speed = content_speed + 1;

    speedWrite.textContent = `${content_speed}%`

    SpeedBody.style.width = `${content_speed}%`;
    }

    

})



