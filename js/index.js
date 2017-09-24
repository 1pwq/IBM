//select
var inp = document.getElementById('inp');
var hide = document.getElementById('hide');
var arr = document.getElementById('arr');
var count = 0;
hide.onclick = function(){
	if (count == 0) {
		inp.style.display = 'block';
		arr.style.transform = 'rotateY(180deg);';
		count++;
	} else{
		inp.style.display = 'none';
		count = 0;
	}	
}
//------------------------------------------------------------>
//右侧菜单
var shadow = document.getElementById('shadow');
var menu3 = document.getElementById('menu3');
var blo = document.getElementById('blo');
var ret = document.getElementById('ret');
shadow.onclick = function(){
	shadow.style = 'display:none;';
	menu3.style = 'right:-450px;';
}
blo.onclick = function(){
	shadow.style = 'display:block;';
	menu3.style = 'right:0;';
}
ret.onclick = function(){
	shadow.style = 'display:none;';
	menu3.style = 'right:-450px;';
}
//------------------------------------------------------------------------------------>
//滚动出现置顶
window.onscroll = function(){
   var st = document.documentElement.scrollTop || document.body.scrollTop;
  if (st > 550){
      document.getElementById("aside").style.right = "20px";
  } else{
       document.getElementById("aside").style.right = "-45px";
  }
}