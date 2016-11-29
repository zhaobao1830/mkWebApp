/**
 * Created by zb on 2016/11/28.
 */
// 基本图文组件对象
var H5ComponentBase=function (name,cfg) {
    var cfg=cfg || {};
    //给每个compinent定义一个ID,把.号改为-
    var id=("h5_c_"+Math.random()).replace(".","_");
    //把当前的组件类型添加到样式中
    var cln='h5_component_name_'+name
    var cls=' h5_component_'+cfg.type;
    var component=$("<div class='h5_component "+" "+cln+""+cls+"' id="+id+"></div>");
    cfg.text && component.text(cfg.text);
    //这是在iphone5里面的，所以宽高是一半
    cfg.width && component.width(cfg.width/2);
    cfg.height && component.height(cfg.height/2);
    cfg.css && component.css(cfg.css)
    cfg.bg && component.css('backgroundImage','url('+cfg.bg+')')
    if(cfg.center==true){
        component.css({
            marginLeft:(cfg.width/4*-1)+'px',
            left:'50%'
        })
    }

    //自定义方法
    component.on('onLoad',function () {
        component.addClass(cls+'_load').removeClass(cls+'_leave')
        cfg.animateIn && component.animate(cfg.animateIn)
        return false
    })
    component.on('onLeave',function () {
        component.addClass(cls+'_leave').removeClass(cls+'_load')
        cfg.animateOut && component.animate(cfg.animateOut)
        return false
    })
    return component;
}