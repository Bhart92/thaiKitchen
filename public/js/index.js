
//About Section Animation
if(document.querySelector('.landingImg')){
  //Landing Page animation
  const landingTl = gsap.timeline({duration: .15});
  landingTl.to('.landingImg:first-of-type', {opacity: 1, top: 0});
  landingTl.to('.landingImg:nth-of-type(2)', {opacity: 1, top: 0}, '<.15');
  landingTl.to('.landingImg:nth-of-type(3)', {opacity: 1, top: 0}, '<.15');
  landingTl.to('.landingImg:last-of-type', {opacity: 1, top: 0}, '<.15');
  landingTl.to('.innerLandingText', {opacity: 1, top: 0, duration: 1}, '<.15');

  //About Section Animations
  const aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#aboutInnerContainer",
      pin: false,   // pin the trigger element while active
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "+=500", // end after scrolling 500px beyond the start
      scrub: 1.01, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }
  });
    aboutTl.to('#aboutHeader h1', {opacity: 1, top: 0, ease:'power1.inOut'});
    aboutTl.to('#aboutImgContainer img', {opacity: .65, bottom: 0, ease:'power1.inOut'}, '<.5');
    aboutTl.to('#aboutDescription p', {opacity: 1, ease:'power1.inOut'}, '<.05');

  
  //Menu Section Animations
  const menuTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#innerMenuContainer",
        pin: false,   // pin the trigger element while active
        start: "top bottom", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      }
    });
    menuTl.to('.menuCardTitle h1', {opacity: 1, top: 0, ease:'power1.inOut'});
    menuTl.to('.menuItem', {opacity: 1, bottom: 0, ease:'power1.inOut'}, '<.25');
}
  $('.hamburger--squeeze').on('click', function(){
    $('.hamburger').toggleClass('is-active');
    $('#mobileNav').toggleClass('active');
    $('body').toggleClass('bodyOverflow');
  });
  $('#mobileNav li a').on('click', function(){
    navToggle();
    $('.hamburger').toggleClass('is-active');
  });
  //opens locations in maps
  function navigate(lat, lng) {
     // If it's an iPhone..
     if ((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPod") !== -1)) {
       function iOSversion() {
         if (/iP(hone|od|ad)/.test(navigator.platform)) {
           // supports iOS 2.0 and later
           var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
           return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
         }
       }
       var ver = iOSversion() || [0];

       var protocol = 'http://';
       if (ver[0] >= 6) {
         protocol = 'maps://';
       }
       window.location = protocol + 'maps.apple.com/maps?daddr=' + lat + ',' + lng + '&amp;ll=';
     }
     else {
       window.open('http://maps.google.com?daddr=' + lat + ',' + lng + '&amp;ll=');
     }
   };
  //mobileNav toggle
  function navToggle(){
    $(this).toggleClass('is-active');
    $('#mobileNav').toggleClass('active');
    $('body').toggleClass('bodyOverflow');
  }



