import Image from "next/image";
import PickerCard from "./components/pickerCard/PickerCard";
import gameInfo from '../public/dummyData.json'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 flex-col max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {gameInfo.map((game, i) => (
          <div key={i} className=' w-full pb-10'>
          <PickerCard gameInfo={game} key={i}/>
          </div>
         ))}
      </div>

    </main>
  );
}
