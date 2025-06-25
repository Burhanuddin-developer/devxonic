import Image from "next/image";
export default function ButtsappMedia() {
  return (
    <>
   <main className="page-section">
      <div className="section-container ">
         <section>
        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
        <p className="text-gray-300 leading-relaxed">
          Buttsapp Media needed a sleek, modern portfolio website to showcase
          its wide range of media services, including branding, content
          creation, and digital marketing. To achieve this, we developed a
          WordPress-based website using a premium theme that provided the
          perfect blend of aesthetics and functionality. The site was customized
          to reflect Buttsapp Media’s brand identity while maintaining an
          intuitive user experience.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-6 mt-10">Services Overview</h2>
        <ol className="space-y-6 list-decimal list-inside text-gray-200">
          <li>
            <strong className="text-white">Theme Customization:</strong> The
            chosen WordPress theme was meticulously customized to align with
            Buttsapp Media’s branding. This included adjustments to the color
            scheme, typography, and layout to ensure consistency with the
            company’s visual identity.
          </li>

          <li>
            <strong className="text-white">Responsive Design:</strong> The
            website was designed to be fully responsive, ensuring seamless
            access across all devices, from desktops to smartphones. This
            adaptability is crucial for engaging Buttsapp Media’s diverse client
            base, no matter how they choose to interact with the site.
          </li>

          <li>
            <strong className="text-white">Content Management:</strong> –
            Leveraging WordPress’s powerful content management capabilities, we
            set up the website to allow Buttsapp Media to easily update and
            manage their portfolio and blog content. This ensures that the
            website remains fresh and relevant without requiring extensive
            technical knowledge.
          </li>

          <li>
            <strong className="text-white">SEO Optimization:</strong> The
            website was optimized for search engines to enhance visibilit and
            drive organic traffic. We implemented best practices in SEO,
            including meta tags, optimized images, and keyword-rich content, to
            ensure the site ranks well in search results.
          </li>
        </ol>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-6 mt-10">
          Additional Services
        </h2>
        <ol className="space-y-6 list-disc list-inside text-gray-200">
          <li>
            <strong className="text-white">Performance Optimization::</strong>
            Ensured fast load times and smooth navigation by optimizing images,
            leveraging caching, and minimizing code.
          </li>

          <li>
            <strong className="text-white">Security Implementation:</strong>
            Installed essential security plugins and set up monitoring tools to
            protect the site from potential threats.
          </li>

          <li>
            <strong className="text-white">Ongoing Maintenance:</strong> –
            Provided ongoing support and maintenance services to ensure the
            website remains secure, up-to-date, and fully functional.
          </li>
        </ol>
      </section>
      <section className="md:mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2  mb-10">
          <div className=" rounded-xl flex justify-center items-center">
            <Image
              src="https://testweb.devxonic.com/wp-content/uploads/2024/08/1-1536x864.jpg.webp"
              alt="Otobucks mockup 1"
              width={500}
              height={250}
              className="object-contain rounded-2xl"
            />
          </div>
          <div className=" rounded-xl flex items-center">
            <Image
              src="https://testweb.devxonic.com/wp-content/uploads/2024/08/3-1536x864.jpg.webp"
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
              The Buttsapp Media portfolio website is a testament to Devxonic’s
              ability to deliver a polished, professional online presence for
              creative agencies. By combining a robust WordPress theme with
              customizations tailored to Buttsapp Media’s specific needs, we
              created a platform that not only showcases their services
              effectively but also drives engagement and business growth.
            </p>
          </div>
        </div>
      </section>
      </div>
   </main>
    </>
  );
}
