(function(global){
	global.super_text = new function(){
		return {
			init:init
		}
	}
	function init(input){
		var arr = document.getElementById('name').className.split(',');
		var obj = input.parentElement;
		if(document.addEventListener){
			document.addEventListener('click',function(e){
				var e = e || window.event; //浏览器兼容性 
				var elem = e.target || e.srcElement; 
				while (elem) { //循环判断至跟节点，防止点击的是div子元素 
					if (elem && elem==obj) { 
						return; 
					} 
					elem = elem.parentNode; 
				} 
				obj.lastChild.style.display='none'; //点击的不是div或其子元素
			});					
		}else{
			document.attachEvent('onclick',function(){
				var e = e || window.event; //浏览器兼容性 
				var elem = e.target || e.srcElement; 
				while (elem) { //循环判断至跟节点，防止点击的是div子元素 
					if (elem && elem==obj) { 
						return; 
					} 
					elem = elem.parentNode; 
				} 
				obj.lastChild.style.display='none'; //点击的不是div或其子元素
			});
		}				
		obj.innerHTML='';
		var name = obj.getAttribute('name');
		var width = obj.style.width;
		if(width==""){
			obj.style.width = '150px';
		}
		var height = obj.style.height;
		if(height==""){
			obj.style.height = '20px';
		}
		input.setAttribute('type','text');
		input.style.padding='0';
		input.style.margin='0';
		input.style.width='100%';
		input.style.border='1px solid #999';
		input.style.height='100%';
		if(name){
			input.setAttribute('name',name);
		}
		input.onclick=function(){
			obj.lastChild.style.display='block';
			obj.lastChild.innerHTML='';
			if(obj.firstChild.value.length>0){
				for (i=0;i<arr.length;i++)
				{
					if(arr[i].toUpperCase().indexOf(obj.firstChild.value.toUpperCase())==0){
						var li = document.createElement('li');
						li.style.paddingLeft='5px';
						li.onmouseover=function(){
							this.style.backgroundColor='#1E90FF';
						}
						li.onmouseout=function(){
							this.style.backgroundColor='';
						}
						li.onclick=function(){
							obj.firstChild.value=this.innerHTML;
							obj.lastChild.style.display='none';
						}
						var text = document.createTextNode(arr[i]);
						li.appendChild(text);
						ul.appendChild(li);
					}							
				}
			}else{
				for (i=0;i<arr.length;i++)
				{
					var li = document.createElement('li');
					li.style.paddingLeft='5px';
					li.onmouseover=function(){
						this.style.backgroundColor='#1E90FF';
					}
					li.onmouseout=function(){
						this.style.backgroundColor='';
					}
					li.onclick=function(){
						obj.firstChild.value=this.innerHTML;
						obj.lastChild.style.display='none';
					}
					var text = document.createTextNode(arr[i]);
					li.appendChild(text);
					ul.appendChild(li);						
				}
			}
		}
		input.onkeyup=function(){
			obj.lastChild.innerHTML='';
			if(obj.firstChild.value.length>0){
				for (i=0;i<arr.length;i++)
				{
					if(arr[i].toUpperCase().indexOf(obj.firstChild.value.toUpperCase())==0){
						var li = document.createElement('li');
						li.style.paddingLeft='5px';
						li.onmouseover=function(){
							this.style.backgroundColor='#1E90FF';
						}
						li.onmouseout=function(){
							this.style.backgroundColor='';
						}
						li.onclick=function(){
							obj.firstChild.value=this.innerHTML;
							obj.lastChild.style.display='none';
						}
						var text = document.createTextNode(arr[i]);
						li.appendChild(text);
						ul.appendChild(li);
					}							
				}
			}else{
				for (i=0;i<arr.length;i++)
				{
					var li = document.createElement('li');
					li.style.paddingLeft='5px';
					li.onmouseover=function(){
						this.style.backgroundColor='#1E90FF';
					}
					li.onmouseout=function(){
						this.style.backgroundColor='';
					}
					li.onclick=function(){
						obj.firstChild.value=this.innerHTML;
						obj.lastChild.style.display='none';
					}
					var text = document.createTextNode(arr[i]);
					li.appendChild(text);
					ul.appendChild(li);						
				}
			}
		}
		if(input.addEventListener){
			input.addEventListener('input',function(){
				obj.lastChild.innerHTML='';
				if(obj.firstChild.value.length>0){
					for (i=0;i<arr.length;i++)
					{
						if(arr[i].toUpperCase().indexOf(obj.firstChild.value.toUpperCase())==0){
							var li = document.createElement('li');
							li.style.paddingLeft='5px';
							li.onmouseover=function(){
								this.style.backgroundColor='#1E90FF';
							}
							li.onmouseout=function(){
								this.style.backgroundColor='';
							}
							li.onclick=function(){
								obj.firstChild.value=this.innerHTML;
								obj.lastChild.style.display='none';
							}
							var text = document.createTextNode(arr[i]);
							li.appendChild(text);
							ul.appendChild(li);
						}							
					}
				}else{
					for (i=0;i<arr.length;i++)
					{
						var li = document.createElement('li');
						li.style.paddingLeft='5px';
						li.onmouseover=function(){
							this.style.backgroundColor='#1E90FF';
						}
						li.onmouseout=function(){
							this.style.backgroundColor='';
						}
						li.onclick=function(){
							obj.firstChild.value=this.innerHTML;
							obj.lastChild.style.display='none';
						}
						var text = document.createTextNode(arr[i]);
						li.appendChild(text);
						ul.appendChild(li);						
					}
				}
			});
		}
		obj.appendChild(input);
		var ul = document.createElement('ul');
		ul.style.listStyle='none';
		ul.style.padding='0';
		ul.style.margin='0';
		ul.style.width='100%';
		ul.style.border='1px solid #999';
		ul.style.borderTop='0px solid #999';
		ul.style.position='relative';
		ul.style.zIndex='1';
		ul.style.display='none';
		ul.style.background='white';				
		for (i=0;i<arr.length;i++)
		{
			var li = document.createElement('li');
			li.style.paddingLeft='5px';
			li.onmouseover=function(){
				this.style.backgroundColor='#1E90FF';
			}
			li.onmouseout=function(){
				this.style.backgroundColor='';
			}
			li.onclick=function(){
				obj.firstChild.value=this.innerHTML;
				obj.lastChild.style.display='none';
			}
			var text = document.createTextNode(arr[i]);
			li.appendChild(text);
			ul.appendChild(li);
		}
		obj.appendChild(ul);
	}
})(window);
