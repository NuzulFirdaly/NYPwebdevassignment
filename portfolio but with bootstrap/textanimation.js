function music() {
  var audio = document.getElementById("audioplayer");
  audio.play();
  var options = {
    opacityIn:[0,1],
    scaleIn:[0.2,1],
    scaleOut:3,
    durationIn:1200,
    durationOut:600,
    delay:5000,
    delay2:800,
    durationIn2:100000,
    easing:"easeInExpo"
  };
  anime.timeline({loop:false})
  .add({
    targets:'.text-animation .one',
    delay:options.delay,
    opacity:options.opacityIn,
    scale:options.scaleIn,
    duration:options.durationIn
  })
  .add({
    targets:'.text-animation .one',
    opacity:0,
    scale:options.scaleOut,
    easing:options.easing,
    duration:options.durationOut,

  })
  .add({
    targets:'.text-animation .two',
    opacity:options.opacityIn,
    scale:options.scaleIn,
    duration:options.durationIn
  })
  .add({
    targets:'.text-animation .two',
    opacity:0,
    scale:options.scaleOut,
    easing:options.easing,
    duration:options.durationOut,
    delay:options.delay2
  })
  .add({
    targets:'.text-animation .three',
    opacity:options.opacityIn,
    scale:options.scaleIn,
    duration:options.durationIn
  })
  .add({
    targets:'.text-animation .three',
    opacity:0,
    scale:options.scaleOut,
    easing:options.easing,
    duration:options.durationOut,

  })
  .add({
    targets:'.text-animation .four',
    opacity:options.opacityIn,
    scale:options.scaleIn,
    duration:options.durationIn2,
  })
  .add({
    targets:'.text-animation .four',
    opacity:0,
    scale:options.scaleOut,
    easing:options.easing,
    duration:options.durationOut,

  })
}
/*
let processor = {
  timerCallback: function(){ //check video played or not
    if(this.video.paused || this.video.ended){
      return;
    }
    this.computeFrame(); //extract green
    let self = this;
    setTimeout(function(){
      self.timerCallback();
    }, 0);
  },
  doLoad: function(){
    this.video = document.querySelector('#video');
    this.c1 = document.querySelector('#c1');
    this.ctx1 = this.c1.getContext('2d');//make c1 2d
    this.c2 = document.querySelector('#c2');
    this.ctx2 = this.c2.getContext('2d');//make c2 2d
    let self = this;
    this.video.addEventListener('play', function(){
      self.width = self.video.videoWidth;
      self.height = self.video.videoHeight;
      self.timerCallback();
    });
  },
  computeFrame: function(){
    this.ctx1.drawImage(this.video,0,0,this.width,this.height);
    this.ctx1.crossOrigin = "Anonymous";
    let frame = this.ctx1.getImageData(0,0,this.width,this.height)
    let l = frame.data.length / 4;

    for(let i = 0; i< l;i++){
      let r = frame.data[i*4+0];
      let g = frame.data[i*4+0];
      let b = frame.data[i*4+0];
      if (g> 100) frame.data[i*4 + 3] = 0; //delete greennnnnnnnnnn
    }
    this.ctx2.putImageData(frame,0,0);//put all colour back but green
    return;
  }
};
document.addEventListener('DOMContentLoaded',() =>{
  processor.doLoad();
})
*/
