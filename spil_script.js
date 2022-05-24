//******************************SPIL V8******************************************** */

//variable

//random variable

let myRand;
myRand = Math.floor(Math.random() * 2) + 1;
console.log(myRand);

//point variable
let point = 0;

//liv variable
let liv = 3;

// const
const broken = document.querySelector("#brokenglass_container");
const water = document.querySelector("#waterfull_container");
const beer = document.querySelector("#beerfull_container");
const shot = document.querySelector("#shotfull_container");

//****************************************************************************** */

window.addEventListener("load", sidenVises);

function windowResize() {
  console.log("windowResize");
  let widthScreen = document.querySelector("#screen").clientWidth;
  let myFontInProcent = 5;
  let myFont = (widthScreen / 100) * myFontInProcent;
  document.querySelector("#score_count").style.fontSize = myFont + "px";
}
//***********************************sidenVises**************************************** */

function sidenVises() {
  console.log("sidenVises");
  //resize
  window.addEventListener("resize", windowResize);
  windowResize();
  //no music
  noMusic();
  //skjul andre sider
  document.querySelector("#level_complete").classList = "no_display";
  document.querySelector("#game_over").classList = "no_display";
  document.querySelector("#game").classList = "no_display";
  document.querySelector("#how_to_play").classList = "no_display";
  document.querySelector("#settings_screen").classList = "no_display";
  document.querySelector("#no_music").classList = "no_display";
  document.querySelector("#no_sounds").classList = "no_display";

  //Vis start skærm vigtigt ved replay, ikke vigtigt første gang
  document.querySelector("#start").classList.remove("no_display");
  //Klik på start_knap
  document.querySelector("#start_knap").addEventListener("click", startGame);
  //klik på info knap
  document.querySelector("#info").addEventListener("click", howToPlay);
}

//***********************************settingsVises*********************************************** */
//function settingsVises()
function settingsVises() {
  console.log("settingsVises");
  //settings reset

  //settings remove no display
  document.querySelector("#settings_screen").classList.remove("no_display");
  //klik music button send to noMusic
  document.querySelector("#music_button").addEventListener("click", noMusic);

  //klik sound button send to noSounds
  document.querySelector("#sounds_button").addEventListener("click", noSounds);

  //klik #start send sidenVises
  document
    .querySelector("#settings")
    .addEventListener("mouseover", hideSettings);
}

function hideSettings() {
  console.log("hideSettings");
  document.querySelector("#settings_screen").classList = "no_display";
}

function noMusic() {
  console.log("noMusic");
  document.querySelector("#no_music").classList.remove("no_display");
  document.querySelector("#background_sound").muted = true;
  document.querySelector("#hospital_sound").muted = true;
  document.querySelector("#bike_sound").muted = true;
  document.querySelector("#taxi_sound").muted = true;
  document.querySelector("#moto_sound").muted = true;
  document.querySelector("#myplace_sound").muted = true;
  document.querySelector("#no_music").addEventListener("click", music);
}

function noSounds() {
  console.log("noSounds");
  document.querySelector("#no_sounds").classList.remove("no_display");
  document.querySelector("#shattering_sound1").muted = true;
  document.querySelector("#shattering_sound2").muted = true;
  document.querySelector("#shattering_sound3").muted = true;
  document.querySelector("#shattering_sound4").muted = true;

  document.querySelector("#drik_sound").muted = true;
  document.querySelector("#outofhere_sound").muted = true;
  document.querySelector("#no_sounds").addEventListener("click", soundEffects);
}

function music() {
  console.log("music");
  document.querySelector("#no_music").classList.add("no_display");
  document.querySelector("#background_sound").muted = false;
  document.querySelector("#background_sound").play();
  document.querySelector("#hospital_sound").muted = false;
  document.querySelector("#bike_sound").muted = false;
  document.querySelector("#taxi_sound").muted = false;
  document.querySelector("#moto_sound").muted = false;
  document.querySelector("#myplace_sound").muted = false;
  document.querySelector("#music_button").addEventListener("click", noMusic);
}

