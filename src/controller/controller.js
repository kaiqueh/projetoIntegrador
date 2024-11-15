import express, { json } from 'express';
const app = express();
const port = 3000;

app.use(json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/items', (req, res) => {
    // Logic to get items
    res.json({ items: [] });
});

app.post('/api/items', (req, res) => {
    // Logic to create an item
    res.status(201).json({ message: 'Item created' });
});

app.put('/api/items/:id', (req, res) => {
    // Logic to update an item
    res.json({ message: 'Item updated' });
});

app.delete('/api/items/:id', (req, res) => {
    // Logic to delete an item
    res.json({ message: 'Item deleted' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});