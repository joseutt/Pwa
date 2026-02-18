import { useState } from 'react'
import './App.css'

function App() {

  const [nombre, setNombre] = useState("")
  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState("")

  const buscarPokemon = async () => {

    setError("")
    setPokemon(null)

    try {

      const respuesta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`
      )

      if (!respuesta.ok)
        throw new Error()

      const data = await respuesta.json()

      setPokemon(data)

    } catch {

      setError("Pokemon no encontrado o sin conexión")

    }

  }

  return (

    <div className="container">

      <h1>PokePWA React</h1>

      <input
        type="text"
        placeholder="Ejemplo: pikachu"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <button onClick={buscarPokemon}>
        Buscar
      </button>

      {error && <p className="error">{error}</p>}

      {pokemon && (

        <div className="card">

          <h2>
            #{pokemon.id} {pokemon.name.toUpperCase()}
          </h2>

          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />

          <p>
            <strong>Tipo:</strong>{" "}
            {pokemon.types.map(t => t.type.name).join(", ")}
          </p>

          <p>
            <strong>Habilidades:</strong>{" "}
            {pokemon.abilities
              .map(a => a.ability.name)
              .join(", ")}
          </p>

          <p>
            <strong>Peso:</strong> {pokemon.weight}
          </p>

          <p>
            <strong>Altura:</strong> {pokemon.height}
          </p>

          <p>
            <strong>Experiencia base:</strong>{" "}
            {pokemon.base_experience}
          </p>

          <h3>Estadísticas</h3>

          <ul>

            {pokemon.stats.map(stat => (

              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>

            ))}

          </ul>

        </div>

      )}

    </div>

  )

}

export default App
