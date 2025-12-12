const lastPlayedBlock = document.getElementById('last-played');
let xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://lastfm-last-played.biancarosa.com.br/catmpeg/latest-song", false);
xmlHttp.send(null);
if (xmlHttp.responseText != 0) {
    const lastParse = JSON.parse(xmlHttp.responseText);

    const lastPlayed = document.querySelector("#song");
    lastPlayed.innerHTML = "<a target=\"blank_\" href=\"" + lastParse["track"]["url"] + "\">" + lastParse["track"]["name"] + " - " + lastParse["track"]["artist"]["#text"] + "</a>";
    lastPlayedBlock.style.display = "block";
}