export default function StudentDashboard() {
  const samplePackages = [
    {
      name: "Package 1",
      sub: [
        {
          name: "Sub 1",
          videos: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-green-600 text-center mb-8">
        🎓 Student Dashboard
      </h1>

      {samplePackages.map((pkg, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow-lg mb-6 border"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            📦 {pkg.name}
          </h2>

          {pkg.sub.map((sub, j) => (
            <div key={j} className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                📂 {sub.name}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {sub.videos.map((url, k) => (
                  <iframe
                    key={k}
                    src={url.replace("watch?v=", "embed/")}
                    title={`video-${k}`}
                    className="w-full h-64 rounded-xl shadow"
                    allowFullScreen
                  ></iframe>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