function soundEffects() {
  console.log("soundEffects");
  document.querySelector("#no_sounds").classList.add("no_display");
  document.querySelector("#shattering_sound1").muted = false;
  document.querySelector("#shattering_sound2").muted = false;
  document.querySelector("#shattering_sound3").muted = false;
  document.querySelector("#shattering_sound4").muted = false;

  document.querySelector("#drik_sound").muted = false;
  document.querySelector("#outofhere_sound").muted = false;
  document.querySelector("#sounds_button").addEventListener("click", noSounds);
}

//**************************************howToPlay********************************************** */

function howToPlay() {
  console.log("howToPlay");
  //show how to play
  document.querySelector("#how_to_play").classList.remove("no_display");
  //klik get lucky knap sender til startGame
  document.querySelector("#get_lucky").addEventListener("click", startGame);

  document.querySelector("#info").addEventListener("mouseover", sidenVises);
}

//************************************startGame**************************************** */

function startGame() {
  console.log("startGame");

  //Lyt om der bliver ændret størrelse af browser window

  window.addEventListener("resize", windowResize);

  //Kald windowResize første gang siden vises

  windowResize();

  //settingsbutton click send til settingsVises
  document.querySelector("#settings").addEventListener("click", settingsVises);

  //***************skjul andre skærme

  document.querySelector("#game_over").classList = "no_display";
  document.querySelector("#level_complete").classList = "no_display";
  document.querySelector("#start").classList = "no_display";
  document.querySelector("#game").classList = "";

  //**********************udskriv point

  point = 0;
  document.querySelector("#score_count").textContent = point;
  console.log(point);

  //***********************udskriv liv

  liv = 3;
  console.log(liv);

  //********************vis alle liv

  document.querySelector("#liv1").classList.remove("no_display");
  document.querySelector("#liv2").classList.remove("no_display");
  document.querySelector("#liv3").classList.remove("no_display");

  //music start
  music();
  //sound effects start
  soundEffects();

  //***************start timing animation/timer

  document.querySelector("#time_sprite").classList.add("timer");
  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", stopSpil);

  //********************random delay på elementerne

  //**************** beer */

  //full beer i spillet
  beer.classList = "no_display";
  beer.classList.add("glide");
  beer.classList.add("standard_pos");
  console.log("beer glide standard pos");

  //random delay og random hastighed

  myRand = Math.floor(Math.random() * 2) + 1;
  beer.classList.add("beer_glide" + myRand);
  beer.classList.remove("no_display");

  //start beerFull click
  beer.addEventListener("mousedown", clickBeer);

  //fallbeer
  beer.addEventListener("animationiteration", fallBeer);

  //*****************      shot */

  //full shot i spillet

  shot.classList = "glide standard_pos";
  console.log("shot glide standard pos");
  //random delay og random hastighed
  myRand = Math.floor(Math.random() * 2) + 1;
  shot.classList.add("shot_glide" + myRand);
  //start fullShot click
  shot.addEventListener("mousedown", clickShot);
  // animationend fullShot (animation iteration)
  shot.addEventListener("animationiteration", fallShot);

  //*****************      water */

  // full water i spillet
  water.classList = "glide standard_pos";

  //random delay og random hastighed

  myRand = Math.floor(Math.random() * 2) + 1;
  water.classList.add("water_glide" + myRand);

  // start fullWater click

  water.addEventListener("mousedown", clickWater);

  //fallWater
  water.addEventListener("animationiteration", fallWater);

  //*****************      broken glass */

  //broken glass i spillet

  broken.classList = "glide standard_pos";

  // random delay og random hastighed

  myRand = Math.floor(Math.random() * 2) + 1;
  broken.classList.add("broken_glide" + myRand);

  //start brokenGlass click

  broken.addEventListener("mousedown", clickBroken);

  //fallBroken
  broken.addEventListener("animationiteration", fallBroken);

  //*****other */

  //restart you man breathe

  document.querySelector("#youman_container").classList = "breathe";

  //klik settings
  //same comments som i sidenVises

  //klik home3 send sidenVises
  document.querySelector("#home3").addEventListener("click", sidenVises);
}

