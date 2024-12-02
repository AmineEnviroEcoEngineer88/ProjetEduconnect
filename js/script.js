document.addEventListener("DOMContentLoaded", function() {
  // Ajax Header/Footer Import for Any Page
  $('#header-placeholder').load("header.html");
  $('#footer-placeholder').load("footer.html");

});
// Humberger Menu



// Javascript / JQuery



// Make sure the document is fully loaded
$(document).ready(function(){

  const mainMenu = document.querySelector('.mainMenu');
  const closeMenu = document.querySelector('.closeMenu');
  const openMenu = document.querySelector('.openMenu');

  // Add an event listener to each menu item to close the menu when clicked
  const menuItems = mainMenu.querySelectorAll('li a');
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', close);
  });

  openMenu.addEventListener('click', show);
  closeMenu.addEventListener('click', close);

  function show(){
      mainMenu.classList.add('menu-open');
      mainMenu.style.display = 'flex';
      mainMenu.style.top = '0';
  }
  function close(){
      mainMenu.classList.remove('menu-open'); 
      mainMenu.style.top = '-100%';
  }

  //Toggle Display for the "Media" Page
  // add a click event listener
  $('.toggle-view-button').click(function(event){
    event.preventDefault();

    // Toggle visibility by showing/hiding respective sections
    $('.thumbnail-view').toggle();
    $('.list-view').toggle();
  });

  // Background Image Slider for the "Wow!" Page
  // Array of background images 
const images = [
  '../img/wow1.png',
  '../img/wow2.jpg',
  '../img/wow3.png',
  '../img/wow4.png'
];

let index = 0; // start index for images

// function to change background image
function changeBackground() {
  $('.background-slider').fadeOut('slow', function() {
    // Increment index or reset if at the end of the images array
    index = (index + 1) % images.length;
    // change background image
    $(this).css('background-image', 'url("' + images[index] + '")').fadeIn('slow');
  });
}

// Change background image every 5 seconds (adjust timing as needed)
setInterval(changeBackground, 3500);


// Automatic Table of Contents Generation for the "Contents" Page
// select the page-articles element and find all sections
var sections = $('.page-articles').find('section')
// createing an empty table of contents container
var tocContainer = $('<div class="toc-container"></div>');
// creating unorderd list for the table of contents
var tocList = $('<ul></ul>');
// Iterate through each seciton
sections.each(function(index){
  var sectionId = $(this).attr('id'); // get the id of each section
  var secitonTitle = $(this).find('h3').text(); // get the title fo each section

  // create a list items with links to each section id
  var tocItem = $('<li><a href="#' + sectionId + '">'+ secitonTitle + '</a></li>');
  
  // append list of itmes
  tocList.append(tocItem);

  

});

 // append the table of contents 
 tocContainer.append(tocList);
 
 // append the title of the table of content
 var tocTitle = $('<h2>Table des matières</h2>');
 $('.table-of-contents').append(tocTitle); 
 // append the generated table of contents to a specific element 
 $('.table-of-contents').append(tocContainer); 

 
});



//get input form 
$(".submit").submit(function(){
  // todo
  // get user input
  // check if valid
  // notifay the user if his form is valid 
});


