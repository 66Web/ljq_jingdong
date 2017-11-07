/**********二级菜单*******/
+function(){
function showSub(){
    this.lastElementChild.style.display="block";
    this.children[1].className="hover";
}
function hideSub(){
    this.lastElementChild.style.display="";
    this.children[1].className="";
}
var lis=document.querySelectorAll(
    ".app_jd,.service"
);
for(var i=0;i<lis.length;i++){
    lis[i].addEventListener(
        "mouseover",showSub
    );
    lis[i].addEventListener(
        "mouseout",hideSub
    );
}
}();

/**********全部商品分类*******/
+function(){
    var div=document.getElementById("category");
    div.addEventListener("mouseover",
         function(){
             this.lastElementChild.style.display="block";
             this.firstElementChild.className="hover";
         });
    div.addEventListener("mouseout",
        function(){
            this.lastElementChild.style.display="";
            this.firstElementChild.className="";
        });
    var lis=document.querySelectorAll(
        "#cate_box>li"
    );
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener(
            "mouseover",
            function(){
                this.lastElementChild.style.display="block";
                this.firstElementChild.className="hover";
            }
        );
        lis[i].addEventListener(
            "mouseout",
            function(){
                this.lastElementChild.style.display="";
                this.firstElementChild.className="";
            }
        );
    }
}();

/**********标签页*******/
+function(){
    var lis=document.querySelectorAll(
        "#product_detail>ul>li"
    );
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener("click",
           function(e){
               e.preventDefault();
               if(this.className!="current"){
                   this.parentNode.
                       querySelector("li.current").className="";
                   this.className="current";
                   var show=document.querySelector("#product_detail>:not(ul).show");
                   if(show!=null)
                      show.className="";
                   var href=this.firstElementChild.href;
                   if(href!=""){
                       var lasti=href.lastIndexOf("#");
                       var id=href.slice(lasti+1);
                       document.getElementById(id).className="show";
                   }
               }
           }
        )
    }
}();

/**********放大镜***********/
+function(){
    const LIWIDTH=62;
    const OFFSET=20;
    const MSIZE=175;
    const SMSIZE=350;
    var LICOUNT = document.querySelectorAll(
        "#icon_list>li"
    ).length;
    var moved = 0;
    var aForward=document.querySelector("a.forward");
    var aBackward=document.querySelector("a.backward");
    aForward.addEventListener("click", li_move);
    aBackward.addEventListener("click", li_move);
    function li_move(){
        if(this.className.lastIndexOf("disabled")==-1){
        if(this.className=="forward"){
            moved++;
        }else{
            moved--;
        }
        this.parentNode.lastElementChild.style
            .left=-LIWIDTH*moved+OFFSET+"px";
        checkA()
        }
    }
    function checkA(){
          if(moved==0){
              aBackward.className+=" disabled"
          }else if(LICOUNT-moved==5){
              aForward.className+=" disabled"
          }else{
              aBackward.className="backward";
              aForward.className="forward";
          }
    }
    var mImg=document.getElementById("mImg");
    document.getElementById("icon_list").addEventListener("mouseover",
       function(e){
           if(e.target.nodeName=="IMG"){
               var src= e.target.src;
               var i=src.lastIndexOf(".");
               src=src.slice(0,i)+"-m"+src.slice(i);
               mImg.src=src;
           }
       }
    );
    var sm=document.getElementById("superMask");
    var mask=document.getElementById("mask");
    var lgDiv=document.getElementById("largeDiv");
    sm.addEventListener("mouseover",
        function(){
            mask.style.display="block";
            lgDiv.style.display="block";
            var src=mImg.src;
            var i=src.lastIndexOf(".");
            src=src.slice(0,i-1)+"l"+src.slice(i);
            lgDiv.style.backgroundImage="url("+src+")";
        }
    );
    sm.addEventListener("mouseout",
        function(){
            mask.style.display="";
            lgDiv.style.display="";
        }
    );
    var MAX=SMSIZE-MSIZE;
    sm.addEventListener("mousemove",
        function(e){
            var x= e.offsetX,
                y= e.offsetY;
            var top=y-MSIZE/ 2,
                left=x-MSIZE/2;
            if(top<0) top=0;
            else if(top>MAX) top=MAX;
            if(left<0) left=0;
            else if(left>MAX) left=MAX;
            mask.style.cssText="display:block; left:"+left+"px; top:"+top+"px";
            lgDiv.style.backgroundPosition=-left*2+"px "+ -top*2+"px";

        }
    )

}();
