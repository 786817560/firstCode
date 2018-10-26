function getstudent() {
    //函数内部，你可以随便定义变量
    document.querySelector('.start').onclick = function () {
        //肖雨,   曹放,  王秋梅,  徐宇,  王兰, 夏敏, 王伟, 张立,  陈雪平,  王乙霖, 陈彦,  田仁杰
        let students = [{
            s: '女',
            un: '肖雨'
        }, {
            s: '女',
            un: '曹放'
        },{
            s: '女',
            un: '王秋梅'
        },{
            s: '女',
            un: '徐宇'
        },{
            s: '女',
            un: '夏敏'
        },{
            s: '男',
            un: '王伟'
        },{
            s: '男',
            un: '张立'
        }];
        
        let sn = document.querySelector('.sn');
        let num = 0;
        let time = 200;
        let fn;
        fn = ()=>{
            console.log(new Date().valueOf());
            num++;
            let rand = Math.floor(Math.random()*students.length);
            sn.innerHTML = (students[rand].s == '女'?'程序媛':'程序猿') + students[rand].un;
            //摇10次停止
            if(num >= 20){
                time *= 2;
                clearInterval(sid);
                setInterval(fn, time);
                // clearInterval(sid);  github
            }

            if(num >= 25){
                clearInterval(sid);
            }
        };

        let sid = setInterval(fn, time);
    }
}

function getnum() {
    console.log(1);
}