<script>
  /* import '../styles/nav.scss'; */
  import '../app.scss'
  import Banner from '../components/banner/banner--gallery.svelte';
  import Content from '../components/gallery/content.svelte';
  // import BelowBanner from '../components/home/banner-below.svelte';
  // import ThingsToDo from '../components/home/things-to-do.svelte';
  // import Footer from '../components/footer.svelte';

  import "$lib/lightgallery/css/lightgallery.css";
  import "$lib/lightgallery/css/lg-thumbnail.css";
  import "$lib/lightgallery/css/lg-zoom.css";
  import justifiedGallery from 'justifiedGallery';

</script>

<svelte:head>
  <title>Hunte's Gardens Barbados | Gallery</title>
  <!-- <link type="text/css" rel="stylesheet" href="node_modules/css/lightgallery.css" /> -->
</svelte:head>

<Banner/>
<Content/>
  <!-- <BelowBanner/> -->
  <!-- <ThingsToDo/> -->
<!-- <Footer/> -->
