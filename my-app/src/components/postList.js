import useFetch from "../hooks/useFetch";

function PostList() {

    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if(!data || data.length === 0) {
        return <div>No posts available.</div>;
    }

  return (
    <div>
      <h2>Post List</h2>
        <ul>          
        {
        
        data.map(post => (
            <li key={post.id}>
                <h3>{post.title}</h3> 
                <p>{post.body}</p>
            </li>
        ))   }   
        
        </ul>        

  </div>
  )
}
export default PostList;