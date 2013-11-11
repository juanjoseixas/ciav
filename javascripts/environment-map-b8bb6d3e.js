function initialize(){var a=new google.maps.LatLng(43.385833,-8.406389),s="custom_style",o=[{featureType:"landscape",elementType:"geometry.stroke",stylers:[{color:"#010000"}]},{featureType:"landscape.man_made",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",stylers:[{color:"#E2E0DC"}]},{featureType:"water",stylers:[{color:"#F8F7F6"}]},{featureType:"landscape",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]}],e={zoom:16,center:a,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.TERRAIN,s]},mapTypeId:s},r=new google.maps.Map(document.getElementById("map-canvas"),e),n={name:"Torre de Hércules"},t=new google.maps.StyledMapType(o,n);r.mapTypes.set(s,t),setMarkers(r,sites),setMarkers2(r,sites2),setMarkers3(r,sites3),setMarkers4(r,sites4),infowindow=new google.maps.InfoWindow({content:"loading..."});var i=new google.maps.BicyclingLayer;i.setMap(r)}function setMarkers(a,s){for(var o=0;o<s.length;o++){var e=s[o],r=new google.maps.LatLng(e[1],e[2]),n=new google.maps.Marker({position:r,map:a,icon:"http://ciav.s3.amazonaws.com/icon/statue-2.png",title:e[0],zIndex:e[3],html:e[4]});google.maps.event.addListener(n,"click",function(){infowindow.setContent(this.html),infowindow.open(a,this)})}}function setMarkers2(a,s){for(var o=0;o<s.length;o++){var e=s[o],r=new google.maps.LatLng(e[1],e[2]),n=new google.maps.Marker({position:r,map:a,icon:"http://ciav.s3.amazonaws.com/icon/petroglyphs.png",title:e[0],zIndex:e[3],html:e[4]});google.maps.event.addListener(n,"click",function(){infowindow.setContent(this.html),infowindow.open(a,this)})}}function setMarkers3(a,s){for(var o=0;o<s.length;o++){var e=s[o],r=new google.maps.LatLng(e[1],e[2]),n=new google.maps.Marker({position:r,map:a,icon:"http://ciav.s3.amazonaws.com/icon/beach.png",title:e[0],zIndex:e[3],html:e[4]});google.maps.event.addListener(n,"click",function(){infowindow.setContent(this.html),infowindow.open(a,this)})}}function setMarkers4(a,s){for(var o=0;o<s.length;o++){var e=s[o],r=new google.maps.LatLng(e[1],e[2]),n=new google.maps.Marker({position:r,map:a,icon:"http://ciav.s3.amazonaws.com/icon/shipwreck-2.png",title:e[0],zIndex:e[3],html:e[4]});google.maps.event.addListener(n,"click",function(){infowindow.setContent(this.html),infowindow.open(a,this)})}}var infowindow=null;$(document).ready(function(){initialize()});var sites=[["Menhires por la paz",43.38548,-8.394005,0,'<img src="http://ciav.s3.amazonaws.com/img/1-manolopaz.jpg" alt="" class="pin" /><br><strong>Menhires por la paz.</strong><br>Manolo Paz'],["Combate entre Hércules y Gerión",43.383499,-8.404391,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/2-timbehrensxoseespona.jpg" alt="" /><br><strong>Combate entre Hércules y Gerión.</strong><br>Tim Behrens y Xosé Espona'],["Menhir Pentacefálico",43.384388,-8.405603,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/3-ramonmiranda.jpg" alt="" /><br><strong>Menhir Pentacefálico.</strong><br>Ramón Miranda'],["Ártabros",43.383749,-8.404756,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/4-arturoandrade.jpg" alt="" /><br><strong>Ártabros.</strong>br>Arturo Andrade'],["Rosa de los Vientos",43.386703,-8.407727,0,'<img src="http://ciav.s3.amazonaws.com/img/5-javiercorrea.jpg" alt="" class="pin" /><br><strong>Rosa de los Vientos.</strong><br>Javier Correa'],["Espinoso",43.387164,-8.40821,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/6-chicherri.jpg" alt="" /><br><strong>Espinoso.</strong><br>E. Saavedra Chicherri.'],["Los Guardianes",43.38509,-8.407137,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/7-soledadpenalta.jpg" alt="" /><br><strong>Los Guardianes.</strong><br>Soledad Penalta.'],["Ara Solis",43.385324,-8.406848,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/8-silveriorivas.jpg" alt="" /><br><strong>Ara Solis.</strong><br>Silverio Rivas.'],["Hidra de Lerna",43.385293,-8.405807,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/9-fidelgoas.jpg" alt="" /><br><strong>Hidra de Lerna.</strong><br>Fidel Goás Mendes.'],["Breogán",43.384887,-8.402599,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/breogan-thumb.jpg"><br><strong>Breogán.</strong><br>José Cid.'],["Caronte",43.3841,-8.402224,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/11-ramonconde.jpg" alt="" /><br><strong>Caronte.</strong><br>Ramón Conde.'],["Caracola",43.388801,-8.401022,0,'<img src="http://ciav.s3.amazonaws.com/img/12-monchoamigo.jpg" alt="" class="pin" /><br><strong>Caracola.</strong><br>Moncho Amigo.'],["La Copa del Sol",43.387499,-8.398029,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/13-pepegalan.jpg" alt="" /><br><strong>La Copa del Sol.</strong><br>Pepe Galán.'],["Hércules en la Nave de los Argonautas",43.386376,-8.396838,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/14-gonzaloviana.jpg" alt="" /><br><strong>Hércules en la Nave de los Argonautas.</strong><br>Gonzalo Viana'],["Guitarra",43.384326,-8.403844,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/15-pabloserrano.jpg" alt="" /><br><strong>Guitarra.</strong><br>Pablo Serrano.'],["Monumento a los Fusilados",43.384879,-8.393351,0,'<img src="http://ciav.s3.amazonaws.com/img/16-diazpardo.jpg" alt="" class="pin" /><br><strong>Monumento a los Fusilados.</strong><br>Isaac Díaz Pardo'],["Puertas de Hércules",43.386228,-8.406408,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/17B-franciscoleiro.JPG" alt="" /><br><strong>Puertas de Hércules.</strong><br>Francisco Leiro'],["Estatua de Carlos III",43.385745,-8.40614,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/18-carlosiii.jpg" alt="" /><br><strong>Estatua de Carlos III</strong>'],["Estatua de Hércules",43.386096,-8.406547,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/19-franciscoleiro.jpg" alt="" /><br><strong>Estatua de Hércules.</strong><br>Francisco Leiro.']],sites2=[["Torre de Hércules",43.385971,-8.406483,0,'<img src="http://ciav.s3.amazonaws.com/img/20-torre.jpg" alt="" class="pin" /><br>Torre de Hércules'],["Petroglifos de Punta Herminia",43.38771,-8.398887,0,'<img src="http://ciav.s3.amazonaws.com/img/21-petroglifos.jpg" alt="" class="pin" /><br>Petroglifos de Punta Herminia']],sites3=[["San Amaro",43.381901,-8.396816,0,"San Amaro"],["O Grelle",43.383881,-8.393619,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/23-adormideras.jpg" alt="" /><br>O Grelle'],["Area de Concha",43.384528,-8.392675,0,"Area de Concha"],["O Coido",43.386174,-8.395904,0,"O Coido"],["O Areal",43.383959,-8.406129,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/26-aslapas.jpg" alt="" /><br>O Areal']],sites4=[["Carmen Vilariño",43.387834,-8.395078,0,"Carmen Vilariño"],["Iris",43.392918,-8.412223,0,"Iris"],["Gondiez 1",43.389955,-8.411665,0,"Gondiez 1"],["Aegean Sea",43.388396,-8.407867,0,'<img class="pin" src="http://ciav.s3.amazonaws.com/img/egeo-thumb.jpg" ><br>Aegean Sea'],["Isla",43.388271,-8.412223,0,"Isla"],["Juan Puebla",43.388957,-8.396816,0,"Juan Puebla"]];