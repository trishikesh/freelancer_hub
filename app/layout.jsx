import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import '@/app/globals.css';
import '@/app/components.css';

export const metadata = {
  title: 'Freelancer Hub - Digital Marketing Agency',
  description: 'We create digital solutions that grow your business. Google Ads, GMB Management, Local SEO, Social Media Management.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
