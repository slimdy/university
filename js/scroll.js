function isInSight(el) {
    const bound = el.getBoundingClientRect();
    const clientHeight = window.innerHeight;
    //如果只考虑向下滚动加载
    //const clientWidth=window.innerWeight;
    return bound.top <= clientHeight + 100;
}

var index = 0;
function checkImgs() {
    var imgs = document.querySelectorAll('.thumb');

    for (var i = index; i < imgs.length; i++) {
        if(imgs[i].src.indexOf("Images/zhanwei.png") !== -1){
            console.log(imgs[i])
            if (isInSight(imgs[i])) {
                loadImg(imgs[i]);
                index = i;
            }
        }

    }
    // Array.from(imgs).forEach(el => {
    //   if (isInSight(el)) {
    //     loadImg(el);
    //   }
    // })
}

function loadImg(el) {

    if (el.src.indexOf("Images/zhanwei.png") != -1) {
        console.log("进来了啊")
        var cc = el.dataset.src;
        el.src = cc;
    }
}

function throttle(fn, mustRun ) {
    console.log(1);
    const timer = null;
    var previous = null;
    return function() {
        const now = new Date();
        const context = this;
        const args = arguments;
        if (!previous) {
            previous = now;
        }
        const remaining = now - previous;
        if (mustRun && remaining >= mustRun) {
            console.log(123)
            console.log(context)
            console.log(args)
            fn.apply(context, args);
            previous = now;
        }
    }
}