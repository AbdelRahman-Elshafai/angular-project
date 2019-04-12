import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product: Product[] = [
    {
      "id": "HT-1042",
      "category": "Printers",
      "description": "Print up to 25 ppm letter and 24 ppm A4 color or monochrome, with Available first-page-out-time of less than 13 seconds for monochrome and less than 15 seconds for color",
      "name": "Laser Allround",
      "image": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1042.jpg",
      "price": 349,
      "wished": false,
      "purchased": false
    }
    ,{
      "id": "HT-1000",
      "category": "Laptops",
      "description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      "name": "Notebook Basic 15",
      "image": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
      "price": 956,
      "wished": false,
      "purchased": false
    },
    {
      "id": "HT-1042",
      "category": "Printers",
      "description": "Print up to 25 ppm letter and 24 ppm A4 color or monochrome, with Available first-page-out-time of less than 13 seconds for monochrome and less than 15 seconds for color",
      "name": "Laser Allround",
      "image": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1042.jpg",
      "price": 349,
      "wished": false,
      "purchased": false
    }
    ,
    {
      "id": "HT-1001",
      "category": "Laptops",
      "description": "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      "name": "Notebook Basic 17",
      "image": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg",
      "price": 1249,
      "wished": false,
      "purchased": false

    },
    {
      "id": "HT-1002",
      "category": "Laptops",
      "description": "Notebook Basic 18 with 2,80 GHz quad core, 18\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
      "name": "Notebook Basic 18",
      "image": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1002.jpg",
      "price": 1570,
      "wished": false,
      "purchased": false

    }, 
    {
      "id": "HT-1000",
      "category": "Laptops",
      "description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
      "name": "Notebook Basic 15",
      "image": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
      "price": 956,
      "wished": false,
      "purchased": false
    },
    {
      "id": "HT-1003",
      "category": "Laptops",
      "description": "Notebook Basic 19 with 2,80 GHz quad core, 19\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
      "name": "Notebook Basic 19",
      "image": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1003.jpg",
      "price": 1650,
      "wished": false,
      "purchased": false
    },
    {
      "id": "HT-1007",
      "category": "Accessories",
      "description": "Digital Organizer with State-of-the-Art Storage Encryption",
      "name": "ITelO Vault",
      "image": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1007.jpg",
      "price": 299,
      "wished": false,
      "purchased": false
    },
    {
      "id": "HT-1040",
      "category": "Printers",
      "description": "Print 2400 dpi image quality color documents at speeds of up to 32 ppm (color) or 36 ppm (monochrome)",
      "name": "Laser Professional Eco",
      "image": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1040.jpg",
      "price": 830,
      "wished": false,
      "purchased": false
    },
    {
      "id": "HT-1041",
      "category": "Printers",
      "description": "Up to 22 ppm color or 24 ppm monochrome A4/letter, powerful 500 MHz processor and 128MB of memory",
      "name": "Laser Basic",
      "image": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1041.jpg",
      "price": 490,
      "wished": false,
      "purchased": false
    },
    {
      "id": "HT-1042",
      "category": "Printers",
      "description": "Print up to 25 ppm letter and 24 ppm A4 color or monochrome, with Available first-page-out-time of less than 13 seconds for monochrome and less than 15 seconds for color",
      "name": "Laser Allround",
      "image": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1042.jpg",
      "price": 349,
      "wished": false,
      "purchased": false
    },
    {
      "id": "HT-1050",
      "category": "Printers",
      "description": "4800 dpi x 1200 dpi - up to 35 ppm (mono) / up to 34 ppm (color) - capacity: 250 sheets - Hi-Speed USB, Ethernet",
      "name": "Ultra Jet Super Color",
      "image": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1050.jpg",
      "price": 139,
      "wished": false,
      "purchased": false
    }

  ];
  constructor() { }
  
  getProducts(): Product[]{
    return this.product;
  }
  setProducts(products:Product[]){
    this.product = products;
  }
  
}
