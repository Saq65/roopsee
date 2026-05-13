import React from 'react'
import WelcomeSection from './home/WelcomeSection'
import PersonalizeSection from './home/PersonalizeSectin'
import ShopByProduct from './home/ShopByProduct'

function Home() {
  return (
    <div>
        <WelcomeSection />  
        <PersonalizeSection/>
        <ShopByProduct/>  
    </div>
  )
}

export default Home