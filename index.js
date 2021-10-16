var music_audio=["Music/alone_II.mp3","Music/Faded.mp3","Music/alone.mp3","Music/darkside.mp3","Music/on_my_way.mp3"];


function play(currenttIndex){
    stopPlay();
    var audio=document.createElement("audio");
    audio.setAttribute("src",music_audio[currenttIndex]);
    audio.setAttribute("autoplay","autoplay");
    audio.setAttribute("id","Audio")
    document.body.appendChild(audio);
}

