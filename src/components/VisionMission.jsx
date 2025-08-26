const VisionMission = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="hero-section rounded-lg mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Company</h1>
          <p className="text-xl">Leading the industry since 2010</p>
        </div>
      </div>
      
      {/* Vision Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Our Vision</h2>
        <div className="bg-blue-100 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <p className="text-lg text-gray-800 text-center">
            Menjadi inovator terkemuka di industri kami, mengubah ide menjadi solusi yang memberdayakan bisnis dan memperkaya kehidupan secara global.
            Kami berusaha menciptakan masa depan di mana teknologi melayani kemanusiaan dengan cara yang paling berkelanjutan dan etis.
          </p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Our Mission</h2>
        <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <ul className="list-disc list-inside text-lg text-gray-800 space-y-4">
            <li>Memberikan nilai luar biasa kepada pelanggan kami melalui produk dan layanan inovatif</li>
            <li>Mendorong budaya pembelajaran berkelanjutan, kolaborasi, dan keunggulan</li>
            <li>Mempertahankan standar integritas dan praktik bisnis etis yang tertinggi</li>
            <li>Menciptakan pertumbuhan yang berkelanjutan bagi pemangku kepentingan kami sambil memberikan dampak positif pada komunitas kami</li>
            <li>Menghargai keberagaman dan inklusi sebagai pendorong kreativitas dan inovasi</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default VisionMission