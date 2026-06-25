'use client';

import { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const categories = ['Indian Starters', 'Indian Mains', 'Fuzzion', 'Sides & Drinks'];

const menuItems = {
  'Indian Starters': [
    // Premier Starter
    { name: 'Onion Bhaji', desc: 'Crispy spiced onion fritters', price: 'Rs 245', tag: 'Veg' },
    { name: 'Vegetable Samosa', desc: 'Crispy pastry with spiced vegetable filling', price: 'Rs 245', tag: 'Veg' },
    { name: 'Chicken Samosa', desc: 'Crispy pastry with spiced chicken filling', price: 'Rs 265', tag: '' },
    { name: 'Chicken Chaat', desc: 'Tangy spiced chicken bites', price: 'Rs 265', tag: '' },
    { name: 'Chicken Pakora', desc: 'Crispy battered chicken pieces', price: 'Rs 285', tag: '' },
    { name: 'Seekh Kebab', desc: 'Minced spiced chicken on skewer', price: 'Rs 285', tag: '' },
    // Tandoori Starters
    { name: 'Tandoori Chicken (Half)', desc: 'Marinated chicken cooked in tandoor', price: 'Rs 475', tag: 'Tandoori' },
    { name: 'Tandoori Chicken (Full)', desc: 'Marinated whole chicken cooked in tandoor', price: 'Rs 775', tag: 'Tandoori' },
    { name: 'Chicken Tikka', desc: 'Boneless chicken marinated in yogurt & spices', price: 'Rs 295', tag: 'Tandoori' },
    { name: 'Mix Grill', desc: 'Selection of tandoori grilled meats', price: 'Rs 425', tag: 'Tandoori' },
    // Fish Starters
    { name: 'Fish Tikka', desc: 'Marinated fish fillets grilled in tandoor', price: 'Rs 295', tag: 'Fish' },
    { name: 'Fish Amritsari', desc: 'Crispy spiced battered fish', price: 'Rs 285', tag: 'Fish' },
  ],

  'Indian Mains': [
    // Chicken Curry
    { name: 'Chicken Curry', desc: 'Classic Mauritian-style chicken curry', price: 'Rs 245', tag: '' },
    { name: 'Butter Chicken', desc: 'Creamy tomato-based chicken curry', price: 'Rs 265', tag: '' },
    { name: 'Chicken Tikka Masala', desc: 'Grilled chicken in spiced masala sauce', price: 'Rs 265', tag: '' },
    { name: 'Chicken Korma', desc: 'Mild creamy coconut chicken curry', price: 'Rs 265', tag: '' },
    { name: 'Chicken Biryani', desc: 'Fragrant basmati rice with spiced chicken', price: 'Rs 285', tag: '' },
    // Seafood
    { name: 'Prawn Curry', desc: 'Prawns in aromatic curry sauce', price: 'Rs 295', tag: 'Seafood' },
    { name: 'Prawn Masala', desc: 'Prawns in rich spiced masala', price: 'Rs 295', tag: 'Seafood' },
    { name: 'Fish Curry', desc: 'Fish in traditional curry sauce', price: 'Rs 265', tag: 'Seafood' },
    { name: 'King Prawn', desc: 'King prawns in chef\'s special sauce', price: 'Rs 325', tag: 'Seafood' },
    // Veg Curry
    { name: 'Paneer Butter Masala', desc: 'Cottage cheese in creamy tomato sauce', price: 'Rs 265', tag: 'Veg' },
    { name: 'Paneer Tikka Masala', desc: 'Grilled paneer in spiced masala', price: 'Rs 265', tag: 'Veg' },
    { name: 'Malai Kofta', desc: 'Vegetable dumplings in creamy sauce', price: 'Rs 265', tag: 'Veg' },
    { name: 'Mix Vegetable', desc: 'Seasonal vegetables in curry sauce', price: 'Rs 215', tag: 'Veg' },
    { name: 'Dhal Fry', desc: 'Tempered lentils with spices', price: 'Rs 185', tag: 'Veg' },
    { name: 'Dhal Makhani', desc: 'Slow-cooked black lentils in butter', price: 'Rs 195', tag: 'Veg' },
  ],

  'Fuzzion': [
    // Combos & Bowls
    { name: 'Mauritian Combo (Quarter)', desc: 'Quarter portion combo with rice or bread', price: 'Rs 155', tag: 'Bowl' },
    { name: 'Mauritian Combo (Half)', desc: 'Half portion combo with rice or bread', price: 'Rs 215', tag: 'Bowl' },
    { name: 'Curry Bowl', desc: 'Curry sauce of choice served with rice', price: 'Rs 185', tag: 'Bowl' },
    // Street Plates
    { name: 'Mauritian Pita', desc: 'Stuffed pita with Mauritian-style fillings', price: 'Rs 195', tag: 'Street' },
    { name: 'Schezwan Fried Rice', desc: 'Wok-fried rice with Schezwan sauce', price: 'Rs 225', tag: 'Street' },
    { name: 'Schezwan Noodles', desc: 'Stir-fried noodles with Schezwan sauce', price: 'Rs 225', tag: 'Street' },
    // Wraps & Pasta
    { name: 'Chicken Tagliatelle', desc: 'Pasta in creamy sauce with chicken', price: 'Rs 295', tag: 'Pasta' },
    { name: 'Prawn Tagliatelle', desc: 'Pasta in creamy sauce with prawns', price: 'Rs 325', tag: 'Pasta' },
    { name: 'Chicken Panini', desc: 'Grilled panini with chicken filling', price: 'Rs 215', tag: 'Wrap' },
    { name: 'Chicken Wrap', desc: 'Soft wrap with grilled chicken & salad', price: 'Rs 215', tag: 'Wrap' },
  ],

  'Sides & Drinks': [
    // Naan
    { name: 'Plain Naan', desc: 'Traditional plain bread from tandoor', price: 'Rs 45', tag: 'Naan' },
    { name: 'Butter Naan', desc: 'Naan brushed with butter', price: 'Rs 55', tag: 'Naan' },
    { name: 'Garlic Naan', desc: 'Naan with garlic and herbs', price: 'Rs 65', tag: 'Naan' },
    { name: 'Peshwari Naan', desc: 'Sweet naan with coconut and almonds', price: 'Rs 75', tag: 'Naan' },
    // Snacks
    { name: 'Chips', desc: 'Crispy fried chips', price: 'Rs 85', tag: 'Snack' },
    { name: 'Chips with Sauce', desc: 'Crispy chips with dipping sauce', price: 'Rs 95', tag: 'Snack' },
    // Soup
    { name: 'Manchow Soup', desc: 'Indo-Chinese style thick soup', price: 'Rs 125', tag: 'Soup' },
    { name: 'Sweet Corn Soup', desc: 'Creamy sweet corn soup', price: 'Rs 115', tag: 'Soup' },
    // Mocktails
    { name: 'Virgin Mojito', desc: 'Mint, lime & soda', price: 'Rs 145', tag: 'Mocktail' },
    { name: 'Mango Lassi', desc: 'Chilled mango yogurt drink', price: 'Rs 125', tag: 'Mocktail' },
    { name: 'Rose Lemonade', desc: 'Chilled rose & lemon drink', price: 'Rs 135', tag: 'Mocktail' },
  ],
};

const tagColors = {
  Veg: 'bg-green-900/50 text-green-400',
  Tandoori: 'bg-orange-900/50 text-orange-400',
  Fish: 'bg-blue-900/50 text-blue-400',
  Seafood: 'bg-blue-900/50 text-blue-400',
  Bowl: 'bg-yellow-900/50 text-yellow-400',
  Street: 'bg-purple-900/50 text-purple-400',
  Pasta: 'bg-pink-900/50 text-pink-400',
  Wrap: 'bg-indigo-900/50 text-indigo-400',
  Naan: 'bg-amber-900/50 text-amber-400',
  Snack: 'bg-stone-700/50 text-stone-300',
  Soup: 'bg-teal-900/50 text-teal-400',
  Mocktail: 'bg-rose-900/50 text-rose-400',
};

export default function MenuContent() {
  const [activeTab, setActiveTab] = useState('Indian Starters');

  return (
    <div className="bg-deep-black pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-flame text-sm tracking-[0.3em] uppercase mb-3">What We Serve</p>
          <h2 className="font-display text-6xl sm:text-7xl text-white">OUR MENU</h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`font-body font-semibold px-6 py-2.5 rounded-full border transition-all ${
                activeTab === cat
                  ? 'bg-flame border-flame text-white'
                  : 'border-white/20 text-white/60 hover:border-flame hover:text-flame'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems[activeTab].map((item, i) => (
            <AnimateOnScroll key={item.name} delay={i * 0.04}>
              <div className="bg-soft-gray rounded-2xl p-5 h-full flex flex-col justify-between group hover:border hover:border-flame/30 border border-transparent transition-colors">
                <div>
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <h3 className="font-display text-xl text-white leading-tight">{item.name}</h3>
                    <span className="font-body font-bold text-flame text-sm flex-none">{item.price}</span>
                  </div>
                  <p className="font-body text-white/45 text-sm leading-relaxed">{item.desc}</p>
                </div>
                {item.tag && (
                  <div className="mt-3">
                    <span className={`font-body text-xs px-2.5 py-1 rounded-full ${tagColors[item.tag] ?? 'bg-white/10 text-white/50'}`}>
                      {item.tag}
                    </span>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <p className="font-body text-center text-white/25 text-sm mt-14">
          Allergen information available on request. Please inform our staff of any dietary requirements.
        </p>
      </div>
    </div>
  );
}
