var arrayVideos = new Array();

document.addEventListener('DOMContentLoaded', function() {
    addVideosArray();
    

});

function Video(title, image, link, description, type){
    this.title = title;
    this.image = image;
    this.link = link;
    this.description = description;
    this.type = type;
}

function addVideosArray() {

    var titles = ["10 Times Disney Made HUGE Mistakes", "10 Disney Princess Connections That Will Make Your Jaw Drop", "10 Shocking Facts You Didn't Know About The Minions", "25 Nickelodeon Fan Theories That Will Ruin Your Childhood", "How to stay calm when you know you'll be stressed | Daniel Levitin", "The psychology of self-motivation | Scott Geller", "How language shapes the way we think | Lera Boroditsky", "10 ways to have a better conversation | Celeste Headlee"];
    var images = ["https://i.ytimg.com/vi/419mibN54H8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLAnvoMQbfbgTcu_gMpNVJkQupoE8Q", "https://i.ytimg.com/vi/Ee2lH2jGmJM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAPebZaZrL5I6RKYWdc51-p6r3jkw", "https://i.ytimg.com/vi/cnBrkS323Po/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD1FKOL95QOEdBovmAYs42gntciQA", "https://i.ytimg.com/vi/JQdtFUjMBHg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBld_MZ4VCi0ezfwdrjdPL8uJLj3A", "https://i.ytimg.com/vi/8jPQjjsBbIc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDdFPYicErnlk182Jx1GTSER6uNyg", "https://i.ytimg.com/vi/7sxpKhIbr0E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD4HOuwpAdYYXGORy2i75wy26VGLw", "https://i.ytimg.com/vi/RKK7wGAYP6k/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBzhJvH09UUbzM2_6IHw-0vtZDf0A", "https://i.ytimg.com/vi/R1vskiVDwl4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCiGNth8Tv-us_xIdSo9CHjfobQ6w"];
    var links = ["https://www.youtube.com/watch?v=419mibN54H8", "https://www.youtube.com/watch?v=Ee2lH2jGmJM", "https://www.youtube.com/watch?v=cnBrkS323Po", "https://www.youtube.com/watch?v=iy77e5_uNyk", "https://www.youtube.com/watch?v=8jPQjjsBbIc",  "https://www.youtube.com/watch?v=7sxpKhIbr0E", "https://www.youtube.com/watch?v=RKK7wGAYP6k", "https://www.youtube.com/watch?v=R1vskiVDwl4"];
    var descriptions = ["Disney has mastered the art of storytelling by captivating audiences through its narrative for generations. Audiences have adored Disney movies for their love stories, friendships, music, and animation. Nevertheless, Disney is not immune to mistakes as we’ll see today as we go through 10 Times Disney Make HUGE Mistakes.Noticing a small mistake in a movie can really take away from its magical qualities! “The Emperor’s New Groove” has its setting mixed up while “The Lion King” didn’t do the best research when it came to Africa’s biodiversity. Turns out “Hercules” is much more fiction than myth! Meanwhile, “Frozen” includes an appearing sword with no explanation, Cinderella has a secret outfit change, and Aladdin is missing body parts! Some of our favorite Disney movies have mistakes that are impossible to ignore once you know about them! Watch until the end to see why several mistakes are offensive in “Pocahontas.", "", "", "", "", "", "", ""];
    var types = ["Videos más vistos", "Videos más vistos", "Videos más vistos", "Videos más vistos", "Videos más populares", "Videos más populares", "Videos más populares", "Videos más populares"];

    for(var i = 0; i < titles.length; i++) {
        var video = new Video(titles[i], images[i], links[i], descriptions[i], types[i]);
        arrayVideos.push(video);
    }
}

function createImageContext(){
    var generateSection = document.createElement('section');
    generateSection.classList.add('flex');
}
function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}