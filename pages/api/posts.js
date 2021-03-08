import fs from 'fs';
import showdown from 'showdown';
import dompurify from 'dompurify';

export default (req,res) => {
    const converter = new showdown.Converter();
    const val = fs.readFileSync('./markdown/README.md');
    console.log(val.toString());
    const text      = val.toString();
    const html      = converter.makeHtml(text);
    res.send(html);
}