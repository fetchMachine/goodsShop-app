interface Goods {
  id: number;
  label: string;
  category_type: string;
  img: string;
  price: number;
  description: string;
}
interface Category {
  id: number,
  label: string,
  type: string,
}



export class Api {
  getDataGoods(): Promise<{ items: Goods[] }> {
    return fetch("/api/good").then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    });
  }

  getDataCategory(): Promise<{ categories: Category[] }> {
    return fetch("/api/categoties").then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    });
  }

  getDataPopularCategory(id?: number): Promise<{category: Category[] }> {
    return fetch(`/api/popular_categories?id=${id}`).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    });
  }

  getDataCart() {
    return fetch('/api/cart').then(r => {
        if (r.ok) {
            return r.json()
        }
    })
}
}
