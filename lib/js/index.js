//登陆注册切换
//属性里不要有空格，否则会导致函数无法正常调用
$(document).ready(function () {
    $("#login").click(function () {
        $(".register-div").css("display", "none");
        $(".login-div").css("display", "block");
        $("#register").css("color", "white");
        $("#login").css("color", "black");
    });
    $("#register").click(function () {
        $(".register-div").css("display", "block");
        $(".login-div").css("display", "none");
        $("#login").css("color", "white");
        $("#register").css("color", "black");
    });
});

// 登陆数据验证
$('#btnLogin').on('click', function (event) {
    //阻止submit的默认事件
    event.preventDefault();

    if ($('#account').val().trim().length < 1) {
        //tips层-右
        layer.tips('请填写您的账号！', '#account', { tips: [1, '#3675c9'] });
        $('#account').focus();
        return;
    }

    if ($('#password').val().trim().length < 1) {
        layer.tips('请填写你的密码！', '#password', { tips: [1, '#3675c9'] });
        $('#password').focus();
        return;
    }

    $.post(" ", $('form').serialize(), function (res) {

        if (res.code == 200) {
            setTimeout(function () {
                location.href = '/index';
            }, 2000);
            layer.msg('登录成功，正在跳转首页...')
        }
        else {
            layer.msg(res.message);
        }
    })
});

//注册数据验证
$('#btnRegister').on('click', function (event) {
    //阻止submit的默认事件
    event.preventDefault();

    if ($('#raccount').val().trim().length < 1) {
        layer.tips('请填写你账号！', '#raccount', { tips: [2, '#3675c9'] });
        $('#raccount').focus();
        return;
    }

    if ($('#rpassword').val().trim().length < 1) {
        layer.tips('请填写你的密码！', '#rpassword', { tips: [2, '#3675c9'] });
        $('#rpassword').focus();
        return;
    }

    if ($('#rrepassword').val().trim().length < 1) {
        layer.tips('请填写你的密码！', '#rrepassword', { tips: [2, '#3675c9'] });
        $('#rrepassword').focus();
        return;
    }

    if ($('#rpassword').val().trim() != $('#rrepassword').val().trim()) {
        layer.tips('两次输入的密码不一致！', '#rrepassword', { tips: [2, '#3675c9'] });
        $('#rrepassword').val("").focus();
        return;
    }

    $.post("", $('#register-form').serialize(), function (res) {
        if (res.code == 200) {
            setTimeout(function () {
                location.href = '<c:url value="/list" />';
            }, 2000);
            layer.msg('登录成功，正在跳转首页...')
        }
        else {
            layer.msg(res.message);
        }
    })
});
//若未接受用户协议，禁用提交按钮并给出提示
$('#inlineCheckbox').on('click', function (event) {
    if ($('#inlineCheckbox').prop('checked')) {
        $('#btnRegister').attr('disabled', false);
    } else {
        $('#btnRegister').attr('disabled', true);
        layer.alert('接受本站用户协议可以更好的保护您的隐私和权益，若您无法！', {
            title: '系统提示',
        })
    }
});

//用户协议
function agreement() {
    layer.open({
        type: 2,
        title: '本站用户协议',
        shadeClose: true,
        shade: false,
        //开启最大化最小化按钮
        maxmin: true,
        area: ['70%', '70%'],
        content: 'agreement.html'
    });
}
