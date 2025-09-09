import { useState } from "react";

export default function AdminDashboard() {
  const [packages, setPackages] = useState([]);

  const addPackage = () => {
    const name = prompt("📦 اسم البكج:");
    if (!name) return;
    setPackages([...packages, { name, sub: [] }]);
  };

  const addSubPackage = (pkgIndex) => {
    const name = prompt("📂 اسم الـ Sub-package:");
    if (!name) return;
    const updated = [...packages];
    updated[pkgIndex].sub.push({ name, videos: [] });
    setPackages(updated);
  };

  const addVideo = (pkgIndex, subIndex) => {
    const url = prompt("🎥 رابط فيديو YouTube:");
    if (!url) return;
    const updated = [...packages];
    updated[pkgIndex].sub[subIndex].videos.push(url);
    setPackages(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
        ✅ EDUSpark Admin Dashboard
      </h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={addPackage}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          ➕ Add Package
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, pkgIndex) => (
          <div
            key={pkgIndex}
            className="bg-white p-5 rounded-2xl shadow-md border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              📦 {pkg.name}
            </h2>

            <button
              onClick={() => addSubPackage(pkgIndex)}
              className="bg-green-600 text-white px-3 py-2 rounded-lg mb-4 hover:bg-green-700 transition"
            >
              ➕ Add Sub-package
            </button>

            {pkg.sub.map((sub, subIndex) => (
              <div
                key={subIndex}
                className="bg-gray-50 p-3 rounded-lg mb-3 border"
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  📂 {sub.name}
                </h3>

                <button
                  onClick={() => addVideo(pkgIndex, subIndex)}
                  className="bg-purple-600 text-white px-3 py-2 rounded-lg mb-3 hover:bg-purple-700 transition"
                >
                  🎥 Add Video
                </button>

                <ul className="space-y-2">
                  {sub.videos.map((url, vidIndex) => (
                    <li key={vidIndex} className="text-blue-600 underline">
                      <a href={url} target="_blank" rel="noreferrer">
                        {url}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
