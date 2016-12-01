/**
 * Created by zb on 2016/12/1.
 */

var H5ComponentPolyLine=function ( name,cfg ) {
    var component=new H5ComponentBase( name,cfg );
    //绘制网格线
    var w=cfg.width;
    var h=cfg.height;
    //绘制一个背景（网格线背景）
    var cns=document.createElement('canvas');
    var ctx=cns.getContext('2d');
    cns.width=ctx.width=w;
    cns.height=ctx.height=h;
    //水平网格线  100份==10份
    var step=10;
    ctx.beginPath();
    ctx.lineWidth=1;
    ctx.strokeStyle="#AAAAAA";

    window.ctx=ctx;
    for(var i=0;i<step+1;i++){
        var y=(h/step)*i;
        ctx.moveTo(0,y);
        ctx.lineTo(w,y);
    }

    //垂直网格线(根据项目的个数去分)
    step=cfg.data.length;
    for(var i=0;i<step+1;i++){
        var x=(w/step)*i;
        ctx.moveTo(x,0);
        ctx.lineTo(x,h);
    }
    ctx.stroke();
    component.append(cns);
    return component;
}