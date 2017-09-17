import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product(1, '第1个商品', 1.99, 3.5, '这是第1个商品，angularjs', ['电子产品', '通讯设备']),
    new Product(2, '第2个商品', 2.99, 2.5, '这是第2个商品，angularjs', ['图书', '通讯设备']),
    new Product(3, '第3个商品', 3.99, 4.5, '这是第3个商品，angularjs', ['电子产品']),
    new Product(4, '第4个商品', 4.99, 1.5, '这是第4个商品，angularjs', ['通讯设备']),
    new Product(5, '第5个商品', 2.99, 2.5, '这是第5个商品，angularjs', ['电子产品', '图书']),
    new Product(6, '第6个商品', 6.99, 3.5, '这是第6个商品，angularjs', ['电子产品', '通讯设备']),
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 22:22:22', '张三', 3, '东西不错'),
    new Comment(2, 1, '2017-03-02 22:22:22', '李四', 3, '东西还不错'),
    new Comment(3, 1, '2017-04-02 22:22:22', '王五', 3, '东西有问题'),
    new Comment(4, 2, '2017-05-02 22:22:22', '妞妞', 3, '东懂懂不错'),
  ];
  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}

export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string
  ) {

  }
}
