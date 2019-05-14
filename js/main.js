$(function(){
  // 内容页
  $('.click_nav li:nth-of-type(1) a').addClass('bg_current')
  $('.click_nav li a').click(function () {
    var f = this;
    $('.click_nav li a').each(function () {  this.className = this == f ? 'bgc_case' : 'nobgc_case'});
  });

  // banner
  /*鼠标移过，左右按钮显示*/
  $(".focusBox").hover(function(){ jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",0.2) },function(){ jQuery(this).find(".prev,.next").fadeOut() });
  /*SuperSlide图片切换*/
  $(".focusBox").slide({ mainCell:".pic",effect:"fold", autoPlay:true, delayTime:600, trigger:"click"});

  $('#nav li a').click(function () {
    var f = this;
    $('#nav li a').each(function () {  this.className = this == f ? 'bgc' : 'nobgc'});
  });




  // 回到顶层
  $(window).scroll(function() {
    if ($(window).scrollTop() > 500)
      $('div.go-top').show();
    else
      $('div.go-top').hide();
    });
    $('div.go-top').click(function() {
      $('html, body').animate({scrollTop: 0}, 1000);
    });

    $("div.BMapLib_sc_t_b").html("搜索");


    layui.use('laydate', function(){
      var laydate = layui.laydate;

      //执行一个laydate实例
      laydate.render({
        elem: '#test1' //指定元素
        ,min: 0 //7天前
      });
    });

    layui.use('form', function(){
      var form = layui.form;

      //监听提交
      $("form :input.required").each(function(){
                            var $required = $("<strong class='high'> *<\/strong>"); //创建元素
                            $(this).parent().append($required); //然后将它追加到文档中
                    });
             //文本框失去焦点后
                $('form :input').blur(function(){
                             var $parent = $(this).parent();
                             $parent.find(".formtips").remove();

                             //验证邮件
                             if( $(this).is('#email') ){
                                    if( ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
                          var errorMsg = '请输入正确的E-Mail地址';
                                              $parent.append('<span class="formtips onError">'+errorMsg+'<\/span>');
                                    }else{
                          var okMsg = '';
                                              $parent.append('<span class="formtips onSuccess">'+okMsg+'<\/span>');
                                    }
                             }
                    });
      $('#send').click(function(){
                     $("form :input.required").trigger('blur');
                     var numError = $('form .onError').length;
                     if(numError){
                             return false;
                     }
      });
      form.on('submit(formDemo)', function(data){



        layer.open({
          title: '温馨提示'
          ,btn: ['好的']
          ,content: '您的咨询提交已成功，我们会在3个工作日内与您联系，感谢您对蒙斯特的信任和支持。'
        });
        return false;

      });
    })

    // console.log($('#test1'))
    $('#test1').focus(function () {
      $('.layui-edge-change ').css('transform', 'scaleY(-1)');
    })
    $('#test1').blur(function () {
      $('.layui-edge-change ').css('transform', 'scaleY(1)');
    })



});
