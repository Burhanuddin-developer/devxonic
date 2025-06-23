"use client";

import { FaCheckCircle, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function InterfaceDesign() {
  return (
    <div className="text-white min-h-screen py-16 px-4 md:px-20 page-section">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 section-container">
        {/* Left/Main Section */}
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-gray-400">User </span>Interface
            <span className="text-white"> Design</span>
          </h1>
          <p className="text-gray-300">
            At Devxonic, our User Interface (UI) Design services focus on
            creating visually appealing and highly functional interfaces that
            resonate with your target audience. We believe that a well-crafted
            UI is essential for a positive user experience, and our designs are
            tailored to meet your specific business goals while ensuring ease of
            use and engagement.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Service Overview</h2>
            <p className="text-gray-300 mb-6">
              Our UI Design service covers every aspect of interface creation,
              from initial concept to final implementation. We work closely with
              you to understand your brand and user needs, ensuring that every
              design element serves a purpose.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Custom UI Design",
                  desc: "We create unique and tailored user interfaces that reflect your brand’s identity and goals. Our designs are customized to fit the specific needs of your business, ensuring that your digital product stands out.",
                },
                {
                  title: "Responsive Design",
                  desc: "Our interfaces are designed to adapt seamlessly across all devices, providing a consistent and engaging user experience whether on a desktop, tablet, or mobile device.",
                },
                {
                  title: "Interactive Elements",
                  desc: "We incorporate interactive elements like buttons, sliders, and animations that enhance user engagement. These elements are thoughtfully designed to be intuitive and responsive, making interactions smooth and enjoyable.",
                },
                {
                  title: "Design System Development",
                  desc: "We develop comprehensive design systems that ensure consistency across all your digital products. This includes a set of design principles, reusable components, and guidelines that streamline future design efforts.",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <FaCheckCircle className="text-3xl md:mb-6 mb-2" />
                  <div className="flex items-start gap-2 mb-2">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-md text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 mt-6">
              Through these features, our UI Design service aims to deliver an
              interface that is not only visually appealing but also functional
              and user-centric, leading to higher engagement and satisfaction.
            </p>
          </div>
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-6">Service Benefits</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Choosing Devxonic for your UI Design needs offers numerous
              benefits, including enhanced usability, brand consistency, and
              user satisfaction. Our designs are crafted with the end-user in
              mind, ensuring that they meet both your business objectives and
              the needs of your users.
            </p>
            <ul className="list-decimal pl-6 space-y-3 text-gray-300">
              <li>
                <strong>Enhanced User Retention:</strong> Our designs are
                user-centric, making your product more engaging and increasing
                the likelihood of users returning.
              </li>
              <li>
                <strong>Consistent Brand Experience:</strong>We ensure that
                every design element aligns with your brand identity, creating a
                cohesive experience across all digital platforms.
              </li>
              <li>
                <strong>Optimized Performance:</strong>By designing lightweight
                and efficient interfaces, we help improve load times and overall
                performance, enhancing user satisfaction.
              </li>
              <li>
                <strong>Future-Proof Design:</strong>Our designs are adaptable
                and scalable, ensuring that they can evolve with your business
                and technology advancements.
              </li>
            </ul>
            <p className="mt-8">
              These benefits are integral to our approach at Devxonic, ensuring
              that your UI design not only meets the highest standards of
              quality and functionality but also provides tangible value to your
              business.
            </p>
          </section>
        </div>
          {/* Right Sidebar */}
        <div className="space-y-10">
          {/* Get a Quote */}
          <div className=" p-6 rounded-4xl border border-gray-500">
            <h3 className="text-xl font-semibold mb-4">Get a Quote</h3>
            <p className="text-gray-400 mb-5 text-sm">
              Get Your Custom Quote Today. Let’s Bring Your Vision to Life!
            </p>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border border-gray-600 rounded-3xl px-4 py-3 text-sm focus:outline-none "
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border border-gray-600 rounded-3xl px-4 py-3 text-sm focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full bg-transparent border border-gray-600 rounded-3xl px-4 py-3 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-white text-black  py-3 rounded-3xl hover:bg-gray-200 transition"
              >
                Submit Form
              </button>
            </form>
          </div>

          {/* Document Detail */}
          <div className=" p-6 rounded-4xl border border-gray-500">
            <h3 className="text-2xl  font-semibold mb-4">Document Detail</h3>
            <p className="text-md text-gray-400 mb-6">
              Aenean laoreet nunc eget est ultricies faucibus ultricies
              facilisis.
            </p>
            <div className="space-y-5 mb-4">
              <button className="md:w-45 border rounded-3xl px-2 py-3 bg-white text-black text-sm font-semibold hover:bg-[#9a9ace] transition">
                📁 Company Profile
              </button>
              <button className="w-45 border rounded-3xl px-4 py-3 bg-white text-black text-sm font-semibold hover:bg-[#9a9ace] transition">
                📄 Company Report
              </button>
            </div>
          </div>
          <div className="max-w-sm  rounded-3xl overflow-hidden text-white bg-gradient-to-t from-[#3b0087] via-[#0b0b17] border border-gray-500">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-6 mt-4">Get in Touch</h2>
              <p className="text-md text-gray-400 mb-6">
                We’d love to hear from you! Whether you have a question
              </p>

              {/* Phone */}
              <div className="flex items-start mb-8">
                <div className="p-2 rounded-4xl border border-gray-500 mr-4">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-2xl text-white">Phone Number</p>
                  <p className=" text-gray-400">+92 318 1021744</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start mb-6">
                <div className="rounded-4xl border border-gray-500 p-2 mr-4">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-2xl text-white">Email Address</p>
                  <p className=" text-gray-400">contact@testweb.devxonic.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-gray-400">User</span> Research
          </h1>
          <p className="text-gray-300">
            At Devxonic, our User Research service is the foundation of creating
            effective, user-centered designs. By deeply understanding your
            users’ needs, behaviors, and pain points, we ensure that your
            product not only meets but exceeds user expectations. our User
            Research service is the foundation of creating effective,
            user-centered designs. By deeply understanding your users’ needs,
            behaviors, and pain points, we ensure that your product not only
            meets but exceeds user expectations. Our research-driven approach
            provides valuable insights that guide every stage of the design
            process, leading to more intuitive and impactful user experiences.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Service Overview</h2>
            <p className="text-gray-300 mb-6">
              Our User Research service covers a comprehensive range of
              methodologies to gather actionable insights about your target
              audience. We employ both qualitative and quantitative research
              techniques to ensure a holistic understanding of your users.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "User Interviews",
                  desc: "We conduct in-depth interviews with your target audience to uncover their motivations, challenges, and needs. This direct feedback provides valuable insights that inform design decisions and helps create products that truly resonate with users.",
                },
                {
                  title: "Surveys and Questionnaires",
                  desc: "We design and distribute targeted surveys to gather quantitative data from a larger audience. This approach allows us to identify trends and patterns in user behavior, providing a broader understanding of user preferences.",
                },
                {
                  title: "Usability Testing",
                  desc: "We perform usability tests with real users to evaluate the effectiveness of your product's interface. By observing how users interact with your product, we identify pain points and areas for improvement, ensuring a more intuitive and user-friendly design.",
                },
                {
                  title: "Competitive Analysis",
                  desc: "We analyze your competitors to understand their strengths and weaknesses from a user perspective. This insight helps us identify opportunities for differentiation and improvement in your product's design.",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <FaCheckCircle className="text-3xl md:mb-6 mb-2" />
                  <div className="flex items-start gap-2 mb-2">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-md text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 mt-6">
              By leveraging these research methodologies, we ensure that the
              design process is informed by a deep understanding of your users,
              leading to more effective and satisfying user experiences.
            </p>
          </div>
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-6">Service Benefits</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Our User Research service provides numerous benefits that help
              optimize your product for success. By basing design decisions on
              concrete data, we help you create user-centric products that meet
              the needs of your audience.
            </p>
            <ul className="list-decimal pl-6 space-y-3 text-gray-300">
              <li>
                <strong>Informed Design Decisions:</strong> Research-driven
                insights guide the design process, ensuring that every decision
                is based on actual user needs and behaviors..
              </li>
              <li>
                <strong>Reduced Development Risks:</strong> By identifying
                potential issues early through user testing, we help minimize
                costly revisions and reduce the risk of design failures.
              </li>
              <li>
                <strong>Enhanced User Satisfaction:</strong>Understanding user
                needs allows us to create products that are more intuitive and
                enjoyable, leading to higher user satisfaction and loyalty.
              </li>
              <li>
                <strong>Competitive Advantage:</strong> By analyzing
                competitors, we identify gaps and opportunities, giving your
                product a unique edge in the market.
              </li>
            </ul>
            <p className="mt-8">
              Through our User Research service, Devxonic empowers you to create
              products that not only meet but exceed user expectations,
              resulting in higher engagement, satisfaction, and long-term
              success.
            </p>
          </section>
        </div>
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-gray-400">Wireframing</span> and
            <span className="text-white"> Prototyping</span>
          </h1>
          <p className="text-gray-300">
            At Devxonic, our Wireframing and Prototyping service is pivotal in
            transforming ideas into tangible, user-centered designs. This
            process allows us to visualize the structure and functionality of
            your digital product before full-scale development begins. By
            iterating on wireframes and interactive prototypes, we ensure that
            the final product is well-structured, intuitive, and aligned with
            user needs and business goals.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Service Overview</h2>
            <p className="text-gray-300 mb-6">
              Our Wireframing and Prototyping service encompasses a range of
              techniques to bring your product vision to life in a detailed,
              low-risk environment. This service is crucial for testing
              concepts, validating ideas, and refining designs based on
              feedback..
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Low-Fidelity Wireframes",
                  desc: "We create basic, low-fidelity wireframes to outline the core structure and layout of your product. These wireframes focus on functionality and user flow, providing a clear blueprint for the design process.",
                },
                {
                  title: "High-Fidelity Prototypes",
                  desc: "Our team develops high-fidelity prototypes that mimic the final product's appearance and functionality. These prototypes are interactive and allow for user testing, providing valuable feedback on design elements and usability.",
                },
                {
                  title: "Interactive Mockups",
                  desc: "We design interactive mockups that simulate user interactions within the product. This allows stakeholders to experience the product's look and feel, ensuring that the design aligns with expectations before development begins.",
                },
                {
                  title: "User Testing and Iteration",
                  desc: "We conduct user testing on prototypes to gather real-world feedback. This iterative process helps identify potential issues and refine the design, ensuring that the final product is user-friendly and effective.",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <FaCheckCircle className="text-3xl md:mb-6 mb-2" />
                  <div className="flex items-start gap-2 mb-2">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-md text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 mt-6">
              Through these features, our Wireframing and Prototyping service
              ensures that your product is well-designed, user-focused, and
              ready for successful development.
            </p>
          </div>
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-6">Service Benefits</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Our Wireframing and Prototyping service offers several key
              benefits that streamline the design process and enhance the final
              product’s quality.
            </p>
            <ul className="list-decimal pl-6 space-y-3 text-gray-300">
              <li>
                <strong>Risk Reduction:</strong> Early-stage visualization and
                testing reduce the risk of costly design and development errors.
              </li>
              <li>
                <strong>Consistent Brand Experience:</strong> Quick
                modifications to wireframes and prototypes allow for rapid
                iteration and refinement, speeding up the design process.
              </li>
              <li>
                <strong>Stakeholder Alignment:</strong> Prototypes provide a
                clear, tangible representation of the product, helping align all
                stakeholders on the project's vision and goals.
              </li>
              <li>
                <strong>Improved User Experience:</strong> User testing of
                prototypes ensures that the final product is intuitive,
                user-friendly, and meets user needs effectively.
              </li>
            </ul>
            <p className="mt-8">
              These benefits underscore the importance of Wireframing and
              Prototyping in the design process, helping to create products that
              are both functional and enjoyable to use. At Devxonic, we use
              these tools to ensure your digital product is primed for success
              from the very start.
            </p>
          </section>
        </div>
      
      </div>
    </div>
  );
}
