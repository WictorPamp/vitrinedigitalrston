import Image from 'next/image'
import Link from 'next/link'

export default function Cards({ day, plan, planIndex, selectedPlan, setSelectedPlan }) {
  return (
    <label onClick={() => setSelectedPlan(planIndex)} className={`flex overflow-hidden flex-col rounded-2xl border cursor-pointer text-center border-${plan.borderColor}`}>
      <div className="flex flex-col h-full cursor-pointer">
        <div className={`bg-${plan.background} text-${plan.color} flex flex-col gap-3 py-4 h-full justify-between`}>
          <div className="flex gap-2 px-4">
            <div className="w-full text-left">
              <div className="flex gap-2 items-center">
                <input type="radio" name="selectedPlanId" id={planIndex} value={planIndex} readOnly={true} checked={selectedPlan === planIndex} />
                <h5 className="font-ton font-bold text-2xl">{plan.title}</h5>
              </div>
              <span className="text-left">{plan.description}</span>
            </div>
            <div className="w-[64px]">
              <Image
                alt="Taxa 0 no Pix"
                width="128"
                height="128"
                src="https://res.cloudinary.com/dunz5zfpt/f_auto,c_limit,w_256,q_auto/site-ton/taxapixqrcode" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center p-2">
            <div className="flex flex-col justify-between w-full text-center text-2xl font-ton">
              <b className="text-center text-sm">DÉBITO</b>
              <b className="text-center font-ton text-ton-200 text-2xl">{plan[day].debit}%</b>
            </div>
            <div className="flex flex-col justify-between w-full text-center text-2xl font-ton">
              <b className="text-center text-sm">CRÉDITO</b>
              <b className="text-center font-ton text-ton-200 text-2xl">{plan[day].credit}%</b>
            </div>
            <div className="flex flex-col justify-between w-full text-center text-2xl font-ton">
              <b className="text-center text-sm white">CRÉDITO 12X</b>
              <b className="text-center font-ton text-ton-200 text-2xl">{plan[day].credit12}%</b>
            </div>
          </div>
        </div>
      </div>
    </label>
  )
}
