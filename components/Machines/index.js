import Title from "../Generic/title";
import Machine from "./machine";

export default function Machines({ url, day, setDay, selectedPlan, setSelectedPlan, plans, machines, prices, referrer, coupon }) {
  return (
    <section className="mt-8" id="planos">
      <div className="flex flex-col gap-4 md:gap-8 items-center">
        <Title title="Escolha sua Maquininha" />
        <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1280px]">
          {Object.entries(machines).map(([machine, values]) => (
            <Machine url={url} referrer={referrer} coupon={coupon} key={machine} machine={machine} values={values} prices={prices[selectedPlan][machine]} plan={plans[selectedPlan]} day={day} />
          ))}
        </div>
      </div>
    </section>
  )
}
