$(document).ready(function() {
    $.get("https://www.googleapis.com/youtube/v3/videos", {
            part: 'statistics',
            id: 'C9nSNkqv_x8',
            key: 'AIzaSyCLAjahV2GN9XbEYFBeEIUmnSKgTgsHFak'},
            function(data) {
                console.log(data);
            }
    )
});