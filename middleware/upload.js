import multer from 'multer';
import path from 'path';

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniquename = Date.now() + '-' + file.originalname;
        cb(null, uniquename)
    }
});

const upload = multer({
    fileFilter: (req, file, cb) => {
        if(file.mimetype.startsWith('image/')) {
            cb(null, true)
        } else {
            cb(new Error('Seul les images sont accepté'), false)
        }
    } 
})

export default upload