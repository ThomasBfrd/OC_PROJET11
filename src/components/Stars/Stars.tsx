import './Stars.scss';

export default function Stars({stars, locationRate}: {stars: Array<number>, locationRate: string | undefined}) {
  return (
    <ul className="rating">
      {stars.map((star, index) => (
        <li key={index}>
          <img
            src="/star.png"
            alt={`${star}`}
            className={
              index <= Number(locationRate) - 1 ? "star-active" : ""
            }
          />
        </li>
      ))}
    </ul>
  );
}
