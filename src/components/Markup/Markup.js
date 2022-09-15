export default function Markup({ service: { count, price } }) {
  return (
    <div className="card">
      <span className="card__likes">{count}</span>
      <p className="card__discription"> Real Instagram Likes</p>

      <ul className="card__text">
        <li className="card__text--item">
          Delivery <span className="card__text--dscr">Time 5-15 min</span>
        </li>
        <li className="card__text--item">No Password Required</li>
        <li className="card__text--item">Real Likes For Cheap</li>
      </ul>

      <ul className="card__price">
        <li className="card__price--before">$ 2.22</li>
        <li className="card__price--after">$ {price}</li>
      </ul>

      <button className="card__button" type="button">
        Buy
      </button>
    </div>
  );
}
