'use client'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { PickerCardProps } from './PickerCard.type'
import favoriteLogic from '@/app/utils/favoriteLogic'
import { Game, Team } from '@/app/types/game'

const PickerCard = ({
  gameInfo
    }: PickerCardProps) => {


 const game: Game = favoriteLogic(gameInfo); 
 const underdog: Team = (game.favorite == game.homeTeam) ? game.awayTeam : game.homeTeam
 const [selectedPick, setSelectedPick] = useState<String>("")


  return (
    <div className="w-full p-5 shadow-lg rounded-lg">
    <RadioGroup className="flex justify-between" value={selectedPick} onChange={setSelectedPick}>
      <div className="flex-none w-20">
      <RadioGroup.Option value="Cowboys">
        {({ checked }) => (
          <div className={checked ? 'border-solid border-black rounded-lg border-2' : ''}>
            {game.favorite.fullname}
            <p>
            ({game.favoriteOdds})
            </p>
            </div>
        )}
      </RadioGroup.Option>
      </div>
      <div className="grow flex justify-center align-center">
      <div className="grid grid-rows gap-0 justify-center justify-items-center">
      <RadioGroup.Label className="text-lg">
        {game.awayTeam.city} @ {game.homeTeam.city}
        </RadioGroup.Label>
      <p suppressHydrationWarning>{game.time.toDateString()} {game.time.toLocaleTimeString()}</p>
      <p>{game.homeTeam.city}</p>
      </div>
      </div>
      <div className="flex-none w-20">
      <RadioGroup.Option value="Browns">
        {({ checked }) => (
          <div className={checked ? 'border-solid border-black rounded-lg border-2' : ''}>
            {underdog.fullname}
            <p>
            ({game.underdogOdds})
            </p>
            </div>
        )}
      </RadioGroup.Option>
      </div>
    </RadioGroup>
    </div>
  )};
  
  export default PickerCard;