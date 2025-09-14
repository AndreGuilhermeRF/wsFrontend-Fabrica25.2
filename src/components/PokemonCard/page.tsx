"use client";
import * as React from 'react';
import Link from "next/link";
import Image from 'next/image';

export default function PokemonCard({ name, image, id, isGrid = false }) {
  return (
    <Link href={`/details/${id}`}>
      <div className="pokemon-card">
        <Image
          src={image}
          alt={name}
          width={96}
          height={96}
        />
        <div className="pokemon-name">
          <div className="pokemon-type"><p className="font-bold capitalize">{name}</p></div>
          <div className="pokemon-id">#{id}</div>
        </div>
      </div>
    </Link>
  );
}
