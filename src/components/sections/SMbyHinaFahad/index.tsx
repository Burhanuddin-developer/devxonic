import Image from "next/image";
export default function SMbyHinaFahad() {
  return (
    <>
      <main className=" text-white min-h-screen px-6 py-12 md:px-20 font-sans page-section">
       <div className="section-container p-14">
         <div className="max-w-6xl mx-auto space-y-12">
          {/* Introduction */}
          <section>
            <h1 className="text-3xl font-bold mb-4">Introduction</h1>
            <p className="text-md text-gray-300">
              SMbyHinaFahad is a Shopify e-commerce platform dedicated to
              offering a delightful shopping experience for customers looking
              for toys, keychains, and bags. The store is meticulously designed
              to ensure ease of use, secure transactions, and timely delivery,
              all while maintaining a focus on customer satisfaction. Built
              using the robust Shopify framework, SMbyHinaFahad integrates
              multiple advanced features to streamline the shopping process from
              start to finish.
            </p>
          </section>

          {/* Key Features and Services */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Key Features and Services
            </h2>

            {/* Email Notifications */}
            <div className="space-y-2">
              <h3 className="text-md ">1. Email Notifications</h3>
              <ul className="list-disc  text-gray-300 space-y-1">
                <li>
                  <strong>Instant Updates:</strong> Customers receive timely email 
                  notifications at every step of their shopping journey, from order 
                  confirmation to shipping details and delivery confirmation.
                </li>
                <li>
                  <strong>Personalized Communication:</strong> Each email is customized to 
                  provide relevant information, ensuring a personalized and professional
                   interaction with the brand.
                </li>
              </ul>
            </div>

            {/* Live Delivery Status */}
            <div className="space-y-2 mt-6">
              <h3 className="text-md ">2. Live Delivery Status</h3>
              <ul className="list-disc text-gray-300 space-y-1">
                <li>
                  <strong>Real–Time Tracking:</strong>  Shoppers can track their orders 
                  live, providing transparency and peace of mind as they anticipate their deliveries.
                </li>
                <li>
                  <strong>Automatic Updates:</strong> The system automatically updates customers on 
                  their order’s progress, ensuring they are always informed.
                </li>
              </ul>
            </div>

            {/* Add to Cart & Payment Gateways */}
            <div className="space-y-2 mt-6">
              <h3 className="text-md">
                3. Add to Cart & Payment Gateways
              </h3>
              <ul className="list-disc  text-gray-300 space-y-1">
                <li>
                  <strong>Seamless Shopping Experience:</strong> The add-to-cart functionality is 
                  smooth and responsive, allowing customers to effortlessly select and manage
                   their desired products.
                </li>
                <li>
                  <strong>Multiple Payment Options:</strong> SMbyHinaFahad supports a variety
                   of payment gateways, offering flexibility and convenience for customers during checkout.
                </li>
              </ul>
            </div>

            {/* Invoice Generation */}
            <div className="space-y-2 mt-6">
              <h3 className="text-md">4. Invoice Generation</h3>
              <ul className="list-disc text-gray-300 space-y-1">
                <li>
                  <strong>Automated Invoices:</strong> Customers receive an automated invoice upon
                   the completion of their purchase, detailing the items bought, the total amount,
                    and payment confirmation.
                </li>
                <li>
                  <strong>Easy Record–Keeping:</strong> The system ensures that all
                   invoices are systematically stored for both the business and customers,
                    making future reference easy.
                </li>
              </ul>
            </div>
          </section>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-md mb-2">
                Shopify Customization
              </h3>
              <p className="text-gray-300 text-sm">
                Leveraging the power of Shopify, SMbyHinaFahad integrates
                essential e–commerce features such as secure payment processing,
                user–friendly navigation, and comprehensive product management,
                tailored to meet the specific needs of the business.
              </p>
            </div>
            <div>
              <h3 className="text-md mb-2">
                Scalability and Performance
              </h3>
              <p className="text-gray-300 text-sm">
                The application was designed with scalability in mind, ensuring
                it can handle increased traffic and a growing product catalog
                without compromising on performance. Regular updates and
                maintenance ensure the platform remains efficient and secure.
              </p>
            </div>
            <div className=" rounded-xl flex justify-center items-center">
              <Image
                src="https://testweb.devxonic.com/wp-content/uploads/2024/08/SM-2-1536x864.jpg.webp"
                alt="Otobucks mockup 1"
                width={500}
                height={250}
                className="object-contain rounded-2xl"
              />
            </div>
            <div className=" rounded-xl flex items-center">
              <Image
                src="https://testweb.devxonic.com/wp-content/uploads/2024/08/Sm-3-1536x864.jpg.webp"
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
                SMbyHinaFahad stands out as a reliable and engaging e-commerce
                store, offering a unique shopping experience for those seeking
                toys, keychains, and bags. The seamless integration of essential
                features such as email notifications, live delivery status, and
                secure payment gateways makes it a preferred choice for
                customers. With a focus on innovation and customer satisfaction,
                SMbyHinaFahad continues to expand its offerings, driven by a
                commitment to excellence in e-commerce.
              </p>
            </div>
          </div>
        </div>
       </div>
      </main>
    </>
  );
}
