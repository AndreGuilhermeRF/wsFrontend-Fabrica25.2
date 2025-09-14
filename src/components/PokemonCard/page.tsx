"use client";
import * as React from 'react';
import Link from "next/link";


type PokemonCardProps = {
  name: string;
  image: string;
  id: number | string;
  isGrid?: boolean;
};

export default function PokemonCard({ name, image, id, isGrid = false }: PokemonCardProps) {
  return (
    <Link href={`/details/${id}`}>
      <div className="pokemon-card">
        <img
          src={image}
          alt={name}
          
        />
        <div className="pokemon-name">
          <p className="font-bold capitalize">{name}</p>
          <p className="text-gray-500">#{id}</p>
        </div>
      </div>
    </Link>
  );
}
