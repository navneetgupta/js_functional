export const prop = curry_other((key, obj) => obj[key]);

export const assoc = curry_other((key, val, obj) => {...obj, [key]: val});

export const lens = curry_other((get, set) => ({get, set}));

export const view = curry_other((lens, obj) => lens.get(obj));

export const set = curry_other((lens, val, obj) => lens.set(val ,obj))

export const over = curry_other((lens, f, obj) => lens.set(f(lens.get(obj)), obj))

export const lensProp = key => (lens(prop(key), assoc(key)))

export const lensIndex = index => lens(prop(index), assoc(index))


/*
const obj = {
	user: {
		name: "Name",
		age: "age",
		address: {
				street1: {
					line1: "Street Line 1" ,
					line2: "Street Line 2"
				},
				zipcode: 121212,
				country: "Country"
		},
		orders: [
			{
				items: [
					{id: 1, name: "item 1", price: 20},
					{id: 3, name: "item 3", price: 22},
				],
				price: 1212,
				orderId: 1,
				discount: "10% off"
			},
			{
				items: [
					{id: 2, name: "item 2", price: 21},
					{id: 3, name: "item 3", price: 23},
				],
				price: 1212,
				orderId: 2,
				discount: "BOGO"
			}
		]
	}
}

const priceLens = lensPath(['user', 'orders', 1, 'items', 0, 'price'])

view(priceLens, obj) => 21
set(priceLens, 53, obj)

{
	user: {
		name: "Name",
		age: "age",
		address: {
				street1: {
					line1: "Street Line 1" ,
					line2: "Street Line 2"
				},
				zipcode: 121212,
				country: "Country"
		},
		orders: [
			{
				items: [
					{id: 1, name: "item 1", price: 20},
					{id: 3, name: "item 3", price: 22},
				],
				price: 1212,
				orderId: 1,
				discount: "10% off"
			},
			{
				items: [
					{id: 2, name: "item 2", price: 53},
					{id: 3, name: "item 3", price: 23},
				],
				price: 1212,
				orderId: 2,
				discount: "BOGO"
			}
		]
	}
}

 */
