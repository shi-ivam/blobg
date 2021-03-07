// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import user from '../../models/user.js';
import dbConnect from '../../utils/dbConnect.js';


export default (req, res) => {
  dbConnect().then(() => {
    user.create({id:'adwadaa',email:"email@email.com",password:'adwa',username:'wadwa'})
    .then((c) => {console.log('User Created');console.log(c)})
    .catch(err => console.log(err))
  })
  .catch(err => console.error(err))
}
