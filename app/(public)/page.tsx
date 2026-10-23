import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#DAE5F6] selection:bg-[#0062E0] selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center pb-6 sm:pb-10">
        {/* Hero Section */}
        <Hero />

        {/* Client Logos Section */}
        <ClientLogos />

        {/* Accessible hidden anchor targets for nav links */}
        <div id="layanan" className="sr-only" tabIndex={-1} aria-hidden="true" />
        <div id="portofolio" className="sr-only" tabIndex={-1} aria-hidden="true" />
        <div id="tentang-kami" className="sr-only" tabIndex={-1} aria-hidden="true" />
        <div id="tim" className="sr-only" tabIndex={-1} aria-hidden="true" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
