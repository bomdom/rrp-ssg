const vibes = [
    "--and you are awesome!",
    "..have a wonderful day",
    "...and you have got this!",
    ".. and so is this puppy "
]


// chose a random good vibe

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];
document.querySelector(".vibe").append(vibe);