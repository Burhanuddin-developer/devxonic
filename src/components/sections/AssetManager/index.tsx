import Image from "next/image";
export default function AssetManager() {
  return (
    <>
      <main className=" text-white min-h-screen px-6 py-12 md:px-20 font-sans page-section">
        <div className="section-container p-14">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Introduction */}
            <section>
              <h1 className="text-3xl font-bold mb-4">Introduction</h1>
              <p className="text-md text-gray-300">
                Asset Manager is a sophisticated mobile application designed to
                help businesses and individuals efficiently track and manage
                their assets through a dynamic and user-friendly dashboard. This
                application was developed using React Native, making it
                available on both the App Store and Play Store, ensuring broad
                accessibility and a consistent user experience across devices.
              </p>
            </section>
            <section>
              <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
              <p className="text-md text-gray-300">
                The core of the Asset Manager app is its powerful dashboard,
                which presents multiple analytics, tables, and filters. The
                dashboard allows users to gain insights into their assets
                through real-time data visualization. Whether it’s tracking
                asset performance or monitoring key metrics, users can customize
                their view to focus on the data most relevant to them.
              </p>
            </section>

            {/* Key Features and Services */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>

              {/* Email Notifications */}
              <div className="space-y-2">
                <ul className="list-decimal  text-gray-300 space-y-1">
                  <li className="mb-4">
                    <strong>Real-Time Data Analytics:</strong> The dashboard
                    provides real-time data analytics, enabling users to make
                    informed decisions based on up-to-the-minute information.
                    The application supports various chart types, including line
                    graphs, pie charts, and bar graphs, to visualize trends and
                    performance.
                  </li>
                  <li className="mb-4">
                    <strong>Comprehensive Asset Tables: </strong> Users can
                    access detailed tables that list all relevant information
                    about their assets. These tables are designed for easy
                    navigation and sorting, allowing users to quickly find the
                    data they need.
                  </li>
                  <li className="mb-4">
                    <strong>Advanced Filtering Options:</strong> The Asset
                    Manager app offers advanced filtering options, enabling
                    users to customize their view according to specific criteria
                    such as date range, asset type, or team. This ensures that
                    users can focus on the most critical data without being
                    overwhelmed by unnecessary details.
                  </li>
                  <li className="mb-4">
                    <strong>Customizable Dashboard Layout:</strong> The
                    dashboard is fully customizable, allowing users to arrange
                    and prioritize the information they see. This flexibility
                    ensures that the dashboard meets the unique needs of each
                    user, whether they are managing a small portfolio or
                    overseeing a large asset inventory.
                  </li>
                </ul>
              </div>
            </section>

            {/* Bottom Section */}
            <section>
              <h2 className="text-3xl">Service Benefits:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <ul className="list-disc  text-gray-300 space-y-1">
                    <li className="mb-4">
                      <strong>Enhanced Decision-Making:</strong> Access to
                      real-time data analytics supports quicker and more
                      informed decision-making.
                    </li>
                    <li className="mb-4">
                      <strong>Increased Efficiency:</strong> The comprehensive
                      tables and filtering options streamline asset management
                      processes, saving time and effort.
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="list-disc  text-gray-300 space-y-1">
                    <li className="mb-4">
                      <strong>User-Friendly Interface:</strong> The customizable
                      dashboard layout enhances the user experience, ensuring
                      that users can easily navigate and manage their assets.
                    </li>
                    <li className="mb-4">
                      <strong>Cross-Platform Accessibility:</strong> Built with
                      React Native, the application offers consistent
                      performance and accessibility across both iOS and Android
                      devices.
                    </li>
                  </ul>
                </div>
                <div className=" rounded-xl flex justify-center items-center">
                  <Image
                    src="https://testweb.devxonic.com/wp-content/uploads/2024/08/laptop_mockup_5-1536x864.png.webp"
                    alt="Otobucks mockup 1"
                    width={500}
                    height={250}
                    className="object-contain rounded-2xl"
                  />
                </div>
                <div className=" rounded-xl flex items-center">
                  <Image
                    src="https://testweb.devxonic.com/wp-content/uploads/2024/08/mb1-1536x864.png.webp"
                    alt="Otobucks mockup 2"
                    width={500}
                    height={250}
                    className="object-contain rounded-2xl"
                  />
                </div>
              </div>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <div className="mt-10">
                  <h2 className="text-3xl font-semibold">Conclusion</h2>
                  <p className="mt-6">
                    Devxonic’s development of the Asset Manager application
                    highlights its expertise in creating robust, user-centric
                    mobile solutions. By leveraging React Native, the app
                    delivers a seamless experience across platforms while
                    providing powerful tools for asset management. Whether you
                    are a business owner or an individual managing personal
                    assets, the Asset Manager app provides the insights and
                    control you need to optimize your asset management
                    processes.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
