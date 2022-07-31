<style>
  /**
  section {
    display: flex;
    flex-wrap: wrap;
  }

  section::after {
    content: '';
    flex-grow: 1e4;
    min-width: 20%;
  }

  div {
    margin: 2px;
    background-color: violet;
    position: relative;
  }

  i {
    display: block;
  }

  img {
    position: absolute;
    top: 0;
    width: 100%;
    vertical-align: bottom;
  }
  **/
</style>
<script>

  

// Svelte stuff
import jQuery from 'jquery';
import { onMount } from "svelte"; 

//Other plugins 
// LG 
import lightgallery from 'lightgallery';

  // LG --> Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

  // LG --> Styling
import "$lib/lightgallery/css/lightgallery.css";
import "$lib/lightgallery/css/lg-thumbnail.css";
import "$lib/lightgallery/css/lg-zoom.css";

//JustifiedGallery --> Styling
import "$lib/justifiedgallery/css/justifiedGallery.css";

// Import image mappings from assets folder
let imageList = import.meta.glob("../../../static/gallery/375/*.jpg");

let gallery;
let justOptions = {
  "lastRow":"hide",
  "rowHeight":"200"
}

// console.log(window.$("#lightgallery"));
onMount(async () => {
  window.jQuery = jQuery;
  console.log("Gallery Mounted")

  gallery = window.jQuery('#lightgallery');

  const justifiedGallery = await import('$lib/justifiedgallery/js/jquery.justifiedGallery.js')


  gallery.justifiedGallery(justOptions);

    gallery = lightgallery(document.getElementById("lightgallery"),
        {
          autoplayFirstVideo: false,
          pager: false,
          galleryId: "gardens",
          plugins: [lgThumbnail,lgZoom],
          mobileSettings: {
            controls: false,
            showCloseIcon: false,
            download: false,
            rotate: false
          }
      });

  // gallery.justifiedGallery("#lightgallery");
});

// Get basename of image path: split by /, reverse and get first element which was the last
function basename(path) {
    return path.split('/').reverse()[0];
}


let images = [];
for (let image in imageList){
  images.push(basename(image))
    console.log(basename(image))
}


// for (const image in imageList) {
    // imageList[image]().then(({ default: imageUrl }) => {
      // console.log(imageUrl);
    // });
  // }




</script>


<div class="banner">
  <header>
    <div class="nav navigation animateIn">

      <div class="menu">
        <div class="header__nav-link"><a href="/">Home</a></div>
        <!--<div class="header__nav-link"><a href="/">About</a></div>-->
        <div class="header__nav-link"><a href="/gallery">Gallery</a></div>
        <div class="header__nav-link"><a href="/directions">Directions</a></div>
      </div>

      <!--Mobile Menu-->
      <div id="menuToggle">
        <label for="toggle">
          <input id="toggle" type="checkbox">
          <div class="burger">
            <span class="burger__text">Menu</span>
            <div class="burger-icon">
              <span class="stripe"></span>
              <span class="stripe"></span>
              <span class="stripe"></span>
            </div>
          </div>
          <div class="menu">
            <div class="header__nav-link"><a href="/">Home</a></div>
            <div class="header__nav-link"><a href="/gallery">Gallery</a></div>
            <div class="header__nav-link"><a href="/directions">Directions</a></div>
          </div>
        </label>

      </div>
    </div>

  </header>

  <div class="flexbox column">
    <h1 class="logo">Gallery</h1>
  </div>
</div>

<section class="content">

  <div class="below-banner">
    <div class="below-banner__text__intro">
      <div class="below-banner__text__intro__inner">
        Here are a few selected photographs from Hunte's Gardens. Please remember - no photo can give justice to this fine place - as the best way is to experience it personally is by visiting!</div>
    </div>
  </div>

  <div class="gallery">
    <div class="gallery__outer">

      <div id="lightgallery" class="demo list-unstyled row" style="border:5px solid #000; border-radius:0px;">
        {#each images as image}
            <div data-responsive="/gallery/375/{image} 375,/gallery/800/{image} 800" data-src="/gallery/800/{image}" data-sub-html=" ">
              <a href="/gallery/800/{image}" data-download-url="false">
                <img class="img-responsive" src="/gallery/375/{image}" alt="{image}" />
              </a>
            </div>
        {/each}

      </div>
    </div>



  </div>

</section>