//******************************* clickFunction *******************************/

// click Water

function clickWater() {
  console.log("clickWater");
  document.querySelector("#drik_sound").play();
  water.classList = "drink_pos";
  water.classList.add("frys");
  document.querySelector("#waterfull_sprite").classList.add("forsvind");
  water.addEventListener("animationend", clickWaterReset);
  point--;
  document.querySelector("#score_count").textContent = point;
  //heart sprite grow bigger if entre 6 et 10
  if (point >= 6 && point <= 10) {
    console.log("grow bigger");
    document.querySelector("#outofhere_sound").play();
    document.querySelector("#heart_container").classList = "";
    document.querySelector("#heart_sprite").classList.add("grow_bigger");
  } else {
    console.log("no grow bigger");
    document.querySelector("#heart_container").classList = "no_display";
    document.querySelector("#heart_sprite").classList = "";
  }
}

//click BrokenGlass
function clickBroken() {
  console.log("clickBroken");
  document.querySelector("#drik_sound").play();
  broken.classList = "drink_pos";
  broken.classList.add("frys");
  document.querySelector("#youman_container").classList.add("flinch");
  document.querySelector("#brokenglass_sprite").classList.add("forsvind");
  broken.addEventListener("animationend", clickBrokenReset);
  point -= 3;
  document.querySelector("#score_count").textContent = point;
  // miste et liv og et hjerte figur
  document.querySelector("#liv" + liv).classList.add("no_display");
  liv--;
  console.log(liv);
  if (liv <= 0) {
    stopSpil();
  }
  //heart sprite grow bigger if entre 6 et 10
  if (point >= 6 && point <= 10) {
    console.log("grow bigger");
    document.querySelector("#outofhere_sound").play();
    document.querySelector("#heart_container").classList = "";
    document.querySelector("#heart_sprite").classList.add("grow_bigger");
  } else {
    console.log("no grow bigger");
    document.querySelector("#heart_container").classList = "no_display";
    document.querySelector("#heart_sprite").classList = "";
  }
}

//click shot
function clickShot() {
  console.log("clickShot");
  document.querySelector("#drik_sound").play();
  shot.classList = "drink_pos";
  shot.classList.add("frys");
  document.querySelector("#shotfull_sprite").classList.add("forsvind");
  shot.addEventListener("animationend", clickShotReset);
  point += 2;
  document.querySelector("#score_count").textContent = point;
  //heart sprite grow bigger if entre 6 et 10
  if (point >= 6 && point <= 10) {
    console.log("grow bigger");
    document.querySelector("#outofhere_sound").play();
    document.querySelector("#heart_container").classList = "";
    document.querySelector("#heart_sprite").classList.add("grow_bigger");
  } else {
    console.log("no grow bigger");
    document.querySelector("#heart_container").classList = "no_display";
    document.querySelector("#heart_sprite").classList = "";
  }
}

//click beer
function clickBeer() {
  console.log("clickBeer");
  document.querySelector("#drik_sound").play();
  beer.classList = "drink_pos";
  beer.classList.add("frys");
  document.querySelector("#beerfull_sprite").classList.add("forsvind");
  beer.addEventListener("animationend", clickBeerReset);
  point++;
  document.querySelector("#score_count").textContent = point;
  //heart sprite grow bigger if entre 6 et 10
  if (point >= 6 && point <= 10) {
    document.querySelector("#outofhere_sound").play();
    console.log("grow bigger");
    document.querySelector("#heart_container").classList = "";
    document.querySelector("#heart_sprite").classList.add("grow_bigger");
  } else {
    console.log("no grow bigger");
    document.querySelector("#heart_container").classList = "no_display";
    document.querySelector("#heart_sprite").classList = "";
  }
}

//**********************************clickFunctionReset***************************************** */

//clickWaterReset

function clickWaterReset() {
  console.log("clickWaterReset");
  water.classList.remove("drink_pos");
  water.classList = "";
  document.querySelector("#waterfull_sprite").classList =
    "waterfull_background";
  water.offsetLeft;
  water.classList.add("standard_pos");
  water.classList.add("glide");
  myRand = Math.floor(Math.random() * 2) + 1;
  water.classList.add("water_glide" + myRand);
}

