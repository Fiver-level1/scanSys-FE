import React from 'react'
import './pageNotFound.css'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <section className="page_404">
            <div className="404Wrapper">
                <div className="404Content">
                    <div className="404Heading">
                        <div className="four_zero_four_bg">
                            <h1 className="text-center">404</h1>
                        </div>

                        <div className="contant_box_404">
                            <h3 className="h2">Looks like you're lost</h3>
                            <p>The page you are looking for is not available!</p>
                            <Link to="/" className="link_404">
                                Go to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageNotFound
