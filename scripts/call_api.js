function difference_images() {
    loading_display()
    image_path_1 = '../' + az.hold_value.img_path_template
    image_path_2 = '../' +  az.hold_value.img_path_test
    params = {
        "function_choice": "image_differencing('" + image_path_1 + "','" + image_path_2 + "')"
    }
    az.call_api({
        "url": "http://localhost:9090/api/",
        "parameters": params,
        "done": function() {
            get_defects() // once images have been differenced extract defects using contours
           stop_load_display()
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
                show_copped_labelled() // once defects have been extracted display in app
            },
            "fail": function(err) {
                console.log(err)
            }
        })
    }
}

function predict_defects(image_path) {
    params = {
        "function_choice": "classifier('" + image_path + "')"
    }
    az.call_api({
        "url": "http://localhost:9090/api/",
        "parameters": params,
        "done": function(data) {
                 prediction = az.get_everything_between(data.response, 'Category', ', tensor')
                 alert(prediction)
        },
        "fail": function(err) {
            console.log(err)
        }
    })
}