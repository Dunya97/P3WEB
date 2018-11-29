var arrayVideos = [];
var arrayId = new Array();
var videosTop = new Array();
var toptitles = [];
var topimages = [];
var toplinks = [];
var topdescription = [];
var toptypes = [];
var API_KEY = "AIzaSyDf2xNoDJVH3RNuVF_GeHQadktM3leyGDo";

function reqListener2 () {
    let object = JSON.parse(this.responseText);
    toptitles.push(object.items[0].snippet.localized.title);
    //topimages[topimages.length] = object.items[0].snippet.thumbnails.default.url;
    topimages.push(object.items[0].snippet.thumbnails.high.url);
    toplinks.push("https://www.youtube.com/watch?v="+object.items[0].id);
    topdescription.push(object.items[0].snippet.description);
    toptypes.push("Videos top");
    console.log(object.items[0].snippet.thumbnails);
}

var ajaxASYNC = {
    request : function request(url){
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", reqListener);
        xhr.open("GET", url, true);
        xhr.send();
    },
    request2 : function request2(url) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load", reqListener2);
        xhr.open("GET", url, true);
        xhr.send();
    }

};

function reqListener () {
    console.log("reqListener"+topimages[0]);    
    let object = JSON.parse(this.responseText);

    for (var i = 1; i < 5; i++) {
        ajaxASYNC.request2("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+object.items[i].id+"&key="+API_KEY);
        console.log("for"+ topimages);
    } 
    
    setTimeout(function(){  addVideosArray( );},750);
    setTimeout(function(){  showVideos();},1000); 

}

window.onload = function() {
    ajaxASYNC.request("https://www.googleapis.com/youtube/v3/videos?part=statistics&chart=mostPopular&key="+API_KEY);
    const button = document.getElementById("search");
    Listener.add(button, "click", Listener.eventSearch, true);
};

const Listener = {
    add: function add(object, event, callback, capture) {
        object.addEventListener(event,callback,capture);
    },
    eventSearch: function(event) {
        resetResults();
        event.preventDefault();
        const inputValue = document.getElementById("searchInput").value;
        if (inputValue) {
            for (let i = 0; i < arrayVideos.length; i++) {
                if (arrayVideos[i].title.toLowerCase().includes(inputValue.toLowerCase())) {
                    let sectionResults = document.getElementById("results");
                    createVideo(i, sectionResults);
                }
            }
        }
        else {
            alert("Debes introducir texto para poder buscar")
        }
    }
};

function resetResults() {
    let sectionResults = document.getElementById("results");
    sectionResults.parentNode.removeChild(sectionResults);
    let firstSection = document.getElementById("firstSection");
    let addSection = document.createElement('section');
    addSection.class = 'flex';
    addSection.id = 'results';
    firstSection.insertBefore(addSection, firstSection.children[1]);
    
    addSection.style.display = "flex";
    addSection.style.flexDirection = "row";
    addSection.style.flexWrap = "wrap";
    addSection.style.justifyContent = "flex-start";
}

function createVideo(index, sectionResults) { 
    let descriptionResult = document.createElement("p");
    let nodeD = document.createTextNode(arrayVideos[index].description);
    descriptionResult.appendChild(nodeD);

    let titleResults = document.createElement('h3');
    let nodeT = document.createTextNode(arrayVideos[index].title);
    titleResults.appendChild(nodeT);

    let figCaption = document.createElement('figcaption');
    figCaption.appendChild(titleResults);
    figCaption.appendChild(descriptionResult);

    let imageResults = document.createElement('img');
    imageResults.src = arrayVideos[index].image;
    imageResults.alt ="video youtube";
    imageResults.width = "510";

    let linkResults = document.createElement('a');
    linkResults.href = arrayVideos[index].link;
    linkResults.title = "Go to video";
    linkResults.appendChild(imageResults);

    let figureResults = document.createElement('figure');
    figureResults.appendChild(linkResults);
    figureResults.appendChild(figCaption);

    let article = document.createElement('article');
    article.appendChild(figureResults);

    sectionResults.appendChild(article);  
}

function Video(title, image, link, description, type) {
    this.title = title;
    this.image = image;
    this.link = link;
    this.description = description;
    this.type = type;
}

function addVideosArray() {

    const titles = ["10 Times Disney Forgot How To Disney", "10 Disney Princess Connections That Will Make Your Jaw Drop", "10 Shocking Facts You Didn't Know About The Minions", "25 Nickelodeon Fan Theories That Will Ruin Your Childhood", "How to stay calm when you know you'll be stressed | Daniel Levitin", "The psychology of self-motivation | Scott Geller", "How language shapes the way we think | Lera Boroditsky", "10 ways to have a better conversation | Celeste Headlee"];
    const images = ["https://i.ytimg.com/vi/L_V8fS3Z-gI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD7FJV8T7tMTofIvyC8Od7O9y4OUQ", "https://i.ytimg.com/vi/Ee2lH2jGmJM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAPebZaZrL5I6RKYWdc51-p6r3jkw", "https://i.ytimg.com/vi/cnBrkS323Po/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD1FKOL95QOEdBovmAYs42gntciQA", "https://i.ytimg.com/vi/JQdtFUjMBHg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBld_MZ4VCi0ezfwdrjdPL8uJLj3A", "https://i.ytimg.com/vi/8jPQjjsBbIc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDdFPYicErnlk182Jx1GTSER6uNyg", "https://i.ytimg.com/vi/7sxpKhIbr0E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD4HOuwpAdYYXGORy2i75wy26VGLw", "https://i.ytimg.com/vi/RKK7wGAYP6k/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBzhJvH09UUbzM2_6IHw-0vtZDf0A", "https://i.ytimg.com/vi/R1vskiVDwl4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCiGNth8Tv-us_xIdSo9CHjfobQ6w"];
    const links = ["https://www.youtube.com/watch?v=L_V8fS3Z-gI", "https://www.youtube.com/watch?v=Ee2lH2jGmJM", "https://www.youtube.com/watch?v=cnBrkS323Po", "https://www.youtube.com/watch?v=iy77e5_uNyk", "https://www.youtube.com/watch?v=8jPQjjsBbIc",  "https://www.youtube.com/watch?v=7sxpKhIbr0E", "https://www.youtube.com/watch?v=RKK7wGAYP6k", "https://www.youtube.com/watch?v=R1vskiVDwl4"];
    const descriptions = ["", "", "", "", "", "", "", ""];
    const types = ["Videos más vistos", "Videos más vistos", "Videos más vistos", "Videos más vistos", "Videos más populares", "Videos más populares", "Videos más populares", "Videos más populares"];

    for (let i = 0; i < titles.length; i++) {
        arrayVideos.push(new Video(titles[i], images[i], links[i], descriptions[i], types[i]));
    }
    
    for(let i = 0; i<4; i++){
        arrayVideos.push(new Video(toptitles[i], topimages[i], toplinks[i], topdescription[i], toptypes[i]));
    }
}

$(document).ready(function(){
    var masVistos = [
        {"link":"https://www.youtube.com/watch?v=8jPQjjsBbIc"}, {"link":"https://www.youtube.com/watch?v=7sxpKhIbr0E"},{"link":"https://www.youtube.com/watch?v=RKK7wGAYP6k"},{"link":"https://www.youtube.com/watch?v=R1vskiVDwl4"}
    ];
    // Extract a array
    $.map(masVistos, function(value, key) {
        var id = value.link.split("?v="),
            id = id[1];
        $("#masVistos").append($("<iframe />", {
            src: "https://youtube.com/embed/"+id+"?autoplay=1",
            frameborder: 0,
            width: "100%",
            height: 300
        }))
    });
    var videosPopulares = [
       {"link":"https://www.youtube.com/watch?v=arj7oStGLkU"},{"link":"https://www.youtube.com/watch?v=deG_LTcAjaM"},{"link":"https://www.youtube.com/watch?v=QMcwDmHiUZ8"},{"link":"https://www.youtube.com/watch?v=FEeTLopLkEo"}
    ];
    $.map(videosPopulares, function(value, key) {
        var id = value.link.split("?v="),
            id = id[1];
        $("#videosPopulares").append($("<iframe />", {
            src: "https://youtube.com/embed/"+id+"?autoplay=1",
            frameborder: 0,
            width: "100%",
            height: 300
        }))
    });
});

function showVideos() {
    for(var i = 0; i < arrayVideos.length; i++) {
        if(arrayVideos[i].type == "Videos más vistos"){
            let sectionViewed = document.getElementById("masVistos");
            createVideo(i, sectionViewed);
        }
        else if(arrayVideos[i].type == "Videos más populares"){
            let sectionPopulares = document.getElementById("videosPopulares");
            createVideo(i, sectionPopulares);
        }else if(arrayVideos[i].type == "Videos top"){
            let sectionTop = document.getElementById("topVideos");
            createVideo(i, sectionTop);
            
        }
    }
}
