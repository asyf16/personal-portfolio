function parallaxControl(){
    let value = window.scrollY;
    document.getElementById('leaf').style.left= value * 1.3 + 'px';
    document.getElementById('hill1').style.top= value * 1.1 + 'px';
    document.getElementById('hill2').style.left= value * -1.2 + 'px';
    document.getElementById('hill3').style.left= value * 0.8 + 'px';
    document.getElementById('hill4').style.left= value * 1.2 + 'px';
  }

  export {parallaxControl}