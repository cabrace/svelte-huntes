<script>
import jQuery from 'jquery';
import { onMount } from "svelte"; 
// import Map from '../map.svelte';

  
import "$lib/responsive-tabs/css/responsive-tabs.css";

  const initMap = () => {
      let huntes = {lat: 13.193377, lng: -59.551091};

      let map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: huntes
      });

      let marker = new google.maps.Marker({
        position: huntes,
        map: map
      });
    }


onMount(async()=> {
    console.log("Directions Mounted")
    window.jQuery = jQuery;
    /* window.initMap = this.initMap; */
    
  
      //Tag manager
      // window.dataLayer = window.dataLayer || [];
      // function gtag(){dataLayer.push(arguments);}
      // gtag('js', new Date());
      // gtag('config', 'UA-136740387-1');

     window.initMap = initMap;

    // const responsiveTabs = await import('$lib/responsive-tabs/js/jquery.responsiveTabs.js');

    // let tabs = window.jQuery("#responsiveTabsDemo");
    // tabs.responsiveTabs('activate', 0);


});
</script>

<svelte:head>
<script type="text/javascript" async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAsVMUiCe8am-w83iXrXJMniVvhFk9ioxc&callback=initMap" on:load={initMap}></script>
</svelte:head>
<section class="content">

	<!--<div class="info__well">-->
		<!--<h6>-F-</h6>-->
		<!--<p>We selected here a few photographs from Hunte's Gardens. Please remember - no photo can give justice to this fine place - the best way is to experience it personally, by visiting it!</p>-->
	<!--</div>-->
	<!--Highlight Section-->

	<!--Tabs-->
	<div id="responsiveTabsDemo" class="info__well--noshadow tabs">

	<section class="map"> 
	<div id="map" style="width:300px;height:300px;"></div>
    <!-- <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAsVMUiCe8am-w83iXrXJMniVvhFk9ioxc&callback=initMap"></script> -->
	</section>


		<ul class="tab-links">
			<li class="active"><a href="directions.html#tab-1">Public Transport</a></li>
			<li><a href="directions.html#tab-2">Taxi</a></li>
			<li><a href="directions.html#tab-3">Private/Rented Vehicle</a></li>
		</ul>

		<!--Tab Content-->
		<div class="tab-content info_banner">  

			<div id="tab-1" class="tab active"> 
				<img width="250px" class="info__directions__image" src="/transport-bus.jpg" alt="Transport bus" />
				<div class="info__well info__directions__text flexbox row">
					<div class="">
						<!--<h6>-G-</h6>-->
						<div class="tab__info__heading">Directions by Bus</div>
						<p class="tab__info__text" style="border: 1px dashed #c8db1c; background:#3d4e0554;">
						The easiest way to get there for a first timer by bus from any location would be to firstly get to Bridgetown. From Bridgetown get to the <span class="accent--yellow">Fairchild Street Bus Terminal</span> (the main one in town) and from there catch the <span class="accent--yellow">Sugar Hill bus</span>, asking the driver to put you off at the correct spot.</p>
					</div>
				</div>
			</div>
			<div id="tab-2" class="tab">
				<img width="250px" class="info__directions__image" src="/transport-taxi.png" alt="Transport taxi" />
				<div class="info__well flexbox row">
					<div class="tab__info">
						<!--<h6>-H-</h6>-->
						<div class="tab__info__heading">Directions by Taxi</div>
						<p class="tab__info__text" style="border: 1px dashed #c8db1c; background:#3d4e0554;">All Taxies will know how to get there; however it is best advised to try and negotiate a reasonable price.</p>
					</div>
				</div>
			</div>
			<div id="tab-3" class="tab">
				<img width="250px" class="info__directions__image" src="/transport-rented.jpg" alt="Transport rented" />
				<div class="info__well info__directions__text flexbox row">
					<div class="tab__info">
						<!--<h6>-I-</h6>-->
						<div class="tab__info__heading">Directions by Private vehicle.</div>
						<p class="tab__info__text" style="border: 1px dashed #c8db1c; background:#3d4e0554;">The easiest way to get there for a first-timer is to follow <span class="accent--yellow">Highway 3A</span> all the way until you see the large Huntes Gardens sign. Be sure to look out for the smaller red and white signposts saying "Huntes Gardens" along the way.</p>
					</div>
				</div>

			</div>
			<!--/Tab 3-->

		</div>
		<!--/Tab Content-->

	</div>


</section>
