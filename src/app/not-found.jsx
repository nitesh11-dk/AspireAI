export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Oops! Page not found 🐶</p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
      >
        Go Home
      </a>
    </div>
  );
}
