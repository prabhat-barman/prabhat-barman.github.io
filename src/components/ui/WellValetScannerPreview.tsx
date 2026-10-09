import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink, 
  Camera 
} from 'lucide-react';

interface GroceryItem {
  id: string;
  name: string;
  brand: string;
  upc: string;
  score: number;
  grade: 'Optimal' | 'Good' | 'Moderate';
  allergens: string[];
  safeForDiet: boolean;
  ingredients: string[];
}

const SAMPLE_PRODUCTS: GroceryItem[] = [
  {
    id: 'prod-1',
    name: 'Avocado Oil Plant Mayo',
    brand: 'Chosen Foods • Canada',
    upc: '0 85380 00041 2',
    score: 94,
    grade: 'Optimal',
    allergens: [],
    safeForDiet: true,
    ingredients: ['Avocado Oil', 'Filtered Water', 'Organic Rosemary Extract', 'Sea Salt'],
  },
  {
    id: 'prod-2',
    name: 'Spelt & Maple Granola',
    brand: 'Nature’s Path Organic',
    upc: '0 58449 77102 5',
    score: 56,
    grade: 'Moderate',
    allergens: ['Gluten / Wheat', 'Added Cane Sugar'],
    safeForDiet: false,
    ingredients: ['Whole Grain Spelt Flour', 'Organic Cane Sugar', 'Sunflower Oil', 'Wheat Germ'],
  },
  {
    id: 'prod-3',
    name: 'Unsweetened Almond Milk',
    brand: 'Earth’s Own • British Columbia',
    upc: '0 62602 12093 8',
    score: 88,
    grade: 'Good',
    allergens: ['Tree Nuts (Almonds)'],
    safeForDiet: false,
    ingredients: ['Almond Base', 'Calcium Carbonate', 'Sea Salt', 'Gellan Gum', 'Vitamin D2'],
  },
];

