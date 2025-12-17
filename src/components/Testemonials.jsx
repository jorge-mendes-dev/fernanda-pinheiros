import { AppConfig } from "config/AppConfig";

export default function Testimonials() {
  const { testimonials } = AppConfig;
  const { highlight, reviews } = testimonials;

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  const feedbacks = [
    [
      [
        reviews[0]
      ],
      [
        reviews[1],
      ],
    ],
    [
      [
        reviews[2],
      ],
      [
        reviews[3],
      ],
    ],
  ];

  return (
    <div
      className="relative isolate bg-white pb-32 pt-24 sm:pt-32"
      id="testimonials"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-pink-200/20 px-4 py-2 text-sm font-bold text-primary ring-1 ring-primary/20 mb-4">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            {testimonials.title}
          </div>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {testimonials.description}
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="group relative rounded-2xl bg-gradient-to-br from-white to-pink-50/30 shadow-xl ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1 transition-all hover:shadow-2xl hover:scale-[1.02] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <blockquote className="relative p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
              <svg className="absolute top-6 left-6 h-8 w-8 text-primary/20" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">{highlight.feedback}</p>
            </blockquote>
            <figcaption className="relative flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 bg-white/50 backdrop-blur-sm px-6 py-4 sm:flex-nowrap">
              <div className="flex-auto">
                <div className="font-bold text-gray-900">{highlight.author}</div>
                <div className="text-primary font-medium">{`${highlight.position}`}</div>
              </div>
            </figcaption>
          </figure>
          {feedbacks.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === feedbacks.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8'
                  )}
                >
                  {column.map(testimonial => (
                    <figure
                      key={testimonial.position}
                      className="group rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 transition-all hover:shadow-xl hover:scale-[1.02] hover:ring-primary/20 cursor-default"
                    >
                      <blockquote className="text-gray-700 leading-relaxed">
                        <p className="relative">
                          <span className="text-primary/30 font-serif text-2xl absolute -left-1 -top-2">"</span>
                          {testimonial.feedback}
                        </p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4 pt-4 border-t border-gray-100">
                        <div>
                          <div className="font-bold text-gray-900">
                            {testimonial.author}
                          </div>
                          <div className="text-primary text-sm font-medium">{`${testimonial.position}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
