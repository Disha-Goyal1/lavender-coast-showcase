import productToteBag from "@/assets/product-tote-bag.jpg";
import productScarf from "@/assets/product-scarf.jpg";
import productPlushie from "@/assets/product-plushie.jpg";
import productTop from "@/assets/product-top.jpg";
import productBucketHat from "@/assets/product-bucket-hat.jpg";
import productCoasters from "@/assets/product-coasters.jpg";
import productFlowers from "@/assets/product-flowers.jpg";
import productBows from "@/assets/product-bows.jpg";
import productKeychains from "@/assets/product-keychains.jpg";
import productLipbalmHolder from "@/assets/product-lipbalm-holder.jpg";
import productOctopus from "@/assets/product-octopus.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "accessories" | "clothing" | "gifts";
  description: string;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Lavender Stripe Tote Bag",
    price: 48,
    image: productToteBag,
    category: "accessories",
    description: "A beautifully handcrafted crochet tote bag featuring soft lavender and cream stripes. Perfect for beach days or everyday errands. Made with 100% organic cotton yarn.",
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Coastal Lace Scarf",
    price: 36,
    image: productScarf,
    category: "accessories",
    description: "A delicate lace crochet scarf in dreamy lavender tones. Lightweight and elegant, perfect for layering in any season.",
    isBestSeller: true,
  },
  {
    id: "3",
    name: "Lavender Bunny Plushie",
    price: 32,
    image: productPlushie,
    category: "gifts",
    description: "An adorable handmade crochet bunny in soft lavender. Each plushie is carefully crafted with love, making it a perfect gift for little ones.",
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: "4",
    name: "Daisy Crochet Crop Top",
    price: 55,
    image: productTop,
    category: "clothing",
    description: "A stunning summer crop top featuring hand-crocheted lavender daisies on white mesh. Lightweight, breathable, and perfect for warm days.",
    isNewArrival: true,
  },
  {
    id: "5",
    name: "Coastal Bucket Hat",
    price: 28,
    image: productBucketHat,
    category: "accessories",
    description: "A charming crochet bucket hat in soft lavender. Sun-protective and stylish, inspired by coastal living.",
    isBestSeller: true,
  },
  {
    id: "6",
    name: "Lavender Lace Coaster Set",
    price: 22,
    image: productCoasters,
    category: "gifts",
    description: "A set of four handmade crochet coasters in lavender and cream. Adds a touch of handmade charm to any table setting.",
  },
  {
    id: "7",
    name: "Crochet Flower Bouquet",
    price: 45,
    image: productFlowers,
    category: "gifts",
    description: "A forever bouquet of hand-crocheted flowers in lavender, pink, and white. Never wilts, always beautiful. The perfect lasting gift.",
    isNewArrival: true,
  },
  {
    id: "8",
    name: "Lavender & Cream Bow Set",
    price: 14,
    image: productBows,
    category: "accessories",
    description: "A pair of adorable handmade crochet hair bows in lavender and cream. Clip-on style, perfect for adding a cute handmade touch to any hairstyle.",
    isNewArrival: true,
  },
  {
    id: "9",
    name: "Mini Amigurumi Keychain",
    price: 12,
    image: productKeychains,
    category: "accessories",
    description: "Cute mini crochet character keychains in pastel colors. Each one is handmade and unique — the perfect little companion for your keys or bag.",
    isBestSeller: true,
  },
  {
    id: "10",
    name: "Crochet Lip Balm Holder",
    price: 10,
    image: productLipbalmHolder,
    category: "accessories",
    description: "A handy crochet lip balm holder keychain in soft lavender. Keep your lip balm close and stylish wherever you go.",
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: "11",
    name: "Coastal Octopus Plushie",
    price: 28,
    image: productOctopus,
    category: "gifts",
    description: "An irresistibly cute crochet octopus in soft lavender with rosy cheeks. A cuddly friend inspired by ocean life, perfect for all ages.",
    isNewArrival: true,
    isBestSeller: true,
  },
];
