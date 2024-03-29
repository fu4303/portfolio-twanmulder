import twan from "../assets/twan_transparent.png"

export default function About() {
  return (
    <section className="sticky self-start hidden top-20 md:block" style={{ maxWidth: "180px", marginTop: "75px" }}>
      <div className="mb-8 overflow-hidden rounded-sm " style={{ background: "linear-gradient(45deg, #ff9633, #FFC300)" }}>
        <img src={twan} width="180px" height="180px" alt="headshot of Twan Mulder" />
      </div>
      <p className="mb-1 text-sm tracking-wide text-gray-500 uppercase">About</p>
      <h2 className="mb-1 font-bold">Twan Mulder</h2>
      <p className="text-sm text-gray-500">Developer & Product Specialist who loves writing and creating enticing experiences | Employed at Framer</p>
    </section>
  )
}
