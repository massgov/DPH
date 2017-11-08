var SPOTON_BI_REPORTS = new Array();
	var SPOTON_BI_ACTION = "/mass";

	function getURLFromID(id)
	{
		var url = "";
		for(i=0;i<SPOTON_BI_REPORTS.length;i++)
		{
			if(SPOTON_BI_REPORTS[i].id == id)
			{
				return SPOTON_BI_REPORTS[i].url;
			}

		}

	}

	function runBIReport(id)
	{
	
		var url = getURLFromID(id);
		//var url = "http://matracking.ehs.state.ma.us/tempUnavailable.html";
		//alert("page temporarily unavailable");
		var width = window.screen.width;
		var height = window.screen.height;
		//var windowOptions = "status=no,toolbar=no,location=no,menubar=no,directories=no,resizable=yes,scrollbars=yes"
        var windowOptions ="status=no,toolbar=no,location=no,menubar=no,directories=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height;
		var SpotOnWindow = window.open(url, "SpotOnWindow",windowOptions);
		SpotOnWindow.focus();
				
	}
	
	function openWindow(url)
	{
		var width = window.screen.width;
		var height = window.screen.height;
		var windowOptions ="status=no,toolbar=no,location=no,menubar=no,directories=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height;
		var SpotOnWindow = window.open(url, "SpotOnWindow",windowOptions);
		SpotOnWindow.focus();				
	}

	function generateSpotOnURL(sp)
	{
		var token = SPOTON_BI_ACTION  + "/cgi-bin/cognos.cgi?b_action=cognosViewer&ui.action=run&ui.object=" + sp + "&run.prompt=true&cv.header=false&cv.toolbar=false"
		return token;
	}
	function BIReport(sp, name, desc, id)
	{
		this.name = name;
		this.sp = sp;
		this.desc = desc;
		this.id = id;

		this.url = generateSpotOnURL(sp);


	}
	function registerBIReport(sp, name, id)
	{
		var obj = new BIReport(sp,name, "test", id);
		SPOTON_BI_REPORTS[SPOTON_BI_REPORTS.length] = obj;

	}

/* SAMPLE to write */
//write out BI reports
//for(i=0;i<SPOTON_BI_REPORTS.length;i++)
//{
//	document.write("<a href='#' onclick=runBIReport(\"" + SPOTON_BI_REPORTS[i].id + "\")>" + SPOTON_BI_REPORTS[i].name + "</a><br>");
//}
