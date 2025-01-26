import React from 'react'
import Header from '../../../components/TeamPage/Header'
import TeamMember from '../../../components/TeamPage/TeamMember'
import DonationCard from '../../../components/DonationCard'

export default function page() {
  return (
    <div className=''>
      <Header />
      <TeamMember />
      <div className="relative flex mx-auto mt-10 mb-20 max-w-screen-2xl px-8 md:px-12 lg:px-16 xl:px-20">
        <DonationCard />
      </div>
    </div>
  )
}
