import post from '../../../models/post';
export default async (req,res) => {
    const tag = req.query.tag;
    console.log(tag);
    const posts = await post.find({tags:{$in:[tag]}})
    console.log(posts.map(e => e.title))
    res.send({posts});
}