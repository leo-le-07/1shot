import DateFormatter from "./date-formatter";
import PostBody from "./post-body";

export default function AnnouncementPost({
                                   title,
                                   date,
                                   content,
                                 }) {
  return (
    <article className="mb-10">
      <hr className="mt-20 mb-10" />
      <div className="flex">
        <span className="rounded-full pr-4 bg-white-600 text-white rounded leading-none flex items-center text-4xl">🗣</span>
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
      <PostBody content={content} />
    </article>
  )
}