export const WellValetScannerPreview: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<GroceryItem>(SAMPLE_PRODUCTS[0]);
  const [isScanning, setIsScanning] = useState(false);

  const handleScanItem = (item: GroceryItem) => {
    setIsScanning(true);
    setTimeout(() => {
      setSelectedProduct(item);
      setIsScanning(false);
    }, 450);
  };

  return (
    <div className="bg-[#121214] text-[#F9F9F6] rounded-2xl p-3.5 sm:p-6 flex flex-col justify-between border border-white/10 shadow-2xl overflow-hidden relative font-body select-none">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-4 gap-2">
        <div className="flex items-center gap-2 font-mono-tech text-xs text-white/70">
          <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
          <span className="font-bold text-white">WELLVALET :: GROCERY_SCANNER</span>
          <span className="text-[#34D399] hidden xs:inline">• LIVE IN CANADA</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://apps.apple.com/ca/app/wellvalet/id6778571808"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-[11px] font-mono-tech text-white flex items-center gap-1 transition-all"
            title="View on Apple App Store"
          >
            <span> App Store</span>
            <ExternalLink className="w-3 h-3 text-[#34D399]" />
          </a>
          <a
            href="https://www.wellvalet.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-full bg-[#34D399] hover:bg-[#2bb883] text-[11px] font-mono-tech font-bold text-black flex items-center gap-1 transition-all"
            title="Visit wellvalet.com"
          >
            <span>wellvalet.com</span>
            <ExternalLink className="w-3 h-3 text-black" />
          </a>
        </div>
      </div>

      {/* Main Scanner Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
        {/* Left: Interactive Camera Viewfinder */}
        <div className="md:col-span-6 rounded-2xl bg-black/60 border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden">
          {/* Viewfinder Target Box */}
          <div className="relative aspect-[4/3] rounded-xl bg-gradient-to-b from-white/5 to-white/0 border border-white/15 flex flex-col items-center justify-center p-4 overflow-hidden">
            {/* Corner Viewfinder Brackets */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#34D399]" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#34D399]" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#34D399]" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#34D399]" />

            {/* Laser scanning beam line */}
            <div className={`absolute inset-x-4 h-0.5 bg-[#34D399] shadow-[0_0_12px_#34D399] transition-all duration-700 ${
              isScanning ? 'top-3/4 animate-bounce' : 'top-1/2'
            }`} />

            {/* Central Barcode Graphic */}
            <div className="font-mono text-center tracking-widest text-xs text-white/40 my-auto">
              <div className="text-xl font-bold tracking-[6px] text-white/80">||| | | || ||| || |</div>
              <div className="text-[10px] font-mono-tech mt-1 text-[#34D399]">
                UPC: {selectedProduct.upc}
              </div>
            </div>

            {/* Camera Status */}
            <div className="absolute bottom-2 inset-x-2 flex items-center justify-between text-[10px] font-mono-tech text-white/50 px-2">
              <span className="flex items-center gap-1">
                <Camera className="w-3 h-3 text-[#34D399]" />
                <span>Vision Camera • 60 FPS</span>
              </span>
              <span>OCR Ready</span>
            </div>
          </div>

          {/* Interactive Products to Scan */}
          <div className="mt-3">
            <div className="text-[10px] font-mono-tech text-white/50 uppercase mb-1.5 flex items-center justify-between">
              <span>Tap grocery to scan:</span>
              <span className="text-[#34D399]">Simulated Camera Feed</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 font-mono-tech text-[10px]">
              {SAMPLE_PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => handleScanItem(prod)}
                  className={`p-1.5 rounded-lg border text-left transition-all truncate ${
                    selectedProduct.id === prod.id
                      ? 'bg-[#34D399]/20 border-[#34D399] text-white font-bold'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <div className="truncate">{prod.name.split(' ')[0]} {prod.name.split(' ')[1]}</div>
                  <div className="text-[9px] text-[#34D399]">{prod.score}/100</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Instant Score & Allergen Result Card */}
        <div className="md:col-span-6 rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 flex flex-col justify-between">
          <div>
            {/* Product Meta */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <span className="text-[10px] font-mono-tech text-white/50 uppercase">
                  {selectedProduct.brand}
                </span>
                <h4 className="font-display font-bold text-base sm:text-lg text-white leading-tight">
                  {selectedProduct.name}
                </h4>
              </div>

              {/* Wellness Score Pill */}
              <div className="text-right shrink-0">
                <div className="flex items-baseline gap-0.5 justify-end">
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#34D399]">
                    {selectedProduct.score}
                  </span>
                  <span className="text-xs font-mono-tech text-white/50">/100</span>
                </div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono-tech bg-[#34D399]/20 text-[#34D399] font-bold">
                  {selectedProduct.grade}
                </span>
              </div>
            </div>

            {/* Allergen Status Banner */}
            <div className={`mt-3 p-3 rounded-xl border text-xs font-mono-tech flex items-start gap-2.5 ${
              selectedProduct.allergens.length === 0
                ? 'bg-[#10B981]/15 border-[#10B981]/40 text-emerald-300'
                : 'bg-amber-500/15 border-amber-500/40 text-amber-200'
            }`}>
              {selectedProduct.allergens.length === 0 ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              )}
              <div>
                <div className="font-bold">
                  {selectedProduct.allergens.length === 0
                    ? 'Safe • Zero Detected Allergens'
                    : `Allergen Alert: ${selectedProduct.allergens.join(', ')}`}
                </div>
                <div className="text-[10px] text-white/60 mt-0.5">
                  Cross-checked against Canadian Health taxonomy & personal profile.
                </div>
              </div>
            </div>

            {/* Ingredient OCR Extraction Preview */}
            <div className="mt-3 p-2.5 rounded-xl bg-black/40 border border-white/10 text-[11px] font-mono-tech">
              <div className="text-[10px] text-white/50 uppercase mb-1">OCR Ingredient Extraction:</div>
              <div className="text-white/80 line-clamp-2 leading-relaxed">
                {selectedProduct.ingredients.join(' • ')}
              </div>
            </div>
          </div>

          {/* Compliance & Store Availability */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-white/60">
            <span className="flex items-center gap-1.5 text-white/80">
              <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
              <span>PIPEDA Compliant • 0 Ads</span>
            </span>
            <span className="text-[#34D399] font-semibold">Sub-500ms Decode</span>
          </div>
        </div>
      </div>
    </div>
  );
};