//clickBrokenReset
function clickBrokenReset() {
  console.log("clickBrokenReset");
  broken.classList.remove("drink_pos");
  broken.classList = "";
  document.querySelector("#brokenglass_sprite").classList =
    "brokenglass_background";
  document.querySelector("#youman_container").classList = "";
  broken.offsetLeft;
  broken.classList.add("standard_pos");
  broken.classList.add("glide");
  myRand = Math.floor(Math.random() * 2) + 1;
  broken.classList.add("broken_glide" + myRand);
}

// reset click shot
function clickShotReset() {
  console.log("clickShotReset");
  shot.classList.remove("drink_pos");
  shot.classList = "";
  document.querySelector("#shotfull_sprite").classList = "shotfull_background";
  shot.offsetLeft;
  shot.classList.add("standard_pos");
  shot.classList.add("glide");
  myRand = Math.floor(Math.random() * 2) + 1;
  shot.classList.add("shot_glide" + myRand);
}

// reset click beer
function clickBeerReset() {
  console.log("clickBeerReset");
  beer.classList.remove("drink_pos");
  beer.classList = "";
  document.querySelector("#beerfull_sprite").classList = "beerfull_background";
  beer.offsetLeft;
  beer.classList.add("standard_pos");
  beer.classList.add("glide");
  myRand = Math.floor(Math.random() * 2) + 1;
  beer.classList.add("beer_glide" + myRand);
}

//***************************fallFunction********************************************* */

// fallWater

function fallWater() {
  console.log("fallWater");

  // sound effect shattering
  //+1 point
  point++;

  //display point
  document.querySelector("#score_count").textContent = point;
  //heart sprite grow bigger if entre 6 et 10
  if (point >= 6 && point <= 10) {
    console.log("grow bigger");
    document.querySelector("#outofhere_sound").play();
    document.querySelector("#heart_container").classList = "";
    document.querySelector("#heart_sprite").classList.add("grow_bigger");
  } else {
    console.log("no grow bigger");
    document.querySelector("#heart_container").classList = "no_display";
    document.querySelector("#heart_sprite").classList = "";
  }
  //end på lyd  send to fallWaterReset
  document.querySelector("#shattering_sound1").play();
  beer.addEventListener("ended", fallWaterReset);
}

//fallBroken
function fallBroken() {
  console.log("fallBroken");

  // sound effect shattering

  //end på lyd  send to fallbrokenReset
  document.querySelector("#shattering_sound2").play();
  beer.addEventListener("ended", fallBrokenReset);
}

//fallBeer
function fallBeer() {
  console.log("fallBeer");

  //-1 point
  point--;

  //display point
  document.querySelector("#score_count").textContent = point;
  //heart sprite grow bigger if entre 6 et 10
  if (point >= 6 && point <= 10) {
    console.log("grow bigger");
    document.querySelector("#outofhere_sound").play();
    document.querySelector("#heart_container").classList = "";
    document.querySelector("#heart_sprite").classList.add("grow_bigger");
  } else {
    console.log("no grow bigger");
    document.querySelector("#heart_container").classList = "no_display";
    document.querySelector("#heart_sprite").classList = "";
  }
  // sound effect shattering
  //end på lyd  send to fallBeerReset
  document.querySelector("#shattering_sound3").play();
  beer.addEventListener("ended", fallBeerReset);
}

//fallShot
function fallShot() {
  console.log("fallShot");

  //-2 point
  point -= 2;

  //display point
  document.querySelector("#score_count").textContent = point;
  //heart sprite grow bigger if entre 6 et 10
  if (point >= 6 && point <= 10) {
    console.log("grow bigger");
    document.querySelector("#outofhere_sound").play();
    document.querySelector("#heart_container").classList = "";
    document.querySelector("#heart_sprite").classList.add("grow_bigger");
  } else {
    console.log("no grow bigger");
    document.querySelector("#heart_container").classList = "no_display";
    document.querySelector("#heart_sprite").classList = "";
  }
  // sound effect shattering
  //end på lyd  send to fallBeerReset
  document.querySelector("#shattering_sound4").play();
  shot.addEventListener("ended", fallShotReset);
}

