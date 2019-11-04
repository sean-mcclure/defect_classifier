function pop_settings() {
    az.add_modal({
        "this_class": "settings_modal",
        "content_class": "settings_modal_content"
    })
    az.style_modal("settings_modal", 1, {
        "width": "400px",
        "height": "auto"
    })
    az.add_text("settings_modal_content", 1, {
        "this_class": "settings_title",
        "text": "SETTINGS"
    })
    az.style_text("settings_title", 1, {
        "align": "center",
        "font-size": "22px",
        "font-family": "Staatliches",
        "margin-bottom": "20px"
    })
    az.add_layout("settings_modal_content", 1, {
        "this_class": "settings_layout",
        "row_class": "settings_layout_rows",
        "cell_class": "settings_layout_cells",
        "number_of_rows": 3,
        "number_of_columns": 2
    })
    az.style_layout("settings_layout", 1, {
        "height": "200px",
        "width": "100%",
        "column_widths": ['20%', '80%'],
        "border": 1
    })
    az.call_multiple({
        "iterations": 3,
        "function": function(elem, index) {
            az.add_icon("settings_layout_cells", (index * 2) + 1, {
                "this_class": "settings_icon",
                "icon_class": "fa-cogs"
            })
            az.all_style_icon("settings_icon", {
                "align": "center",
                "font-size": "30px"
            })
            az.add_slider("settings_layout_cells", (index * 2) + 2, {
                "this_class": "settings_sliders",
                "default_value": 30,
                "min_value": 0,
                "max_value": 100,
                "text_class": "slider_label"
            })
            az.all_style_slider("settings_sliders", {
                "align": "center"
            })
            az.all_style_text("slider_label", {
                "color": "black"
            })
        }
    })
}