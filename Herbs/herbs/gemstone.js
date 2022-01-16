// defining variables
var currentCity = "";
var currentBody = "blood";
var showScars = false;

// event handler for select
function onCitySelected() {
    // currentCity = this.href; // set variable to select value
    currentCity = this.getAttribute("data-id");

    var cities = document.querySelectorAll('#city a');
    for(var i = 0; i < cities.length; i++) {
        // set display style to none to hide it
        cities[i].classList=""
    }
    this.classList="active"

    showSelectedItems(); // call another global function
}

// event handler for select
function onBodySelected() {
    // currentBody = this.value; // set variable to select value
    currentBody = this.getAttribute("data-id");


    var bodies = document.querySelectorAll('#body a');
    for(var i = 0; i < bodies.length; i++) {
        // set display style to none to hide it
        bodies[i].classList=""
    }
    this.classList="active"

    showSelectedItems(); // call another global function
}

// event handler for checkbox
function onScarsSelected() {
    showScars = this.checked; // set variable to checkbox status
    showSelectedItems(); // call another global variable
}

// global function for updating the display
function showSelectedItems() {
    // if we don't have a city OR a body, do not update anything
    if(currentCity == "" || currentBody == "") {
        return;
    }

    // get a list of all the cities 
    var cities = document.querySelectorAll('.city');
    // for each city
    for(var i = 0; i < cities.length; i++) {
        // set display style to none to hide it
        cities[i].style['display'] = 'none';
    }
    // get the current city
    var city = document.querySelector('.city.' + currentCity);
    // update the city display style to block (visible)
    city.style['display'] = 'block';

    var allItems = document.querySelectorAll('.items li');
    for(var i = 0; i < allItems.length; i++) {
        allItems[i].style['display'] = 'none';
    }

    // default variable
    var itemType = 'repair';
    // if showScars is true
    if(showScars) {
        // change itemType to scar
        itemType = 'scar';
    }

    var items = document.querySelectorAll('.city.' + currentCity + ' .items li.' + currentBody + '.' + itemType);
    for(var i = 0; i < items.length; i++) {
        items[i].style['display'] = 'block';
    }
}

// variable reference to an element
var cityDropdown = document.querySelectorAll('#city a');
var bodyDropdown = document.querySelectorAll('#body a');
var scarsCheckbox = document.querySelector('#scars');

// attaching an event handler
for(var i= 0; i <cityDropdown.length; i++) {
    cityDropdown[i].addEventListener('click', onCitySelected);
}

for(var i= 0; i <bodyDropdown.length; i++) {
    bodyDropdown[i].addEventListener('click', onBodySelected);
}

// bodyDropdown.addEventListener('change', onBodySelected);
scarsCheckbox.addEventListener('change', onScarsSelected);