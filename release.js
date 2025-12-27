const release = [
    {
        img: "https://i.scdn.co/image/ab67616d0000b27355e5812ec3cdf5f0ede5aa84",
        title: "THY WILL BE DONE",
        date: "2025 ",
        type: "● Album",
    },
    {
        img: "https://i.scdn.co/image/ab67616d0000b273f5ce8190f3b88f7825dad11d",
        title: "THY KINGDOM COME",
        date: "2025 ",
        type: "● Album",
    },
    {
        img: "https://i.scdn.co/image/ab67616d0000b273db20089661aff3a8070600ca",
        title: "Sing Me a Lullaby, My Sweet Temptation",
        date: "2022 ",
        type: "● Album",
    },
    {
        img: "https://i.scdn.co/image/ab67616d0000b273e2bab14ce82f78a4160376a1",
        title: "Stop Staring At the Shadows",
        date: "2020 ",
        type: "● Album",
    },
    {
        img: "https://i.scdn.co/image/ab67616d0000b27335d777c5fa4a353b87ad62bd",
        title: "New World Depression",
        date: "2024 ",
        type: "● Album",
    },
    {
        img: "https://i.scdn.co/image/ab67616d0000b273b25093d7ccdce4a848988f9e",
        title: "Long Term Effects of SUFFERING",
        date: "2021 ",
        type: "● Album",
    },
    {
        img: "https://i.scdn.co/image/ab67616d0000b273dcff3103179d992594a227db",
        title: "My Liver Will Handle What My Heart Can't",
        date: "2015 ",
        type: "● Album",
    },
]

const releaseContainer = document.getElementById("release")

release.forEach(releases => {
    const button = document.createElement("button");
    button.className = "release-button";

    const a = document.createElement("a");
    a.innerHTML = `
        <img src="${releases.img}" alt="" srcset="">
        <h3 class="title">${releases.title}</h3>
        <div class="datetype">
            <p class="year">${releases.date}</p>
            <p class="type"> ${releases.type}</p>
        </div>
    `;
    
    button.appendChild(a);

    releaseContainer.appendChild(button);
});