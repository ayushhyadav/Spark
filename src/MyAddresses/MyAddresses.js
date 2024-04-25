import React from 'react'
import './MyAddresses.css'

const MyAddresses = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <div className="My-Addresses">
                        <h1>My-Addresses</h1>
                        <p>Add and manage the addresses you use often.</p>
                    </div>
                    <address className='address'>
                        Kate Sims
                        500 Terry A Francois Blvd
                        San Francisco, California 94158
                        United States
                    </address>
                    <div className="btn-edit d-flex justify-content-between">
                        <div className="update">
                            <a href="#">Edit</a>
                            <a href="#">Remove</a>
                        </div>
                        <div className="default-btn">
                            <p>Default Address</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="addes">
                        <address className='address'>
                            Kate Sims
                            500 Terry A Francois Blvd
                            San Francisco, California 94158
                            United States
                        </address>
                        <div className="btn-edit d-flex justify-content-between">
                            <div className="update">
                                <a href="#">Edit</a>
                                <a href="#">Remove</a>
                            </div>
                            <div className="default-btn">
                                <p>Make this my default</p>
                            </div>
                        </div>
                    </div>
                    <div className="add-new">
                        <a href="#">Add New Address</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAddresses;
