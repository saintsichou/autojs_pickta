/*
 * @Date: 2020-08-05 17:34:58
 * @LastEditors: Lee
 * @LastEditTime: 2020-08-08 20:57:40
 */
"auto";
    
    sleep(1000);
    var x= 0;   
    var path = '/sdcard/1.txt';
    var file = open(path);
    var name = file.readlines();
    log(name)
    log('nasdlfkjsdfk',name.length)
   
    while(x<name.length-1){
        var path = '/sdcard/1.txt';
        var file = open(path);
        var name = file.readlines();
        var str = name[x];
        log(str)
        var arr = str.split('-');
        var name = arr[0];
        var pass = arr[1];
        log(arr)
        log('name',arr[0])
        log('pass',arr[1])
        start(name,pass);
        x++;
    }
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
        log(ad)
        ad.click();
        sleep(1000);
        var i = 0
        while(i<8){
            i++;
            log('i======',i);
            var enterAd = text('进入广告').findOne().parent();
            // log(enterAd)
            enterAd.click();
            sleep(12000);
            var juan = text('领券').findOne().parent();
            juan.click();
            sleep(1000);
            var flag = id('tv_cancel').findOne(1000);
            if(flag != null){
                var cancel = id('tv_cancel').findOne();
                cancel.click();
                sleep(1000);
                back();
                sleep(1000);
                a=device.width;
                b=device.height;
                swipe(a/2,b/3*2,a/2,b/3*1,1000);
            }else{
                sleep(3000);
                back();
                sleep(1000);
                a=device.width;
                b=device.height;
                swipe(a/2,b/3*2,a/2,b/3*1,1000);
            }  
        }
            sleep(1000);
            var p = className('RelativeLayout').drawingOrder(5);
            p.click();
            sleep(1000);
            text('任务中心').findOne().parent().click()
            sleep(1000);
            text('糖果屋').findOne().parent().click()
            sleep(1500);
            var j=0;
            id('rv_list').findOne().children().forEach((item,ind) => {
                var get = item.findOne(text('领取'));
                if(get == null){
                    j++;
                }else{
                    sleep(3000);
                    get.click();
                    sleep(3000);
                }
            });
            log('jjjjjj',j)
            var len = id('rv_list').findOne().children().length
            log('lennnnnn',len)
            if(len == j){
                log('doneeeeeeeee')
                sleep(1000);
                back();
                sleep(1000);
                back();
                var out = id('rl_logout').findOne();
                out.click();
                sleep(1000);
                id('tv_confirm').findOne().click();
            }
            sleep(1000);
    }
    
        
