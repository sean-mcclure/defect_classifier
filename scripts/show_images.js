img_cnt = 0
function fetch_image() {
    img_cnt++
    img_index = 41000 + img_cnt
    az.hold_value.img_path_template = 'img/content/DeepPCB/PCBData/group00041/00041/000' + img_index + '_' + 'temp' + '.jpg'
    az.hold_value.img_path_test = 'img/content/DeepPCB/PCBData/group00041/00041/000' + img_index + '_'  + 'test' + '.jpg'
    az.all_remove_element("show_img")
    az.add_image("main_layout_cells", 5, {
        "this_class" : "show_img",
        "image_path" : az.hold_value.img_path_test
    })
    az.add_image("main_layout_cells", 6, {
        "this_class" : "show_img",
        "image_path" : az.hold_value.img_path_template
    })
    az.all_style_image("show_img", {
        "align" : "center",
        "width" : "80%",
        "border-radius" : "4px"
    })
}