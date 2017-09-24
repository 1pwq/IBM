//
	var pro = document.getElementById('pro');
	var sub = document.getElementById('sub');
	var duc = document.getElementById('duc');
	var list = document.getElementById('list');
	var count = 0;
	pro.onclick = function(){
		prod.style = 'background:#fff;border:1px solid #fff;';
		duct.style = 'color:#323232;';
		pro.style = 'background:#326db0;border:1px solid #3482db;';
		duc.style = 'color:#fff;font-weight:normal;';
		produ.style = 'background:#fff;border:1px solid #fff;';
		ducts.style = 'color:#323232;';
		if (count == 0) {
			sub.innerHTML = '&#xe60d;';
			list.style = 'display:none;';
			pro.style = 'background:#326db0;border:1px solid #3482db;';
			duc.style = 'color:#fff;font-weight:normal;';
			count++;
		} else{
			sub.innerHTML = '&#xe62e;';
			list.style = 'display:block;';
			duc.style = 'color:#fff;font-weight:600;';
			count = 0;
		}	
	}
//
	var prod = document.getElementById('prod');
	var subb = document.getElementById('subb');
	var duct = document.getElementById('duct');
	var list2 = document.getElementById('list2');
	var count1 = 0;
	prod.onclick = function(){
		pro.style = 'background:#fff;border:1px solid #fff;';
		duc.style = 'color:#323232;';
		produ.style = 'background:#fff;border:1px solid #fff;';
		ducts.style = 'color:#323232;';
		prod.style = 'background:#326db0;border:1px solid #3482db;';
		duct.style = 'color:#fff;font-weight:normal;';
		if (count1 == 0) {
			subb.innerHTML = '&#xe60d;';
			list2.style = 'display:none;';
			prod.style = 'background:#326db0;border:1px solid #3482db;';
			duct.style = 'color:#fff;font-weight:normal;';
			count1++;
		} else{
			subb.innerHTML = '&#xe62e;';
			list2.style = 'display:block;';
			duct.style = 'color:#fff;font-weight:600;';
			count1 = 0;
		}	
	}
//
	var produ = document.getElementById('produ');
	var subt = document.getElementById('subt');
	var ducts = document.getElementById('ducts');
	var list3 = document.getElementById('list3');
	var count2 = 0;
	produ.onclick = function(){
		prod.style = 'background:#fff;border:1px solid #fff;';
		duct.style = 'color:#323232;';
		pro.style = 'background:#fff;border:1px solid #fff;';
		duc.style = 'color:#323232;';
		produ.style = 'background:#326db0;border:1px solid #3482db;';
		ducts.style = 'color:#fff;font-weight:normal;';
		if (count2 == 0) {
			subt.innerHTML = '&#xe60d;';
			list3.style = 'display:none;';
			produ.style = 'background:#326db0;border:1px solid #3482db;';
			ducts.style = 'color:#fff;font-weight:normal;';
			count2++;
		} else{
			subt.innerHTML = '&#xe62e;';
			list3.style = 'display:block;';
			ducts.style = 'color:#fff;font-weight:600;';
			count2 = 0;
		}	
	}