function show_copped_labelled() {
    az.all_remove_element("crops_layout_header")
    az.all_remove_element("crops_layout")
    az.add_layout("container", 1, {
        "this_class": "crops_layout_header",
        "row_class": "crops_layout_header_rows",
        "cell_class": "crops_layout_header_cells",
        "number_of_rows": 1,
        "number_of_columns": 2
    })
    az.style_layout("crops_layout_header", 1, {
        "height": "auto",
        "width": "100%",
        "column_widths": ['50%', '50%'],
        "border": 1
    })
    az.add_layout("container", 1, {
        "this_class": "crops_layout",
        "row_class": "crops_layout_rows",
        "cell_class": "crops_layout_cells",
        "number_of_rows": 5,
        "number_of_columns": 2
    })
    az.fill_row("crops_layout_header", 1, {
        "header": false,
        "cell_class": "crops_layout_header_cells",
        "text_class": "crops_header",
        "row_number": 1,
        "array": ['DETECTED DEFECTS', 'CLASSIFICATION']
    })
    az.all_style_text("crops_header", {
        "align": "center",
        "color": "#fbff00"
    })
    az.style_layout("crops_layout", 1, {
        "height": "auto",
        "width": "100%",
        "column_widths": ['50%', '50%'],
        "border": 1
    })
    cropped_images = ['0.png', '1.png', '2.png', '3.png', '4.png']
    az.call_multiple({
        "iterations": cropped_images.length,
        "function": function(elem, index) {
            az.add_image("crops_layout_cells", (index * 2) + 1, {
                "this_class": "extracted_defect_img",
                "image_path": 'backbone/img/' + cropped_images[index]
            })
            az.all_style_image('extracted_defect_img', {
                "width": "60%",
                "border": "2px solid black",
                "align": "center"
            })
        }
    })
}