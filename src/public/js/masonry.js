function resizeGridItem(item){
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
  item.style.gridRowEnd = "span "+rowSpan;
}

function resizeInstance(instance){
  item = instance.elements[0];
  resizeGridItem(item);
}

allItems = document.getElementsByClassName("item");

for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], resizeInstance);
}
