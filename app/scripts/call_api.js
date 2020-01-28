function difference_images() {
    loading_display()
    image_path_1 = $('.show_img').eq(0).attr('src').replace('../', '')
    image_path_2 = $('.show_img').eq(1).attr('src').replace('../', '')
    params = {
        "function": "image_differencing",
        "image_path_1": image_path_1,
        "image_path_2": image_path_2
    }
    az.call_api({
        "url": "http://localhost:5000/call_function/",
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
            "function": "extract_defects_using_contours",
            "path_to_diff": "diff_img/diff.png"
        }
        az.call_api({
            "url": "http://localhost:5000/call_function/",
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
    cropped_images = cropped_images.map(i => 'contours/' + i);
    pred_cnt = -1
    az.delay_multiple({
        "iterations": cropped_images.length,
        "delay": 1000,
        "function": function() {
            pred_cnt++
            params = {
                "function": "predict",
                "image_path": cropped_images[pred_cnt]
            }
            az.call_api({
                "url": "http://localhost:5000/call_function/",
                "parameters": params,
                "done": function(data) {
                    type = az.get_everything_between(data, 'Category', ', tensor')
                    az.add_text("crops_layout_cells", (pred_cnt * 2) + 2, {
                        "this_class": "show_predict_text",
                        "text": type
                    })
                    az.style_text("show_predict_text", az.last_class_instance("show_predict_text"), {
                        "align": "center",
                        "color": "white"
                    })
                    add_tally({
                        "type": type
                    })
                },
                "fail": function(err) {
                    console.log(err)
                }
            })
        }
    })
}

function remove_diff_img() {
    params = {
        "function": "remove_diff_img"
    }
    az.call_api({
        "url": "http://localhost:5000/call_function/",
        "parameters": params,
        "done": function(data) {
            console.log(data)
        },
        "fail": function(err) {
            alert(err)
        }
    })
}

function remove_contours() {
    params = {
        "function": "remove_contours"
    }
    az.call_api({
        "url": "http://localhost:5000/call_function/",
        "parameters": params,
        "done": function(data) {
            console.log(data)
        },
        "fail": function(err) {
            alert(err)
        }
    })
}