export default function Page({params}:{params: {id: string}}) {
    const id = params.id
    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Pool {id} Details</div>
    </main>
    )
}