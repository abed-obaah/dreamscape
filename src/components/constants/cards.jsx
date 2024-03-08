import group10 from "../../assets/Group 10.png" 
import group11 from "../../assets/Group 11.png" 
import group12 from "../../assets/Group 12.png" 
import group13 from "../../assets/Group 9.png" 
import group14 from "../../assets/group 6.png" 
import group15 from "../../assets/Group 13.png" 
import { Link } from 'react-router-dom';

const people = [
  {
    name: 'Cell animation',
    title: 'Sitemap',
    role: 'fintech animation',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
    group10,
    color:"#222222"
  },
  {
    name: 'Cell animation',
    title: 'Sitemap',
    role: 'fintech animation',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
    group11,
    color:"#AAAAAA"
  },
  {
    name: 'Character animation',
    title: 'Sitemap',
    role: 'Explainer video for Sitemap',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
    group12,
    color:"blue" 
  },
  {
    name: 'Cell animation',
    title: 'Sitemap',
    role: 'fintech animation',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
    group13,
    color:"#333333"
  },
  {
    name: 'Character animation',
    title: 'Sitemap',
    role: 'Explainer video for Sitemap',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
    group14,
    color:"#333333"
  },
  {
    name: 'Video Testimonial',
    title: 'Sitemap',
    role: 'fintech animation',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
    group15,
    color:"#333333"
  },
]

export default function Cards() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
            <ul role="list" className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
      {people.map((person) => (
        <Link to={{
          pathname: `/Projects/${person.name.replace(/\s+/g, '-')}`,
          state: { color: person.color } // Passing color in state
        }} 
         key={person.email}>
                <li
                key={person.email}
                className=" mt-10 col-span-1 flex flex-col divide-y divide-gray-700 rounded-lg bg-transparent shadow"
                >
                <div className="flex flex-1 flex-col p-2">
                    <img className=" h-[483.13] w-[636] flex-shrink-0 rounded" src={person.imageUrl} alt="" />
                    <h3 className="mt-6 text-sm font-medium text-gray-600 text-left">{person.name}</h3>
                    <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dd className="text-2xl text-gray-200 font-semibold text-left">{person.title}</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3 text-left">
                        <span className=" text-left inline-flex py-1 text-sm font-medium text-gray-300">
                        {person.role}
                        </span>
                    </dd>
                    </dl>
                </div>
                
                </li>
        </Link>
      ))}
    </ul>
    </div>
    </div>
    
  )
}
