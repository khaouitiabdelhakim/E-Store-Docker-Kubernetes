const express = require('express');
const router = express.Router();

const products = {
    fruits: [
        { id: 1, name: 'Apple', price: 1.2, description: 'Fresh, crisp apple perfect for snacks.' },
        { id: 2, name: 'Banana', price: 0.5, description: 'Yellow banana, rich in potassium.' },
        { id: 3, name: 'Grapes', price: 2.5, description: 'Seedless green grapes, sweet and juicy.' },
        { id: 4, name: 'Orange', price: 1.1, description: 'Vitamin C-rich orange, great for juice.' },
        { id: 5, name: 'Pineapple', price: 3.0, description: 'Tropical pineapple with a tangy taste.' },
        { id: 6, name: 'Strawberry', price: 1.8, description: 'Sweet strawberries, great for desserts.' },
        { id: 7, name: 'Blueberry', price: 3.5, description: 'Antioxidant-rich blueberries.' },
        { id: 8, name: 'Mango', price: 2.0, description: 'Juicy mango, tropical and sweet.' },
        { id: 9, name: 'Peach', price: 1.6, description: 'Soft, sweet peaches, perfect for snacks.' },
        { id: 10, name: 'Pear', price: 1.3, description: 'Juicy pears, great for salads.' },
        { id: 11, name: 'Plum', price: 1.2, description: 'Tangy plums, great for snacking.' },
        { id: 12, name: 'Lemon', price: 0.9, description: 'Fresh lemon, perfect for drinks and flavoring.' },
        { id: 13, name: 'Lime', price: 0.8, description: 'Citrusy lime, adds zest to dishes.' },
        { id: 14, name: 'Cherry', price: 4.0, description: 'Sweet cherries, perfect for snacks.' },
        { id: 15, name: 'Watermelon', price: 3.2, description: 'Refreshing watermelon, perfect for summer.' },
        { id: 16, name: 'Kiwi', price: 1.4, description: 'Tart and sweet kiwi, full of vitamin C.' },
        { id: 17, name: 'Papaya', price: 2.5, description: 'Exotic papaya, rich in enzymes.' },
        { id: 18, name: 'Cantaloupe', price: 2.8, description: 'Sweet cantaloupe melon, refreshing.' },
        { id: 19, name: 'Raspberry', price: 4.5, description: 'Tart raspberries, antioxidant-rich.' },
        { id: 20, name: 'Blackberry', price: 3.8, description: 'Juicy blackberries, perfect for desserts.' },
        { id: 21, name: 'Apricot', price: 1.5, description: 'Sweet apricots, full of flavor.' },
        { id: 22, name: 'Pomegranate', price: 2.2, description: 'Tangy pomegranate seeds, packed with antioxidants.' },
        { id: 23, name: 'Guava', price: 1.9, description: 'Tropical guava, rich in vitamin C.' },
        { id: 24, name: 'Dragon Fruit', price: 5.0, description: 'Exotic dragon fruit, vibrant and sweet.' },
        { id: 25, name: 'Lychee', price: 4.2, description: 'Sweet lychee, perfect for desserts.' },
        { id: 26, name: 'Fig', price: 2.0, description: 'Fresh figs, sweet and chewy.' },
        { id: 27, name: 'Coconut', price: 2.5, description: 'Tropical coconut, great for hydration.' },
        { id: 28, name: 'Cranberry', price: 3.3, description: 'Tart cranberries, rich in antioxidants.' },
        { id: 29, name: 'Mulberry', price: 4.0, description: 'Sweet mulberries, perfect for snacking.' },
        { id: 30, name: 'Passion Fruit', price: 3.5, description: 'Exotic passion fruit, tangy and sweet.' },
        { id: 31, name: 'Nectarine', price: 1.7, description: 'Juicy nectarine, full of flavor.' },
        { id: 32, name: 'Mandarin', price: 1.1, description: 'Sweet mandarin oranges, easy to peel.' },
        { id: 33, name: 'Grapefruit', price: 1.5, description: 'Tangy grapefruit, perfect for breakfast.' },
        { id: 34, name: 'Jackfruit', price: 3.8, description: 'Large jackfruit, tropical and sweet.' },
        { id: 35, name: 'Starfruit', price: 2.5, description: 'Unique star-shaped fruit, refreshing taste.' },
        { id: 36, name: 'Durian', price: 5.5, description: 'Exotic durian, strong aroma but delicious.' },
        { id: 37, name: 'Tangerine', price: 1.2, description: 'Sweet tangerine, rich in vitamin C.' },
        { id: 38, name: 'Honeydew', price: 2.7, description: 'Sweet honeydew melon, refreshing.' },
        { id: 39, name: 'Goji Berry', price: 6.0, description: 'Antioxidant-rich goji berries.' },
        { id: 40, name: 'Custard Apple', price: 3.3, description: 'Sweet custard apple, soft and creamy.' },
        { id: 41, name: 'Avocado', price: 2.2, description: 'Creamy avocado, great for salads.' },
        { id: 42, name: 'Olive', price: 1.8, description: 'Fresh olives, perfect for Mediterranean dishes.' },
        { id: 43, name: 'Quince', price: 1.4, description: 'Tart quince, ideal for jams.' },
        { id: 44, name: 'Soursop', price: 4.0, description: 'Exotic soursop, sweet and tangy.' },
        { id: 45, name: 'Pomelo', price: 1.9, description: 'Large pomelo, tangy citrus flavor.' },
        { id: 46, name: 'Persimmon', price: 2.0, description: 'Sweet persimmon, great for desserts.' },
        { id: 47, name: 'Sapodilla', price: 2.8, description: 'Sweet sapodilla, with a caramel-like flavor.' },
        { id: 48, name: 'Rambutan', price: 3.7, description: 'Exotic rambutan, sweet and juicy.' },
        { id: 49, name: 'Clementine', price: 1.3, description: 'Easy-peel clementines, sweet and juicy.' },
        { id: 50, name: 'Jujube', price: 2.4, description: 'Chewy jujube, rich in antioxidants.' }
    ],
    vegetables: [
        { id: 1, name: 'Carrot', price: 0.7, description: 'Crunchy carrot, ideal for salads.' },
        { id: 2, name: 'Broccoli', price: 1.3, description: 'Fresh broccoli, packed with vitamins.' },
        { id: 3, name: 'Tomato', price: 0.8, description: 'Juicy tomatoes, perfect for sauces.' },
        { id: 4, name: 'Spinach', price: 1.0, description: 'Leafy spinach, high in iron.' },
        { id: 5, name: 'Bell Pepper', price: 1.5, description: 'Sweet bell pepper, ideal for stir-fries.' },
        { id: 6, name: 'Onion', price: 0.6, description: 'Strong-flavored onions, great for cooking.' },
        { id: 7, name: 'Lettuce', price: 1.1, description: 'Crisp lettuce, perfect for salads.' },
        { id: 8, name: 'Cucumber', price: 0.7, description: 'Cool cucumber, great for hydration.' },
        { id: 9, name: 'Potato', price: 0.5, description: 'Starchy potatoes, versatile and filling.' },
        { id: 10, name: 'Zucchini', price: 1.3, description: 'Mild zucchini, great for grilling.' },
        { id: 11, name: 'Cauliflower', price: 1.4, description: 'Nutritious cauliflower, perfect for roasting.' },
        { id: 12, name: 'Green Beans', price: 1.2, description: 'Fresh green beans, crisp and tender.' },
        { id: 13, name: 'Celery', price: 0.9, description: 'Crunchy celery, great for snacks.' },
        { id: 14, name: 'Asparagus', price: 2.5, description: 'Tender asparagus, perfect for grilling.' },
        { id: 15, name: 'Garlic', price: 0.3, description: 'Pungent garlic, a cooking essential.' },
        { id: 16, name: 'Peas', price: 1.2, description: 'Sweet green peas, great in soups.' },
        { id: 17, name: 'Sweet Corn', price: 1.1, description: 'Sweet corn, perfect for boiling or grilling.' },
        { id: 18, name: 'Kale', price: 1.4, description: 'Leafy kale, packed with nutrients.' },
        { id: 19, name: 'Mushroom', price: 1.7, description: 'Earthy mushrooms, great for sautéing.' },
        { id: 20, name: 'Radish', price: 0.9, description: 'Peppery radishes, perfect for salads.' },
        { id: 21, name: 'Beetroot', price: 1.3, description: 'Sweet beetroot, great for juicing.' },
        { id: 22, name: 'Eggplant', price: 1.5, description: 'Tender eggplant, perfect for grilling.' },
        { id: 23, name: 'Brussels Sprouts', price: 2.0, description: 'Nutty Brussels sprouts, ideal for roasting.' },
        { id: 24, name: 'Pumpkin', price: 1.8, description: 'Sweet pumpkin, perfect for soups and pies.' },
        { id: 25, name: 'Butternut Squash', price: 1.6, description: 'Creamy butternut squash, ideal for roasting.' },
        { id: 26, name: 'Cabbage', price: 1.0, description: 'Crunchy cabbage, great for coleslaw.' },
        { id: 27, name: 'Bok Choy', price: 1.4, description: 'Mild bok choy, perfect for stir-fries.' },
        { id: 28, name: 'Turnip', price: 0.8, description: 'Earthy turnips, great for soups.' },
        { id: 29, name: 'Parsnip', price: 1.3, description: 'Sweet parsnip, ideal for roasting.' },
        { id: 30, name: 'Artichoke', price: 2.0, description: 'Tender artichokes, perfect for dips.' },
        { id: 31, name: 'Leek', price: 1.2, description: 'Mild leeks, great for soups.' },
        { id: 32, name: 'Okra', price: 1.1, description: 'Tender okra, perfect for stews.' },
        { id: 33, name: 'Swiss Chard', price: 1.5, description: 'Colorful Swiss chard, great for sautéing.' },
        { id: 34, name: 'Chili Pepper', price: 0.6, description: 'Spicy chili peppers, adds heat to dishes.' },
        { id: 35, name: 'Watercress', price: 1.6, description: 'Peppery watercress, perfect for salads.' },
        { id: 36, name: 'Arugula', price: 1.3, description: 'Peppery arugula, great for salads.' },
        { id: 37, name: 'Rutabaga', price: 1.0, description: 'Sweet rutabaga, perfect for mashing.' },
        { id: 38, name: 'Horseradish', price: 1.7, description: 'Pungent horseradish, great for sauces.' },
        { id: 39, name: 'Fennel', price: 1.8, description: 'Anise-flavored fennel, perfect for roasting.' },
        { id: 40, name: 'Endive', price: 1.9, description: 'Bitter endive, great for salads.' },
        { id: 41, name: 'Collard Greens', price: 1.2, description: 'Hearty collard greens, ideal for braising.' },
        { id: 42, name: 'Mustard Greens', price: 1.5, description: 'Peppery mustard greens, great for salads.' },
        { id: 43, name: 'Cassava', price: 2.1, description: 'Starchy cassava, great for mashing.' },
        { id: 44, name: 'Dandelion Greens', price: 1.6, description: 'Bitter dandelion greens, great for salads.' },
        { id: 45, name: 'Yam', price: 1.8, description: 'Sweet yam, ideal for baking.' },
        { id: 46, name: 'Scallion', price: 0.9, description: 'Mild scallions, great for garnishing.' },
        { id: 47, name: 'Snow Peas', price: 1.4, description: 'Crisp snow peas, perfect for stir-fries.' },
        { id: 48, name: 'Chard', price: 1.3, description: 'Colorful chard, great for sautéing.' },
        { id: 49, name: 'Bamboo Shoots', price: 1.9, description: 'Tender bamboo shoots, perfect for stir-fries.' },
        { id: 50, name: 'Taro', price: 2.0, description: 'Starchy taro root, great for boiling and frying.' }
    ],
    liquids: [
        { id: 1, name: 'Water', price: 0.2, description: 'Pure bottled water.' },
        { id: 2, name: 'Orange Juice', price: 1.5, description: 'Freshly squeezed orange juice.' },
        { id: 3, name: 'Milk', price: 1.3, description: 'Rich and creamy whole milk.' },
        { id: 4, name: 'Almond Milk', price: 2.0, description: 'Smooth almond milk, dairy-free.' },
        { id: 5, name: 'Coconut Water', price: 2.2, description: 'Natural coconut water, refreshing.' }
    ]
};


// Endpoint to get products by type with an optional limit
router.get('/products', (req, res) => {
    const type = req.query.type;
    const limit = parseInt(req.query.limit);

    if (!type || !products[type]) {
        return res.status(404).json({ error: 'Product type not found' });
    }

    let productList = products[type];
    if (limit && !isNaN(limit)) {
        productList = productList.slice(0, limit); // Limit the number of items
    }
    
    res.json(productList);
});

// Endpoint to get a specific product by type and id
router.get('/product/:type/:id', (req, res) => {
    const { type, id } = req.params;
    const productList = products[type];
    if (!productList) {
        return res.status(404).json({ error: 'Product type not found' });
    }
    const product = productList.find((item) => item.id === parseInt(id));
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
});

module.exports = router;
