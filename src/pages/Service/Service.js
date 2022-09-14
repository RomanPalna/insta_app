import { useSelector } from "react-redux";
import Markup from "../../components/Markup/Markup";

export default function Service({ service: serviceType }) {
  const service = useSelector((state) => state.service[serviceType] || []);

  return (
    <div className="card__container">
      {service.length ? (
        service.map((item) => <Markup key={item.count} data={item} />)
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
