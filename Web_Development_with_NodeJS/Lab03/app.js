const express = require('express');
const cookieParse = require('cookie-parser');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
require('dotenv').config();


// Sử dụng middleware để xác thực người dùng đã đăng nhập hay chưa
const loginAuth = require('./libs/login_auth');
// Sử dụng middleware để lấy được file
const uploaderSingle = require('./libs/single_uploader');

// Cổng chạy server
const port = process.env.PORT;
console.clear(); // Clear terminal

// Khởi tạo server
const app = express();
// Thiết lập View Engine EJS
app.set('view engine', 'ejs');


// ========== Middleware ==========
// Middleware dùng để parse body
app.use(bodyParser.urlencoded({extended: false}));

// Middleware sử dụng cookie
app.use(cookieParse());

// Middleware sử dụng session
app.use(expressSession({
    secret: 'secret_key',       // Chuỗi bí mật dùng để ký session ID cookie
    resave: false,              // Buộc session được lưu lại ngay, ngay cả khi không có thay đổi
    saveUninitialized: true,    // Buộc lưu một session chưa được khởi tạo
}));

// Middleware yêu cầu người dùng phải đăng nhập trước
//   khi thực hiện các tác vụ khác
app.use(loginAuth.authenticationCheck);


// ========== Routing ==========
// Truy cập vào trang chủ
app.get('/', (req, res) => {
    res.render('index');
});

// Trang login
app.get('/login', (req, res) => {
    res.render('login');
});

// Đăng nhập bằng login form
/*
    Middleware `formValidation` kiểm tra các input hợp lệ hay không.
    Middleware `userAuthentication` kiểm tra tài khoản hợp lệ hay không
*/
app.post('/login', loginAuth.formValidation, loginAuth.userAuthentication, (req, res) => {
    res.redirect('/');
});

// Trang thêm sản phẩm
app.get('/add', (req, res) => {
    res.render('add');
});

// Thêm sản phẩm
app.post('/add', uploaderSingle, (req, res) => {
    res.json(res.data);
});

// Dẫn đến trang 404 khi đường dẫn không hợp lệ
app.get('*', (req, res) => {
    res.render('error', {title: '404', message: 'Page not found'});
});

// Chạy server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));