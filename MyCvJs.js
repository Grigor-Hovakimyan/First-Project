'use strict';



/* <header> logic */
var value=true;
document.getElementById('linkOfMusic').onclick=function () {
    // var value=true;
    if (value===true) {
        value=false;
        var audio = document.getElementById('headerAudio');
        audio.play();
        document.getElementById('musicPlayIcon').className = 'fas fa-pause';
    }

    else {
        value=true;
    document.getElementById('headerAudio').pause();
        document.getElementById('musicPlayIcon').className = 'fas fa-play';
    }
};

document.getElementById('headerAudio').addEventListener("ended", function(){
    document.getElementById('musicPlayIcon').className = 'fas fa-play';
});


var i = 0;
var txt = 'Grigor Hovakimyan';
setInterval(

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("myWord").innerHTML += txt.charAt(i);
            i++;

        }
        else{
            document.getElementById("myWord").innerHTML='';
            i=0;
            typeWriter();
        }
    },200);



function menuLogoFunction() {
    var menuList=document.getElementById('menuList');
    menuList.style.display='block';
}
function closeFunction() {
    document.getElementById('menuList').style.display='none';
}
document.getElementById('menuList').onmouseleave=function () {
    document.getElementById('menuList').style.display='none';
};
/* <header> icons */
document.getElementById('linkOfMusic').onmouseover= function () {
    document.getElementById('iconMusic').style.display='block';

};
document.getElementById('linkOfMusic').onmouseout= function () {
    document.getElementById('iconMusic').style.display='none';
};


document.getElementById('linkOfFacebook').onmouseover= function () {
    document.getElementById('iconFacebook').style.display='block';
};
document.getElementById('linkOfFacebook').onmouseout= function () {
    document.getElementById('iconFacebook').style.display='none';
};



document.getElementById('linkOfTwitter').onmouseover= function () {
    document.getElementById('iconTwitter').style.display='block';
};
document.getElementById('linkOfTwitter').onmouseout= function () {
    document.getElementById('iconTwitter').style.display='none';
};



document.getElementById('linkOfVk').onmouseover= function () {
    document.getElementById('iconVk').style.display='block';
};
document.getElementById('linkOfVk').onmouseout= function () {
    document.getElementById('iconVk').style.display='none';
};


document.getElementById('linkOfLinkedin').onmouseover= function () {
    document.getElementById('iconLinkedin').style.display='block';
};
document.getElementById('linkOfLinkedin').onmouseout= function () {
    document.getElementById('iconLinkedin').style.display='none';
};


document.getElementById('linkOfGithub').onmouseover= function () {
    document.getElementById('iconGithub').style.display='block';
};
document.getElementById('linkOfGithub').onmouseout= function () {
    document.getElementById('iconGithub').style.display='none';
};



/* About <section> logic */


var addCount=0;

function addAwardFunction () {
    if (addCount < 22) {
        document.getElementById('awardCount').innerText = addCount;
        addCount++;
    } else {
        clearInterval(addAwardInterval);
    }
};
function addCoffeeFunction () {
    if (addCount < 107) {
        document.getElementById('coffeeCount').innerText = addCount;
        addCount++;
    } else {
        clearInterval(addCoffeeInterval);
    }
};
function addProjectFunction () {
    if (addCount < 38) {
        document.getElementById('projectCount').innerText = addCount;
        addCount++;
    } else {
        clearInterval(addProjectInterval);
    }
};
function addClientFunction () {
if(addCount < 21) {
    document.getElementById('clientCount').innerText = addCount;
    addCount++;
}
else {
    clearInterval(addClientInterval);
}
};

var addAwardInterval,addCoffeeInterval,addProjectInterval,addClientInterval;

window.onscroll = function() {myFunction()};
function myFunction () {
if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050){

    addAwardInterval = setInterval(addAwardFunction, 89);
    addCoffeeInterval = setInterval(addCoffeeFunction, 10);
    addProjectInterval = setInterval(addProjectFunction, 89);
    addClientInterval = setInterval(addClientFunction, 89);
    }
    }
;





/* Clients <section> logic */
var arr=document.getElementsByClassName('cImg');
for (var i=0;i<arr.length;i++){
    arr[i].onmouseover=function(){
    clearInterval(interval);}
};

document.getElementById('point1').onclick=function () {
    clearInterval(interval);
    document.getElementById('cSlide1').style.display='block';
    document.getElementById('cSlide2').style.display='none';
    document.getElementById('cSlide3').style.display='none';
    document.getElementById('point1').style.backgroundColor='teal';
    document.getElementById('point2').style.backgroundColor='#bbb';
    document.getElementById('point3').style.backgroundColor='#bbb';
};
document.getElementById('point2').onclick=function () {
    clearInterval(interval);
    document.getElementById('cSlide2').style.display='block';
    document.getElementById('cSlide1').style.display='none';
    document.getElementById('cSlide3').style.display='none';
    document.getElementById('point1').style.backgroundColor='#bbb';
    document.getElementById('point2').style.backgroundColor='teal';
    document.getElementById('point3').style.backgroundColor='#bbb';
};
document.getElementById('point3').onclick=function () {
    clearInterval(interval);
    document.getElementById('cSlide3').style.display='block';
    document.getElementById('cSlide1').style.display='none';
    document.getElementById('cSlide2').style.display='none';
    document.getElementById('point1').style.backgroundColor='#bbb';
    document.getElementById('point2').style.backgroundColor='#bbb';
    document.getElementById('point3').style.backgroundColor='teal';
};

document.getElementById('cSlide1').style.display='block';
document.getElementById('cSlide2').style.display='none';
document.getElementById('cSlide3').style.display='none';
var elem=1;
// setInterval(
    function myFunc() {
        if (elem===1 ){
            document.getElementById('cSlide1').style.display='block';
            document.getElementById('cSlide2').style.display='none';
            document.getElementById('cSlide3').style.display='none';
            document.getElementById('point1').style.backgroundColor='teal';
            document.getElementById('point2').style.backgroundColor='#bbb';
            document.getElementById('point3').style.backgroundColor='#bbb';
            elem++;
        }
        else if (elem===2){
            document.getElementById('cSlide1').style.display='none';
            document.getElementById('cSlide2').style.display='block';
            document.getElementById('cSlide3').style.display='none';
             document.getElementById('point1').style.backgroundColor='#bbb';
             document.getElementById('point2').style.backgroundColor='teal';
             document.getElementById('point3').style.backgroundColor='#bbb';
            elem++;
        }
       else  if (elem===3){
            document.getElementById('cSlide1').style.display='none';
            document.getElementById('cSlide2').style.display='none';
            document.getElementById('cSlide3').style.display='block';
             document.getElementById('point1').style.backgroundColor='#bbb';
             document.getElementById('point2').style.backgroundColor='#bbb';
             document.getElementById('point3').style.backgroundColor='teal';
            elem=1;
        }

    }
//     ,
// 1000
// );

var interval=setInterval(myFunc,800);


var index = 1;
showSlides(index);

function plusSlides(n) {
    showSlides(index += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("clientsCommentSlides");
    if (n > slides.length) {index = 1}
    if (n < 1) {index = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index-1].style.display = "block";

}





