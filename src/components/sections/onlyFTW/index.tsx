import Image from "next/image";
export default function OnlyFTW() {
  return (
    <>
      <main className=" text-white px-6 md:px-16 py-12 space-y-16 min-h-screen page-section">
        <div className="section-container p-10">
          <section>
            <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              At its core is a digital wallet that simplifies how users manage
              their cashback and social earnings. Built with a focus on user
              engagement, personalization, and real-time functionality, onlyFTW
              goes beyond traditional financial apps by aligning with users’
              daily online habits. In an economy like Pakistan’s, where
              financial tools need to be more inclusive and empowering, onlyFTW
              offers a much-needed solution.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-6">
              Wallet Screen Overview
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The digital wallet screen is the beating heart of onlyFTW. It
              functions as a centralized hub where users can view their
              earnings, cashback, and engagement-based rewards in one sleek,
              intuitive interface. Whether it’s cashback from purchases or
              earnings from social activity, the wallet presents it all with
              real-time updates and visual cues that resonate with Gen Z users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 mt-10">
              Services Overview
            </h2>
            <ol className="space-y-6 list-disc  text-gray-200">
              <li>
                <strong className="text-white">
                  Social-Earnings Integration
                </strong>
                <br /> Users can track earnings based on their social
                interactions, like posts, shares, or engagement metrics. This
                turns online presence into measurable, financial benefits.
              </li>

              <li>
                <strong className="text-white">
                  Real-Time Cashback Updates
                  <br />{" "}
                </strong>{" "}
                Instant notifications and dynamic visuals alert users when new
                cashback or rewards have been added to their wallet.
              </li>

              <li>
                <strong className="text-white">
                  Visually-Driven Interface
                </strong>{" "}
                <br />
                The UI is designed with modern design principles—bold visuals,
                clean layouts, and interactive elements to keep Gen Z users
                engaged.
              </li>

              <li>
                <strong className="text-white">
                  Custom Tracking and Insights
                </strong>{" "}
                <br />
                Users can personalize their wallet dashboard with filters or
                views that show how and where they’ve earned, making it easy to
                analyze and optimize their activity.
              </li>
            </ol>
          </section>

          <section>
            <div className="grid grid-cols-1 md:grid-cols-2  mb-10 mt-8">
              <div className=" rounded-xl flex justify-center items-center">
                <Image
                  src="https://testweb.devxonic.com/wp-content/uploads/2025/05/1-2-1536x864-1.webp"
                  alt="Otobucks mockup 1"
                  width={500}
                  height={250}
                  className="object-contain rounded-2xl"
                />
              </div>
              <div className=" rounded-xl flex justify-center items-center">
                <Image
                  src="https://testweb.devxonic.com/wp-content/uploads/2025/05/2-2-1536x864.png.webp"
                  alt="Otobucks mockup 2"
                  width={500}
                  height={250}
                  className="object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* Text Content */}
            <h2 className="text-2xl md:text-2xl  mb-6">Additional Services</h2>
            <ol className="space-y-6 list-disc  text-gray-200">
              <li>
                <strong className="text-white">
                  Empowers Social Influence
                </strong>
                <br /> Users can track earnings based on their social
                interactions, like posts, shares, or engagement metrics. This
                turns online presence into measurable, financial benefits.
              </li>

              <li>
                <strong className="text-white">
                  Financial Inclusion in a Tough Economy
                  <br />{" "}
                </strong>{" "}
                Especially in inflation-affected regions like Pakistan, onlyFTW
                supports users by offering a new stream of income via digital
                payments.
              </li>

              <li>
                <strong className="text-white">Tailored for Gen Z</strong>{" "}
                <br />
                With features designed for instant gratification, interactivity,
                and high visual appeal, onlyFTW is perfectly aligned with the
                expectations of its target audience.
              </li>

              <li>
                <strong className="text-white">
                  A Social-First Fintech Approach
                </strong>{" "}
                <br />
                Unlike traditional digital wallets, onlyFTW fuses fintech with
                the social media world, creating a fresh, hybrid category of
                application.
              </li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 mt-10">Conclusion</h2>
            <p className="text-gray-300 leading-relaxed">
              onlyFTW reimagines the concept of a digital wallet by putting
              social power in the user’s hands—literally. Through an engaging,
              intuitive, and socially-driven interface, it provides real
              financial rewards for digital actions. By targeting the
              preferences and habits of Gen Z, onlyFTW sets a new benchmark for
              how fintech and social influence can work hand-in-hand. In a time
              when financial freedom and digital identity matter more than ever,
              onlyFTW offers the perfect blend of both.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
