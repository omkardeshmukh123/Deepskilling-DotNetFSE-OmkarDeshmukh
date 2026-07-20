import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (

    <div>

      <h1>Blogger App</h1>

      {/* Logical AND */}
      {showBooks && <BookDetails />}

      {/* Ternary */}
      {showBlogs ? <BlogDetails /> : <p>No Blogs</p>}

      {/* Element Variable */}
      {(() => {
        let component;

        if (showCourses) {
          component = <CourseDetails />;
        } else {
          component = <p>No Courses</p>;
        }

        return component;
      })()}

    </div>

  );

}

export default App;