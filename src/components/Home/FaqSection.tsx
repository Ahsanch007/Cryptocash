'use client';
import React, { useEffect, useState } from 'react';
import Accordion from '../ui/Accordion';
import Aos from 'aos';

type Tab = {
  id: number;
  name: string;
  active: boolean;
};

type ContentItem = {
  title: string;
  content: string;
};

type ContentData = {
  [key: number]: ContentItem[];
};

const faqTabs: Tab[] = [
  { id: 1, name: 'General', active: true },
  { id: 2, name: 'Pre-ICO & ICC', active: false },
  { id: 3, name: 'ICO Tokens', active: false },
  { id: 4, name: 'Legal', active: false },
];

const contentData: ContentData = {
  1: [
    {
      title: 'What is cryptocurrency?',
      content: 'Cryptocurrency is a digital or virtual currency that uses cryptography for security and operates independently of a central authority.',
    },
    {
      title: 'Which cryptocurrency is best to buy today?',
      content: 'The best cryptocurrency to buy depends on your investment goals, market trends, and risk tolerance. Bitcoin and Ethereum are popular choices.',
    },
    {
      title: 'How about day trading crypto?',
      content: 'Day trading crypto involves buying and selling cryptocurrencies within a short timeframe to profit from price fluctuations. It requires careful analysis and risk management.',
    },
    {
      title: 'When to sell a cryptocurrency?',
      content: 'Selling depends on your financial goals. Consider selling when the price meets your target, to secure profits, or to cut losses if the market moves against you.',
    },
  ],
  2: [
    {
      title: 'How does one acquire bitcoins?',
      content: 'You can acquire bitcoins by purchasing them on cryptocurrency exchanges, accepting them as payment, or mining them using specialized hardware.',
    },
    {
      title: 'Can I make money with Bitcoin?',
      content: 'Yes, you can make money with Bitcoin through trading, long-term investing, or mining. However, it carries significant risk due to market volatility.',
    },
    {
      title: 'What happens when bitcoins are lost?',
      content: 'Lost bitcoins cannot be recovered if the private key is lost. This is why it is important to securely store your wallet credentials.',
    },
    {
      title: 'Who controls the Bitcoin network?',
      content: 'Bitcoin is decentralized and is not controlled by any single entity. It operates on a peer-to-peer network of users and miners.',
    },
  ],
  3: [
    {
      title: 'How are bitcoins created?',
      content: 'Bitcoins are created through mining, a process where miners solve complex mathematical problems to validate transactions and add them to the blockchain.',
    },
    {
      title: 'Why do bitcoins have value?',
      content: 'Bitcoins have value because of their scarcity, utility, decentralized nature, and the trust and adoption by users and investors.',
    },
    {
      title: "What determines bitcoin's price?",
      content: 'Bitcoin’s price is determined by supply and demand dynamics, market sentiment, regulatory news, and adoption by individuals and institutions.',
    },
    {
      title: 'Can bitcoins become worthless?',
      content: 'Bitcoin’s value depends on market trust. If trust or adoption declines drastically, its value could significantly decrease, potentially becoming worthless.',
    },
  ],
  4: [
    {
      title: 'Is Bitcoin legal?',
      content: 'Bitcoin’s legality varies by country. Some countries accept it as legal tender, while others have banned or restricted its use.',
    },
    {
      title: 'Is Bitcoin useful for illegal activities?',
      content: 'While Bitcoin has been used for illegal activities, its transparent blockchain makes it easier to track transactions compared to cash.',
    },
    {
      title: 'Can Bitcoin be regulated?',
      content: 'Governments can regulate Bitcoin by implementing laws on exchanges, taxation, and usage, but they cannot control the decentralized network itself.',
    },
    {
      title: 'What about Bitcoin and taxes?',
      content: 'Bitcoin is often subject to capital gains tax. Tax rules depend on your country, and you should consult local laws or a tax advisor.',
    },
  ],
};

export const FaqSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleTabClick = (id: number): void => setActiveTab(id);

  return (
    <div className="py-[30px] lg:py-[100px] bg-white" id="faq">
      <div className="px-[15px] max-w-[1170px] mx-auto">
        <div className="text-center">
          <h3
            className="text-[26px] text-[#0e082c] font-bold mb-[20px]"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            Frequently Asked Questions
          </h3>
          <p
            className="mb-[30px] max-w-[555px] mx-auto"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            Questions and Answers (Q&A), are listed questions and answers, all
            supposed to be commonly asked in some context.
          </p>
        </div>
        <div className="mt-5 max-w-[750px] mx-auto">
          <ul
            className="flex justify-center p-0 m-0 list-none"
            data-aos="fade-up"
            data-aos-duration="1900"
          >
            {faqTabs.map((item) => (
              <li
                key={item.id}
                className="px-[25px] text-[10px] md:text-[18px] border-r border-[#193f88]"
              >
                <button
                  onClick={() => handleTabClick(item.id)}
                  className={`${
                    activeTab === item.id
                      ? 'text-[#ff69c9]'
                      : 'text-[#193f88]'
                  } hover:text-[#ff69c9] cursor-pointer transition-all`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="faq-tabs-content mt-[30px] transition-all duration-300 ease-in-out"
          >
            <Accordion items={contentData[activeTab]} />
          </div>
        </div>
      </div>
    </div>
  );
};
