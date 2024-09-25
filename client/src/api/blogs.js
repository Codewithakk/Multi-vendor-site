const blogs = [
    {
        "id": 1,
        "name": "Wireless Headphones",
        "description": "Noise-cancelling wireless headphones with 30 hours of battery life.",
        "vendor": "AudioMax",
        "price": 99.99,
        "discount": 10,
        "stock": 50,
        "category": "Electronics",
        "image": "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "id": 2,
        "name": "Running Shoes",
        "description": "Lightweight running shoes designed for comfort and performance.",
        "vendor": "RunFast",
        "price": 79.99,
        "discount": 15,
        "stock": 30,
        "category": "Footwear",
        "image": "https://img.freepik.com/free-psd/running-shoes-sneakers-transparent-background_84443-1654.jpg?w=740&t=st=1727089858~exp=1727090458~hmac=c9190a226b0318eba3786fecbc27dce07e94762b40533f903c77125ec683d2a7"
    },
    {
        "id": 3,
        "name": "Smartwatch",
        "description": "Feature-packed smartwatch with fitness tracking and notifications.",
        "vendor": "TechWear",
        "price": 199.99,
        "discount": 20,
        "stock": 25,
        "category": "Wearables",
        "image": "https://yogifi.fit/wp-content/uploads/2023/11/applewatch.png"
    },
    {
        "id": 4,
        "name": "Yoga Mat",
        "description": "Eco-friendly yoga mat with excellent grip and cushioning.",
        "vendor": "FitLife",
        "price": 29.99,
        "discount": 5,
        "stock": 100,
        "category": "Fitness",
        "image": "https://img.freepik.com/free-photo/rolled-up-yoga-mat-forest-with-words-yoga-it_188544-26230.jpg?t=st=1727089950~exp=1727093550~hmac=75a26210694aab11b82dd050048596a7ee71c8086456543cd7c11bccfec3e78c&w=1060"
    },
    {
        "id": 5,
        "name": "Bluetooth Speaker",
        "description": "Portable Bluetooth speaker with rich sound and deep bass.",
        "vendor": "SoundWave",
        "price": 49.99,
        "discount": 10,
        "stock": 75,
        "category": "Electronics",
        "image": "https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "id": 6,
        "name": "Coffee Maker",
        "description": "Automatic coffee maker with programmable settings.",
        "vendor": "HomeBrew",
        "price": 89.99,
        "discount": 15,
        "stock": 20,
        "category": "Home Appliances",
        "image": "https://www.runbazaar.com/_next/image/?url=https%3A%2F%2Fapi.runbazaar.com%2Fmedia%2F__sized__%2Fproduct_img%2F2024%2F06%2F25%2FRBIBzbqY%2F652-smart_crop-c0-5__0-5-750x750-70.jpg&w=640&q=75"
    },
    {
        "id": 7,
        "name": "Wireless Mouse",
        "description": "Ergonomic wireless mouse with customizable buttons.",
        "vendor": "ClickMaster",
        "price": 24.99,
        "discount": 5,
        "stock": 150,
        "category": "Accessories",
        "image": "https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2015%2F03%2F0324_logitech1.jpg&signature=d04640c9866be34d5674c9f534dc66c2"
    },
    {
        "id": 8,
        "name": "Gaming Chair",
        "description": "Comfortable gaming chair with adjustable height and lumbar support.",
        "vendor": "GamerPro",
        "price": 199.99,
        "discount": 25,
        "stock": 15,
        "category": "Furniture",
        "image": "https://www.upmarkt.in/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdfbgz13bb%2Fimage%2Fupload%2Fv1720426393%2Fk3fdyvwhh41swgp5wp7y.webp&w=1080&q=75"
    },
    {
        "id": 9,
        "name": "Electric Toothbrush",
        "description": "Rechargeable electric toothbrush with smart timer.",
        "vendor": "BrightSmile",
        "price": 49.99,
        "discount": 10,
        "stock": 40,
        "category": "Personal Care",
        "image": "https://img.freepik.com/premium-photo/electric-toothbrush-white-background_543889-176.jpg?w=360"
    },
    {
        "id": 10,
        "name": "Laptop Stand",
        "description": "Adjustable laptop stand for better ergonomics.",
        "vendor": "ErgoTech",
        "price": 39.99,
        "discount": 10,
        "stock": 60,
        "category": "Office Supplies",
        "image": "https://www.runbazaar.com/_next/image/?url=https%3A%2F%2Fapi.runbazaar.com%2Fmedia%2F__sized__%2Fproduct_img%2F2024%2F06%2F11%2FRBITYPav%2F493-smart_crop-c0-5__0-5-750x750-70.jpg&w=640&q=75"
    },
    {
        "id": 11,
        "name": "Backpack",
        "description": "Durable and spacious backpack for travel and daily use.",
        "vendor": "TravelMate",
        "price": 59.99,
        "discount": 15,
        "stock": 70,
        "category": "Bags",
        "image": "https://cdn.pixabay.com/photo/2023/03/06/06/40/backpack-7832746_1280.jpg"
    },
    {
        "id": 12,
        "name": "Air Fryer",
        "description": "Healthy air fryer for cooking crispy food with less oil.",
        "vendor": "HealthyChef",
        "price": 129.99,
        "discount": 20,
        "stock": 35,
        "category": "Kitchen Appliances",
        "image": "https://images-cdn.ubuy.co.in/64c1b11457d9ae7a7b30d6b6-ninja-af100-4-quart-air-fryer.jpg"
    },
    {
        "id": 13,
        "name": "Portable Charger",
        "description": "Compact portable charger with fast charging technology.",
        "vendor": "PowerBank",
        "price": 29.99,
        "discount": 5,
        "stock": 100,
        "category": "Electronics",
        "image": "https://media.cnn.com/api/v1/images/stellar/prod/top-picks.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
    },
    {
        "id": 14,
        "name": "Skincare Set",
        "description": "Complete skincare set for glowing skin.",
        "vendor": "GlowUp",
        "price": 89.99,
        "discount": 15,
        "stock": 30,
        "category": "Beauty",
        "image": "https://www.soultree.in/cdn/shop/files/RadiantDay-to-NightSkincareSet_2048x2048.jpg?v=1717261399"
    },
    {
        "id": 15,
        "name": "Fitness Tracker",
        "description": "Advanced fitness tracker with heart rate monitoring.",
        "vendor": "FitTrack",
        "price": 49.99,
        "discount": 10,
        "stock": 80,
        "category": "Wearables",
        "image": "https://hips.hearstapps.com/hmg-prod/images/fitness-trackers-6424a32a86f6e.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
    },
    {
        "id": 16,
        "name": "Cookware Set",
        "description": "Non-stick cookware set for all your cooking needs.",
        "vendor": "ChefMaster",
        "price": 99.99,
        "discount": 15,
        "stock": 25,
        "category": "Kitchen",
        "image": "https://media-uk.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000006335736-1000006335735-0503_01-2100.jpg"
    },
    {
        "id": 17,
        "name": "Smart TV",
        "description": "4K Smart TV with streaming capabilities.",
        "vendor": "VisionTech",
        "price": 499.99,
        "discount": 100,
        "stock": 10,
        "category": "Electronics",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/4/299766190/JK/PH/EI/6158633/32-inch-smart-android-led-tv-500x500.jpg"
    },
    {
        "id": 18,
        "name": "Cordless Vacuum",
        "description": "Lightweight cordless vacuum for easy cleaning.",
        "vendor": "CleanHome",
        "price": 249.99,
        "discount": 50,
        "stock": 20,
        "category": "Home Appliances",
        "image": "https://hips.hearstapps.com/hmg-prod/images/handheld-vacuums-0047-6682d2bd4b344.jpg?crop=0.782xw:0.782xh;0.0311xw,0.0648xh&resize=1200:*"
    },
    {
        "id": 19,
        "name": "Graphic Tablet",
        "description": "Digital graphic tablet for artists and designers.",
        "vendor": "ArtMaster",
        "price": 129.99,
        "discount": 15,
        "stock": 15,
        "category": "Electronics",
        "image": "https://www.robot-advance.com/userfiles/www.robot-advance.com/images/graphic-tablet-with-screen.jpg"
    },
    {
        "id": 20,
        "name": "Wireless Charger",
        "description": "Fast wireless charger compatible with most devices.",
        "vendor": "ChargePro",
        "price": 39.99,
        "discount": 10,
        "stock": 90,
        "category": "Accessories",
        "image": "https://www.mytrendyphone.eu/images/Universal-Fast-Qi-Wireless-Charging-Pad-Q25-Black-05112021-01_164885541-p.webp"
    }
]

export default blogs;
