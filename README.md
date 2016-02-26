# Visorr
Front-end Javascript framework

Visorr is a front-end javascript and css framework allowing you to add cool effects and actions to your html 
elements without the need for heavy coding.

Usage:

  Will apply a bounce animation to the heart icon

  $('#heart-icon').Animate({
      name: "bounce",
      duration: "2s", 
      timingFunction: "ease-in", 
      delay: "0s",
      iterationCount: "infinite",
      direction: "alternate",
      eventListener: ""
    });
    
    
  Will apply a grayscale filter to filter-image-1
  
  $('#filter-image-1').Filter({
     name: "grayscale",
     level: "100"
    });
