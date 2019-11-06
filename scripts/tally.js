az.hold_value.defect_cost_totals = {
    "spur": [],
    "spurious": [],
    "short": []
}

function add_tally(types) {
    if (types.type == 'spur') {
        az.add_html("tally_layout_cells", 2, {
            "html": "<div class='added_tally'></div>"
        })
        az.hold_value.defect_cost_totals.spur.push(az.hold_value.hold_spur_value)
        az.empty_contents('tally_layout_cells', 3)
        az.add_text("tally_layout_cells", 3, {
            "this_class": "defect_cost",
            "text": "$" + az.hold_value.defect_cost_totals.spur.reduce((a, b) => a + b, 0)
        })
    }
    if (types.type == 'spurious') {
        az.add_html("tally_layout_cells", 5, {
            "html": "<div class='added_tally'></div>"
        })
        az.hold_value.defect_cost_totals.spurious.push(az.hold_value.hold_spurious_value)
        az.empty_contents('tally_layout_cells', 6)
        az.add_text("tally_layout_cells", 6, {
            "this_class": "defect_cost",
            "text": "$" + az.hold_value.defect_cost_totals.spurious.reduce((a, b) => a + b, 0)
        })
    }
    if (types.type == 'short') {
        az.add_html("tally_layout_cells", 8, {
            "html": "<div class='added_tally'></div>"
        })
        az.hold_value.defect_cost_totals.short.push(az.hold_value.hold_short_value)
        az.empty_contents('tally_layout_cells', 9)
        az.add_text("tally_layout_cells", 9, {
            "this_class": "defect_cost",
            "text": "$" + az.hold_value.defect_cost_totals.short.reduce((a, b) => a + b, 0)
        })
    }
    az.all_style_html("added_tally", {
        "width": "30px",
        "height": "30px",
        "background": "gold",
        "margin": "4px",
        "display": "inline-block"
    })
    az.all_style_text("defect_cost", {
        "align": "center",
        "font-size": "20px",
        "color": "white"
    })
}