//******************************fallFunctionReset****************************************** */

//fallWaterReset
function fallWaterReset() {
  console.log("fallWaterReset");
  //reset
  water.firstElementChild.classList = "waterfull_background";
  //Vis element igen
  water.classList = "";
  water.offsetLeft;
  water.classList = "standard_pos glide";
  //giv glide igen
  //water glass i spillet plus random delay og random hastighed
  myRand = Math.floor(Math.random() * 2) + 1;
  water.classList.add("water_glide" + myRand);
}

//fallBrokenReset

function fallBrokenReset() {
  console.log("fallBrokenReset");
  //reset
  broken.firstElementChild.classList = "brokenglass_background";
  //Vis element igen
  broken.classList = "";
  broken.offsetLeft;
  broken.classList = "standard_pos glide";
  //giv glide igen
  //broken glass i spillet plus random delay og random hastighed
  myRand = Math.floor(Math.random() * 2) + 1;
  broken.classList.add("broken_glide" + myRand);
}

// fallBeerReset
function fallBeerReset() {
  console.log("fallBeerReset");
  //reset
  // beer.firstElementChild.classList = "";
  // beer.firstElementChild.offsetLeft;

  //Vis element igen
  beer.classList = "";
  beer.offsetLeft;
  beer.classList = "standard_pos glide";
  //giv glide igen
  //beer glass i spillet plus random delay og random hastighed
  myRand = Math.floor(Math.random() * 2) + 1;
  beer.classList.add("beer_glide" + myRand);
  beer.firstElementChild.classList = "beerfull_background";
}

// fallShotReset
function fallShotReset() {
  console.log("fallShotReset");
  //reset

  //Vis element igen
  shot.classList = "";
  shot.offsetLeft;
  shot.classList = "standard_pos glide";
  //giv glide igen
  //beer glass i spillet plus random delay og random hastighed
  myRand = Math.floor(Math.random() * 2) + 1;
  shot.classList.add("shot_glide" + myRand);
  shot.firstElementChild.classList = "shotfull_background";
}

//**********************************stopSpil*****************************************/

function stopSpil() {
  console.log("stopSpil");

  //stop music
  document.querySelector("#background_sound").pause();
  //stop lyd effect
  //skjul andre skærm
  document.querySelector("#settings_screen").classList = "no_display";
  //hvis ikke mere tid
  //stop timer
  document.querySelector("#time_sprite").classList.remove("timer");
  document
    .querySelector("#time_board")
    .removeEventListener("animationend", stopSpil);
  //stop alle animationer
  water.classList = "";
  document.querySelector("#waterfull_sprite").classList = "";
  broken.classList = "";
  document.querySelector("#brokenglass_sprite").classList = "";
  water.classList = "";
  document.querySelector("#waterfull_sprite").classList = "";
  shot.classList = "";
  document.querySelector("#shotfull_sprite").classList = "";
  //stop alle event listener
  water.removeEventListener("mousedown", clickWater);
  water.firstElementChild.removeEventListener("animationend", clickWaterReset);
  broken.removeEventListener("mousedown", clickBroken);
  broken.firstElementChild.removeEventListener(
    "animationend",
    clickBrokenReset
  );
  beer.removeEventListener("mousedown", clickBeer);
  beer.firstElementChild.removeEventListener("animationend", clickBeerReset);
  shot.removeEventListener("mousedown", clickShot);
  shot.firstElementChild.removeEventListener("animationend", clickShotReset);
  water.offsetLeft;
  beer.offsetLeft;
  shot.offsetLeft;
  broken.offsetLeft;
  if (point > 13) {
    console.log("You lose hospital");
    gameOver();
  } else if (liv <= 0) {
    console.log("You lose hospital");
    gameOver();
  } else if (point >= 6 && point <= 10) {
    console.log("Level complete");
    levelComplete();
  } else if (point < 6) {
    console.log("You Lose bike");
    gameOver();
  } else if (point > 10 && point <= 13) {
    console.log("You lose taxi");
    gameOver();
  }
}

