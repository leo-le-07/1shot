import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostBody from "./post-body";

export default function HeroPost({
  title,
  coverImage,
  date,
  content,
}) {
  return (
    <article className="mb-10">
      <div className="flex">
        <span className="rounded-full px-4 mr-2 bg-red-600 text-white p-2 rounded  leading-none flex items-center">HOT</span>
        <h3 className="text-4xl md:text-4xl leading-tight">
          {title}
        </h3>
      </div>
      <div>
      <div className="mb-4 md:mb-0 text-gray-600">
        Last updated: {' '}
        <DateFormatter dateString={date} />
      </div>
      </div>
      <div className="mb-8 mt-8 md:mb-16">
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostBody content={content} />
    </article>
  )
}
