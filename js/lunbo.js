		window.onload=function(){
			var tplb=document.getElementById("tplunbo");
			var tp=document.getElementById("tupian");
			var tup=tp.getElementsByTagName('li');
			var yuand=document.getElementById("yuandian").getElementsByTagName('li');
			var width=tplb.offsetWidth;
			var indexdq=0;
			var lujing;
			var qianm=document.getElementById('qianm');
			var houm=document.getElementById("houmian");
			var flaglb;
			for(i=0;i<tup.length;i++)
			{
				tup[i].children[0].style.width=width+'px';
				
			}
			window.onresize=function(){
				 width=tplb.offsetWidth;
				for(i=0;i<tup.length;i++)
				{
					tup[i].children[0].style.width=width+'px';
					
				}
			}
			function lunbo(){
				lujing=tup[indexdq].children[0].src;
				tplb.style.backgroundImage="url("+lujing+")";
				tplb.style.backgroundSize="100% 100%";
				for(var i=0;i<yuand.length;i++)
				{ yuand[i].className='';
				  tup[i].className='';}				  
				if(indexdq<tup.length-1)
				{
					indexdq++;
					tp.style.left=-(width*indexdq)+'px';
					yuand[indexdq].className='active';
					tup[indexdq].className='active';
				}
				else
				{
					indexdq=0;
					tp.style.left=0+'px';
					yuand[indexdq].className='active';
					tup[indexdq].className='active';
				}	
			}
			flaglb=setInterval(lunbo,5000);
			for(var i=0;i<yuand.length;i++)
			{   yuand[i].id=i;
				yuand[i].onclick=function(){
					var that=this;
					clearInterval(flaglb);
					lujing=tup[indexdq].children[0].src;
					tplb.style.backgroundImage="url("+lujing+")";
					tplb.style.backgroundSize="100% 100%";
					for(var i=0;i<yuand.length;i++)
					{ yuand[i].className='';
					  tup[i].className='';}		
					indexdq=that.id;
					tp.style.left=-(width*indexdq)+'px';
					yuand[indexdq].className='active';
					tup[indexdq].className='active';
					flaglb=setInterval(lunbo,5000);
				}
			}
			qianm.onclick=function(){				
				clearInterval(flaglb);
				lujing=tup[indexdq].children[0].src;
				tplb.style.backgroundImage="url("+lujing+")";
				tplb.style.backgroundSize="100% 100%";
				for(var i=0;i<yuand.length;i++)
				{ yuand[i].className='';
				  tup[i].className='';}		
				if(indexdq==0)
				 indexdq=tup.length-1;
				else
				indexdq--;
				tp.style.left=-(width*indexdq)+'px';
				yuand[indexdq].className='active';
				tup[indexdq].className='active';
				flaglb=setInterval(lunbo,5000);				
			}
			houm.onclick=function(){
				clearInterval(flaglb);
				lujing=tup[indexdq].children[0].src;
				tplb.style.backgroundImage="url("+lujing+")";
				tplb.style.backgroundSize="100% 100%";
				for(var i=0;i<yuand.length;i++)
				{ yuand[i].className='';
				  tup[i].className='';}		
				if(indexdq==tup.length-1)
				 indexdq=0;
				else
				indexdq++;
				tp.style.left=-(width*indexdq)+'px';
				yuand[indexdq].className='active';
				tup[indexdq].className='active';
				flaglb=setInterval(lunbo,5000);				
			}
		}
		