// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import user from '../../models/user.js';
import dbConnect from '../../utils/dbConnect.js';


export default (req, res) => {
  dbConnect().then(() => {
    user.findOne({id:'adwadaa'})
    .then((data) => res.send(data))
    .catch(err => {console.log(err)})
  })
}
