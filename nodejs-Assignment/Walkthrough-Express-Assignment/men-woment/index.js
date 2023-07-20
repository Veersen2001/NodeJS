const http = require('http');

const PORT = 3030;

const men= [
    {
      "id": 1,
      "name": "Men's T-Shirt",
      "brand": "Brand X",
      "price": 25.99,
      "color": "Blue",
      "size": "L",
      "category": "T-Shirt"
    },
    {
      "id": 2,
      "name": "Men's Polo Shirt",
      "brand": "Brand Y",
      "price": 32.50,
      "color": "Red",
      "size": "M",
      "category": "Polo Shirt"
    },
    {
      "id": 3,
      "name": "Men's Jeans",
      "brand": "Brand Z",
      "price": 45.00,
      "color": "Black",
      "size": "32",
      "category": "Jeans"
    },
    {
      "id": 4,
      "name": "Men's Dress Shirt",
      "brand": "Brand A",
      "price": 37.99,
      "color": "White",
      "size": "XL",
      "category": "Dress Shirt"
    },
    {
      "id": 5,
      "name": "Men's Shorts",
      "brand": "Brand B",
      "price": 19.95,
      "color": "Khaki",
      "size": "S",
      "category": "Shorts"
    },
    {
      "id": 6,
      "name": "Men's Hoodie",
      "brand": "Brand C",
      "price": 49.99,
      "color": "Gray",
      "size": "M",
      "category": "Hoodie"
    },
    {
      "id": 7,
      "name": "Men's Sweatshirt",
      "brand": "Brand D",
      "price": 29.75,
      "color": "Navy Blue",
      "size": "L",
      "category": "Sweatshirt"
    },
    {
      "id": 8,
      "name": "Men's Chinos",
      "brand": "Brand E",
      "price": 39.95,
      "color": "Beige",
      "size": "34",
      "category": "Chinos"
    },
    {
      "id": 9,
      "name": "Men's Leather Jacket",
      "brand": "Brand F",
      "price": 99.99,
      "color": "Brown",
      "size": "M",
      "category": "Jacket"
    },
    {
      "id": 10,
      "name": "Men's Swim Trunks",
      "brand": "Brand G",
      "price": 22.50,
      "color": "Aqua",
      "size": "L",
      "category": "Swimwear"
    }
  ]

  const women=  [
    {
      "id": 1,
      "name": "Women's Summer Dress",
      "brand": "Brand X",
      "price": 35.99,
      "color": "Yellow",
      "size": "M",
      "category": "Dress"
    },
    {
      "id": 2,
      "name": "Women's Blouse",
      "brand": "Brand Y",
      "price": 24.50,
      "color": "Pink",
      "size": "S",
      "category": "Top"
    },
    {
      "id": 3,
      "name": "Women's Jeans",
      "brand": "Brand Z",
      "price": 49.00,
      "color": "Blue",
      "size": "28",
      "category": "Jeans"
    },
    {
      "id": 4,
      "name": "Women's Skirt",
      "brand": "Brand A",
      "price": 29.99,
      "color": "Black",
      "size": "L",
      "category": "Skirt"
    },
    {
      "id": 5,
      "name": "Women's Tunic",
      "brand": "Brand B",
      "price": 18.95,
      "color": "Green",
      "size": "M",
      "category": "Top"
    },
    {
      "id": 6,
      "name": "Women's Cardigan",
      "brand": "Brand C",
      "price": 39.99,
      "color": "Gray",
      "size": "S",
      "category": "Sweater"
    },
    {
      "id": 7,
      "name": "Women's Jumpsuit",
      "brand": "Brand D",
      "price": 42.75,
      "color": "Navy Blue",
      "size": "M",
      "category": "Jumpsuit"
    },
    {
      "id": 8,
      "name": "Women's Leggings",
      "brand": "Brand E",
      "price": 21.95,
      "color": "Black",
      "size": "One Size",
      "category": "Leggings"
    },
    {
      "id": 9,
      "name": "Women's Evening Gown",
      "brand": "Brand F",
      "price": 129.99,
      "color": "Red",
      "size": "L",
      "category": "Dress"
    },
    {
      "id": 10,
      "name": "Women's Swimsuit",
      "brand": "Brand G",
      "price": 28.50,
      "color": "Blue",
      "size": "M",
      "category": "Swimwear"
    }
  ]




const server = http.createServer((req,res)=>{
    if(req.url == '/')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('Welcome to Men & Women Dummy Data');
    }
    else if(req.url == '/men')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.end(JSON.stringify(men));
    }
     else if(req.url == '/women')
    {
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json')
        res.end(JSON.stringify(women));
    }
    else
    {
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain')
        res.end('Page Not Found');
    }
});
server.listen(PORT,()=>{
    console.log(`Server is running at:${PORT}`);
});
