









var gMap;

var score1 = 0;
var score2 = 0;
var score3 = 0;
var score4 = 0;
var score5 = 0;
var score6 = 0;
var score7 = 0;
var scoreTotal = 0;


function initMap() {
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 37.0902, lng: -95.7129}, zoom: 3});


        var markerCheat = new google.maps.Marker({position:{lat:55.3781,lng:-3.4360}, map:gMap});
        markerCheat.setIcon('https://www.google.com/mapfiles/marker.png');
        
        
        var infoWindowCheat = new google.maps.InfoWindow({content:'Cheat Activated!'});
        markerCheat.addListener('click', function() {
            infoWindowCheat.open(gMap, markerCheat);


            text1 = "<del>San Diego, California</del>"
            document.getElementById("loc1").innerHTML = text1;
          
            text2 = "<del>Orlando, Florida</del>"
            document.getElementById("loc2").innerHTML = text2;
          
                text3 = "<del>Great Smoky Mountains National Park, Tennessee</del>"
            document.getElementById("loc3").innerHTML = text3;
            
                text4 = "<del>Las Vegas, Nevada</del>"
            document.getElementById("loc4").innerHTML = text4;
           
                text5 = "<del>Chicago, Illinois</del>"
            document.getElementById("loc5").innerHTML = text5;
          
                text6 = "<del>San Antonio, Texas</del>"
            document.getElementById("loc6").innerHTML = text6;
        
                text7 = "<del>Honolulu, Hawaii</del>"
            document.getElementById("loc7").innerHTML = text7;




        });


        /*
        var marker = new google.maps.Marker({position:{lat:32.7157,lng:-117.1611}, map:gMap});
        marker.setIcon('https://www.google.com/mapfiles/marker.png');
        
        
        var infoWindow = new google.maps.InfoWindow({content:'San Diego, California'});
        marker.addListener('click', function() {
            infoWindow.open(gMap, marker);
        });




//var marker2 = new google.maps.Marker({position:{lat:32.8503,lng:-117.2730}, map:gMap});
//marker2.setIcon('https://www.google.com/mapfiles/marker.png');


//var infoWindow2 = new google.maps.InfoWindow({content:'La Jolla Cove, California'});
//marker2.addListener('click', function() {
//    infoWindow2.open(gMap, marker2);
//});

var marker3 = new google.maps.Marker({position:{lat:28.5384,lng:-81.3789}, map:gMap});
marker3.setIcon('https://www.google.com/mapfiles/marker.png');


var infoWindow3 = new google.maps.InfoWindow({content:'Orlando, Florida'});
marker3.addListener('click', function() {
    infoWindow3.open(gMap, marker3);
});

var marker4 = new google.maps.Marker({position:{lat:35.6532,lng:-83.5070}, map:gMap});
marker4.setIcon('https://www.google.com/mapfiles/marker.png');


var infoWindow4 = new google.maps.InfoWindow({content:'Smoky Mountains, Tennessee'});
marker4.addListener('click', function() {
    infoWindow4.open(gMap, marker4);
});

var marker5 = new google.maps.Marker({position:{lat:36.1716,lng:-115.1391}, map:gMap});
marker5.setIcon('https://www.google.com/mapfiles/marker.png');


var infoWindow5 = new google.maps.InfoWindow({content:'Las Vegas, Nevada'});
marker5.addListener('click', function() {
    infoWindow5.open(gMap, marker5);
});

var marker6 = new google.maps.Marker({position:{lat:41.8781,lng:-87.6298}, map:gMap});
marker6.setIcon('https://www.google.com/mapfiles/marker.png');


var infoWindow6 = new google.maps.InfoWindow({content:'Chicago, Illinois'});
marker6.addListener('click', function() {
    infoWindow6.open(gMap, marker6);
});

var marker7 = new google.maps.Marker({position:{lat:26.1837,lng:-98.1231}, map:gMap});
marker7.setIcon('https://www.google.com/mapfiles/marker.png');


var infoWindow7 = new google.maps.InfoWindow({content:'Alamo, Texas'});
marker7.addListener('click', function() {
    infoWindow7.open(gMap, marker7);
});

var marker8 = new google.maps.Marker({position:{lat:21.3099,lng:-157.8581}, map:gMap});
marker8.setIcon('https://www.google.com/mapfiles/marker.png');


var infoWindow8 = new google.maps.InfoWindow({content:'Honolulu, Hawaii'});
marker8.addListener('click', function() {
    infoWindow8.open(gMap, marker8);
});

*/

