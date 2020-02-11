var panggilsort = () => {
	var x = [32,33,16,40,9,7,11,2,44,1,66];
	console.log("Sebelumnya : ",x.join(" "));
	var y = x.sort();
	console.log("Ascending :", y.join(" "));
	var z = x.reverse();
	console.log("Descending :", z.join(" "));
	//penulisan baru
	var c = x.sort((a,b)=>b-a);
	//penulisan lama
	var d = x.sort(function (a,b){
		return a-b
	})
	console.log("Ascending angka-1 :", c.join(" "));
	console.log("Ascending angka-2:", d.join(" "));
	//PENULISAN BARU
	var e = x.reverse();
	console.log("Descending angka-1:", e.join(" "));

}

panggilsort()
