const body = $request.body;
const updatedBody = body.replace(/(请输入账号\(邮箱\))[^&]*/g, '3463203571@qq.com')
    .replace(/(请输入密码)[^&]*/g, '12qwertyu');
$done({ body: updatedBody });
