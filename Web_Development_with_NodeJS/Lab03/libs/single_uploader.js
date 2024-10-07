const multer = require('multer');
const uploaderConfig = require("./uploader_config");

// Sử dụng middleware multer để xử lý upload file
const uploader = multer({
    storage: uploaderConfig.storgare,
    // Chỉ cho phép up file ảnh
    fileFilter: uploaderConfig.fileFilter('image/'),
    // Giới hạn kích thước tối đa của file được up
    limits: {
        fileSize: uploaderConfig.maxFileSize,
    }
});

// Middleware dùng để xác thực các thông tin trước khi thêm sản phẩm
module.exports = (req, res, next) => {
    const upload = uploader.single('image');
    upload(req, res, (err) => {
        const product = req.body;
        const file = req.file;
        if(product.name === ''){
            res.render('add', {
                isError: true,
                errMsg: 'Vui lòng nhập tên sản phẩm'
            });
        }
        else if(product.price === ''){
            res.render('add', {
                isError: true,
                errMsg: 'Vui lòng nhập giá sản phẩm',
                name: product.name,
            });
        }
        else if(err instanceof multer.MulterError){
            res.render('add', {
                isError: true,
                errMsg: 'Ảnh không được vượt quá 5 MB',
                name: product.name,
                price: product.price,
            });
        }
        else if(!file){
            res.render('add', {
                isError: true,
                errMsg: 'Vui lòng upload ảnh sản phẩm',
                name: product.name,
                price: product.price,
            });
        }
        else{
            res.data = product;
            console.log(file);
            res.data.imageName = file.filename;
            next();
        }
    });
}
