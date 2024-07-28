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
      <div className='flex flex-col md:flex-row gap-10 md:ml-[100px] p-7 items-center md:items-start'>
          <div className='md:order-1 order-2 flex flex-col'>
            <ContactCard name='Kavita Singh' mobile='+91 999999999' email='ksingh@ycce.edu' />
            <Link href="/contact/site"><SiteCard /></Link>
            <Link href="/contact/stayin"><HotelCard /></Link>
          </div>
        <div className='flex md:order-2 order-1'>
          <DynamicMap />
        </div>
      </div>
    </MainContainer>
  );
}

export default Page;
