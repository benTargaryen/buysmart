import {Option} from "../model/option"
import {Review} from "../model/review"

export interface Product{
    id: string;
    category_id: number;
    name: string;
    price: number;
    sale_price: number;
    shipping: number;
    num_orders: number;
    rating: number;
    num_wish_list: number;
    on_wish_list: boolean;
    thumbnail: string;
    images: Array<string>;
    short_description: string;
    description: string;
    option_group: Array<Option>
    review: Array<Review>
}


