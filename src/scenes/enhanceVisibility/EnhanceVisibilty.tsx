import React from 'react';
import {Text} from '@/core-ui/text/Text';
import './enhanceVisibility.css';

type Enhance = {
  image: string;
  detail: string;
};

const enhance = [
  {
    image: 'https://placehold.co/250',
    detail: '30 Spot Penayangan Iklan Digital',
  },
  {
    image: 'https://placehold.co/250',
    detail: '108 Kali Penayangan Setiap Hari (6 AM - 3 PM)',
  },
  {
    image: 'https://placehold.co/250',
    detail: '145.000 Pengunjung Pasar/Hari',
  },
];

export default function Enhance() {
  return (
    <div className="enhance-container">
      <Text size="header" content="WUJUDKAN VISIBILITAS BRAND ANDA" />
      <div className="enhance-specifications">
        {enhance.map((enhances, index) => (
          <div key={index} className="enhance-specification">
            <div className="enhance-img">
              <img src={enhances.image} />
            </div>
            <div className="enhance-detail">
              <Text size="normal" content={enhances.detail} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

