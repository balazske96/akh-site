import React, { useContext, useState } from 'react';

interface ShopContextType {
	products: object[];
	addProduct: (product: object) => void;
}

const ShopContext = React.createContext<ShopContextType>(undefined);

export default function useShop() {
	return useContext<ShopContextType>(ShopContext);
}

export function ShopProvider({ children }: { children: React.ReactNode }) {
	const [products, setProducts] = useState<object[]>([]);

	const addProduct = (product: object) => {
		setProducts((prevState) => [...prevState, product]);
	};

	return (
		<ShopContext.Provider value={{ products, addProduct }}>
			{children}
		</ShopContext.Provider>
	);
}
