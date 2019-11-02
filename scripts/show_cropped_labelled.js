function show_copped_labelled() {
az.all_remove_element("container")
az.all_remove_element("results_title")
az.all_remove_element("crops_layout")
az.add_text("main_layout_cells", 4, {
    "this_class": "results_title",
    "text": "DEFECTS DETECTED"
})
az.style_text("results_title", 1, {
    "align": "center",
    "color": "whitesmoke",
    "font-size": "18px",
    "margin-bottom" : "30px"
})

az.add_scrollable_container("main_layout_cells", 4, {
    "this_class" : "container",
    "direction" : "vertical"
})
az.style_scrollable_container("container", 1, {
    "align" : "center",
    "width" : "90%"
})
az.add_layout("container", 1, {
    "this_class": "crops_layout",
    "row_class": "crops_layout_rows",
    "cell_class": "crops_layout_cells",
    "number_of_rows": 3,
    "number_of_columns": 3
})
az.style_layout("crops_layout", 1, {
    "width": "100%",
    "height": "100%",
    "align": "center",
    "border": 1
})

// for now
az.add_html("tally_layout_cells", 2, {
    "html" : "<div class='added_tally'></div>"
})
az.add_html("tally_layout_cells", 4, {
    "html" : "<div class='added_tally'></div>"
})
az.add_html("tally_layout_cells", 6, {
    "html" : "<div class='added_tally'></div>"
})
az.all_style_html("added_tally", {
    "width" : "30px",
    "height" : "30px",
    "background" : "gold",
    "margin" : "4px",
    "display" : "inline-block"
})

}