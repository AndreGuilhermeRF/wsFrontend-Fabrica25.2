"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Footer } from "@/components/Footer/page";
import "./style.css";
import Image from "next/image";

interface Pokemon {
  name: string;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
}

export default function DetailsPage() {
  const params = useParams<{ id: string }>();
  const { id } = params;

  const [poke, setPoke] = useState<Pokemon | null>(null);

  useEffect(() => {
    async function GetPoke() {
      const res = await axios.get<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPoke(res.data);
    }
    GetPoke();
  }, [id]);

  return (
    <div className="details-root">
      <header className="details-appbar">
        <nav style={{ padding: "8px 16px" }}>
          <Link
            href="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            ⬅ Voltar para Home
          </Link>
        </nav>
      </header>

      <div className="details-container">
        {poke && (
          <div className="details-paper">
            <div className="details-title">{poke.name}</div>
            <hr className="details-divider" />
            <Image
              src={poke.sprites.front_default}
              alt={poke.name}
              width={120}
              height={120}
              className="details-image"
              priority
            />
            <div className="details-info">
              <strong>ID:</strong> #{id}
            </div>
            <div className="details-info">
              <strong>Tipo:</strong>{" "}
              {poke.types.map((t) => t.type.name).join(", ")}
            </div>
            <div className="details-info">
              <strong>Peso:</strong> {poke.weight / 10} kg
            </div>
            <div className="details-info">
              <strong>Experiência Base:</strong> {poke.base_experience}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
