import React from 'react';
import { motion } from 'motion/react';
import { Globe, MapPin, Search, GraduationCap, Building, Plane, BookOpen, ArrowRight } from 'lucide-react';

export function StudyAbroad() {
  const destinations = [
    { country: 'United States', code: 'US', universities: 4500, avgCost: '$25k - $55k', popular: ['Computer Science', 'Business', 'Engineering'] },
    { country: 'United Kingdom', code: 'GB', universities: 160, avgCost: '£15k - £35k', popular: ['Law', 'Medicine', 'Arts'] },
    { country: 'Canada', code: 'CA', universities: 100, avgCost: 'CAD 20k - 40k', popular: ['Data Science', 'Nursing', 'Finance'] },
    { country: 'Australia', code: 'AU', universities: 43, avgCost: 'AUD 30k - 50k', popular: ['Marine Biology', 'Accounting', 'IT'] },
    { country: 'Germany', code: 'DE', universities: 380, avgCost: '€0 - €3k', popular: ['Mechanical Engineering', 'Automotive', 'Physics'] },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] text-white shadow-xl shadow-blue-200 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-white/10">
            <Plane size={14} /> Global Opportunities
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            Take Your Education <br className="hidden md:block" />
            <span className="text-blue-200">Across Borders</span>
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-xl">
            Explore top universities, scholarships, and programs worldwide. Your international journey starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search countries, universities, or programs..." 
                className="w-full pl-12 pr-4 py-4 bg-white text-slate-900 rounded-2xl outline-none focus:ring-4 focus:ring-blue-400/30 transition-all font-medium"
              />
            </div>
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-black uppercase tracking-widest rounded-2xl transition-colors whitespace-nowrap shadow-lg shadow-blue-500/30">
              Explore
            </button>
          </div>
        </div>
      </motion.div>

      {/* Popular Destinations */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <Globe className="text-blue-600" /> Popular Destinations
          </h2>
          <button className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
            View All <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.country}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl border border-slate-100 group-hover:scale-110 transition-transform">
                    {dest.code === 'US' ? '🇺🇸' : dest.code === 'GB' ? '🇬🇧' : dest.code === 'CA' ? '🇨🇦' : dest.code === 'AU' ? '🇦🇺' : '🇩🇪'}
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-lg">{dest.country}</h3>
                    <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Building size={12} /> {dest.universities}+ Universities
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Popular Programs</p>
                  <div className="flex flex-wrap gap-2">
                    {dest.popular.map(prog => (
                      <span key={prog} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg">
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Avg. Tuition / Year</p>
                  <p className="text-sm font-bold text-slate-700">{dest.avgCost}</p>
                </div>
              </div>
              
              <button className="w-full py-3 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-700 text-xs font-black uppercase tracking-widest rounded-xl transition-colors border border-slate-100 hover:border-blue-100">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100 flex items-start gap-6"
        >
          <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0">
            <BookOpen size={24} />
          </div>
          <div>
            <h3 className="text-lg font-black text-amber-900 mb-2">Visa Guides</h3>
            <p className="text-sm text-amber-700/80 mb-4">Step-by-step guides for student visa applications across top destinations.</p>
            <button className="text-xs font-black uppercase tracking-widest text-amber-600 hover:text-amber-700 flex items-center gap-1">
              Read Guides <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100 flex items-start gap-6"
        >
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="text-lg font-black text-emerald-900 mb-2">Test Prep</h3>
            <p className="text-sm text-emerald-700/80 mb-4">Resources and tips for IELTS, TOEFL, GRE, and GMAT preparation.</p>
            <button className="text-xs font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
              Start Prep <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