//*******************************gameOver***************************************** */

// function gameOver
function gameOver() {
  //hvis over 13 points
  //hospitalGameOver

  if (point > 13) {
    console.log("You lose hospital2");
    windowResize();
    document.querySelector("#hospital_sound").play();
    document.querySelector("#game").classList.add("no_display");
    document.querySelector("#game_over").classList.remove("no_display");
    document
      .querySelector("#game_over")
      .classList.add("game_over_hospital_background");
    document.querySelector("#replay1").addEventListener("click", startGame);

    document.querySelector("#home1").addEventListener("click", sidenVises);

    //udskriv point

    document.querySelector("#gameover_points").textContent =
      "You scored " +
      point +
      " points... Lets just say.. *only* the doctors will take care of you tonight";
    console.log(point);
  }
  // hvis ikke flere liv
  //hospitalGameOver
  else if (liv <= 0) {
    console.log("You lose hospital2");
    windowResize();
    document.querySelector("#hospital_sound").play();
    document.querySelector("#game").classList.add("no_display");
    document.querySelector("#game_over").classList.remove("no_display");
    document
      .querySelector("#game_over")
      .classList.add("game_over_hospital_background");
    document.querySelector("#replay1").addEventListener("click", startGame);

    document.querySelector("#home1").addEventListener("click", sidenVises);

    //udskriv point

    document.querySelector("#gameover_points").textContent =
      "You scored " +
      point +
      " points... Lets just say.. *only* the doctors will take care of you tonight";
    console.log(point);
  }
  //hvis under 6 points
  //bikeGameOver
  else if (point < 6) {
    console.log("You Lose bike2");
    windowResize();
    document.querySelector("#bike_sound").play();

    document.querySelector("#game").classList.add("no_display");
    document.querySelector("#game_over").classList.remove("no_display");
    document
      .querySelector("#game_over")
      .classList.add("game_over_bike_background");
    document.querySelector("#replay1").addEventListener("click", startGame);

    document.querySelector("#home1").addEventListener("click", sidenVises);

    //udskriv point

    document.querySelector("#gameover_points").textContent =
      "You scored " +
      point +
      " points. I suggest you relax a bit if you want to score that babe";
    console.log(point);
  }
  //hvis mellem 0 og 13
  //taxiGameOver
  else if (point > 10 && point <= 13) {
    console.log("You lose taxi2");
    windowResize();
    document.querySelector("#taxi_sound").play();
    document.querySelector("#game").classList.add("no_display");
    document.querySelector("#game_over").classList.remove("no_display");
    document
      .querySelector("#game_over")
      .classList.add("game_over_taxi_background");
    document.querySelector("#replay1").addEventListener("click", startGame);

    document.querySelector("#home1").addEventListener("click", sidenVises);

    //udskriv point

    document.querySelector("#gameover_points").textContent =
      "You scored " +
      point +
      " points. Hold up... did you really get naked in the middle of the dance floor? Get a grip buddy";
    console.log(point);
  }
}

//******************************levelComplete******************************************** */

// function levelComplete

function levelComplete() {
  console.log("Level Complete2");
  windowResize();
  document.querySelector("#myplace_sound").play();
  document.querySelector("#moto_sound").volume = 0.5;
  document.querySelector("#moto_sound").play();
  document.querySelector("#game").classList.add("no_display");
  // vise #level_complete_background
  document.querySelector("#level_complete").classList.remove("no_display");
  document
    .querySelector("#game_over")
    .classList.add("level_complete_background");
  //click på replay knap sende til startGame
  document.querySelector("#replay2").addEventListener("click", startGame);

  //click på home2 send sidenVises
  document.querySelector("#home2").addEventListener("click", sidenVises);

  //udskriv point

  document.querySelector("#winlevel_points").textContent =
    "You scored " + point + " points. Guess you'll have fun tonight ;)";
  console.log(point);
}
