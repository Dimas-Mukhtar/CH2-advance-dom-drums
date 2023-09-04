let drum = document.querySelectorAll(".drum")
for(let i = 0; i < drum.length; i++){
    drum[i].addEventListener("click", function(){

        let buttonInnerHTML = this.innerHTML
        // this.style.color = "white"  
        makeAudio(buttonInnerHTML)
        animatedButton(buttonInnerHTML)
    })
}

// deteksi saat ada keyboard yang ditekan  
document.addEventListener("keypress", function(event){
    console.log(event.key)
    // akan mentrigger function makeAudio
    makeAudio(event.key)
    animatedButton(event.key)
})

function makeAudio(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play()
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play()
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play()
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play()
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3")
            audio.play()
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play()
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3")
            audio.play()
            break;
        default:
            console.log("Ini gak ada suaranya")
            break;
    }
}

function animatedButton(currentKey){
    document.querySelector(`.${currentKey}`).classList.add("pressed")

    setTimeout(() => {
        document.querySelector(`.${currentKey}`).classList.remove("pressed")
    }, "300")
}