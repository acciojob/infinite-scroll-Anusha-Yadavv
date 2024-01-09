//your code here!

// script.js
document.addEventListener('DOMContentLoaded', function () {
  const infiList = document.getElementById('infi-list');
  const itemsToLoad = 10; // Number of items to add by default
  const itemsPerLoad = 2; // Number of items to add when reaching the end

  // Function to add list items
  function addListItem(text) {
    const li = document.createElement('li');
    li.textContent = text;
    infiList.appendChild(li);
  }

  // Add 10 list items by default
  for (let i = 1; i <= itemsToLoad; i++) {
    addListItem('List Item ' + i);
  }

  // Function to add more list items when reaching the end
  function addMoreItems() {
    const currentItems = infiList.childElementCount;
    for (let i = currentItems + 1; i <= currentItems + itemsPerLoad; i++) {
      addListItem('List Item ' + i);
    }
  }

  // Event listener to detect scrolling to the bottom
  infiList.addEventListener('scroll', function () {
    const lastItem = infiList.lastElementChild;
    const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
    const infiListHeight = infiList.clientHeight;
    const scrollTop = infiList.scrollTop;

    // Check if the user has reached the end of the list
    if (scrollTop + infiListHeight >= lastItemOffset) {
      addMoreItems();
    }
  });
});
