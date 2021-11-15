"use strict";
var csv = {
	load:async function(filename,id){
		const responseFile = await fetch(filename);
        const result = await responseFile.text()
		let separate1 = /\r\n/;
		let separate2 = ",";
		let data = (result.split(separate1)).map(function(value){
			return (value.split(separate2)).map(function(value1){
				return value1;
			});
		});
		let sum =[];
		for (const usedata of data) {
            (usedata).map(function(val,index,array){
                sum[index] = (isNaN(parseInt(sum[index]))?0:parseInt(sum[index])) + parseInt(array[index]);
            });
		}
        console.log(sum);
		document.getElementById(id).innerHTML = sum.join(",");
		return "OK";
	}
};
csv.load("csv.math.csv?", "sum");