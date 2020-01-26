img_cnt = -1
var use_path = '../test_temps/'

function fetch_image() {
    img_cnt++
    if (img_cnt < az.hold_value.test_temps.length) {
        var test_image = use_path + az.hold_value.test_temps[img_cnt]
        var template_image = use_path + az.hold_value.test_temps[img_cnt].replace('_test', '_temp')
        az.all_remove_element("show_img")
        az.add_image("main_layout_cells", 5, {
            "this_class": "show_img",
            "image_path": test_image
        })
        az.add_image("main_layout_cells", 6, {
            "this_class": "show_img",
            "image_path": template_image
        })
        az.all_style_image("show_img", {
            "align": "center",
            "width": "300px",
            "max-width": "300px",
            "min-width": "300px",
            "border-radius": "4px",
            "border": "1px solid gold"
        })
    } else {
        alert('No more test/template images in process.')
    }
}