// script.js

function openTab(tabName) {
  var i, tabContent;

  // Hide all tabs
  tabContent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  // Show the selected tab
  document.getElementById(tabName).style.display = 'block';
}

// Add more JavaScript functions as needed