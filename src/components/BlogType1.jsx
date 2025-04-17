import { useNavigate } from 'react-router-dom'

const BlogType1 = ({data, myArea}) => {
    const navigate = useNavigate();
    return <div onClick={() => navigate(`/blogs/${data.id}`)}>Blog Type 1</div>;
  };
  
  export default BlogType1;