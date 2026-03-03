function CharacterCard({ character }) {
  return (
    <div className="bg-deepIndigo p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-gold mb-4">
        {character.name}
      </h3>

      <img
        src={character.images[0]}
        alt={character.name}
        className="rounded-lg mb-4"
      />

      <p className="text-gray-300 text-sm">
        {character.description}
      </p>
    </div>
  );
}

export default CharacterCard;