/*
 * @Date: 2020-08-10 19:04:45
 * @LastEditors: Lee
 * @LastEditTime: 2020-08-10 16:16:51
 */
"ui";

// 误区一：使用线程开启无障碍
// 浪费CPU和内存资源，不必要的线程
// threads.start(function() {
//      auto.waitFor();
// });


ui.layout(
    <vertical>
        <appbar>
            <toolbar title="李二狗测试脚本"/>
        </appbar>
        <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp"/>
        <frame height="200" gravity="center">
            <text text="启动脚本之前请先开启无障碍服务,有问题联系李二狗qq328891723" gravity="center"/>
        </frame>
        <button bg="#000000" textColor="#ffffff" id="start" text="开始运行"/>
    </vertical>
);

ui.autoService.on("check", function(checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if(checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if(!checked && auto.service != null){
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function() {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

ui.start.on("click", function(){
    //程序开始运行之前判断无障碍服务
    if(auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }
    main();
});

function main2() {
    // 这里写脚本的主逻辑
    threads.start(function () {
        ui.logs.setText('xxxxxxxxx')
        ui.logs.setText('xxxxxxxxx222')
    });
}
function main() {
    // 这里写脚本的主逻辑
    threads.start(function () {
        console.info("开始运行");
        sleep(1000);
        console.show();
        var x= 0;   
        var path = '/sdcard/1.txt';
        var file = open(path);
        var name = file.readlines();
        // var storage = storages.create("files") //本地存储文件建立
        // storage.put("键名","键值") //向存储中存入数据
        // storage.get("键名") 
        var arr =[];
        // log(name)
        console.warn('秃驴几厘米======》',name.length) 
        while(x<=name.length-1){
            var path = '/sdcard/1.txt';
            var file = open(path);
            var name = file.readlines();
            var str = name[x];
            log(str)
            var arr = str.split('-');
            var name = arr[0];
            var pass = arr[1];
            arr.push(name)
            console.info('秃驴泡妞的第 ======》'+x+'个电话',name)
            console.error('广告请联系李二狗qq328891723')
            // ui.logs.setText('广告请联系李二狗qq328891723')
            // ui.logs.setText("秃驴拥有姓名 ======》"+name)
            start(name,pass);
            x++;
        }
        log("运行结束");
        console.hide();
        exit();
    });
}


// //悬浮窗功能
// var w = floaty.window(
//     <frame gravity='center'>
//         <button bg="#000000" textColor="#ffffff" id="sp" text="开始运行"/>
//     </frame>
// )
// w.exitOnClose();
// // w.context.click(()=>{
// //     w.setAdjustEnabled(!w.isAdjustEnabled());
// // })
// w.sp.click(()=>{
//     toast('start')
// })
// setInterval(()=>{},1000);


   

    
   
    // start()
    function start(name,pass){
        auto.waitFor()
        launchApp('PickTa');
        sleep(1000);
        var user = id('et_phone').findOne(1000);
        var password = id('et_pass').findOne(1000);
        if(user!=null){
            user.setText(name);
            sleep(1000);
            password.setText(pass);
            sleep(1000);
            id('tv_login').findOne().click()
        }
        sleep(1000)
        var ad = className('RelativeLayout').drawingOrder(2);
        // log(ad)
        ad.click();
        sleep(1000);
        var i = 0
        while(i<6){
            i++;
            console.warn('i======已经看过的广告数目',i);
            var enterAd = text('进入广告').findOne().parent();
            // log(enterAd)
            enterAd.click();
            sleep(12000);
            var juan = text('领券').findOne().parent();
            juan.click();
            sleep(1000);
            var flag = id('tv_confirm').findOne(1000);
            if(flag != null){
                var sure = id('tv_confirm').findOne();
                sure.click();
                sleep(2000);
                var get = id('tv_status').findOne();
                get.click();
                sleep(3000);
                back();
                sleep(1000);
                back();
                sleep(1000);
                sml_move(400, 1800, 800, 230, 1000);
            }else{
                sleep(3000);
                back();
                sleep(1000);
                sml_move(400, 1800, 800, 230, 1000);
                // a=device.width;
                // b=device.height;
                // swipe(a/2,b/3*2,a/2,b/3*1,1000);
            }  
        }
            sleep(1000);
            var p = className('RelativeLayout').drawingOrder(5);
            p.click();
            sleep(1000);
            var out = id('rl_logout').findOne();
            out.click();
            sleep(1000);
            id('tv_confirm').findOne().click();
            // text('任务中心').findOne().parent().click()
            // sleep(1000);
            // text('糖果屋').findOne().parent().click()
            // sleep(1500);
            // id('rv_list').findOne().children().forEach((item,ind) => {
            //     log('ind==============',ind)
            //     var get = item.findOne(text('领取'));
            //     log('get========',get)
            //     // sleep(1000);
            //     if(get != null && get !='undefined'){
            //         sleep(1000);
            //         get.click();
            //         log('lingqu========>')
            //         sleep(4000);
            //         j++;
            //         sleep(1000);
            //         // sleep(1000);
            //     }else{
            //         j++;
            //     }
            //     log('jjjjjj',j)
            //     log('lennnnnn',len)
            //     if((len*1) == j*1){
            //         log('doneeeeeeeee')
            //         sleep(1000);
            //         back();
            //         sleep(1000);
            //         back();
            //         var out = id('rl_logout').findOne();
            //         out.click();
            //         sleep(1000);
            //         id('tv_confirm').findOne().click();
            //     }
            // }); 
            sleep(1000);
    }
    
        
//长距离测试
// sml_move(400, 1800, 800, 230, 1000);
//短距离测试
//sml_move(400, 1000, 800, 600, 1000);

function bezier_curves(cp, t) {
    cx = 3.0 * (cp[1].x - cp[0].x); 
    bx = 3.0 * (cp[2].x - cp[1].x) - cx; 
    ax = cp[3].x - cp[0].x - cx - bx; 
    cy = 3.0 * (cp[1].y - cp[0].y); 
    by = 3.0 * (cp[2].y - cp[1].y) - cy; 
    ay = cp[3].y - cp[0].y - cy - by; 
    
    tSquared = t * t; 
    tCubed = tSquared * t; 
    result = {
        "x": 0,
        "y": 0
    };
    result.x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x; 
    result.y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y; 
    return result; 
};

//仿真随机带曲线滑动  
//qx, qy, zx, zy, time 代表起点x,起点y,终点x,终点y,过程耗时单位毫秒
function sml_move(qx, qy, zx, zy, time) {
    var xxy = [time];
    var point = [];
    var dx0 = {
        "x": qx,
        "y": qy
    };

    var dx1 = {
        "x": random(qx - 100, qx + 100),
        "y": random(qy , qy + 50)
    };
    var dx2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy , zy + 50),
    };
    var dx3 = {
        "x": zx,
        "y": zy
    };
    for (var i = 0; i < 4; i++) {

        eval("point.push(dx" + i + ")");

    };
    // log(point[3].x)

    for (let i = 0; i < 1; i += 0.08) {
        xxyy = [parseInt(bezier_curves(point, i).x), parseInt(bezier_curves(point, i).y)]

        xxy.push(xxyy);

    }

    // log(xxy);
    gesture.apply(null, xxy);
};