<script>
	 /* import mapStyles from './map-styles'; // optional */
    import { onMount } from 'svelte';


  let container;
  let map;
  let zoom = 8;
  /* let center = {lat: -34.397, lng: 150.644}; */
  let huntes = {lat: 13.193377, lng: -59.551091};


  onMount(async () => {
      map = new google.maps.Map(container, {
          zoom,
          huntes,
          styles: mapStyles // optional
        });
    });
</script>

<style>
.full-screen {
    width: 100vw;
    height: 100vh;
}
</style>

<div class="full-screen" bind:this={container}></div>
