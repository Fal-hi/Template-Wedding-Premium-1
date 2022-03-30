const lightbox = GLightbox({
    closeOnOutsideClick: false,
    loop: true
});

const track = document.getElementById('track');
const button = document.getElementById('play-pause');

function playPause() {
    if(track.paused) {
        track.play();
        button.className = "bi-pause-fill";
    } else {
        track.pause();
        button.className = "bi-play-fill";
    }
}

button.addEventListener('click', playPause);
track.addEventListener('ended', function() {
    button.className = "bi-play-fill";
});

// Initialize and add the map
function initMap() {
    // The location
    const akad = { lat: -0.9225054940582557, lng: 100.35991095174292 };
    const resepsi = { lat: -0.9225054940582557, lng: 100.35991095174292 };
    const unman = { lat: -0.9225054940582557, lng: 100.35991095174292 };
    // The map center
    const map1 = new google.maps.Map(document.getElementById("map1"), {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: akad,
    });
    const map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: resepsi,
    });
    const map3 = new google.maps.Map(document.getElementById("map3"), {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: unman,
    });
    // The marker position
    const marker1 = new google.maps.Marker({
        position: akad,
        map: map1,
    });
    const marker2 = new google.maps.Marker({
        position: resepsi,
        map: map2,
    });
    const marker3 = new google.maps.Marker({
        position: unman,
        map: map3,
    });
}