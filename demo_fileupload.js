const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.url === '/fileupload') {
    const form = new formidable.IncomingForm();
    form.parse(req, (err1, fields, files) => {
      const oldpath = files.filetoupload.path;
      const newpath = `C:/Users/Mwaura/${files.filetoupload.name}`;
      fs.rename(oldpath, newpath, (err2) => {
        if (err2) throw err2;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
  }
  return res;
}).listen(8080);
