const text = document.querySelector(".letterin"); //select letterin class name it as text
const strText = text.textContent; //convert text into string
const splitText = strText.split(" "); //split each letter in text into an array
console.log(splitText);
text.textContent = "";
for (let i=0; i < splitText.length; i++ ){
  text.innerHTML += "<span> "+ splitText[i] + "  </span>";
}
let char =0;
let timer = setInterval(onTick,100);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++ //to loop
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer= null;
}
//header background display on scroll
$(document).scroll(function(){
  var height = $(".navbar").height();
  if( $(this).scrollTop() > height){
    $(".navbar").css("background","rgba(0, 0, 0, 0.3)!important");
}
});

// Wrap every letter in a span
