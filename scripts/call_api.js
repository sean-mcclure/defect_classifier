function difference_images() {
    image_path_1 = '../img/content/DeepPCB/PCBData/group00041/00041/00041000_temp.jpg'
    image_path_2 = '../img/content/DeepPCB/PCBData/group00041/00041/00041000_test.jpg'
    params = {
        "function_choice": "image_differencing('" + image_path_1 + "','" + image_path_2 + "')"
    }
    az.call_api({
        "url": "http://localhost:9090/api/",
        "parameters": params,
        "done": function() {
            get_defects()
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
            "done": function(data) {},
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
            console.log(data.response)
        },
        "fail": function(err) {
            console.log(err)
        }
    })
}