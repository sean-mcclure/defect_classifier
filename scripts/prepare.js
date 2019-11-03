az.load_font("Staatliches")
az.style_body({
    "background": "rgb(28, 80, 121",
    "font-family": "Staatliches"
})
az.add_top_button({
    "this_class": "to_top_button",
    "text": "TOP",
    "side": "right"
})
az.style_button("to_top_button", 1, {
    "background": "rgb(233, 130, 94)"
})
az.add_sections({
    "this_class": "my_sections",
    "sections": 2
})
az.style_sections('my_sections', 1, {
    "background": "#222f3e",
    "height": "auto"
})
az.style_sections('my_sections', 2, {
    "background": "#222f3e",
    "height": "auto"
})
az.add_layout("my_sections", 1, {
    "this_class": "banner_layout",
    "row_class": "banner_layout_rows",
    "cell_class": "banner_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 3
})
az.style_layout("banner_layout", 1, {
    "width": "100%",
    "height": "auto",
    "align": "center",
    "border": 0
})
az.call_once_satisfied({
    "condition": "typeof(az.hold_value.extracted_defects_images) !== 'undefined'",
    "function": function() {
        az.add_text("banner_layout_cells", 1, {
            "this_class": "image_count",
            "text": "Number of images: " + az.hold_value.extracted_defects_images.length
        })
        az.all_style_text("image_count", {
            "color": "white",
            "font-size": "20px"
        })
        az.style_word("image_count", 1, {
            "this_class": "color_word",
            "word": az.hold_value.extracted_defects_images.length,
            "color": "rgb(233, 130, 94)"
        })
    }
})
az.add_text("banner_layout_cells", 2, {
    "this_class": "title",
    "text": "DEFECT CLASSIFIER"
})
az.style_text("title", 1, {
    "align": "center",
    "color": "whitesmoke",
    "font-size": "30px"
})
az.add_layout("my_sections", 2, {
    "this_class": "main_layout",
    "row_class": "main_layout_rows",
    "cell_class": "main_layout_cells",
    "number_of_rows": 2,
    "number_of_columns": 3
})
az.style_layout("main_layout", 1, {
    "width": "100%",
    "height": "400px",
    "align": "center",
    "border": 3
})
az.style_layout("main_layout_cells", 4, {
    "valign" : "top"
})
az.style_layout("main_layout_rows", 1, {
    "height" : "60px"
})
az.add_text("main_layout_cells", 1, {
    "this_class": "header",
    "text": "RESULTS"
})
az.add_text("main_layout_cells", 2, {
    "this_class": "header",
    "text": "ACTUAL"
})
az.add_text("main_layout_cells", 3, {
    "this_class": "header",
    "text": "TEMPLATE"
})
az.all_style_text("header", {
    "align": "center",
    "color": "whitesmoke",
    "font-size": "20px"
})
az.add_text("main_layout_cells", 4, {
    "this_class": "results_title",
    "text": "DETECTED DEFECTS"
})

az.add_html("main_layout_cells", 4, {
    "html" : "<div class='hold_detected'></div>"
})
az.add_text("main_layout_cells", 4, {
    "this_class": "results_title",
    "text": "CLASSIFIED DEFECTS"
})
az.all_style_text("results_title", {
    "align": "center",
    "color": "whitesmoke",
    "font-size": "18px",
    "margin-bottom" : "30px",
    "margin-top" : "20px"
})
az.add_button("banner_layout_cells", 1, {
    "this_class" : "option_butts",
    "text" : "FETCH"
})
az.add_button("banner_layout_cells", 1, {
    "this_class" : "option_butts",
    "text" : "DETECT"
})
az.add_button("banner_layout_cells", 1, {
    "this_class" : "option_butts",
    "text" : "CLASSIFY"
})
az.all_style_button("option_butts", {
    "background" : "gold",
    "color" : "black",
    "margin" : "4px",
    "outline" : 0
})
az.style_button("option_butts", 2, {
    "background" : "#706fd3",
    "color" : "white"
})
az.style_button("option_butts", 3, {
    "background" : "#33d9b2"
})

az.add_event("option_butts", 1, {
    "type" : "click",
    "function" : function() {
        az.animate_element("option_butts", 1, {
            "type" : "spin"
        })
        fetch_image()
    }
})

az.add_event("option_butts", 2, {
    "type" : "click",
    "function" : function() {
        az.animate_element("option_butts", 2, {
            "type" : "spin"
        })
        image_1_source = az.get_property("show_img", 1, {
            "property" : "src"
        })
        image_2_source = az.get_property("show_img", 2, {
            "property" : "src"
        })
        convert_image_to_data(image_1_source)

        az.call_once_satisfied({
            "condition" : "typeof(az.hold_value.data_url) !== 'undefined'",
            "function" : function() {
                 difference_images('test_image.png', az.hold_value.data_url)
            }
        })
/*
        setTimeout(function() {

        convert_image_to_data(image_2_source)

        az.call_once_satisfied({
            "condition" : "typeof(az.hold_value.data_url) !== 'undefined'",
            "function" : function() {
                 difference_images('template_image.jpg', az.hold_value.data_url)
            }
        })

        }, 2000)
        */


    }
})

az.add_event("option_butts", 3, {
    "type" : "click",
    "function" : function() {
        az.animate_element("option_butts", 3, {
            "type" : "spin"
        })
show_copped_labelled()
    }
})

az.add_icon("banner_layout_cells", 3, {
    "this_class" : "settings_icon",
    "icon_class" : "fa-cog"
})
az.style_icon("settings_icon", 1, {
    "color" : "white",
    "float" : "right",
    "font-size" : "30px",
    "cursor" : "pointer"
})
az.add_event("settings_icon", 1, {
    "type" : "click",
    "function" : function() {
        pop_settings()

    }
})

az.add_layout("my_sections", 2, {
    "this_class": "tally_layout",
    "row_class": "tally_layout_rows",
    "cell_class": "tally_layout_cells",
    "number_of_rows": 3,
    "number_of_columns": 2
})
az.style_layout("tally_layout", 1, {
    "width": "100%",
    "height": "150px",
    "align": "center",
    "margin-top" : "10px",
    "column_widths" : ['10%', '90%'],
    "border": 0
})
az.call_multiple({
    "iterations" : 3,
    "function" : function(elem, index) {
az.add_icon("tally_layout_cells", (index*2) + 1, {
            "this_class" : "tally_icons",
            "icon_class" : "fa-cogs"
        })
        az.all_style_icon("tally_icons", {
            "align" : "center",
            "font-size" : "30px",
            "color" : "white"
        })
    }
    })




