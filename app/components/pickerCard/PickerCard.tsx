"use client";
import Image from 'next/image';
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { PickerCardProps } from "./PickerCard.type";
import favoriteLogic from "@/app/utils/favoriteLogic";
import { Game, Team } from "@/app/types/game";

const PickerCard = ({ gameInfo }: PickerCardProps) => {
  const game: Game = favoriteLogic(gameInfo);
  const underdog: Team =
    game.favorite == game.homeTeam ? game.awayTeam : game.homeTeam;
  const [selectedPick, setSelectedPick] = useState<String>("");

  return (
    <div className="w-full p-5 shadow-xl rounded-lg">
      <RadioGroup
        className="flex h-40 justify-between"
        value={selectedPick}
        onChange={setSelectedPick}
      >
        <div className="flex-none w-1/4">
          <RadioGroup.Option value="favoriteOption" className="text-center h-full">
            {({ checked }) => (
              <div
                className={
                  checked ? "h-full border-solid border-black rounded-lg shadow-lg border-2 " : "border-solid border-2 border-transparent flex-col h-full justify-center items-center"
                }
              >
                <Image 
                className="justify-center mx-16"
                src={game.favorite.logo}
                width={115}
                height={115}
                alt="logo"
                />
                <div className="w-full">{game.favorite.fullname}</div>
                <div className='w-full'>({game.favoriteOdds})</div>
              </div>
            )}
          </RadioGroup.Option>
        </div>
        <div className="grow flex justify-center align-center">
          <div className="grid grid-rows gap-0 justify-center justify-items-center pt-8">
            <RadioGroup.Label className=" text-center text-lg">
              {game.awayTeam.city} @ {game.homeTeam.city}
            </RadioGroup.Label>
            <p suppressHydrationWarning>
              {game.time.toDateString()} {game.time.toLocaleTimeString()}
            </p>
            <p>{game.homeTeam.city}</p>
          </div>
        </div>
        <div className="flex-none w-1/4">
          <RadioGroup.Option value="underdogOption" className="text-center h-full ">
            {({ checked }) => (
              <div
                className={
                  checked ? "h-full border-solid border-black text-center rounded-lg shadow-lg border-2 " : "border-solid border-2 border-transparent flex-col h-full"
                }
              >
                  <Image 
                  className="justify-center mx-16"
                  src={underdog.logo}
                  width={115}
                  height={115}
                  alt="logo"
                    />
                  <div className="w-full">{underdog.fullname}</div>
                  <div className='w-full'>({game.underdogOdds})</div>
              </div>
            )}
          </RadioGroup.Option>
        </div>
      </RadioGroup>
    </div>
  );
};

export default PickerCard;
