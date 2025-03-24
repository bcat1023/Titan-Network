function gload() {
  var gloadvar = "False";
  if (gloadvar == "True") {
    var iframe = document.getElementById('gframe');
    iframe.src = iframe.src;
  }

  if (gloadvar == "False") {
    console.log("noload")
    gloadvar = "True"
  }
}

var loader = document.getElementById("loader")
function loafhide() {
  loader.style.opacity = "0";
  loader.style.height = "0%";
  console.log("Loaf hidden")
}

function loafshow() {
  loader.style.opacity = "1";
  loader.style.height = "";
  console.log("Loaf shown")
}

function borger() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function openPage(evt, tab) {
  loafshow()
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).style.display = "block";
  //evt.currentTarget.className += " active";
  if (tab == "Now Playing") {
    document.getElementById("player").focus();
  }
  loafhide()
}

// Redo for efficency *$^
document.getElementById('tick').style.opacity = 1
setTimeout(() => {
  document.getElementById('tick').style.opacity = 0
  tick1()
}, 4000);

function tick1() {
  setTimeout(() => {
    document.getElementById('tick').innerText = "Slope and Papa's Bakeria now available"
    document.getElementById('tick').style.opacity = 1
    setTimeout(() => {
      document.getElementById('tick').style.opacity = 0
      tick2()
    }, 4000);
  }, 1000);
}

function tick2() {
  setTimeout(() => {
    document.getElementById('tick').innerText = "Your looking at Titan Network v3, how is it?"
    document.getElementById('tick').style.opacity = 1
    setTimeout(() => {
      document.getElementById('tick').style.opacity = 0
      tick3()
    }, 4000);
  }, 1000);
}

function tick3() {
  setTimeout(() => {
    document.getElementById('tick').innerText = "I have over 294 game requests to process, its going to take awhile..."
    document.getElementById('tick').style.opacity = 1
    setTimeout(() => {
      document.getElementById('tick').style.opacity = 0
      tick1()
    }, 4000);
  }, 1000);
}

var body = document.getElementById('body')
function backstop(toggle) {
  console.log('T1')
  try {
    if (toggle == 1) {
      body.style.backgroundImage = 'url(/img/back.webp)'
      var background = 1
    } else {
      body.style.backgroundImage = ''
      var background = `0`
    }
  } catch (e) {
    console.error(e)
  }
}

var g = document.getElementById('gframe').clientHeight
var n = document.getElementById('navbar').clientHeight

function resizeGFrame() { g = g - n; console.log(g + " " + n) };
window.onresize = resizeGFrame;

// New functions
const player = document.getElementById('player')
function loadGame(url) {
  top.player.src = url;
  backstop(0);
  openPage(event, 'Now Playing');
  loafshow();
}
function handleLinkClick(event) {
  event.preventDefault();
}

window.addEventListener("message", function (event) {
  if (event.data === "focusIframe") {
      document.getElementById("player").focus();
  }
});
