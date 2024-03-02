import { Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('files')
export class FilesController {
  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => (Math.round(Math.random() * 16)).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadMultiple(@UploadedFiles() files) {
    const fileLinks = files.map((file) => `http://localhost:4000/uploads/${file.filename}`);
        console.log(fileLinks)
        return fileLinks;

  }
}
// uploadMultiple(@UploadedFiles() files) {
//     const fileLinks = files.map((file) => file.path);
//     console.log(fileLinks)
//     return fileLinks;
//   }