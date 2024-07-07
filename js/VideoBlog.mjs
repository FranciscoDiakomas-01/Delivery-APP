export  function Play(){
    //barra de contagem
    let timePlayed = document.querySelector(".timePlayed")
    let intervalo = setInterval(()=>{
    timePlayed.style.width = `${(video.currentTime  * video.duration) / video.duration}%`
    },1000)




    let video = document.querySelector("video")
    //botao de play pause do video
    let PlayBTN = document.getElementById("PlayVideo")


    PlayBTN.addEventListener("click",()=>{
        if(video.paused){
            video.play()
            PlayBTN.src = "../icon/icons8-pause-button-48.png"
            return
        }else{
            video.pause()
            PlayBTN.src = "../icon/icons8-circled-play-48.png"
            return
        }
    })


    
    


    if(Math.floor(video.currentTime) == Math.floor(video.duration)){
        alert("next video")
        video.pause()
    }
    //evento de play no video ao clicar
    video.addEventListener("click",()=>{
        
        if(video.paused){
            video.play()
            PlayBTN.src = "../icon/icons8-pause-button-48.png"
            return
        }else{
            video.pause()
            PlayBTN.src = "../icon/icons8-circled-play-48.png"
            return
        }
    })
}