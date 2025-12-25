const playlists = [
    {
        num: "1",
        img: "https://i.scdn.co/image/ab67616d0000b27307aa1426cb2b3cfd8ad67c64",
        title: "...And to Those I love, Thanks For Sticking Around",
        views: "858,226,964",
        minute: "2:48",
    },
    {
        num: "2",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7negi5iZ35y4TENoWxYosrQozhafI-KFMmQ&s",
        title: "Antartica",
        views: "513,313,556",
        minute: "2:06",
    },
    {
        num: "3",
        img: "https://i.scdn.co/image/ab67616d0000b273db20089661aff3a8070600ca",
        title: "1000 Blunts",
        views: "341,451,055",
        minute: "2:55",
    },
    {
        num: "4",
        img: "https://i.scdn.co/image/ab67616d0000b273f5ce8190f3b88f7825dad11d",
        title: "Napolean",
        views: "49,935,676",
        minute: "2:36",
    },
    {
        num: "5",
        img: "https://i.scdn.co/image/ab67616d0000b273c473c3601726782b3596f618",
        title: "My Flaws Burn Through My Skin Like Demonic Flames from Hell",
        views: "391,789,169",
        minute: "2:47",
    },
    {
        num: "6",
        img: "https://i.scdn.co/image/ab67616d0000b273dcff3103179d992594a227db",
        title: "Kill Yourself(Part III)",
        views: "779,342,770",
        minute: "2:25",
    },
    {
        num: "7",
        img: "https://i.scdn.co/image/ab67616d0000b27337a2a9f2262545115c1dad2a",
        title: "Runnin' Thru the 7th with My Woadies",
        views: "440,868,015",
        minute: "3:25",
    },
    {
        num: "8",
        img: "https://i.scdn.co/image/ab67616d0000b273f795a2962820664b4112901e",
        title: "For the Last Time",
        views: "451,054,820",
        minute: "2:36",
    },
    {
        num: "9",
        img: "https://i.scdn.co/image/ab67616d0000b273b25093d7ccdce4a848988f9e",
        title: "Avalon",
        views: "313,659,930",
        minute: "2:20",
    },
    {
        num: "10",
        img: "https://i.scdn.co/image/ab67616d0000b273db20089661aff3a8070600ca",
        title: "Matte Black",
        views: "262,542,783",
        minute: "3:58",
    },
]

const playlistContainer = document.getElementById("list");
const seeMoreBtn = document.getElementById("seemore-btn");

let visibleItems = 5;

function renderPlaylists(){
    playlistContainer.innerHTML = '';
    
    playlists.slice(0, visibleItems).forEach(playlist => {
         const button = document.createElement("button")
        button.className="playlist-btn";

        const list = document.createElement("a");
        list.className="list-text";

        list.innerHTML = `
            <p class="num">${playlist.num}</p>
            <img src="${playlist.img}" alt="" 
            width="40rem" 
            height="40rem" 
            style="border-radius: 6px;
            border: none;">
            <p class="music-title">${playlist.title}</p>
            <p class="views">${playlist.views}</p>
            <span class="check-btn"><i class="fa-solid fa-check"></i></span>
            <p class="minute">${playlist.minute}</p>
        `;
        button.appendChild(list);
        playlistContainer.appendChild(button);

    });

    if(visibleItems < playlists.length){
        seeMoreBtn.textContent = "See more";
    }else{
        seeMoreBtn.textContent = "See less";
    }
}

seeMoreBtn.addEventListener("click", () => {
    if(visibleItems === playlists.length){
        visibleItems = 5;
    }else{
        visibleItems = playlists.length;
    }
    renderPlaylists();
});

renderPlaylists();