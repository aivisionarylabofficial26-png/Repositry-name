import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('calc');

  return (
    <div className="min-h-screen bg-gray-100 font-sans p-4 text-right" dir="rtl">
      <header className="bg-blue-600 text-white p-6 rounded-xl shadow-lg mb-6">
        <h1 className="text-3xl font-bold text-center">WattWise - ذكاء الطاقة</h1>
        <p className="text-center mt-2 opacity-90">شريكك في توفير الكهرباء</p>
      </header>

      <nav className="flex justify-center gap-4 mb-8">
        <button 
          onClick={() => setTab('calc')}
          className={`px-6 py-2 rounded-full font-bold transition ${tab === 'calc' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-blue-600 border border-blue-600'}`}
        >
          حاسبة الطاقة
        </button>
        <button 
          onClick={() => setTab('game')}
          className={`px-6 py-2 rounded-full font-bold transition ${tab === 'game' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-blue-600 border border-blue-600'}`}
        >
          لعبة التحدي
        </button>
      </nav>

      {tab === 'calc' ? (
        <section className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-600">
          <h2 className="text-xl font-bold mb-4 text-blue-700">احسب استهلاكك</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">الجهاز:</label>
              <input type="text" placeholder="مثلاً: مكيف 18" className="w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">القدرة (واط):</label>
              <input type="number" placeholder="مثلاً: 2000" className="w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none" />
            </div>
            <button className="w-full bg-green-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform">
              احسب التكلفة المتوقعة
            </button>
          </div>
        </section>
      ) : (
        <section className="bg-white p-6 rounded-2xl shadow-md text-center border-t-4 border-yellow-500">
          <div className="bg-yellow-100 p-8 rounded-xl border-2 border-dashed border-yellow-500">
            <h2 className="text-2xl font-bold text-yellow-700 mb-4">لعبة Match-3 قادمة!</h2>
            <p className="text-gray-600">طابق أيقونات الطاقة (المصابيح، البطاريات) لتربح نقاط توفير!</p>
            <div className="mt-6 flex justify-center gap-4 text-4xl">
              <span>💡</span><span>🔋</span><span>☀️</span>
            </div>
          </div>
        </section>
      )}

      <footer className="mt-12">
        <a 
          href="https://wa.me/218913344421" 
          className="flex items-center justify-center gap-3 bg-green-600 text-white p-4 rounded-2xl shadow-2xl hover:bg-green-700 transition-colors"
        >
          <span className="text-xl font-bold">تواصل مع "شركة الوسط"</span>
          <span className="bg-white text-green-600 p-1 rounded-full text-xs">واتساب</span>
        </a>
      </footer>
    </div>
  );
}
