'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { ProductCard } from '@/components/cards/product-card';

interface ProductCategory {
  category: string;
  description: string;
  products: Array<{
    id: string;
    name: string;
    image: string;
    description?: string;
  }>;
}

interface ProductShowcaseProps {
  title?: string;
  subtitle?: string;
  categories: ProductCategory[];
}

export function ProductShowcase({
  title = 'Product Expertise',
  subtitle = 'We specialize in a wide array of textile categories, ensuring the right technical expertise for every product type',
  categories,
}: ProductShowcaseProps) {
  return (
    <SectionWrapper className="py-16 md:py-24 bg-white">
      {/* Header */}
      <div className="text-center mb-16 animate-in fade-in slide-in-from-top">
        <h2
          className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>

      {/* Product Categories */}
      <div className="space-y-16">
        {categories.map((category, catIndex) => (
          <div key={category.category} className="animate-in fade-in" style={{ animationDelay: `${catIndex * 200}ms` }}>
            {/* Category Title */}
            <h3
              className="text-2xl font-semibold text-slate-900 mb-8"
              style={{ fontFamily: 'var(--font-syne)' }}
            >
              {category.category}
            </h3>
            <p className="text-slate-600 mb-8">{category.description}</p>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product, prodIndex) => (
                <div key={product.id} className="animate-in fade-in" style={{ animationDelay: `${(catIndex * 200) + (prodIndex * 100)}ms` }}>
                  <ProductCard
                    name={product.name}
                    description={product.description || ''}
                    image={product.image}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
