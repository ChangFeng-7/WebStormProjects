function validateForm() {
    var username = document.forms["registrationForm"]["username"].value;
    var password = document.forms["registrationForm"]["password"].value;
    var confirmPassword = document.forms["registrationForm"]["confirmPassword"].value;
    var gender = document.forms["registrationForm"]["gender"].value;
    var province = document.forms["registrationForm"]["province"].value;
    var introduction = document.forms["registrationForm"]["introduction"].value;
    var usernamePattern = /^[a-zA-Z0-9][a-zA-Z0-9._-]{2,17}$/;
    var passwordPattern = /^[\w!@#$%^&*()-+=<>?]+$/;

    if (username === "") {
        alert("用户名不能为空");
        return false;
    }
    if (!username.match(usernamePattern)) {
        alert("请输入正确的用户名格式");
        return false;
    }
    if (password === "") {
        alert("密码不能为空");
        return false;
    }
    if (!password.match(passwordPattern) || password.length < 6 || password.length > 16) {
        alert("请输入正确的密码格式（6-16位字符，包括英文、数字、特殊字符）");
        return false;
    }
    if (password === username) {
        alert("用户名和密码不能相同");
        return false;
    }
    if (password !== confirmPassword) {
        alert("两次密码输入不一致");
        return false;
    }
    if (gender === "") {
        alert("请选择性别");
        return false;
    }
    if (province === "") {
        alert("请选择省份");
        return false;
    }
    if (introduction === "") {
        alert("自我介绍不能为空");
        return false;
    }
    return true;
}
