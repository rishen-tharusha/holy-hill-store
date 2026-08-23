import AddressCard from './AddressCard';
import BusinessHours from './BusinessHours';

export default function ContactInformartion() {
  return (
    <section className="px-6 py-14 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-5">
          <AddressCard />

          <BusinessHours />
        </div>
      </section>
  )
}
