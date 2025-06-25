"use client";
import Image from "next/image";
export default function Express() {
  return (
    <main className="text-white px-6 md:px-20 py-16 page-section">
      <div className="section-container p-10">
        <section>
          <p>
            Designed to provide a clear and professional online presence, this
            website highlights the extensive range of services offered by
            Express Lumpers, with individual service pages dedicated to each
            specialty. The site is structured to facilitate easy navigation and
            quick access to essential information, ensuring that potential
            clients can swiftly find what they need.
          </p>
        </section>
        {/* Key Sections and Services */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-6">Key Sections and Services</h2>

          <div className="space-y-6">
            {/* Home Page */}
            <div>
              <h3 className="text-md font-semibold">1. Home Page</h3>
              <ul className="list-disc  text-gray-300 mt-2 space-y-1">
                <li>
                  The home page of the Express Lumpers website introduces
                  visitors to the company’s core services with a clean and
                  user-friendly layout. It serves as a gateway to the more
                  detailed individual service pages, offering a snapshot of what
                  Express Lumpers can deliver.
                </li>
              </ul>
            </div>

            {/* Service Pages */}
            <div>
              <h3 className="text-md font-semibold">2. Service Pages</h3>
              <ul className="list-disc  text-gray-300 mt-2 space-y-1">
                <li>
                  <strong>Lumper Delivery Services:</strong> A dedicated page
                  that details the company’s lumper delivery solutions,
                  including logistics management and on-time delivery
                  guarantees.
                </li>
                <li>
                  <strong>Packaging Services:</strong>This page showcases the
                  comprehensive packaging solutions provided by Express Lumpers,
                  tailored to meet various industry standards and client
                  specifications.
                </li>
                <li>
                  <strong>Machine Operator Services:</strong> Highlighting the
                  skilled machine operators available through Express Lumpers,
                  this page outlines the expertise and safety protocols followed
                  by the team.
                </li>
              </ul>
            </div>

            {/* Contact Page */}
            <div>
              <h3 className="text-md font-semibold">3. Contact Page</h3>
              <ul className="list-disc  text-gray-300 mt-2 space-y-1">
                <li>
                  The contact page is designed for easy client communication,
                  featuring a contact form, direct phone numbers, and an
                  integrated Google Maps location for convenience. This page
                  ensures that potential clients can reach out easily for
                  inquiries or service bookings.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section>
          <h2 className="text-2xl font-bold mb-4 mt-6">Services Details</h2>
          <p className="text-gray-300 mb-6">
            Devxonic played a pivotal role in the creation of the Express
            Lumpers website, focusing on web UI design that is both
            aesthetically pleasing and functional. The design was centered
            around user experience, with a responsive layout that adapts
            seamlessly to different devices. The use of modern web design
            principles ensured that the site is not only visually appealing but
            also optimized for performance and search engine visibility.
          </p>

          <div className="grid md:grid-cols-2 mb-6 gap-5">
            <Image
              src="https://testweb.devxonic.com/wp-content/uploads/2024/08/133-1-1536x864.jpg.webp"
              alt="Contact Page"
              className="rounded-3xl w-2xl"
              width={400}
              height={350}
            />
            <Image
              src="https://testweb.devxonic.com/wp-content/uploads/2024/10/Express-Web1-1536x850.jpg.webp"
              alt="Service Pages"
              className="rounded-3xl w-2xl"
              width={400}
              height={350}
            />
          </div>

          <p className="text-gray-300">
            The Express Lumpers website was developed using WordPress,
            leveraging a theme that was customized to align with the branding
            and service offerings of the company. Devxonic’s expertise in web UI
            design was instrumental in crafting a site that meets the client’s
            needs while providing an engaging and intuitive user experience.
          </p>
        </section>
      </div>
    </main>
  );
}
