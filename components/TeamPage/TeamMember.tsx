import React from 'react'
import TeamInformation from './TeamInformation'

export default function TeamMember() {
    return (
        <div className='relative z-40 -mt-64 px-20 mb-20'>
            <h1 className='font-extrabold text-4xl text-center font-montserrat py-8'>ICAF Team Members</h1>
            <p className='px-24 font-openSans text-base leading-6'>
                Each member of our team plays a crucial role in supporting ICAF’s initiatives and delivering impactful programs. With expertise across various fields, they bring unique perspectives and skills to our mission of enriching children’s lives.</p>
            <div className='relative flex flex-col justify-center items-center pt-12'>
                {
                    TeamInformation.map(member => (
                        <div key={member.title}>
                            <span className='italic underline underline-offset-2'>{member.title}</span>: {typeof member.names === 'string' ? member.names : member.names.map((name, index) => name).join(', ')}
                        </div>
                    ))
    }
            </div>
        </div>
    )
}
