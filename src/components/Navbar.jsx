
'use client';

import { useState } from 'react';
import Button from "@/components/ui/Button";
import { useT } from "@/i18n/client";
import Link from 'next/link';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import VideoPlayer from './VideoPlayer';


export default function Navbar() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [toggleEnabled, setToggleEnabled] = useState(false);

  const toggleSwitch = () => {
    setToggleEnabled(!toggleEnabled);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100">
      {/* Header */}
      <header className="w-full h-20 sticky top-0 z-100 shadow-sm bg-white">
        <div className="max-w-7xl h-20 mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo/pms.svg" alt="Logo" width={57} height={57} />
            <div>
              <h1 className="text-lg text-[var(--color-primary)] font-semibold primary">{t('pharmacy')}</h1>
              <p className="text-sm text-gray-500 -mt-1">{t('management_system')}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2.5 text-sm font-semibold text-gray-700">
            <div className='p-3'>
              <Link href="/" className="hover:text-red-600 transition">{t('home')}</Link>
            </div>
            <div className="relative p-3">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-1 hover:text-red-600 transition"
              >
                <span>{t('service')}</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              {open && (
                <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-md z-50 px-4 py-2 text-sm">
                  <Link href="/services/1" className="block py-1 hover:text-red-600">{t('service_one')}</Link>
                  <Link href="/services/2" className="block py-1 hover:text-red-600">{t('service_two')}</Link>
                </div>
              )}
            </div>
            <div className='p-3'>
              <Link href="/about" className="hover:text-red-600 transition">{t('about_us')}</Link>
            </div>
            <div className='p-3'>
              <Link href="/contact" className="hover:text-red-600 transition">{t('contact')}</Link>
            </div>
          </nav>

          <div>
            <Button
              as='Link'
              href="/get-started"
              icon={<ArrowUpRightIcon className="w-4 h-4" />}
              iconPosition='right'
              className='w-[146px] h-[48px] px-6 py-3 text-base font-semibold leading-[150%] tracking-[-0.02em] text-center rounded-lg bg-[#AB323C] text-white hover:bg-[#9A2D36] transition-colors gap-2.5'
            >
              <span>{t('start')}</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-16 pt-[150px]">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with Text */}
          <div className="text-center mb-8">
            <div className="text-black text-[72px] mb-4 leading-[100%] font-medium text-center font-['Noto_Sans_Bengali_UI'] w-[1030px] h-[190px] mx-auto flex items-center justify-center">
              {t('manage_pharmacy')}
            </div>

            <p className="text-[#494A57] text-[20px] leading-[100%] font-normal text-center font-['Noto_Sans_Bengali_UI'] w-[512px] h-[27px] mx-auto mb-8 flex items-center justify-center">
              {t('all_in_one_app')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                variant="primary"
                size="md"
                icon={<ArrowRightIcon className="w-4 h-4" />}
                iconPosition="right"
                className="w-[219px] h-[48px] px-6 py-3 text-base font-semibold leading-[150%] tracking-[-0.02em] text-center rounded-xl bg-[#AB323C] text-white hover:bg-[#9A2D36] transition-colors gap-2.5"
              >
                {t('start_free_trail')}
              </Button>
              <Button
                variant="ghost"
                size="md"
                className="w-[128px] h-[48px] px-6 py-3 text-base font-semibold leading-[150%] tracking-[-0.02em] text-center rounded-xl bg-[#F8F8F8] text-[#494A57] hover:bg-gray-200 transition-colors gap-2.5 font-['Inter']"
              >
                {t('watch_demo')}
              </Button>
            </div>
          </div>

          {/* Video Demo Section */}
          <div className="flex items-center justify-center relative">
            <VideoPlayer />
          </div>
        </div>
      </main>
    </div>
  );
}





