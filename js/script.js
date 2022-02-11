// Complete Day 1 goals here
let songName    = ["Sapés comme jamais","Laissez passer","Tu vas me manquer","La même"]
let songImages  = ["http://congodrconline.com/wp-content/uploads/2017/05/maitregims-800x500.png","https://y.yarn.co/2873fd46-372a-48b2-81ea-981b67deeb64_screenshot.jpg","https://i.ytimg.com/vi/KA3Q1duzwaE/hqdefault.jpg","https://lesimproductibles.com/wp-content/uploads/La-meme_Maitre-Gims-ft-Vianney_ClipOfficiel_LesImproductibles-640x360.jpg"]
let songArtists = ["GIMS and Niska","GIMS","GIMS","GIMS and Vianney"]
let songLengths = ["206","265","250","200"]
let songLinks   = ["https://open.spotify.com/track/3yhFHlST9mFjEFNVQncqXo?si=3a47305049b145dc","https://open.spotify.com/track/5B03Lwlp0QYNUNRSi7OWzW?si=8721dcc4ef244801","https://open.spotify.com/track/5uwhS519X2kgxbfyzNUcHO?si=55f9eb66ca294013","https://open.spotify.com/track/3xDrrLwrmsBusgNtriqKZf?si=a3529bade903421a"]

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  // Complete Day 3 goals inside this function
}

$("#add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
