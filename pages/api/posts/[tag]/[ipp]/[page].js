import post from '../../../../../models/post.js';
export default async (req, res) => {
    const tag = req.query.tag;
    const page = Number.parseInt(req.query.page);
    const ipp = Number.parseInt(req.query.ipp);
    console.log(tag);
    const posts = await post.find({ tags: { $in: [tag] } })

    // Total Pages Logic Start
    let totalPages = Math.floor(posts.length / ipp);
    if ((posts.length % ipp) > 0) {
        totalPages = totalPages + 1;
    }
    // Total Pages Logic End


    // Return if Page is Greater than totalPages (out of index)
    if (page > totalPages) {
        res.send({ type: 'failed', end: true });
        return
    }


    const final = await post.find({ tags: { $in: [tag] } }).skip(page * ipp).limit(ipp);
    console.log(totalPages)
    if (totalPages === 1) {
        console.log('1')
        res.send({ posts: final, type: 'found', end: true, totalPages });
    }
    else {
        if (page === totalPages) {
            console.log('2')

            res.send({ posts: final, type: 'found', end: true, totalPages });
        }
        else {
            console.log('3')

            res.send({ posts: final, type: 'found', end: false, totalPages });
        }
    }

}