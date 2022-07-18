<script>
  // Debug page path
  import { page } from '$app/stores';
  console.log(`Page path --> ${$page.url.pathname} ${$page.url.pathname === "/gallery"}`)
  /* import '../app.scss'; */
  /* import '../bulma.scss'; */
	/* import Nav from '../components/nav.svelte'; */
	/* import Huntes from '../components/huntes.svelte'; */
   // Used on all pages
</script>
<!-- <Nav/> -->
<slot />

