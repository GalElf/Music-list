function loadDate() {
    $.ajax({
        url: 'https://galel.mysoft.jce.ac.il/Ex1/scripts/get_current_date.php',
        success: function (dateData) {
            $("#currentDate").html(dateData);
        },
        error: function () {
            $("#currentDate").html("Error: failed to get date");
        }
    });
}

function loadMusicList() {
    $('#musicList').click(function () {
        $.ajax({
            url: 'https://galel.mysoft.jce.ac.il/Ex1/scripts/music_list.php',
            type: 'json',
            success: function (musicData) {
                createTable(musicData);
            },
            error: function () {
                $("section").replaceWith(`<div id="errorLoadMusic">Error, failed to load the music list</div>`);
            }
        });
    });
}

function createTable(musicData) {
    let musicTableList = `
            <table style="width:90%">
                 <thead>
                      <tr>
                        <th>#</th>
                        <th>Song Title:</th>
                        <th>Song Link:</th>
                      </tr>
                 </thead>
                <tbody>`;
    for (i = 0; i < musicData.length; i++) {
        musicTableList +=
            `<tr>
                    <th>${i + 1}</th>
                    <td>${musicData[i].name} - ${musicData[i].artist_name}</td>
                    <td><div id="player${i}"><button id="${musicData[i].id}" class="musicButtom" onclick="loadVideo(id, $(player${i})[0])">Play Song</button></div>
                    </td>
                </tr>`;
    }
    musicTableList += ` </tbody></table>`;
    $("section").replaceWith(`<div id="musicDataList">${musicTableList}</div>`);
}

let pressFirstPlayer = true;
function loadVideo(songId, video) {
    var youtubeScriptId = "youtube-api";
    var youtubeScript = document.getElementById(youtubeScriptId);
    var videoId = songId;
    if (youtubeScript === null) {
        var tag = document.createElement("script");
        var firstScript = document.getElementsByTagName("script")[0];
        tag.src = "https://www.youtube.com/iframe_api";
        tag.id = youtubeScriptId + "videoId";
        firstScript.parentNode.insertBefore(tag, firstScript);
    }
    if (pressFirstPlayer === true) {
        window.onYouTubeIframeAPIReady = function () {
            window.player = new window.YT.Player(video, {
                videoId: videoId,
                playerVars: {
                    autoplay: 0,
                    modestbranding: 1,
                    rel: 0,
                }
            });
        };
    }
    if (pressFirstPlayer === false) {
        window.player = new window.YT.Player(video, {
            videoId: videoId,
            playerVars: {
                autoplay: 0,
                modestbranding: 1,
                rel: 0,
            }
        });
    }
    pressFirstPlayer = false;
}

onLoad = function () {
    loadDate();
    loadMusicList();
};

$("document").ready(onLoad);
