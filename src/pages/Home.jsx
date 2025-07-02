import { motion } from 'framer-motion';

const mockImages = ['Imagen 1', 'Imagen 2', 'Imagen 3'];

const mockProducts = [
  { id: 1, name: 'Aceite Facial Antiage', price: '$17.990', image: 'Imagen', rating: 5 },
  { id: 2, name: 'Crema Facial Argan', price: '$19.990', image: 'Imagen', rating: 4 },
  { id: 3, name: 'Polvo Exfoliante 70g', price: '$14.990', image: 'Imagen', rating: 5 },
  { id: 4, name: 'Set Capilar Verbena', price: '$15.992', image: 'Imagen', rating: 5 },
  { id: 5, name: 'Crema de Manos Argán', price: '$8.990', image: 'Imagen', rating: 4 },
  { id: 6, name: 'Gel Limpieza Facial', price: '$16.990', image: 'Imagen', rating: 5 },
];

export default function Home() {
  return (
    <div className="px-4 py-6 flex flex-col items-center">
      {/* Carrusel */}
      <div className="w-full max-w-[1100px] mb-8 overflow-hidden relative rounded-xl shadow">
        <div className="flex w-full animate-slide">
          {mockImages.map((text, index) => (
            <div
              key={index}
              className="min-w-full h-64 flex items-center justify-center bg-rose-100 text-4xl font-bold text-rose-700"
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Productos */}
      <div className="w-full max-w-[1100px]">
        <h2 className="text-2xl font-semibold text-black mb-4">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-rose-200 rounded-lg p-4 shadow-sm"
            >
              <div className="h-48 bg-rose-100 text-rose-500 flex items-center justify-center text-xl mb-3 rounded">
                {product.image}
              </div>
              <h3 className="text-lg font-medium text-black">{product.name}</h3>
              <p className="text-black font-semibold">{product.price}</p>
              <div className="text-yellow-500 mt-1">
                {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
