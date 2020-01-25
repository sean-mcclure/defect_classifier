az.hold_value.defects = ['SPUR', 'SPURIOUS', 'SHORT']
az.hold_value.default_costs = [200, 600, 300]
az.hold_value.hold_spur_value = az.hold_value.default_costs[0]
az.hold_value.hold_spurious_value = az.hold_value.default_costs[1]
az.hold_value.hold_short_value = az.hold_value.default_costs[2]

function pop_settings() {
    az.add_modal({
        "this_class": "settings_modal",
        "content_class": "settings_modal_content"
    })
    az.style_modal("settings_modal", 1, {
        "width": "auto",
        "height": "auto",
        "padding": "40px"
    })
    az.add_text("settings_modal_content", 1, {
        "this_class": "settings_title",
        "text": "SETTINGS"
    })
    az.style_text("settings_title", 1, {
        "align": "center",
        "font-size": "22px",
        "font-family": "Staatliches"
    })
    az.add_text("settings_modal_content", 1, {
        "this_class": "settings_title_sub",
        "text": "Choose Defect Costs"
    })
    az.style_text("settings_title_sub", 1, {
        "align": "center",
        "font-size": "18px",
        "font-family": "Staatliches",
        "margin-bottom": "20px",
        "color": "darkslategrey"
    })
    az.add_layout("settings_modal_content", 1, {
        "this_class": "settings_layout",
        "row_class": "settings_layout_rows",
        "cell_class": "settings_layout_cells",
        "number_of_rows": 3,
        "number_of_columns": 2
    })
    az.style_layout("settings_layout", 1, {
        "height": "200px",
        "width": "auto",
        "column_widths": ['30%', '70%'],
        "border": 0
    })
    az.call_multiple({
        "iterations": az.hold_value.defects.length,
        "function": function(elem, index) {
            az.add_text("settings_layout_cells", (index * 2) + 1, {
                "this_class": "defect_title",
                "text": az.hold_value.defects[index]
            })
            az.all_style_text("defect_title", {
                "align": "center",
                "font-size": "16px",
                "color": "black",
                "margin-right": "8px",
                "align": "left"
            })
            az.add_slider("settings_layout_cells", (index * 2) + 2, {
                "this_class": "settings_sliders",
                "default_value": az.hold_value.default_costs[index],
                "min_value": 0,
                "max_value": 1000,
                "text_class": "slider_label",
                "prepend": "$"
            })
            if (typeof(az.hold_value.hold_spur_value) !== 'undefined') {
                az.set_slider_value('settings_sliders', 1, az.hold_value.hold_spur_value)
                az.set_slider_value('settings_sliders', 2, az.hold_value.hold_spurious_value)
                az.set_slider_value('settings_sliders', 3, az.hold_value.hold_short_value)
            }
            az.all_style_slider("settings_sliders", {
                "align": "center"
            })
            az.style_text("slider_label", index + 1, {
                "color": "black",
                "margin-left": "10px",
                "margin-right": "10px"
            })
        }
    })
    az.all_add_event("settings_sliders", {
        "type": "as_change",
        "function": function() {
            az.hold_value.hold_spur_value = Number(az.grab_value('settings_sliders', 1))
            az.hold_value.hold_spurious_value = Number(az.grab_value('settings_sliders', 2))
            az.hold_value.hold_short_value = Number(az.grab_value('settings_sliders', 3))
        }
    })
}