export interface BrandData {
  name: string;
  models?: string[];
}

export interface CategoryBrands {
  [key: string]: BrandData[];
}

// Map subcategories to their available brands/models
// Keys should match the subcategory names in categories.ts
export const BRAND_DATA: CategoryBrands = {
  "Mobile Phones": [
    { name: "Apple", models: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13", "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 mini", "iPhone 12", "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X", "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7", "iPhone 6s Plus", "iPhone 6s", "iPhone SE (3rd Gen)", "iPhone SE (2nd Gen)"] },
    { name: "Samsung", models: ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy S23 FE", "Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22", "Galaxy S21 Ultra", "Galaxy S21+", "Galaxy S21", "Galaxy S21 FE", "Galaxy S20 Ultra", "Galaxy S20+", "Galaxy S20", "Galaxy S20 FE", "Galaxy Note 20 Ultra", "Galaxy Note 20", "Galaxy Note 10+", "Galaxy Note 10", "Galaxy Z Fold 5", "Galaxy Z Fold 4", "Galaxy Z Fold 3", "Galaxy Z Flip 5", "Galaxy Z Flip 4", "Galaxy Z Flip 3", "Galaxy A54", "Galaxy A53", "Galaxy A52", "Galaxy A34", "Galaxy A33", "Galaxy A24", "Galaxy A14", "Galaxy A04s", "Galaxy M54", "Galaxy M34", "Galaxy F54"] },
    { name: "Google", models: ["Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro", "Pixel 7", "Pixel 7a", "Pixel 6 Pro", "Pixel 6", "Pixel 6a", "Pixel 5", "Pixel 5a", "Pixel 4a 5G", "Pixel 4 XL", "Pixel 4", "Pixel Fold"] },
    { name: "Xiaomi", models: ["13 Ultra", "13 Pro", "13", "13 Lite", "12T Pro", "12T", "12 Pro", "12", "12X", "Redmi Note 13 Pro+", "Redmi Note 13 Pro", "Redmi Note 13", "Redmi Note 12 Pro+", "Redmi Note 12 Pro", "Redmi Note 12", "Redmi Note 11 Pro", "Redmi Note 11", "Redmi 12", "Redmi 10", "Poco F5 Pro", "Poco F5", "Poco X5 Pro", "Poco X5", "Poco M5s", "Poco M5", "Poco C55"] },
    { name: "OnePlus", models: ["12", "12R", "Open", "11", "10 Pro", "10T", "9 Pro", "9", "Nord 3", "Nord CE 3", "Nord CE 3 Lite", "Nord 2T", "Nord CE 2 Lite"] },
    { name: "Tecno", models: ["Phantom V Fold", "Phantom V Flip", "Phantom X2 Pro", "Phantom X2", "Camon 20 Premier", "Camon 20 Pro 5G", "Camon 20 Pro", "Camon 20", "Camon 19 Pro", "Spark 10 Pro", "Spark 10", "Spark 10C", "Spark 9 Pro", "Pova 5 Pro", "Pova 5", "Pop 7 Pro", "Pop 7"] },
    { name: "Infinix", models: ["Zero 30 5G", "Zero Ultra", "Zero 20", "Zero X Pro", "Note 30 VIP", "Note 30 Pro", "Note 30 5G", "Note 30", "Note 12 Pro 5G", "Note 12", "Hot 30 5G", "Hot 30", "Hot 30 Play", "Hot 30i", "Hot 20i", "Smart 7 Plus", "Smart 7 HD", "Smart 7"] },
    { name: "Oppo", models: ["Find N3", "Find N3 Flip", "Find X6 Pro", "Find X6", "Reno 10 Pro+", "Reno 10 Pro", "Reno 10", "Reno 8T 5G", "Reno 8T", "A98 5G", "A78 5G", "A78", "A58", "A38", "A17"] },
    { name: "Vivo", models: ["X90 Pro+", "X90 Pro", "X90", "V29 Pro", "V29", "V29e", "V27 Pro", "V27", "V27e", "Y36", "Y27", "Y17s", "Y02t", "T2 Pro", "T2"] },
    { name: "Huawei", models: ["Mate 60 Pro+", "Mate 60 Pro", "Mate 60", "Mate X5", "P60 Pro", "P60 Art", "P60", "Nova 11 Pro", "Nova 11", "Nova 11i", "Nova Y91", "Nova Y71"] },
    { name: "Sony", models: ["Xperia 1 V", "Xperia 5 V", "Xperia 10 V", "Xperia 1 IV", "Xperia 5 IV", "Xperia 10 IV", "Xperia Pro-I"] },
    { name: "Nokia", models: ["G42 5G", "C32", "C12", "X30 5G", "G60 5G", "G22", "G11 Plus", "C31", "C21 Plus", "XR21"] },
    { name: "Realme", models: ["GT 5", "11 Pro+", "11 Pro", "11", "11x", "C55", "C53", "C51", "Narzo 60 Pro", "Narzo 60", "Narzo N53"] },
    { name: "Itel", models: ["S23+", "S23", "P40+", "P40", "A60s", "A60", "A04"] }
  ],
  "Tablets": [
    { name: "Apple", models: ["iPad Pro 12.9 (6th Gen)", "iPad Pro 12.9 (5th Gen)", "iPad Pro 11 (4th Gen)", "iPad Pro 11 (3rd Gen)", "iPad Air (5th Gen)", "iPad Air (4th Gen)", "iPad (10th Gen)", "iPad (9th Gen)", "iPad mini (6th Gen)", "iPad mini (5th Gen)"] },
    { name: "Samsung", models: ["Galaxy Tab S9 Ultra", "Galaxy Tab S9+", "Galaxy Tab S9", "Galaxy Tab S9 FE+", "Galaxy Tab S9 FE", "Galaxy Tab S8 Ultra", "Galaxy Tab S8+", "Galaxy Tab S8", "Galaxy Tab S7 FE", "Galaxy Tab S6 Lite (2022)", "Galaxy Tab A9+", "Galaxy Tab A9", "Galaxy Tab A8", "Galaxy Tab A7 Lite", "Galaxy Tab Active4 Pro"] },
    { name: "Lenovo", models: ["Tab P12", "Tab P11 Pro Gen 2", "Tab P11 Gen 2", "Tab M10 Plus Gen 3", "Tab M10 Gen 3", "Tab M9", "Tab M8 Gen 4", "Yoga Tab 13", "Yoga Tab 11"] },
    { name: "Amazon", models: ["Fire Max 11", "Fire HD 10 Plus", "Fire HD 10", "Fire HD 8 Plus", "Fire HD 8", "Fire 7"] },
    { name: "Microsoft", models: ["Surface Pro 9", "Surface Pro 8", "Surface Go 3", "Surface Go 2"] },
    { name: "Xiaomi", models: ["Pad 6 Pro", "Pad 6", "Pad 5", "Redmi Pad SE", "Redmi Pad"] },
    { name: "Huawei", models: ["MatePad Pro 13.2", "MatePad 11.5", "MatePad Air", "MatePad SE 10.4", "MatePad 11 (2023)"] },
    { name: "Google", models: ["Pixel Tablet"] },
    { name: "Nokia", models: ["T21", "T20", "T10"] },
    { name: "Realme", models: ["Pad 2", "Pad X", "Pad Mini", "Pad"] },
    { name: "Oppo", models: ["Pad 2", "Pad Air"] },
    { name: "OnePlus", models: ["Pad"] }
  ],
  "Laptops & Computers": [
    { name: "Apple", models: ["MacBook Pro 16 (M3 Max)", "MacBook Pro 16 (M3 Pro)", "MacBook Pro 16 (M2 Max)", "MacBook Pro 16 (M2 Pro)", "MacBook Pro 16 (M1 Max)", "MacBook Pro 16 (M1 Pro)", "MacBook Pro 14 (M3 Max)", "MacBook Pro 14 (M3 Pro)", "MacBook Pro 14 (M3)", "MacBook Pro 14 (M2 Max)", "MacBook Pro 14 (M2 Pro)", "MacBook Pro 14 (M1 Max)", "MacBook Pro 14 (M1 Pro)", "MacBook Air 15 (M2)", "MacBook Air 13 (M2)", "MacBook Air 13 (M1)", "MacBook Pro 13 (M2)", "MacBook Pro 13 (M1)", "MacBook Pro 16 (Intel)", "MacBook Pro 13 (Intel)", "iMac 24", "Mac Studio", "Mac mini", "Mac Pro"] },
    { name: "HP", models: ["Spectre x360", "Envy", "Pavilion", "Omen", "Victus", "EliteBook", "ProBook", "Dragonfly", "Chromebook", "ZBook", "Essential"] },
    { name: "Dell", models: ["XPS", "Inspiron", "Alienware", "G Series", "Latitude", "Precision", "Vostro", "Chromebook"] },
    { name: "Lenovo", models: ["ThinkPad", "ThinkBook", "Yoga", "Legion", "LOQ", "IdeaPad", "Flex", "Chromebook"] },
    { name: "Asus", models: ["ROG Zephyrus", "ROG Strix", "ROG Flow", "TUF Gaming", "Zenbook", "Vivobook", "ExpertBook", "Chromebook", "Studiobook"] },
    { name: "Acer", models: ["Swift", "Aspire", "Spin", "Nitro", "Predator", "TravelMate", "Chromebook", "ConceptD", "Enduro"] },
    { name: "Microsoft", models: ["Surface Laptop Studio", "Surface Laptop", "Surface Pro", "Surface Go", "Surface Studio"] },
    { name: "MSI", models: ["Titan", "Raider", "Stealth", "Vector", "Pulse", "Katana", "Cyborg", "Thin", "Prestige", "Summit", "Modern", "Creator"] },
    { name: "Razer", models: ["Blade 18", "Blade 16", "Blade 15", "Blade 14"] },
    { name: "Samsung", models: ["Galaxy Book Ultra", "Galaxy Book Pro 360", "Galaxy Book Pro", "Galaxy Book 360", "Galaxy Book", "Galaxy Chromebook"] },
    { name: "LG", models: ["Gram", "Gram Style", "Gram SuperSlim", "Gram 2-in-1", "Ultra PC"] },
    { name: "Huawei", models: ["MateBook X Pro", "MateBook D", "MateBook E", "MateBook B"] },
    { name: "Toshiba" }, { name: "Fujitsu" }, { name: "Panasonic" }, { name: "Sony" }, { name: "Google" }, 
    { name: "Chuwi" }, { name: "Gigabyte" }, { name: "Honor" }, { name: "Infinix" }, { name: "Itel" }, 
    { name: "Medion" }, { name: "Nexstgo" }, { name: "Porsche Design" }, { name: "Positivo" }, { name: "Prestigio" }, 
    { name: "Prixton" }, { name: "Thomson" }, { name: "Vaio" }, { name: "Vizio" }, { name: "Xolo" }, 
    { name: "Zebronics" }, { name: "Ziox" }, { name: "Avita" }, { name: "Compaq" }, { name: "Gateway" }, 
    { name: "HCL" }, { name: "IBM" }, { name: "iBall" }, { name: "Lava" }, { name: "Micromax" }, 
    { name: "Nokia" }, { name: "Packard Bell" }, { name: "Realme" }, { name: "Tecno" }, { name: "Zenith" }
  ],
  "Smart Watches": [
    { name: "Apple", models: ["Watch Ultra 2", "Watch Ultra", "Watch Series 9", "Watch Series 8", "Watch Series 7", "Watch SE (2nd Gen)", "Watch SE (1st Gen)", "Watch Series 6", "Watch Series 5", "Watch Series 4", "Watch Series 3"] },
    { name: "Samsung", models: ["Galaxy Watch 6 Classic", "Galaxy Watch 6", "Galaxy Watch 5 Pro", "Galaxy Watch 5", "Galaxy Watch 4 Classic", "Galaxy Watch 4", "Galaxy Watch 3", "Galaxy Watch Active 2"] },
    { name: "Garmin", models: ["Fenix 7 Pro", "Fenix 7", "Epix Pro (Gen 2)", "Epix (Gen 2)", "Forerunner 965", "Forerunner 265", "Forerunner 55", "Venu 3", "Venu 2 Plus", "Venu 2", "Instinct 2X", "Instinct 2", "Vivoactive 5", "Lily"] },
    { name: "Fitbit", models: ["Sense 2", "Sense", "Versa 4", "Versa 3", "Charge 6", "Charge 5", "Luxe", "Inspire 3"] },
    { name: "Google", models: ["Pixel Watch 2", "Pixel Watch"] },
    { name: "Amazfit", models: ["GTR 4", "GTS 4", "T-Rex Ultra", "T-Rex 2", "Cheetah Pro", "Cheetah", "Bip 5", "Bip 3 Pro", "Falcon", "Active"] },
    { name: "Huawei", models: ["Watch Ultimate", "Watch 4 Pro", "Watch 4", "Watch GT 4", "Watch GT 3 Pro", "Watch GT 3", "Watch Fit 2", "Band 8"] },
    { name: "Xiaomi", models: ["Watch 2 Pro", "Watch S1 Pro", "Watch S1 Active", "Redmi Watch 3 Active", "Redmi Watch 3", "Smart Band 8", "Smart Band 7 Pro", "Smart Band 7"] }
  ],
  "Shoes": [
    { name: "Nike" }, { name: "Adidas" }, { name: "Jordan" }, { name: "Puma" }, { name: "New Balance" }, 
    { name: "Reebok" }, { name: "Vans" }, { name: "Converse" }, { name: "Asics" }, { name: "Under Armour" },
    { name: "Skechers" }, { name: "Hoka One One" }, { name: "Brooks" }, { name: "Salomon" }, { name: "Saucony" },
    { name: "Timberland" }, { name: "Dr. Martens" }, { name: "Clarks" }, { name: "UGG" }, { name: "Crocs" },
    { name: "Birkenstock" }, { name: "Gucci" }, { name: "Balenciaga" }, { name: "Louis Vuitton" }, { name: "Christian Louboutin" },
    { name: "Prada" }, { name: "Versace" }, { name: "Dior" }, { name: "Fendi" }, { name: "Valentino" },
    { name: "Alexander McQueen" }, { name: "Saint Laurent" }, { name: "Bottega Veneta" }, { name: "Givenchy" }, { name: "Off-White" },
    { name: "Zara" }, { name: "H&M" }, { name: "Aldo" }, { name: "Steve Madden" }, { name: "Nine West" },
    { name: "Jimmy Choo" }, { name: "Manolo Blahnik" }, { name: "Stuart Weitzman" }, { name: "Salvatore Ferragamo" }, { name: "Tod's" },
    { name: "Hogan" }, { name: "Geox" }, { name: "Ecco" }, { name: "Camper" }, { name: "Merrell" }, { name: "Keen" },
    { name: "Teva" }, { name: "Chaco" }, { name: "Sorel" }, { name: "Hunter" }, { name: "Frye" }, { name: "Red Wing" },
    { name: "Wolverine" }, { name: "Caterpillar" }, { name: "Toms" }, { name: "Keds" }, { name: "Sperry" },
    { name: "Cole Haan" }, { name: "Johnston & Murphy" }, { name: "Allen Edmonds" }, { name: "Church's" }, { name: "Grenson" },
    { name: "Loake" }, { name: "Barker" }, { name: "Crockett & Jones" }, { name: "John Lobb" }, { name: "Edward Green" },
    { name: "Berluti" }, { name: "Santoni" }, { name: "Magnanni" }, { name: "Carmina" }, { name: "Meermin" },
    { name: "Yanko" }, { name: "Carlos Santos" }, { name: "Paul Smith" }, { name: "Ted Baker" }, { name: "Kurt Geiger" },
    { name: "Dune" }, { name: "Office" }, { name: "Schuh" }, { name: "Buffalo" }, { name: "Fila" }, { name: "Diadora" },
    { name: "Mizuno" }, { name: "Onitsuka Tiger" }, { name: "Supra" }, { name: "Etnies" }, { name: "DC Shoes" },
    { name: "Globe" }, { name: "Osiris" }, { name: "Lakai" }, { name: "Emerica" }, { name: "Christian Dior" },
    { name: "Hermes" }, { name: "Chanel" }, { name: "Miu Miu" }, { name: "Celine" }, { name: "Loewe" },
    { name: "The Row" }, { name: "Khaite" }, { name: "Amina Muaddi" }, { name: "Mach & Mach" }, { name: "Rene Caovilla" },
    { name: "Aquazzura" }, { name: "Gianvito Rossi" }, { name: "Sergio Rossi" }, { name: "Giuseppe Zanotti" }, { name: "Sophia Webster" },
    { name: "Nicholas Kirkwood" }, { name: "Charlotte Olympia" }, { name: "Brian Atwood" }, { name: "Pierre Hardy" }, { name: "Roger Vivier" }
  ],
  "Clothing": [
    { name: "Zara" }, { name: "H&M" }, { name: "Uniqlo" }, { name: "Gap" }, { name: "Levi's" }, 
    { name: "Nike" }, { name: "Adidas" }, { name: "Puma" }, { name: "Under Armour" }, { name: "The North Face" },
    { name: "Patagonia" }, { name: "Columbia" }, { name: "Ralph Lauren" }, { name: "Tommy Hilfiger" }, { name: "Calvin Klein" },
    { name: "Lacoste" }, { name: "Hugo Boss" }, { name: "Armani Exchange" }, { name: "Diesel" }, { name: "Guess" },
    { name: "Gucci" }, { name: "Louis Vuitton" }, { name: "Dior" }, { name: "Chanel" }, { name: "Prada" },
    { name: "Versace" }, { name: "Fendi" }, { name: "Burberry" }, { name: "Balenciaga" }, { name: "Saint Laurent" },
    { name: "Givenchy" }, { name: "Valentino" }, { name: "Dolce & Gabbana" }, { name: "Alexander McQueen" }, { name: "Off-White" },
    { name: "Stone Island" }, { name: "Moncler" }, { name: "Canada Goose" }, { name: "Supreme" }, { name: "Bape" },
    { name: "ASOS" }, { name: "Boohoo" }, { name: "PrettyLittleThing" }, { name: "Fashion Nova" }, { name: "Shein" },
    { name: "Mango" }, { name: "Bershka" }, { name: "Pull & Bear" }, { name: "Stradivarius" }, { name: "Massimo Dutti" },
    { name: "Oysho" }, { name: "Next" }, { name: "Marks & Spencer" }, { name: "Primark" }, { name: "Topshop" },
    { name: "River Island" }, { name: "New Look" }, { name: "Urban Outfitters" }, { name: "Anthropologie" }, { name: "Free People" },
    { name: "J.Crew" }, { name: "Banana Republic" }, { name: "Old Navy" }, { name: "American Eagle" }, { name: "Abercrombie & Fitch" },
    { name: "Hollister" }, { name: "Aeropostale" }, { name: "Superdry" }, { name: "Ted Baker" }, { name: "Reiss" },
    { name: "AllSaints" }, { name: "Karen Millen" }, { name: "Whistles" }, { name: "Hobbs" }, { name: "Phase Eight" },
    { name: "Coast" }, { name: "Monsoon" }, { name: "Accessorize" }, { name: "FatFace" }, { name: "White Stuff" },
    { name: "Boden" }, { name: "Joules" }, { name: "Jack Wills" }, { name: "Barbour" }, { name: "Belstaff" },
    { name: "Fred Perry" }, { name: "Ben Sherman" }, { name: "Paul Smith" }, { name: "Vivienne Westwood" }, { name: "Alexander Wang" },
    { name: "3.1 Phillip Lim" }, { name: "Acne Studios" }, { name: "A.P.C." }, { name: "Ami" }, { name: "Kenzo" },
    { name: "Maison Kitsune" }, { name: "Comme des Garcons" }, { name: "Issey Miyake" }, { name: "Yohji Yamamoto" }, { name: "Rick Owens" },
    { name: "Raf Simons" }, { name: "Jil Sander" }, { name: "Marni" }, { name: "Stella McCartney" }, { name: "Victoria Beckham" },
    { name: "The Row" }, { name: "Celine" }, { name: "Loewe" }, { name: "Bottega Veneta" }, { name: "Jacquemus" },
    { name: "Ganni" }, { name: "Reformation" }, { name: "Realisation Par" }, { name: "Rouje" }, { name: "Sezane" },
    { name: "Sandro" }, { name: "Maje" }, { name: "Claudie Pierlot" }, { name: "The Kooples" }, { name: "Zadig & Voltaire" }
  ],
  "Bags": [
    { name: "Hermès" }, { name: "Chanel" }, { name: "Louis Vuitton" }, { name: "Gucci" }, { name: "Prada" },
    { name: "Dior" }, { name: "Saint Laurent" }, { name: "Fendi" }, { name: "Bottega Veneta" }, { name: "Balenciaga" },
    { name: "Celine" }, { name: "Loewe" }, { name: "Valentino" }, { name: "Givenchy" }, { name: "Burberry" },
    { name: "Chloe" }, { name: "Mulberry" }, { name: "Michael Kors" }, { name: "Coach" }, { name: "Tory Burch" },
    { name: "Kate Spade" }, { name: "Marc Jacobs" }, { name: "Longchamp" }, { name: "Furla" }, { name: "Rebecca Minkoff" },
    { name: "Guess" }, { name: "Aldo" }, { name: "Charles & Keith" }, { name: "Zara" }, { name: "H&M" },
    { name: "Goyard" }, { name: "Moynat" }, { name: "Delvaux" }, { name: "Valextra" }, { name: "Faure Le Page" },
    { name: "Polène" }, { name: "Mansur Gavriel" }, { name: "Staud" }, { name: "Cult Gaia" }, { name: "Jacquemus" },
    { name: "By Far" }, { name: "Telfar" }, { name: "Brandon Blackwood" }, { name: "JW Anderson" }, { name: "Proenza Schouler" },
    { name: "3.1 Phillip Lim" }, { name: "Alexander Wang" }, { name: "Stella McCartney" }, { name: "Marni" }, { name: "Jil Sander" },
    { name: "The Row" }, { name: "Khaite" }, { name: "Savette" }, { name: "Métier" }, { name: "Toteme" },
    { name: "Lemaire" }, { name: "Alaïa" }, { name: "Themoirè" }, { name: "Yuzefi" }, { name: "Danse Lente" },
    { name: "Boyy" }, { name: "Osoi" }, { name: "Cafuné" }, { name: "Senreve" }, { name: "Strathberry" },
    { name: "Aspinal of London" }, { name: "DeMellier" }, { name: "Wandler" }, { name: "A.P.C." }, { name: "Dragon Diffusion" },
    { name: "Hereu" }, { name: "Neous" }, { name: "Aesther Ekme" }
  ],
  "Watches": [
    { name: "Rolex" }, { name: "Patek Philippe" }, { name: "Audemars Piguet" }, { name: "Richard Mille" }, { name: "Vacheron Constantin" },
    { name: "Cartier" }, { name: "Omega" }, { name: "Tag Heuer" }, { name: "Hublot" }, { name: "Breitling" },
    { name: "IWC Schaffhausen" }, { name: "Jaeger-LeCoultre" }, { name: "Panerai" }, { name: "Tudor" }, { name: "Longines" },
    { name: "Tissot" }, { name: "Seiko" }, { name: "Casio" }, { name: "G-Shock" }, { name: "Citizen" },
    { name: "Orient" }, { name: "Hamilton" }, { name: "Bulova" }, { name: "Movado" }, { name: "Rado" },
    { name: "Fossil" }, { name: "Michael Kors" }, { name: "Diesel" }, { name: "Emporio Armani" }, { name: "Guess" },
    { name: "Timex" }, { name: "Swatch" }, { name: "Garmin" }, { name: "Apple" }, { name: "Samsung" },
    { name: "Zenith" }, { name: "Blancpain" }, { name: "Breguet" }, { name: "Chopard" }, { name: "Piaget" },
    { name: "Ulysse Nardin" }, { name: "Girard-Perregaux" }, { name: "Franck Muller" }, { name: "Bell & Ross" }, { name: "Baume & Mercier" },
    { name: "Maurice Lacroix" }, { name: "Oris" }, { name: "Montblanc" }, { name: "Nomos Glashutte" }, { name: "Frederique Constant" },
    { name: "Raymond Weil" }, { name: "Victorinox" }, { name: "Wenger" }, { name: "Luminox" }, { name: "Skagen" },
    { name: "Nixon" }, { name: "Invicta" }, { name: "Anne Klein" }, { name: "Coach" }, { name: "Kate Spade" },
    { name: "Tommy Hilfiger" }, { name: "Hugo Boss" }, { name: "Lacoste" }, { name: "Versace" }, { name: "Gucci" },
    { name: "Fendi" }, { name: "Dior" }, { name: "Chanel" }, { name: "Louis Vuitton" }, { name: "Hermes" },
    { name: "Bulgari" }, { name: "Tiffany & Co" }, { name: "FitBit" }, { name: "Amazfit" }, { name: "Suunto" }, { name: "Polar" }
  ],
  "Cars": [
    { name: "Toyota", models: ["Camry", "Corolla", "RAV4", "Highlander", "Land Cruiser", "Land Cruiser Prado", "Sienna", "Venza", "Yaris", "Avalon", "Tacoma", "Tundra", "4Runner", "Sequoia", "Prius", "C-HR", "Hilux", "Hiace", "Supra", "Matrix"] },
    { name: "Honda", models: ["Accord", "Civic", "CR-V", "Pilot", "Odyssey", "City", "Crosstour", "HR-V", "Ridgeline", "Fit", "Element", "Insight", "Passport"] },
    { name: "Mercedes-Benz", models: ["C-Class", "E-Class", "S-Class", "G-Class", "GLE", "GLC", "GLA", "GLS", "CLA", "CLS", "A-Class", "B-Class", "M-Class", "GLK", "V-Class", "Sprinter", "AMG GT", "SL-Class", "SLK"] },
    { name: "Lexus", models: ["RX 350", "RX 330", "RX 300", "RX 450h", "ES 350", "ES 330", "ES 300", "GX 460", "GX 470", "LX 570", "LX 470", "IS 250", "IS 350", "NX 200t", "NX 300", "LS 460", "LS 430", "GS 350", "GS 300"] },
    { name: "Ford", models: ["Explorer", "Edge", "F-150", "Ranger", "Mustang", "Focus", "Escape", "Expedition", "Fusion", "EcoSport", "Fiesta", "Everest", "Taurus", "Transit"] },
    { name: "BMW", models: ["3 Series", "5 Series", "7 Series", "X3", "X5", "X6", "X1", "X7", "X4", "4 Series", "M3", "M5", "1 Series", "2 Series", "Z4", "i8", "i3"] },
    { name: "Hyundai", models: ["Elantra", "Sonata", "Tucson", "Santa Fe", "Accent", "Palisade", "Kona", "Venue", "Veloster", "Azera", "Genesis", "Creta", "i10", "H-1"] },
    { name: "Kia", models: ["Rio", "Sportage", "Sorento", "Optima", "Cerato", "Picanto", "Telluride", "Seltos", "Soul", "Forte", "Mohave", "Carnival", "Stinger"] },
    { name: "Volkswagen", models: ["Golf", "Passat", "Jetta", "Tiguan", "Touareg", "Polo", "CC", "Atlas", "Beetle", "T-Roc", "Transporter"] },
    { name: "Land Rover", models: ["Range Rover", "Range Rover Sport", "Range Rover Evoque", "Range Rover Velar", "Defender", "Discovery", "Discovery Sport", "Freelander"] },
    { name: "Nissan", models: ["Altima", "Maxima", "Pathfinder", "Rogue", "Sentra", "Versa", "Murano", "Armada", "Frontier", "Titan", "Xterra", "Qashqai", "Sunny", "Tiida"] },
    { name: "Peugeot", models: ["307", "406", "508", "3008", "206", "207", "407", "607", "5008", "208", "301", "Partner"] },
    { name: "Mazda", models: ["CX-5", "CX-9", "Mazda3", "Mazda6", "CX-3", "CX-30", "CX-7", "MX-5 Miata", "Tribute", "MPV"] },
    { name: "Mitsubishi", models: ["Pajero", "Outlander", "Lancer", "Eclipse Cross", "ASX", "L200", "Montero", "Mirage", "Galant"] },
    { name: "Acura", models: ["MDX", "RDX", "TL", "TSX", "TLX", "ZDX", "ILX", "RL", "RSX"] },
    { name: "Audi", models: ["Q7", "Q5", "Q3", "A4", "A6", "A8", "A3", "A5", "A7", "Q8", "TT", "R8"] },
    { name: "Chevrolet", models: ["Camaro", "Equinox", "Malibu", "Cruze", "Tahoe", "Suburban", "Silverado", "Traverse", "Corvette", "Aveo", "Spark"] },
    { name: "Jeep", models: ["Wrangler", "Grand Cherokee", "Cherokee", "Compass", "Renegade", "Gladiator", "Liberty", "Patriot"] }
  ],
  "Gaming Consoles": [
    { name: "Sony", models: ["PlayStation 5 Slim", "PlayStation 5", "PlayStation 4 Pro", "PlayStation 4 Slim", "PlayStation 4", "PlayStation 3", "PlayStation Vita", "PSP"] },
    { name: "Microsoft", models: ["Xbox Series X", "Xbox Series S", "Xbox One X", "Xbox One S", "Xbox One", "Xbox 360"] },
    { name: "Nintendo", models: ["Switch OLED", "Switch", "Switch Lite", "Wii U", "Wii", "3DS", "2DS", "DS"] },
    { name: "Valve", models: ["Steam Deck OLED", "Steam Deck"] },
    { name: "Asus", models: ["ROG Ally"] },
    { name: "Lenovo", models: ["Legion Go"] },
    { name: "Logitech", models: ["G Cloud"] }
  ],
  "Televisions": [
    { name: "Samsung" }, { name: "LG" }, { name: "Sony" }, { name: "Hisense" }, { name: "TCL" }, 
    { name: "Panasonic" }, { name: "Philips" }, { name: "Sharp" }, { name: "Toshiba" }, { name: "Vizio" },
    { name: "Infinix" }, { name: "Polystar" }, { name: "Bruhm" }, { name: "Maxi" }, { name: "Royal" }, { name: "Scanfrost" }
  ],
  "Cameras": [
    { name: "Canon" }, { name: "Nikon" }, { name: "Sony" }, { name: "Fujifilm" }, { name: "Panasonic" }, 
    { name: "Olympus" }, { name: "GoPro" }, { name: "DJI" }, { name: "Leica" }, { name: "Pentax" }, { name: "Insta360" }
  ],
  "Audio Equipment": [
    { name: "Sony" }, { name: "JBL" }, { name: "Bose" }, { name: "Sennheiser" }, { name: "Beats" }, 
    { name: "Apple" }, { name: "Samsung" }, { name: "Bang & Olufsen" }, { name: "Harman Kardon" }, { name: "Marshall" },
    { name: "Anker Soundcore" }, { name: "Logitech" }, { name: "Razer" }, { name: "HyperX" }, { name: "SteelSeries" },
    { name: "Audio-Technica" }, { name: "Beyerdynamic" }, { name: "Shure" }, { name: "Rode" }, { name: "Blue" }
  ]
};

// Helper to check if a subcategory has brand data
export const hasBrands = (subcategory: string): boolean => {
  return subcategory in BRAND_DATA;
};

// Helper to get brands for a subcategory
export const getBrands = (subcategory: string): BrandData[] => {
  return BRAND_DATA[subcategory] || [];
};
