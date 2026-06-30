'use client';

import { useState } from 'react';
import { Download } from 'lucide-react';

// ─── Royal Indian Cuisine ───────────────────────────────────────────────────

const royalIndian = [
  {
    id: 'veg-starters',
    label: 'Veg Starters',
    type: 'list',
    items: [
      { name: 'Veg Hara Bhara Kabab', price: 'Rs 315' },
      { name: 'Veg Seekh Kabab', price: 'Rs 315' },
      { name: 'Tandoori Chatpata Kabab', price: 'Rs 315' },
      { name: 'Aloo Gobi Achari Tikka', price: 'Rs 315' },
      { name: 'Tandoori Mushroom', price: 'Rs 315' },
      { name: 'Veg Cheese Kabab', price: 'Rs 345' },
      { name: 'Veg Soya Cheese Kabab', price: 'Rs 345' },
      { name: 'Tandoori Soya Chaap', price: 'Rs 345' },
      { name: 'Veg Goulari Kabab With Papdi Chat', price: 'Rs 375' },
      { name: 'Dahi Ka Sholay Kabab', price: 'Rs 375' },
      { name: 'Tandoori Veg Platter', price: 'Rs 795' },
    ],
  },
  {
    id: 'paneer-starters',
    label: 'Paneer Starters',
    type: 'list',
    items: [
      { name: 'Paneer Tikka', price: 'Rs 345' },
      { name: 'Hariyali Tikka', price: 'Rs 345' },
      { name: 'Paneer Malai Tikka', price: 'Rs 345' },
      { name: 'Paneer Seekh Kabab', price: 'Rs 345' },
      { name: 'Paneer Pepper Malai Kabab', price: 'Rs 345' },
      { name: 'Paneer Cheese Stuffed Tikka', price: 'Rs 425' },
    ],
  },
  {
    id: 'chicken-starters',
    label: 'Chicken Starters',
    type: 'list',
    items: [
      { name: 'Chicken Tikka', price: 'Rs 365' },
      { name: 'Tandoori Chicken (Half)', price: 'Rs 425' },
      { name: 'Tandoori Chicken (Whole)', price: 'Rs 775' },
      { name: 'Chicken Malai Tikka', price: 'Rs 365' },
      { name: 'Hariyali Chicken Tikka', price: 'Rs 365' },
      { name: 'Lahsuni Kabab', price: 'Rs 365' },
      { name: 'Kalmi Kabab', price: 'Rs 365' },
      { name: 'Tangdi Kabab', price: 'Rs 365' },
      { name: 'Tandoori Chicken Leg Piece', price: 'Rs 365' },
      { name: 'Chicken Malai Seekh Kabab', price: 'Rs 365' },
      { name: 'Afghani Kabab', price: 'Rs 395' },
      { name: 'Reshmi Kabab', price: 'Rs 395' },
      { name: 'Sholay Kabab', price: 'Rs 200' },
      { name: 'Tandoori Wings', price: 'Rs 325' },
      { name: 'Tandoori Chicken Platter', price: 'Rs 925' },
    ],
  },
  {
    id: 'fish-starters',
    label: 'Fish Starters',
    type: 'list',
    items: [
      { name: 'Fish Tikka', price: 'Rs 425' },
      { name: 'Hariyali Fish Tikka', price: 'Rs 425' },
      { name: 'Pepper Malai Fish Tikka', price: 'Rs 425' },
      { name: 'Fish Ajwaini Tikka', price: 'Rs 425' },
      { name: 'Tandoori Pomfret Fish', price: 'Rs 675' },
    ],
  },
  {
    id: 'dhal',
    label: 'Dhal',
    type: 'list',
    items: [
      { name: 'Dhal Thadka', price: 'Rs 200' },
      { name: 'Dal Makhani', price: 'Rs 250' },
    ],
  },
  {
    id: 'naan',
    label: 'Naan & Bread',
    type: 'list',
    items: [
      { name: 'Plain Naan', price: 'Rs 65' },
      { name: 'Butter Naan', price: 'Rs 75' },
      { name: 'Garlic Naan', price: 'Rs 95' },
      { name: 'Cheese Naan', price: 'Rs 145' },
      { name: 'Chilli Cheese Naan', price: 'Rs 165' },
      { name: 'Cheese Garlic Naan', price: 'Rs 165' },
      { name: 'Kashmiri Naan', price: 'Rs 175' },
      { name: 'Paneer Naan', price: 'Rs 185' },
      { name: 'Lachha Paratha', price: 'Rs 95' },
      { name: 'Aloo Paratha', price: 'Rs 145' },
      { name: 'Masaala Kulcha', price: 'Rs 135' },
    ],
  },
  {
    id: 'veg-curry',
    label: 'Veg Curry',
    type: 'list',
    items: [
      { name: 'Mix Veg Curry', price: 'Rs 245' },
      { name: 'Veg Shahi Korma', price: 'Rs 275' },
      { name: 'Aloo Gobi Masaala', price: 'Rs 255' },
      { name: 'Veg Kofta Curry', price: 'Rs 295' },
      { name: 'Mutter Paneer', price: 'Rs 325' },
      { name: 'Veg Kadai', price: 'Rs 275' },
      { name: 'Veg Kolhapuri', price: 'Rs 285' },
      { name: 'Veg Jalfrezi', price: 'Rs 275' },
      { name: 'Malai Kofta', price: 'Rs 295' },
      { name: 'Paneer Butter Masaala', price: 'Rs 365' },
      { name: 'Palak Paneer', price: 'Rs 345' },
      { name: 'Kadai Paneer', price: 'Rs 355' },
      { name: 'Paneer Mushroom Masala', price: 'Rs 375' },
      { name: 'Mushroom Masaala', price: 'Rs 325' },
      { name: 'Paneer Tikka Masaala', price: 'Rs 385' },
      { name: 'Bhindi Masaala', price: 'Rs 285' },
      { name: 'Bhindi Fry', price: 'Rs 265' },
      { name: 'Bhindi Do Pyaza', price: 'Rs 295' },
      { name: 'Baingan Bharta', price: 'Rs 275' },
      { name: 'Paneer Bhurji Masala', price: 'Rs 345' },
      { name: 'Aloo Jeera', price: 'Rs 225' },
      { name: 'Rajma Masaala', price: 'Rs 245' },
      { name: 'Chana Masaala', price: 'Rs 245' },
    ],
  },
  {
    id: 'chicken-curry',
    label: 'Chicken Curry',
    type: 'list',
    items: [
      { name: 'Butter Chicken', price: 'Rs 375' },
      { name: 'Chicken Masaala', price: 'Rs 375' },
      { name: 'Kadai Tikka Masaala', price: 'Rs 375' },
      { name: 'Chicken Hyderabadi', price: 'Rs 375' },
      { name: 'Chicken Do Pyaza', price: 'Rs 375' },
      { name: 'Chicken Kolhapuri', price: 'Rs 375' },
      { name: 'Chicken Patiala', price: 'Rs 375' },
      { name: 'Murgh Methi Masala', price: 'Rs 375' },
      { name: 'Chicken Mughlai', price: 'Rs 375' },
      { name: 'Handi Chicken', price: 'Rs 375' },
      { name: 'Chicken 65 Masala', price: 'Rs 375' },
      { name: 'Chicken Sagwala', price: 'Rs 375' },
      { name: 'Chicken Bharta', price: 'Rs 375' },
      { name: 'Afghani Chicken Masala', price: 'Rs 395' },
    ],
  },
  {
    id: 'lamb-curry',
    label: 'Lamb Curry',
    type: 'list',
    items: [
      { name: 'Lamb Rogan Josh', price: 'Rs 495' },
      { name: 'Lamb Saagwala', price: 'Rs 495' },
      { name: 'Bhuna Gosht Lamb', price: 'Rs 495' },
      { name: 'Lamb Do Pyaza', price: 'Rs 495' },
      { name: 'Mutton Masala', price: 'Rs 495' },
      { name: 'Mutton Hyderabadi', price: 'Rs 495' },
      { name: 'Mutton Kosha', price: 'Rs 495' },
    ],
  },
  {
    id: 'seafood-curry',
    label: 'Seafood Curry',
    type: 'list',
    items: [
      { name: 'Fish Tikka Masala', price: 'Rs 425' },
      { name: 'Fish Masala', price: 'Rs 425' },
      { name: 'Fish Hyderabadi', price: 'Rs 425' },
      { name: 'Fish Malai Curry', price: 'Rs 425' },
      { name: 'Prawns Curry', price: 'Rs 475' },
      { name: 'Prawns Malai Curry', price: 'Rs 475' },
      { name: 'Prawns Tikka Masala', price: 'Rs 475' },
      { name: 'Prawns Do Pyaza', price: 'Rs 475' },
    ],
  },
  {
    id: 'rice',
    label: 'Rice',
    type: 'list',
    items: [
      { name: 'White Rice', price: 'Rs 125' },
      { name: 'Jeera Rice', price: 'Rs 165' },
      { name: 'Lemon Rice', price: 'Rs 185' },
      { name: 'Tomato Rice', price: 'Rs 185' },
      { name: 'Peas Pulao', price: 'Rs 185' },
      { name: 'Veg Pulao', price: 'Rs 225' },
      { name: 'Veg Biryani', price: 'Rs 295' },
    ],
  },
  {
    id: 'thali',
    label: 'Thali',
    type: 'list',
    items: [
      { name: 'Veg Thali', price: 'Rs 295' },
      { name: 'Chicken Thali', price: 'Rs 375' },
      { name: 'Fish Thali', price: 'Rs 445' },
      { name: 'Lamb Thali', price: 'Rs 475' },
    ],
  },
];

