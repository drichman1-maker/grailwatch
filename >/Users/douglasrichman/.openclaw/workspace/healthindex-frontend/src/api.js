// api.js
const API_URL = 'https://healthindex-backend.fly.dev';

// Filtered brands (hidden from display but kept in backend for archival)
// Archived: Clear Light Saunas - see /archived/clearlight-saunas-backup.json
const FILTERED_BRANDS = ['clearlight', 'clear light'];

// Health check
export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_URL}/api/health`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Health check failed:', error);
    return { status: 'error', message: error.message };
  }
};

// Get all products
export const getProducts = async (category = null) => {
  try {
    const url = category 
      ? `${API_URL}/api/products?category=${category}`
      : `${API_URL}/api/products`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    
    // Filter out excluded brands
    const filteredProducts = Array.isArray(data) 
      ? data.filter(product => 
          !FILTERED_BRANDS.some(brand => 
            product.brand?.toLowerCase().includes(brand) || 
            product.name?.toLowerCase().includes(brand)
          )
        )
      : [];
    
    console.log(`[HealthIndex] Filtered ${data.length - filteredProducts.length} Clear Light products from display`);
    return { products: filteredProducts, count: filteredProducts.length };
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return { products: [], count: 0 };
  }
};

// Get single product
export const getProduct = async (productId) => {
  try {
    const response = await fetch(`${API_URL}/api/products/${productId}`);
    if (!response.ok) throw new Error('Product not found');
    const product = await response.json();
    
    // Check if product is from filtered brand
    if (FILTERED_BRANDS.some(brand => 
      product.brand?.toLowerCase().includes(brand) || 
      product.name?.toLowerCase().includes(brand)
    )) {
      console.warn(`[HealthIndex] Attempted to access filtered product: ${productId}`);
      throw new Error('Product not available');
    }
    
    return product;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    throw error;
  }
};

// Get categories
export const getCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/api/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
};

// Search prices via Brave
export const searchPrices = async (productId) => {
  try {
    const response = await fetch(`${API_URL}/api/search/${productId}`);
    if (!response.ok) throw new Error('Search failed');
    return await response.json();
  } catch (error) {
    console.error('Price search failed:', error);
    return null;
  }
};