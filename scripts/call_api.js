function difference_images() {
    loading_display()
    image_path_1 = '../' + az.hold_value.img_path_template
    image_path_2 = '../' + az.hold_value.img_path_test
    params = {
        "function_choice": "image_differencing('" + image_path_1 + "','" + image_path_2 + "')"
    }
    az.call_api({
        "url": "http://localhost:9090/api/",
        "parameters": params,
        "done": function() {
            get_defects() // once images have been differenced extract defects using contours
        },
        "fail": function(err) {
            console.log(err)
        }
    })

    function get_defects() {
        params = {
            "function_choice": "extract_defects_using_contours('img/differenced_img.png')"
        }
        az.call_api({
            "url": "http://localhost:9090/api/",
            "parameters": params,
            "done": function(data) {
                show_copped_labelled() // once defects have been extracted display in app, then run predictions...
                predict_defects()
            },
            "fail": function(err) {
                console.log(err)
            }
        })
    }
}

function predict_defects() {
    cropped_images = cropped_images.map(i => 'img/' + i);
    params = {
        "function_choice": "predict_all(" + JSON.stringify(cropped_images) + ")"
    }
    az.call_api({
        "url": "http://localhost:9090/api/",
        "parameters": params,
        "done": function(data) {
            actual_preds = []
            pred_obj = data.response.split(',')
            pred_obj.forEach(function(elem, index) {
                if (elem.includes('Category')) {
                    prediction = az.get_everything_after(elem, 'Category')
                    actual_preds.push(prediction)
                }
            })
            use_index = -1
            actual_preds.forEach(function(elem) {
                use_index++
                az.add_text("crops_layout_cells", (use_index * 2) + 2, {
                    "this_class": "show_prediction",
                    "text": elem
                })
                az.all_style_text("show_prediction", {
                    "color": "white",
                    "font-family": "Staatliches",
                    "font0suze": "18px",
                    "align": "center"
                })
            })
            stop_load_display()
        },
        "fail": function(err) {
            console.log(err)
        }
    })
}