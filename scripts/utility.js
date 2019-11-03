function image_to_data_url(image_url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', image_url);
    xhr.responseType = 'blob';
    xhr.send();
}

function convert_image_to_data(image_url) {
    image_to_data_url(image_url, function(data_url) {
        az.hold_value.data_url = data_url
    })
}

