export default function Sector(props) {
  return (
    <div className="Sector">
      <img
        src={require(`./images/${props.item.imageUrl}`)}
        className="photo"
        alt=""
      />
      <div className="info">
        <p className="location">
          <img src={require("./images/maps.png")} className="map-logo" alt="" />
          {props.item.location.toUpperCase()}

          <a
            href={props.item.googleMapsUrl}
            target="_blank"
            className="url"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </p>

        <h1 className="title">{props.item.title}</h1>
        <p className="date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}
