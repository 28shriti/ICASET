import dynamic from 'next/dynamic';
import MainContainer from '../components/MainContainer';
import ContactCard from '../components/ContactCard';
import SiteCard from '../components/SiteCards';
import HotelCard from '../components/HotelCard';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us',
  description: 'Contact us with the given contact info on this page.'
}

const DynamicMap = dynamic(() => import('../components/Map'), { ssr: false });

const Page = () => {
  return (
    <MainContainer>
      <div className='flex flex-col lg:flex-row gap-20 py-7 px-20 items-center lg:items-start'>
          <div className='lg:order-1 order-2 flex flex-col'>
            <ContactCard name='Kavita Singh' mobile='+91 999999999' email='act_phase1@outlook.com' />
            <Link href="/contact/site"><SiteCard /></Link>
            <Link href="/contact/stayin"><HotelCard /></Link>
          </div>
        <div className='flex lg:order-2 order-1 w-full h-[500px] rounded-2xl overflow-hidden'>
          <DynamicMap />
        </div>
      </div>
    </MainContainer>
  );
}

export default Page;
