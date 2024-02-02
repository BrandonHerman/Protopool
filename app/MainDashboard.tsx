import PickerCard from "./components/pickerCard/PickerCard";

async function getGames() {
    const res = await fetch('http://localhost:4000/games', {
        next: {
            revalidate: 30
            // uses cache unless its been > than 30 seconds since last fetch, then will refetch
            // TODO: change this to more resonable time with API real call
        }
    });
    return res.json()
}

export default async function MainDashboard() {
    const games = await getGames();
    return (
      <div className="z-10 flex-col max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {games.map((game: any, i: number) => (
          <div key={i} className=' w-full pb-10'>
          <PickerCard gameInfo={game} key={i}/>
          </div>
         ))}
         {games.length === 0 && (
            <p className="text-center">There are no upcoming games.</p>
         )}
      </div>
    )
}