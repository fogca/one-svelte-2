import Masonry from 'masonry-layout';
import { browser } from '$app/environment';

if (browser) {
  window.addEventListener("load",function() {
    const masonry = new Masonry( '.masonry', {
        itemSelector: '.masonry-item'
    });
  })
}