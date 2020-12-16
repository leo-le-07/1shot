export default function CoverImage({ title, src }) {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className="shadow-small"
    />
  )
  return (
    <div className="sm:mx-0">
      {image}
    </div>
  )
}
