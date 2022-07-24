export default function ImageItem({ item }) {
  return (
    <div
      className="image-card card"
      key={item.id}
    >
      <img className="card-img-top" src={item.urls.thumb} alt={item.id} />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>
            <i className="fa fa-user-circle pr-1" aria-hidden="true"></i>
            <a
              href={item.user.portfolio_url}
              target="_blank"
              rel="noreferrer"
              className="text-dark"
            >
              {item.user.username}
            </a>
          </div>
          <p className="likes">
            <i className="fa fa-heart" aria-hidden="true"></i>
            <span className="pl-1 like__title">{item.likes}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
