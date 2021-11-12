import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.component.html',
  styleUrls: ['./ejercicio7.component.scss']
})
export class Ejercicio7Component implements OnInit {

  products = [
    {"id":1000,"code":"f230fh0g3","name":"Bamboo Watch","description":"Product Description","price":65,"quantity":24,"state":"INSTOCK","category":"	Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/bamboo-watch.jpg","point":5},
    {"id":1001,"code":"nvklal433","name":"Black Watch","description":"Product Description","price":72,"quantity":61,"state":"INSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/black-watch.jpg","point":4},
    {"id":1002,"code":"zz21cz3c1","name":"Blue Band","description":"Product Description","price":79,"quantity":2,"state":"LOWSTOCK","category":"Fitness","img":"https://blissful-banach-2d121d.netlify.app/assets/img/blue-band.jpg","point":3},
    {"id":1003,"code":"244wgerg2","name":"Blue T-Shirt","description":"Product Description","price":29,"quantity":25,"state":"INSTOCK","category":"Clothing","img":"https://blissful-banach-2d121d.netlify.app/assets/img/blue-t-shirt.jpg","point":5},
    {"id":1004,"code":"h456wer53","name":"Bracelet","description":"Product Description","price":15,"quantity":73,"state":"INSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/bracelet.jpg","point":4},
    {"id":1005,"code":"av2231fwg","name":"Brown Purse","description":"Product Description","price":120,"quantity":0,"state":"OUTOFSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/brown-purse.jpg","point":4},
    {"id":1006,"code":"bib36pfvm","name":"Chakra Bracelet","description":"Product Description","price":32,"quantity":5,"state":"LOWSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/chakra-bracelet.jpg","point":3},
    {"id":1007,"code":"mbvjkgip5","name":"Galaxy Earrings","description":"Product Description","price":34,"quantity":23,"state":"INSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/galaxy-earrings.jpg","point":5},
    {"id":1008,"code":"vbb124btr","name":"Game Controller","description":"Product Description","price":99,"quantity":2,"state":"LOWSTOCK","category":"Electronics","img":"https://blissful-banach-2d121d.netlify.app/assets/img/game-controller.jpg","point":4},
    {"id":1009,"code":"cm230f032","name":"Gaming Set","description":"Product Description","price":299,"quantity":63,"state":"INSTOCK","category":"Electronics","img":"https://blissful-banach-2d121d.netlify.app/assets/img/gaming-set.jpg","point":3},
    {"id":1010,"code":"f230fh0g3","name":"Bamboo Watch","description":"Product Description","price":65,"quantity":24,"state":"INSTOCK","category":"	Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/bamboo-watch.jpg","point":5},
    {"id":1011,"code":"nvklal433","name":"Black Watch","description":"Product Description","price":72,"quantity":61,"state":"INSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/black-watch.jpg","point":4},
    {"id":1012,"code":"zz21cz3c1","name":"Blue Band","description":"Product Description","price":79,"quantity":2,"state":"LOWSTOCK","category":"Fitness","img":"https://blissful-banach-2d121d.netlify.app/assets/img/blue-band.jpg","point":3},
    {"id":1013,"code":"244wgerg2","name":"Blue T-Shirt","description":"Product Description","price":29,"quantity":25,"state":"INSTOCK","category":"Clothing","img":"https://blissful-banach-2d121d.netlify.app/assets/img/blue-t-shirt.jpg","point":5},
    {"id":1014,"code":"h456wer53","name":"Bracelet","description":"Product Description","price":15,"quantity":73,"state":"INSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/bracelet.jpg","point":4},
    {"id":1015,"code":"av2231fwg","name":"Brown Purse","description":"Product Description","price":120,"quantity":0,"state":"OUTOFSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/brown-purse.jpg","point":4},
    {"id":1016,"code":"bib36pfvm","name":"Chakra Bracelet","description":"Product Description","price":32,"quantity":5,"state":"LOWSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/chakra-bracelet.jpg","point":3},
    {"id":1017,"code":"mbvjkgip5","name":"Galaxy Earrings","description":"Product Description","price":34,"quantity":23,"state":"INSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/galaxy-earrings.jpg","point":5},
    {"id":1018,"code":"vbb124btr","name":"Game Controller","description":"Product Description","price":99,"quantity":2,"state":"LOWSTOCK","category":"Electronics","img":"https://blissful-banach-2d121d.netlify.app/assets/img/game-controller.jpg","point":4},
    {"id":1019,"code":"cm230f032","name":"Gaming Set","description":"Product Description","price":299,"quantity":63,"state":"INSTOCK","category":"Electronics","img":"https://blissful-banach-2d121d.netlify.app/assets/img/gaming-set.jpg","point":3},
    {"id":1020,"code":"f230fh0g3","name":"Bamboo Watch","description":"Product Description","price":65,"quantity":24,"state":"INSTOCK","category":"	Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/bamboo-watch.jpg","point":5},
    {"id":1021,"code":"nvklal433","name":"Black Watch","description":"Product Description","price":72,"quantity":61,"state":"INSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/black-watch.jpg","point":4},
    {"id":1022,"code":"zz21cz3c1","name":"Blue Band","description":"Product Description","price":79,"quantity":2,"state":"LOWSTOCK","category":"Fitness","img":"https://blissful-banach-2d121d.netlify.app/assets/img/blue-band.jpg","point":3},
    {"id":1023,"code":"244wgerg2","name":"Blue T-Shirt","description":"Product Description","price":29,"quantity":25,"state":"INSTOCK","category":"Clothing","img":"https://blissful-banach-2d121d.netlify.app/assets/img/blue-t-shirt.jpg","point":5},
    {"id":1024,"code":"h456wer53","name":"Bracelet","description":"Product Description","price":15,"quantity":73,"state":"INSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/bracelet.jpg","point":4},
    {"id":1025,"code":"av2231fwg","name":"Brown Purse","description":"Product Description","price":120,"quantity":0,"state":"OUTOFSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/brown-purse.jpg","point":4},
    {"id":1026,"code":"bib36pfvm","name":"Chakra Bracelet","description":"Product Description","price":32,"quantity":5,"state":"LOWSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/chakra-bracelet.jpg","point":3},
    {"id":1027,"code":"mbvjkgip5","name":"Galaxy Earrings","description":"Product Description","price":34,"quantity":23,"state":"INSTOCK","category":"Accessories","img":"https://blissful-banach-2d121d.netlify.app/assets/img/galaxy-earrings.jpg","point":5},
    {"id":1028,"code":"vbb124btr","name":"Game Controller","description":"Product Description","price":99,"quantity":2,"state":"LOWSTOCK","category":"Electronics","img":"https://blissful-banach-2d121d.netlify.app/assets/img/game-controller.jpg","point":4},
    {"id":1029,"code":"cm230f032","name":"Gaming Set","description":"Product Description","price":299,"quantity":63,"state":"INSTOCK","category":"Electronics","img":"https://blissful-banach-2d121d.netlify.app/assets/img/gaming-set.jpg","point":3},
  ]

  first = 0;

  rows = 10;

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.products ? this.first === (this.products.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.products ? this.first === 0 : true;
}

}
