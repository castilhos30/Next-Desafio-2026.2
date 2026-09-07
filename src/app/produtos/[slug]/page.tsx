export default async function PaginaProdutos ({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    return (
        <div>
            <h2> Produto {slug}</h2>
        </div>
    );
}   