// ─── Fuzzion Street Food ────────────────────────────────────────────────────

const fuzzionMenu = [
  {
    id: 'mine-frite',
    label: 'Mine Frite',
    subtitle: 'Fried Noodles',
    type: 'dual',
    priceHeaders: ['Normal', 'Schezwan'],
    items: [
      { name: 'Veg', prices: ['Rs 199', 'Rs 219'] },
      { name: 'Oeuf', prices: ['Rs 220', 'Rs 240'] },
      { name: 'Poulet', prices: ['Rs 245', 'Rs 265'] },
      { name: 'Poulet Oeuf', prices: ['Rs 260', 'Rs 280'] },
      { name: 'Poulet Oeuf Crevette', prices: ['Rs 310', 'Rs 330'] },
      { name: 'Oeuf Crevette', prices: ['Rs 295', 'Rs 315'] },
      { name: 'Ourite', prices: ['Rs 340', 'Rs 360'] },
      { name: 'Ourite Oeuf', prices: ['Rs 360', 'Rs 380'] },
      { name: 'Agneau', prices: ['Rs 320', 'Rs 340'] },
      { name: 'Agneau Oeuf', prices: ['Rs 350', 'Rs 370'] },
      { name: 'Agneau Oeuf Crevette', prices: ['Rs 385', 'Rs 399'] },
    ],
  },
  {
    id: 'meefon-frite',
    label: 'Meefon Frite',
    type: 'dual',
    priceHeaders: ['Normal', 'Schezwan'],
    items: [
      { name: 'Veg', prices: ['Rs 199', 'Rs 219'] },
      { name: 'Poulet', prices: ['Rs 245', 'Rs 265'] },
      { name: 'Poulet Oeuf', prices: ['Rs 260', 'Rs 280'] },
      { name: 'Poulet Oeuf Crevette', prices: ['Rs 310', 'Rs 330'] },
      { name: 'Agneau', prices: ['Rs 320', 'Rs 340'] },
      { name: 'Agneau Oeuf', prices: ['Rs 350', 'Rs 370'] },
      { name: 'Agneau Oeuf Crevette', prices: ['Rs 385', 'Rs 399'] },
      { name: 'Ourite', prices: ['Rs 340', 'Rs 380'] },
      { name: 'Ourite Oeuf', prices: ['Rs 360', 'Rs 380'] },
    ],
  },
  {
    id: 'riz-frite',
    label: 'Riz Frite',
    subtitle: 'Fried Rice',
    type: 'dual',
    priceHeaders: ['Normal', 'Schezwan'],
    items: [
      { name: 'Veg', prices: ['Rs 199', 'Rs 219'] },
      { name: 'Oeuf', prices: ['Rs 220', 'Rs 240'] },
      { name: 'Poulet', prices: ['Rs 245', 'Rs 265'] },
      { name: 'Poulet Oeuf', prices: ['Rs 260', 'Rs 280'] },
      { name: 'Poulet Oeuf Crevette', prices: ['Rs 310', 'Rs 330'] },
      { name: 'Oeuf Crevette', prices: ['Rs 295', 'Rs 315'] },
      { name: 'Ourite', prices: ['Rs 340', 'Rs 360'] },
      { name: 'Ourite Oeuf', prices: ['Rs 360', 'Rs 380'] },
      { name: 'Agneau', prices: ['Rs 320', 'Rs 340'] },
      { name: 'Agneau Oeuf', prices: ['Rs 350', 'Rs 370'] },
      { name: 'Agneau Oeuf Crevette', prices: ['Rs 358', 'Rs 399'] },
    ],
  },
  {
    id: 'mine-bouille',
    label: 'Mine Bouille',
    type: 'list',
    items: [
      { name: 'Veg (Crispy / Teokon)', price: 'Rs 199' },
      { name: 'Poulet (Saute / Crispy)', price: 'Rs 225' },
      { name: 'Poulet Oeuf (Saute / Crispy)', price: 'Rs 275' },
      { name: 'Poulet Oeuf Crevette (Saute / Crispy)', price: 'Rs 325' },
      { name: 'Saute Agneau', price: 'Rs 320' },
      { name: 'Saute Agneau Oeuf', price: 'Rs 340' },
      { name: 'Saute Agneau Oeuf Crevette', price: 'Rs 395' },
      { name: 'Salmi Teokon', price: 'Rs 225' },
      { name: 'Salmi Poulet', price: 'Rs 275' },
      { name: 'Salmi Ourite', price: 'Rs 345' },
      { name: 'Salmi Agneau', price: 'Rs 365' },
      { name: 'Poulet Teriyaki', price: 'Rs 295' },
      { name: 'Shezwan Chicken', price: 'Rs 295' },
      { name: 'Kung Pao Chicken', price: 'Rs 295' },
    ],
  },
  {
    id: 'bol-renverser',
    label: 'Bol Renverser',
    type: 'list',
    items: [
      { name: 'Veg', price: 'Rs 220' },
      { name: 'Poulet Oeuf', price: 'Rs 285' },
      { name: 'Poulet Oeuf Crevette', price: 'Rs 330' },
      { name: 'Agneau Oeuf', price: 'Rs 345' },
      { name: 'Agneau Oeuf Crevette', price: 'Rs 385' },
    ],
  },
  {
    id: 'fried-rice-combo',
    label: 'Fried Rice Combo',
    type: 'dual',
    priceHeaders: ['Solo', 'Combo'],
    items: [
      { name: 'Veg', prices: ['Rs 225', 'Rs 320'] },
      { name: 'Gobi', prices: ['Rs 245', 'Rs 345'] },
      { name: 'Paneer', prices: ['Rs 299', 'Rs 399'] },
      { name: 'Chicken', prices: ['Rs 315', 'Rs 415'] },
      { name: 'Fish', prices: ['Rs 350', 'Rs 450'] },
      { name: 'Prawns', prices: ['Rs 375', 'Rs 475'] },
    ],
  },
  {
    id: 'butter-rice-combo',
    label: 'Butter Rice Combo',
    type: 'dual',
    priceHeaders: ['Solo', 'Combo'],
    items: [
      { name: 'Sweet & Sour Chicken', prices: ['Rs 295', 'Rs 375'] },
      { name: 'Sweet & Sour Fish', prices: ['Rs 345', 'Rs 425'] },
      { name: 'Black Bean Sauce Chicken', prices: ['Rs 295', 'Rs 375'] },
      { name: 'Poulet Teriyaki', prices: ['Rs 305', 'Rs 385'] },
      { name: 'Schezwan Chicken', prices: ['Rs 295', 'Rs 375'] },
      { name: 'Kung Pao Chicken', prices: ['Rs 305', 'Rs 385'] },
    ],
  },
  {
    id: 'veg-with-rice',
    label: 'Veg With Rice',
    type: 'list',
    items: [
      { name: 'Chop Suey', price: 'Rs 225' },
      { name: 'Teokon Saute', price: 'Rs 245' },
      { name: 'Veg Crispy Saute', price: 'Rs 255' },
      { name: 'Kung Pao Tofu', price: 'Rs 275' },
    ],
  },
  {
    id: 'curry-saute',
    label: 'Curry / Saute',
    subtitle: 'Mauritian Style — Served with Rice & Salad',
    type: 'dual',
    priceHeaders: ['Curry Only', 'Rice & Salad'],
    items: [
      { name: 'Poulet', prices: ['Rs 275', 'Rs 345'] },
      { name: 'Poisson', prices: ['Rs 340', 'Rs 399'] },
      { name: 'Ourite', prices: ['Rs 410', 'Rs 475'] },
      { name: 'Agneau', prices: ['Rs 385', 'Rs 445'] },
    ],
  },
  {
    id: 'snacks',
    label: 'Snacks',
    type: 'list',
    items: [
      { name: 'Poulet Croustillant (9 Pcs)', price: 'Rs 245' },
      { name: 'Poulet Croustillant + Chips (9 Pcs)', price: 'Rs 285' },
      { name: 'Calamar Croustillant (9 Pcs)', price: 'Rs 315' },
      { name: 'Calamar Croustillant + Chips (9 Pcs)', price: 'Rs 355' },
      { name: 'Chips Small', price: 'Rs 85' },
      { name: 'Chips Large', price: 'Rs 140' },
    ],
  },
  {
    id: 'soup',
    label: 'Soup',
    type: 'list',
    items: [
      { name: 'Manchow Soup Veg', price: 'Rs 200' },
      { name: 'Manchow Soup Chicken', price: 'Rs 250' },
      { name: 'Hot & Sour Veg', price: 'Rs 200' },
      { name: 'Hot & Sour Chicken', price: 'Rs 230' },
      { name: 'Meefoon Soup Veg', price: 'Rs 200' },
      { name: 'Meefoon Soup Chicken Egg', price: 'Rs 250' },
      { name: 'Soup Mais Veg', price: 'Rs 200' },
      { name: 'Soup Mais Chicken Egg', price: 'Rs 275' },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    subtitle: 'Spaghetti / Penne / Tagliatelle',
    type: 'list',
    items: [
      { name: 'Veg Sauce Blanche Fromage', price: 'Rs 225' },
      { name: 'Veg Sauce Tomate Fromage', price: 'Rs 225' },
      { name: 'Arrabbiata Sauce Veg', price: 'Rs 240' },
      { name: 'Arrabbiata Sauce Chicken', price: 'Rs 295' },
      { name: 'Sauce Rouge Poulet Champignon', price: 'Rs 315' },
      { name: 'Chicken Mushroom Red Sauce', price: 'Rs 300' },
      { name: 'Fruits de Mer Sauce Blanche', price: 'Rs 375' },
      { name: 'Fruits de Mer Sauce Rouge', price: 'Rs 375' },
    ],
  },
  {
    id: 'panini-wrap',
    label: 'Panini & Wrap',
    subtitle: 'Available as Panini or Wrap',
    type: 'dual',
    priceHeaders: ['Regular', 'Meal'],
    items: [
      { name: 'Veg', prices: ['Rs 180', 'Rs 260'] },
      { name: 'Poulet', prices: ['Rs 225', 'Rs 305'] },
      { name: 'Agneau', prices: ['Rs 275', 'Rs 355'] },
    ],
  },
  {
    id: 'mocktails',
    label: 'Mocktails',
    type: 'list',
    items: [
      { name: 'Virgin Mojito', price: 'Rs 195' },
      { name: 'Passion Fruit Mojito', price: 'Rs 195' },
      { name: 'Virgin Blue Lagoon', price: 'Rs 195' },
      { name: 'Fresh Lime Soda', price: 'Rs 195' },
      { name: 'Blue Berry Mojito', price: 'Rs 195' },
      { name: 'Ginger Mint Mojito', price: 'Rs 195' },
      { name: 'Virgin Colada', price: 'Rs 225' },
      { name: 'Soft Drink', price: 'Rs 65' },
    ],
  },
];

// ─── Section renderers ──────────────────────────────────────────────────────

function ListSection({ items }) {
  const isSingle = items.length <= 6;
  if (isSingle) {
    return (
      <div>
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between py-4 border-b border-white/8 group"
          >
            <span className="font-display text-lg text-white group-hover:text-flame transition-colors leading-tight">
              {item.name}
            </span>
            <span className="font-body font-semibold text-flame text-sm flex-none ml-8">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    );
  }

  const half = Math.ceil(items.length / 2);
  const left = items.slice(0, half);
  const right = items.slice(half);

  return (
    <div className="grid md:grid-cols-2 gap-x-12">
      {[left, right].map((col, ci) => (
        <div key={ci}>
          {col.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between py-4 border-b border-white/8 group"
            >
              <span className="font-display text-lg text-white group-hover:text-flame transition-colors leading-tight">
                {item.name}
              </span>
              <span className="font-body font-semibold text-flame text-sm flex-none ml-8">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function DualSection({ items, priceHeaders }) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="font-body text-white/25 text-xs uppercase tracking-widest text-left pb-4 font-normal" />
          <th className="font-body text-white/25 text-xs uppercase tracking-widest text-right pb-4 pr-8 font-normal">
            {priceHeaders[0]}
          </th>
          <th className="font-body text-white/25 text-xs uppercase tracking-widest text-right pb-4 font-normal">
            {priceHeaders[1]}
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.name} className="group">
            <td className="font-display text-lg text-white group-hover:text-flame transition-colors py-4 border-b border-white/8 leading-tight">
              {item.name}
            </td>
            <td className="font-body text-white/50 text-sm py-4 border-b border-white/8 pr-8 text-right">
              {item.prices[0]}
            </td>
            <td className="font-body font-semibold text-flame text-sm py-4 border-b border-white/8 text-right">
              {item.prices[1]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ─── Main component ─────────────────────────────────────────────────────────

export default function MenuContent() {
  const [mainTab, setMainTab] = useState('royal');
  const [subCat, setSubCat] = useState('veg-starters');

  const switchMain = (tab) => {
    setMainTab(tab);
    setSubCat(tab === 'royal' ? royalIndian[0].id : fuzzionMenu[0].id);
  };

  const categories = mainTab === 'royal' ? royalIndian : fuzzionMenu;
  const current = categories.find((c) => c.id === subCat) ?? categories[0];

  return (
    <div className="bg-deep-black py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="font-body text-flame text-xs tracking-[0.35em] uppercase mb-4">Royal Indian Cuisine &amp; Fuzzion Street Food</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
            <h2
              className="font-display text-white leading-none"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
            >
              OUR MENU
            </h2>
            <div className="flex items-center gap-2.5 bg-green-500/10 border border-green-500/20 rounded-full px-5 py-2.5 self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-green-400 flex-none" />
              <span className="font-body text-green-400 text-xs font-semibold tracking-wide">
                100% Halal — No Pork, No Beef
              </span>
            </div>
          </div>
        </div>

        {/* Main concept tabs + download */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex gap-3">
            {[
              { id: 'royal', label: 'Royal Indian Cuisine' },
              { id: 'fuzzion', label: 'Fuzzion Street Food' },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => switchMain(id)}
                className={`font-body font-semibold px-6 py-3 rounded-full text-sm transition-all ${
                  mainTab === id
                    ? 'bg-flame text-white'
                    : 'border border-white/15 text-white/40 hover:border-white/40 hover:text-white/70'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <a
            href="/menu.pdf"
            download
            className="flex-none inline-flex items-center gap-2 border border-flame text-flame font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-flame/10 transition-colors"
          >
            <Download size={15} />
            <span className="hidden sm:inline">Download Menu</span>
            <span className="sm:hidden">PDF</span>
          </a>
        </div>

        {/* Sub-category pill nav */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-10 pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSubCat(cat.id)}
              className={`flex-none font-body text-xs px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                subCat === cat.id
                  ? 'bg-white/10 border-white/30 text-white'
                  : 'border-white/10 text-white/35 hover:border-white/25 hover:text-white/55'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items */}
        <div>
          {current.subtitle && (
            <p className="font-body text-white/30 text-xs mb-5 tracking-wide">{current.subtitle}</p>
          )}
          {current.type === 'dual' ? (
            <DualSection items={current.items} priceHeaders={current.priceHeaders} />
          ) : (
            <ListSection items={current.items} />
          )}
        </div>

        <p className="font-body text-white/20 text-xs mt-14 text-center">
          Allergen information available on request. Please inform our staff of any dietary requirements.
        </p>

      </div>
    </div>
  );
}
