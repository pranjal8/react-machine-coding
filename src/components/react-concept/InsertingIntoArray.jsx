import { useState } from "react";

let nextId = 3;

const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const InsertingIntoArray = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  function handleClick() {
    const insertAt = +prompt("Index you want to insert at", "1");
    if (insertAt === null) return;

    const nextArtist = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt),
    ];

    setArtists(nextArtist);
    setName("");
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((artist, index) => (
          <li key={artist.id}>
            {artist.name} — Index: {index}
          </li>
        ))}
      </ul>
      <p> {artists.length} </p>
    </>
  );
};

export default InsertingIntoArray;
