import { features } from "../utils/content";

export default function Features() {
  return (
    <div className="lg:m-4 my-4 bg-gradient-to-r from-cyan-700 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Metrics that help analyze your team&apos;s performance
        </h2>
        <p className="mt-4 text-lg text-purple-200 center-align max-w-70">
          Our metrics provide an insight into productivity through the different stages of a software development lifecycle. This helps to assess the quality of a product and track team performance.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10 margin-w-auto">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-purple-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
