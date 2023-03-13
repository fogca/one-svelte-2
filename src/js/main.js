import Masonry from 'masonry-layout';

const grid = document.querySelector('.grid');
    const masonry = new Masonry( grid, {
      itemSelector: '.masonry-item',
      gutter: 10,
      percentPosition: true
  });
/*
window.addEventListener('load', function() {
    const grid = document.querySelector('.grid');
    const masonry = new Masonry( grid, {
      itemSelector: '.masonry-item',
      gutter: 10,
      percentPosition: true
    });
    masonry.appended( '.masonry-item' )
})
*/