// 'use client';
//
// import { useState } from 'react';
// import Button from "@/components/ui/Button";
// import { useT } from "@/i18n/client";
// import Link from 'next/link';
// import { ChevronDownIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid';
// import Image from 'next/image';
// import { cn } from "@/lib/utils";
//
// import Heading from "@/components/typography/Heading";
// import SubHeading from "@/components/typography/SubHeading";
// import Text from "@/components/typography/Text";
// import SectionCardLayout from "@/components/SectionCard/SectionCardLayout";
//
// export default function Navbar() {
//   const t = useT();
//   const [open, setOpen] = useState(false);
//   const [toggleEnabled, setToggleEnabled] = useState(false);
//
//   const toggleSwitch = () => {
//     setToggleEnabled(!toggleEnabled);
//   };
//
//   return (
//       <SectionCardLayout className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 font-sans">
//
//         {/* Header */}
//         <header className="w-full h-20 sticky top-0 z-50 shadow-sm bg-white dark:bg-black">
//           <div className="max-w-7xl h-20 mx-auto px-4 py-3 flex items-center justify-between">
//             {/* Logo */}
//             <div className="flex items-center space-x-2">
//               <Image src="/logo/pms.svg" alt="Logo" width={32} height={32} />
//               <div>
//                 <Heading className="text-sm text-[var(--color-primary)] font-semibold">
//                   {t('pharmacy')}
//                 </Heading>
//                 <SubHeading className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
//                   {t('management_system')}
//                 </SubHeading>
//               </div>
//             </div>
//
//             {/* Navigation */}
//             <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700 dark:text-gray-200">
//               <Link href="/" className="hover:text-red-600 transition">{t('home')}</Link>
//
//               <div className="relative">
//                 <button
//                     onClick={() => setOpen(!open)}
//                     className="flex items-center space-x-1 hover:text-red-600 transition"
//                 >
//                   <span>{t('service')}</span>
//                   <ChevronDownIcon className="w-4 h-4" />
//                 </button>
//                 {open && (
//                     <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border rounded shadow-md z-50 px-4 py-2 text-sm">
//                       <Link href="/services/1" className="block py-1 hover:text-red-600">{t('service_one')}</Link>
//                       <Link href="/services/2" className="block py-1 hover:text-red-600">{t('service_two')}</Link>
//                     </div>
//                 )}
//               </div>
//
//               <Link href="/about" className="hover:text-red-600 transition">{t('about_us')}</Link>
//               <Link href="/contact" className="hover:text-red-600 transition">{t('contact')}</Link>
//             </nav>
//
//             <div>
//               <Button
//                   as='Link'
//                   href="/get-started"
//                   icon={<ArrowUpRightIcon className="w-4 h-4" />}
//                   iconPosition='right'
//               >
//                 {t('start')}
//               </Button>
//             </div>
//           </div>
//         </header>
//
//         {/* Hero Section */}
//         <main className="px-6 py-16">
//           <div className="max-w-6xl mx-auto">
//             {/* Hero Text */}
//             <div className="text-center mb-8">
//               <Heading className="text-[80px] leading-[80px] font-normal font-[KalindiOMJ] mb-4">
//                 {t('manage_pharmacy')}
//               </Heading>
//
//               <SubHeading className="text-gray-600 dark:text-gray-300 mb-8">
//                 {t('all_in_one_app')}
//               </SubHeading>
//
//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//                 <Button
//                     variant="primary"
//                     size="md"
//                     icon={<ArrowUpRightIcon className="w-4 h-4" />}
//                     iconPosition="right"
//                 >
//                   {t('start_free_trail')}
//                 </Button>
//                 <Button
//                     variant="ghost"
//                     size="md"
//                     className="text-gray-600 hover:text-gray-800 dark:text-gray-300"
//                 >
//                   {t('watch_demo')}
//                 </Button>
//               </div>
//             </div>
//
//             {/* Video Demo Card */}
//             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
//               <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-16 flex items-center justify-center min-h-[500px] relative">
//                 <div className="text-center">
//                   <Heading className="text-5xl md:text-6xl font-light text-gray-600 dark:text-gray-200 mb-8">
//                     {t('outlook')}
//                   </Heading>
//
//                   {/* Toggle Switch */}
//                   <div className="flex items-center justify-center">
//                     <button
//                         onClick={toggleSwitch}
//                         className={cn(
//                             "w-16 h-8 rounded-full p-1 transition-all duration-300 ease-in-out",
//                             toggleEnabled ? "bg-blue-500" : "bg-gray-400"
//                         )}
//                     >
//                       <div
//                           className={cn(
//                               "w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out",
//                               toggleEnabled ? "translate-x-8" : "translate-x-0"
//                           )}
//                       />
//                     </button>
//                   </div>
//                 </div>
//
//                 {/* Pause Control */}
//                 <div className="absolute bottom-6 right-6">
//                   <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 transition-colors">
//                     <div className="flex space-x-1">
//                       <div className="w-1 h-4 bg-gray-600 rounded" />
//                       <div className="w-1 h-4 bg-gray-600 rounded" />
//                     </div>
//                     <Text className="text-sm font-medium">{t('pause')}</Text>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//
//       </SectionCardLayout>
//   );
// }

