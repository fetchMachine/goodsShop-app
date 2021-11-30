import {getCategories} from "../store"
import {getGoodsCategory} from "../store"

interface Good {
  id: string;
  label: string;
  type: string;
  category_type: string;
  price: number;
  img: string;
  description: string;
}
class Api {
  getMenuCategories(): Promise< getCategories[]> {
    return fetch("/api/catigories").then((r) => {
      if (r.ok) {
        return r.json();
      }
    });
  }
}
class Api {
    getMenuCategories(): Promise<getGoodsCategory []> {
      return fetch("/api/goodsCatigories").then((r) => {
        if (r.ok) {
          return r.json();
        }
      });
    }
  }