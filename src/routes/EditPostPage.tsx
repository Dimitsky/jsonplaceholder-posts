import { useParams } from 'react-router-dom';

export function EditPostPage() {
    const { postId } = useParams();

    return (
        <>
            <h1>Edit post <u>{postId}</u></h1>
        </>
    )
}