"use strict";

// Declare variables
var student = "Joël Lakhai";
var year = 2018;
var group = "MD2B";
var title = "JavaScript Bootcamp " + year;
var currentYear = new Date().getFullYear();
var period = getPeriod(2018, currentYear);

// Init
instruction4();
instruction5();

//Instructions

function instruction3() {
  var description =
    "Nadat op de link 'Click Event' is geklikt worden de header," +
    " beschrijving en oplossing van de opdracht aangepast";
  var result = "De header en beschrijving zijn aangepast: zie hierboven";

  updateContent("Opdracht 3 - Click Event", description, result);
}

function instruction4() {
  // function instruction2 has been replaced by function instruction4
  document.title = title;
  document.getElementById("pageHeader").innerText = title;

  document.getElementById("group").innerText = group;

  setValueByClassName("year", year);
  setValueByClassName("student", student);
}

function instruction5() {
  setValueByClassName("period", period);
}

function instruction6() {
  var currentYear = new Date().getFullYear();
  var description =
    "Bepaal de periode op basis van de het startjaar en het huidige jaar en voer een klein testje uit voor verschillende startjaren: vorige jaar, huidige jaar en volgende jaar";

  var result = "Huidige jaar: " + currentYear + "<br/>";
  result += "Startjaren: " + "<br/>";
  for (var i = -1; i <= 1; i++) {
    var startYear = currentYear + i;
    var period = getPeriod(startYear, currentYear);
    result += " - " + startYear + ": " + period + "<br/>";
  }

  updateContent("Opdracht 6 - Periode testen", description, result);
}

function instruction7() {
  var description =
    "Bepaal de dag van vandaag op drie verschillende manieren: 1)if/else, 2)switch en 3)array";
  var result = instruction7a() + "<br/>";
  result += instruction7b() + "<br/>";
  result += instruction7c() + "<br/>";
  result += "<hr/>";
  //result += "De beste manier is gebruik maken van een array!!!";
  result += "De beste manier is gebruik maken van ..... omdat ......";
  updateContent("Opdracht 7 - Dag in de week", description, result);
}

function instruction7a() {
  var dayNumber = new Date().getDay();
  var day = "";
  if (dayNumber === 0) {
    day = "Zondag";
  } else if (dayNumber === 1) {
    day = "Maandag";
  } else if (dayNumber === 2) {
    day = "Dinsdag";
  } else if (dayNumber === 3) {
    day = "Woensdag";
  } else if (dayNumber === 4) {
    day = "Donderdag";
  } else if (dayNumber === 5) {
    day = "Vrijdag";
  } else if (dayNumber === 6) {
    day = "Zaterdag";
  }

  return (
    "Door gebruik te maken van if/else weet ik dat het vandaag " + day + " is."
  );
}

function instruction7b() {
  var dayNumber = new Date().getDay();
  var day = "";
  switch (dayNumber) {
    case 0:
      day = "Zondag";
      break;
    case 1:
      day = "Maandag";
      break;
    case 2:
      day = "Dinsdag";
      break;
    case 3:
      day = "Woensdag";
      break;
    case 4:
      day = "Donderdag";
      break;
    case 5:
      day = "Vrijdag";
      break;
    case 6:
      day = "Zaterdag";
      break;
    default:
      day = "Geen dag";
  }

  return (
    "Ook wanneer ik switch gebruik weet ik dat het vandaag " + day + " is."
  );
}

function instruction7c() {
  var dayNumber = new Date().getDay();
  var days = [
    "Zondag",
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrijdag",
    "Zaterdag"
  ];
  var day = days[dayNumber];
  return (
    "En tenslotte door gebruik te maken van een array weet ik ook dat het vandaag " +
    day +
    " is."
  );
}

function instruction8() {
  var description =
    "Toon een ongesorteerde array met namen van kleuren. Toon vervolgens de oplopend (A-Z) gesorteerde array en de aflopend (Z-A) gesorteerde array";
  var colors = ["Rood", "Geel", "Blauw", "Groen", "Zwart"];
  var result = "Kleuren: " + colors + "<br />";
  var sorted = colors.sort();
  result += "Gesorteerd (A-Z): " + sorted + "<br />";
  var sortedReverse = colors.reverse();
  result += "Gesorteerd (Z-A): " + sortedReverse + "<br />";
  updateContent("Opdracht 8 - Array sorteren", description, result);
}

function instruction9() {
  var description = "Voeg elementen toe: image en buttons.";

  var article = document.getElementsByTagName("article")[0];

  // Creating IMG element
  var img = document.createElement("img");
  img.src = "photo.jpg";
  img.style.width = "150px";
  img.style.height = "150px";
  article.appendChild(img);

  // Creating BR element
  var br = document.createElement("br");
  article.appendChild(br);

  // Creating Buttons
  var leftB = document.createElement("button");
  leftB.innerHTML = "Links";
  leftB.addEventListener(
    "click",
    function() {
      alert("Naar links");
    },
    false
  );
  article.appendChild(leftB);

  var rightB = document.createElement("button");
  rightB.innerHTML = "Rechts";
  rightB.addEventListener(
    "click",
    function() {
      alert("Naar rechts");
    },
    false
  );
  article.appendChild(rightB);

  updateContent("Opdracht 9 - Elementen toevoegen", description, "");
}

function instruction10() {
  var description = "String bewerkingen";

  var str0 = "Mediacollege Amsterdam";
  var result =
    "De string waar de bewerkingen op gedaan worden is: " + str0 + "<br>";
  var length = str0.length;
  result += "De lengte van de string is: " + length + "<br>";
  var subbie2 = " " + str0.substr(1, length);
  result +=
    "De eerste letter is vervangen door een spatie: " + subbie2 + "<br>";
  length = subbie2.length;
  result += "De lengte van de string is nogsteeds: " + length + "<br>";
  var trimmer = subbie2.trim();
  result +=
    "De eerste letter is vervangen door een spatie: " + trimmer + "<br>";
  length = trimmer.length;
  result += "De lengte van de string is nogsteeds: " + length + "<br>";
  var woorden = trimmer.split(" ");
  result += "Het aantal woorden is: 2 <br>";
  result += "Het eerste woord is: " + woorden[0] + "<br>";
  result += "Het tweede woord is: " + woorden[1] + "<br>";

  updateContent("Opdracht 10 - Het object String", description, result);
}

function instruction11() {
  var description = "Fout netjes afhandelen";

  try {
    alert(sum(10, 20));
  } catch (error) {
    var result = error + "<br>";
  } finally {
    result += "finally block executed";
  }

  updateContent("Opdracht 11 - Foutafhandling", description, result);
}

// Sub functions

// Example for documentation

var a = exampleFunction(5, 4);

/**
 * This is an example of a function.
 * @param {number} a - this is a 1st number value.
 * @param {number} b - this is a 2nd number value.
 * @returns {string} Hello
 */
function exampleFunction(a, b) {
  return "Hello " + a * b;
}

/**
 * Sets the innerText property with a given value for all elements with a given class name.
 * @param {string} className - the innerText property of all elements with this class name will be changed.
 * @param {number} value - the value which will be used to update de elements.
 */
function setValueByClassName(className, value) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerText = value;
  }
}

// Instruction 4
function updateContent(header, description, result) {
  document.getElementById("instructionHeader").innerText = header;
  document.getElementById("instructionDescription").innerHTML = description;
  document.getElementById("instructionResult").innerHTML = result;
}

// Instruction 5
function getPeriod(startYear, currentYear) {
  var result = startYear;
  if (currentYear > startYear) {
    result += "-" + currentYear;
  }
  return result;
}
