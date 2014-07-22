$(document).ready(function(){
    var caveira=Snap("#caveira");
    var path=caveira.selectAll("path,line,polyline,polygon,ellipse");
    path.forEach(function(i){
        var l=i.getTotalLength();
        Snap.animate(0,l,function(v){
            i.attr({strokeDasharray:v+","+l});
        },1500,mina.easeinout);
        i.attr({strokeDasharray:0+","+l});
        setTimeout(function(){
            // caveira.animate({opacity:0},500);
            i.animate({opacity:0},500);
        },1500)
    });
    var image=caveira.select("image");
    image.attr({opacity:0});
    setTimeout(function(){
        // caveira.animate({opacity:0},500);
        image.animate({opacity:1},500);
        image.animate({opacity:1},500);
    },1300)
});