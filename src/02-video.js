import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframeRef = document.querySelector("#vimeo-player");

const player = new Player(iframeRef);

const currentTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(currentTime);


player.on('timeupdate', throttle(onTimeUpdate,1000));

function onTimeUpdate(data){
    console.log(data.seconds);
    localStorage.setItem("videoplayer-current-time", data.seconds);
}
