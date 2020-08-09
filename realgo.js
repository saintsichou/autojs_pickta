/*
 * @Date: 2020-08-05 17:34:58
 * @LastEditors: Lee
 * @LastEditTime: 2020-08-09 22:04:49
 */
"auto";
    
    sleep(1000);
    var x= 0;   
    var path = '/sdcard/1.txt';
    var file = open(path);
    var name = file.readlines();
    // var storage = storages.create("files") //本地存储文件建立
    // storage.put("键名","键值") //向存储中存入数据
    // storage.get("键名") 
    var arr =[];
    // log(name)
    log('秃驴几厘米======》',name.length)
   
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
        log('秃驴拥有姓名 ======》',name)
        log('广告请联系李二狗qq328891723')
        start(name,pass);
        x++;
    }
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
        while(i<7){
            i++;
            log('i======已经看过的广告数目',i);
            var enterAd = text('进入广告').findOne().parent();
            log(enterAd)
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