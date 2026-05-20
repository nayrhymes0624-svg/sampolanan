
const dynamic = [
    { id: "1", name: "Laptop" },
    { id: "2", name: "Phone" },
];


export default async function ProductPage({ params, }: {params: Promise<{ id: string }>;}) {
    const { id } = await params;
    const product = dynamic.find((p) => p.id === id);

    return (
        <div>
            <h1>{product?.name} {id}</h1>
        </div>
    );
}