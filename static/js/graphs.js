function resize_images() {
    t = document.getElementById("graph_table");
    theight = t.tBodies[0].rows.length;
    twidth = t.tBodies[0].rows[0].cells.length;
    images = document.getElementsByClassName("graph");
    for ( var n in images ) 
	{	  
	    i = images[n]
	    i.height = window.innerHeight /  theight - 6;
	    i.width = window.innerWidth / twidth - 4;
	}
}
