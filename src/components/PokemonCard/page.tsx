"use client";
import * as React from 'react';
import Link from "next/link";


export default function PokemonCard({ name, image, id, isGrid = false }) {
  return (
    //<Link to={`/detalhes/${id}`}>
      <div
        className={`border rounded-lg p-4 flex ${
          isGrid ? "flex-col items-center" : "flex-row items-center gap-4"
        } hover:shadow-lg transition`}
      >
        <img
          src={image}
          alt={name}
          className="w-20 h-20"
        />
        <div className="text-center sm:text-left">
          <p className="font-bold capitalize">{name}</p>
          <p className="text-gray-500">#{id}</p>
        </div>
      </div>
   // </Link>
  );
}
{/*<Link href={`/detalhes/${id}`}>
      <div
        className={`border rounded-lg p-4 flex ${
          isGrid ? "flex-col items-center" : "flex-row items-center gap-4"
        } hover:shadow-lg transition`}
      >
        <img
          src={{image}}
          alt={name}
          className="w-20 h-20"
        />
        <div className="text-center sm:text-left">
          <p className="font-bold capitalize">{name}</p>
          <p className="text-gray-500">#{id}</p>
        </div>
      </div>
    </Link>
*/ }