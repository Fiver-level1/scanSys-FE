import React from 'react'
import FAQ from './FAQ'
import './help.css'
import BackNavigate from '../BackNavgate/BackNavigate'
const Help = () => {

    return (
        <section className="HelpContainer">
            <div className="HelpWrapper">
                <BackNavigate />
                <FAQ />
            </div>
        </section>
    )
}

export default Help
