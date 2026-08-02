export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (
        <div>
            <h2> post: {slug}</h2>
        </div>
    );
}