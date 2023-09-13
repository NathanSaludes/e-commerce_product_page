import './product-preview.css'

function ProductPreview() {
  return (
    <>
      <div className="product-image">
        <picture>
          <img src="/images/image-product-1.jpg" alt="product-1" />
        </picture>
      </div>
      <div className="thumbnails">
        <a href="#" className="thumbnail-item active">
          <img src="/images/image-product-1-thumbnail.jpg" alt="product-1-thumbnail" />
        </a>
        <a href="#" className="thumbnail-item">
          <img src="/images/image-product-2-thumbnail.jpg" alt="product-1-thumbnail" />
        </a>
        <a href="#" className="thumbnail-item">
          <img src="/images/image-product-3-thumbnail.jpg" alt="product-1-thumbnail" />
        </a>
        <a href="#" className="thumbnail-item">
          <img src="/images/image-product-4-thumbnail.jpg" alt="product-1-thumbnail" />
        </a>
      </div>
    </>
  )
}

export default ProductPreview