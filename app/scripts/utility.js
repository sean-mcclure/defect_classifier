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
            if (load_cnt == az.get_cell_count('loading_layout', 1)) {
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

az.read_local_file({
    "file_path" : "test_temps/test_temps.json",
    "done" : function(data) {
        az.hold_value.test_temps = Object.keys(data)
    }
})