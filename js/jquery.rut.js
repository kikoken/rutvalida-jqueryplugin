(function($){
    $.fn.isRut = function() {
        var r=false,d=String($(this).val()).trim(),t=d.replace(/\b[^0-9kK]+\b/g,'');
  		if(t.length==8){t=0+t;};
  		
  		if(t.length==9){
    		var a=t.substring(t.length-1,-1),b=t.charAt(t.length-1);
    		if(b=='k'){b='K'};
    		
    		if(!isNaN(a)){
      			var s=0,m=2,x='0',e=0;
      			for(var i=a.length-1;i>=0;i--){
			        s=s+a.charAt(i)*m;
			        if(m==7){m=2;}
			        else{m++;};
			     }
      			var y=s%11;
			    if(y==1){x='K';}
			    else{
			        if(y==0){x='0';}
			        else{e=11-y;x=e+'';};
			    };
      			if(x==b) r=true;
    		}
  		}
  		return r;
    }
})(jQuery)