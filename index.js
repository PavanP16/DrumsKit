var n = document.querySelectorAll(".drum").length;

for(var i = 0 ; i < n ; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",Click);

function Click()
{

var Button = this.innerHTML;

PlaySound(Button);
ButtonAnimation(Button);

};


}


document.addEventListener("keydown",function(event)
{

var Button1= event.key;

PlaySound(Button1);
ButtonAnimation(Button1);
})

function PlaySound(Button)
{
    
if(Button === "a")
{
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
}

else if(Button == "s" )
{

    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
}

else if(Button == "d")
 {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
 }      
else if(Button == "f")
{

    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();

}

else if(Button == "j")
{
 var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
}

else if(Button == "k" )
{
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
}

else if(Button == "l" )
{
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
}

}


function ButtonAnimation(Button)
{

    var Shadow = document.querySelector("."+Button);

    Shadow.classList.add("pressed");

    setTimeout(function(){
        Shadow.classList.remove("pressed");

    },100 );

}