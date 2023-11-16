import { useParams } from 'react-router-dom';

export function SinglePostPage() {
    const { postId } = useParams();
    
    return (
        <>
            <h1>Post <u>{postId}</u> page</h1>
        </>
    )
}