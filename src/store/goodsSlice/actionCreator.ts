import { GOODS_ACTIONS } from './constants'
import { Goods } from './types'
import { Api } from '../../api'


export const getGoods = () => ({ type: GOODS_ACTIONS.GET_GOODS })

export const getGoodsSuccess = (goods: Goods[]) => ({
    type: GOODS_ACTIONS.GET_GOODS_SUCCESS,
    payload: goods
})

export const getGoodsFailure = () => ({ type: GOODS_ACTIONS.GET_GOODS_FAILURE })



export const fetchGoods = () => async function (Dispatch: (arg0: { type: GOODS_ACTIONS; payload?: Goods[] }) => void)  {
    Dispatch(getGoods())
    new Api().getDataGoods().then((data) => Dispatch(getGoodsSuccess(data.items))).catch(() => Dispatch(getGoodsFailure()))
}