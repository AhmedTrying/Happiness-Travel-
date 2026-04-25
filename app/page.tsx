import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import FeaturedPackages from '@/components/home/FeaturedPackages';
import FaresPreview from '@/components/home/FaresPreview';
import WhyUs from '@/components/home/WhyUs';
import CTA from '@/components/home/CTA';

export default function HomePage() {
  return (
    <div>
      <Navbar active="home" />
      <Hero />
      <Services />
      <FeaturedPackages />
      <FaresPreview />
      <WhyUs />
      <CTA />
      <Footer />
    </div>
  );
}