google.maps.event.addListener(gMap, 'idle', function() {
    updateGame()
});



    }


function updateGame() {
    console.log('function UpdateGame()!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;


    //if (gMap.getBounds().contains({lat:45.3306,lng:-91.4918})){
    //    inBounds = true;
    //}
    console.log("inBounds: "+inBounds+" zoomLevel:"+zoomLevel);
    //console.log( "zoomLevel:"+zoomLevel);
    console.log("Score: "+scoreTotal);

// scoring

   if (gMap.getBounds().contains({lat:32.7157,lng:-117.1611}) && zoomLevel >= 10){
            inBounds = true;
           ++score1;
        }
    if (gMap.getBounds().contains({lat:28.5384,lng:-81.3789}) && zoomLevel >= 10){
            inBounds = true;
           ++score2;
        }
    if (gMap.getBounds().contains({lat:35.6532,lng:-83.5070}) && zoomLevel >= 10){
            inBounds = true;
           ++score3;
        }            

        if (gMap.getBounds().contains({lat:36.1716,lng:-115.1391}) && zoomLevel >= 10){
            inBounds = true;
           ++score4;
        }
        if (gMap.getBounds().contains({lat:41.8781,lng:-87.6298}) && zoomLevel >= 10){
            inBounds = true;
           ++score5;
        }
        if (gMap.getBounds().contains({lat:29.4252,lng:-98.4946}) && zoomLevel >= 10){
            inBounds = true;
           ++score6;
        }
        if (gMap.getBounds().contains({lat:21.3099,lng:-157.8581}) && zoomLevel >= 10){
            inBounds = true;
           ++score7;
        }
   
if (score1 >= 1){
    //score1 = score1 = 1;
    //scoreTotal = scoreTotal + score1;
    text1 = "<del>San Diego, California</del>"
document.getElementById("loc1").innerHTML = text1;
}

if (score2 >= 1){
    //score1 = score1 = 1;
    //scoreTotal = scoreTotal + score1;
    text2 = "<del>Orlando, Florida</del>"
document.getElementById("loc2").innerHTML = text2;
}

if (score3 >= 1){
    //score1 = score1 = 1;
    //scoreTotal = scoreTotal + score1;
    text3 = "<del>Great Smoky Mountains National Park, Tennessee</del>"
document.getElementById("loc3").innerHTML = text3;
}

if (score4 >= 1){
    //score1 = score1 = 1;
    //scoreTotal = scoreTotal + score1;
    text4 = "<del>Las Vegas, Nevada</del>"
document.getElementById("loc4").innerHTML = text4;
}

if (score5 >= 1){
    //score1 = score1 = 1;
    //scoreTotal = scoreTotal + score1;
    text5 = "<del>Chicago, Illinois</del>"
document.getElementById("loc5").innerHTML = text5;
}

if (score6 >= 1){
    //score1 = score1 = 1;
    //scoreTotal = scoreTotal + score1;
    text6 = "<del>San Antonio, Texas</del>"
document.getElementById("loc6").innerHTML = text6;
}

if (score7 >= 1){
    //score1 = score1 = 1;
    //scoreTotal = scoreTotal + score1;
    text7 = "<del>Honolulu, Hawaii</del>"
document.getElementById("loc7").innerHTML = text7;
}



    
}





function initApplication() {
    console.log('Map Mania Lite - Starting!');
    alert('Welcome to MapMania 2!\nTry to find my favorite locations using the hint box as a guide!\nZoom into the location with zoom level 10 to have the guess count!\nAs you guess correctly, the location number will be crossed out.\nTo use the cheat code simply click on the United Kingdom marker to cross out all locations.\nGood Luck!!!');
    

    let text1 = "Location 1";
document.getElementById("loc1").innerHTML = text1;

let text2 = "Location 2";
document.getElementById("loc2").innerHTML = text2;

let text3 = "Location 3";
document.getElementById("loc3").innerHTML = text3;

let text4 = "Location 4";
document.getElementById("loc4").innerHTML = text4;

let text5 = "Location 5";
document.getElementById("loc5").innerHTML = text5;

let text6 = "Location 6";
document.getElementById("loc6").innerHTML = text6;

let text7 = "Location 7";
document.getElementById("loc7").innerHTML = text7;








}



