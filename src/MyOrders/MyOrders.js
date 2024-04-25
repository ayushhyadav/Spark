import React from 'react'
import './MyOrders.css'

const MyOrders = () => {
    return (
        <div className='bg-banner'>
            <img src='assets/bg-my-oder.jpg' />
            <div className=' g-banner-icon d-flex align-items-center'>
                <img src='assets/user.png' />
                <h2>User Name</h2>
            </div>
            <div>
                <header>

                    <div class="max-w-[100%]  grid grid-cols-3  mt-2 gap-5 h-12 mx-12 p-1 text-center   ">
                        <a href="Myorders.html" target="_self"
                            class="hover:text-lime-800"><b> My Orders </b> </a>
                        <a href="MyAddress.html" target="_self"
                            class="hover:text-lime-800"><b>My Addresses </b></a>
                        <a href="MyAccountPage.html" target="_self"
                            class="hover:text-lime-800 "><b>My Account </b></a>
                    </div>

                </header>
                <section class="max-w-[100%] mx-28  xsm:mx-0">
                    <div class="My-order  mx-12 p-7">
                        <h1 class="hidden sm:block text-lg "><b>My Orders</b></h1>
                        <p class="hidden sm:block">View your order History or check the status of a recent order.</p>
                    </div>
                    <div className='laced-orders text-center'>
                        <h3>You haven't placed any orders yet.</h3>
                        <div className="Browsings text-center">
                            <a href="">Start Browsing</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MyOrders
