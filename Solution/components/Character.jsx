import './character.css';
const Character = ({ character }) => {
  return (
    <div className="characters">
      <p>
        {character.name} - <span>{character.species}</span>
      </p>
      <img src={character.image} alt="" />
    </div>
  );
};

export default Character;
