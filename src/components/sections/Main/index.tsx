

export default function Main() {
  return (
    <>
      <main className="relative min-h-screen bg-gradient-to-t from-[#3b0087] via-[#0b0b17]  flex items-center justify-center px-6 ">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
          <div className='mb-30'>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-snug mb-6">
              Your Partner in <br />
              <span className="text-gray-300">Mobile, Desktop,</span><br />
              <span className="text-white">and Web App</span><br />
              Development
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Devxonic delivers high-quality mobile app development, desktop software solutions, and dynamic web apps.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-black py-3 px-6 rounded-full text-lg font-medium shadow-md hover:scale-105 transition">
                Get Started
              </button>
              <button className="flex items-center text-white border border-white py-3 px-6 rounded-full text-lg font-medium hover:bg-white hover:text-black transition">
                <span>Contact Us</span>
              </button>
            </div>
          </div>
          <div className="relative w-full mb-40">
            <img
              src="https://testweb.devxonic.com/wp-content/uploads/2024/08/Asset-2.png.webp"
              alt="3D Mesh"
              className="object-contain w-full "
            />
          </div>
        </div>
      </main>
    </>
  )
}
