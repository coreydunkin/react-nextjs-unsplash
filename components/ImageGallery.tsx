import ImageItem from "./ImageItem";

export default function ImageGallery({ data }) {
  console.log(data);
  return (
    <div className="container">
      <div className="row mt-3 image__gallery">
        <div className="card-columns">
          {data?.map((item) => {
            return (
              <ImageItem key={item.id} item={item} />
            );
          })}
        </div>
      </div>
    </div>
  );
}