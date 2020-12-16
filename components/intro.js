import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between pt-8 mb-16 md:mb-12">
      <h1 className="text-4xl md:text-5xl sm:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        {CMS_NAME}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        The best long-term provider strategy. {' '}
        <a href="https://ct.icmarkets.com/copy/strategy/17779" className="underline hover:text-success duration-200 text-green-600" target="_blank">Start copying today</a>
      </h4>
    </section>
  )
}
