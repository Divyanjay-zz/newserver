(function(){
	document.addEventListener('DOMcontentLoaded',function(){
		var gridDiv = document.querySelector('#myGrid');

		var gridOptions = {
		
			columnDefs = [
	  	  		{headerName: "Make", field: "make"},
	    		{headerName: "Model", field: "model"},
	    		{headerName: "Price", field: "price"}
			];
				
			rowData = [
		    	{make: "Toyota", model: "Celica", price: 35000},
		    	{make: "Ford", model: "Mondeo", price: 32000},
		    	{make: "Porsche", model: "Boxter", price: 72000}
			];
		};
	new.ag.grid.Grid.Grid(gridDiv,gridOptions);

	jsonLoad( function(data){
		console.log('got data :'+data);
	});


	});
})();



function jsonLoad(callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET','temp.json');
	xhr.responseType= 'json';

	xhr.onload= function(){
		if(this.status== 200){
			callback(this.response);

		}
	};
	xhr.onerror =function(){
		console.log('loading data error');

	};
	xhr.send();
}