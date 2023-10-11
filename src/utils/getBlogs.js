
const getBlogs = async () => {
    const res = await fetch("http://localhost:5000/blogs", {
        next: {
            revalidate: false
        }
    })
    return res.json()
};

export default getBlogs;