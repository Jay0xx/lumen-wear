import Hero from '@/components/Hero';
import NewArrivals from '@/components/NewArrivals';
import ShopByCategory from '@/components/ShopByCategory';
import OurCraft from '@/components/OurCraft';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <NewArrivals />
      <ShopByCategory />
      <OurCraft />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
