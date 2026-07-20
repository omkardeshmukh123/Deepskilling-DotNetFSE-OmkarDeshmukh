function BlogDetails() {

  const blogs = [
    {
      id: 1,
      title: "React Hooks",
      author: "John"
    },
    {
      id: 2,
      title: "ES6 Features",
      author: "Alice"
    }
  ];

  return (
    <div>

      <h2>Blog Details</h2>

      {blogs.map(blog => (

        <div key={blog.id}>

          <p>

            {blog.title}

            {" - "}

            {blog.author}

          </p>

        </div>

      ))}

    </div>
  );

}

export default BlogDetails;