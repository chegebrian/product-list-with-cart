
import { useDessertsApi } from "../contexts/DataContext"
import ConfirmedOrders from "./ConfirmedOrders"

function ConfirmOrder() {
    const formatter = new Intl.NumberFormat("en-us", { style: "currency", currency: "USD" })
    const { cart } = useDessertsApi()
    const cost = cart?.map((item) => item.quantity * item.price)
    const totalCost = cost.reduce((acc, curr) => acc + curr, 0)
    return (
        <section className="rounded-lg max-w-96  px-4 py-2">
            <div>
                <img src="/assets/images/icon-order-confirmed.svg" alt="confirm-icon" />
                <h3 className='text-2xl font-semibold text-amber-950 capitalize'>order confirmed</h3>
                <p>We hope you enjoy your food!</p>
            </div>
            <div>
                <ConfirmedOrders />
                <div className="flex items-center justify-between">
                    <span className="capitalize text-amber-900">order total</span>
                    <span className="text-amber-950 text-lg font-semibold">{formatter.format(totalCost)}</span>
                </div>

            </div>
            {/* <button className='capitalize bg-amber-600 cursor-pointer rounded-full py-2 px-4 text-amber-50 font-semibold'>start new order</button> */}
        </section>
    )
}

export default ConfirmOrder