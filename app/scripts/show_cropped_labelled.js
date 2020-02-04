function show_copped_labelled(id) {
    count_contours(id)
    az.call_once_satisfied({
        "condition": "typeof(az.hold_value.current_contours_cnt) !== 'undefined'",
        "function": function() {
            az.remove_element("crops_layout_header", 1)
            az.remove_element("crops_layout", 1)
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
                "number_of_rows": az.hold_value.current_contours_cnt,
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
            cont_or = az.create_array(1, az.hold_value.current_contours_cnt, "contour_")
            az.hold_value.cropped_images = []
            cont_or.forEach(function(elem, i) {
                az.hold_value.cropped_images.push(elem + i + ".png")
            })
            az.call_multiple({
                "iterations": az.hold_value.cropped_images.length,
                "function": function(elem, index) {
                    az.add_image("crops_layout_cells", (index * 2) + 1, {
                        "this_class": "extracted_defect_img",
                        "image_path": '../contours/' + az.hold_value.current_run_id + '/' + az.hold_value.cropped_images[index]
                    })
                    az.all_style_image('extracted_defect_img', {
                        "width": "60%",
                        "border": "2px solid black",
                        "align": "center"
                    })
                }
            })
        }
    })
}