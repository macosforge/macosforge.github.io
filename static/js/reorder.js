$(document).ready(function () {
	$('#reorder_list_left').Sortable(
				    {
					accept : 'reorder_item_left',
					    axis: 'vertically',
					    activeclass: 'reorder_active',
					    hoverclass: 'reorder_hover',
					    });
	$('#reorder_list_top').Sortable(
				    {
					accept : 'reorder_item_top',
					axis: 'horizontally', 	    
					    activeclass: 'reorder_active',
					    helperclass: 'reorder_helper',
					    hoverclass: 'reorder_hover',
					    floats: true,
					    tolerance: 'intersect',
					    fit: true,
					    }
				    );
	    });

function post_reload(data, textStatus) {
    window.location.reload();
}

function save_reorder() {
    serial = $.SortSerialize();
    $.post('/forge/link/reorder/', serial.hash, post_reload);
}