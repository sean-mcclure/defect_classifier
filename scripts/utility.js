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
load_cnt = 0

function loading_display() {
    az.call_every({
        "every": 300,
        "function": function() {
            load_cnt++
            az.add_html("loading_layout_cells", load_cnt, {
                "html": "<div class='added_load'></div>"
            })
            az.all_style_html("added_load", {
                "width": "20px",
                "height": "20px",
                "background": "gold",
                "margin": "4px",
                "display": "inline-block"
            })
            if(load_cnt == az.get_cell_count('loading_layout', 1)) {
                load_cnt = 0
                az.all_remove_element('added_load')
            }
        }
    })
}

function stop_load_display() {
    az.stop_call_every()
    az.all_remove_element('added_load')
}