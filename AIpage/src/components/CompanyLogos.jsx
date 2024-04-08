import { companyLogos } from "../constants"

const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
        <h5 className="mb-6 tagline text-center text-n-1/50">
            helping people create beautiful content 
        </h5>
        <ul className="flex">
            {companyLogos.map((logo , index)=>(
                <li className="flex items-center justify-center flex-1 h-[8.5rem]  " key={index}>
                    <img src={logo} alt={logo} width={94} height={28} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CompanyLogos

