import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Common/Navbar';

const DashboardLayout = () => {
    const buyerMenu = <>
        <Link>My Order</Link>
        <Link>Wishish</Link>
    </>
    const sellerMenu = <>
        <Link>My product</Link>
        <Link>Add Product</Link>
        <Link>My Buyer </Link>
    </>
    const adminMenu = <>
        <Link>All Seller</Link>
        <Link>My Buyer </Link>
        <Link>Reported Product</Link>
    </>
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-end drawer-mobile">
                <input id="dashboard-layout" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-layout" className="drawer-overlay"></label>
                    <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                        <li>
                            <Link>

                                Item 2
                            </Link>
                        </li>
                        <li>
                            <Link>

                                Item 1
                            </Link>
                        </li>
                        <li>
                            <Link>

                                Item 3
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;