'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Arena() {
  const tracks = [
    {
      title: "Artificial Intelligence",
      tag: "AI / ML",
      description: "Build systems that think, learn, and adapt. From intelligent agents to predictive models — redefine what machines can do."
    },
    {
      title: "Cybersecurity",
      tag: "Security",
      description: "In a world built on data, trust is infrastructure. Hack the problem before someone else exploits it."
    },
    {
      title: "Web & App Development",
      tag: "Web / App",
      description: "Design and engineer experiences that millions of people will use. Ship something real, something beautiful."
    },
    {
      title: "Robotics & IoT",
      tag: "Robotics",
      description: "Bring intelligence into the physical world. Sensors, actuators, and the code that connects them."
    }
  ];

  const rules = [
    { label: 'Team Size', value: '2 – 4 members per team' },
    { label: 'Duration', value: '36 hours of building' },
    { label: 'Submissions', value: 'Working prototype + 5-min pitch' },
    { label: 'Eligibility', value: 'Open to all college students' },
    { label: 'Originality', value: 'All code must be written during the event' },
    { label: 'Tools', value: 'No restrictions on languages or frameworks' },
  ];

  const judging = [
    { criterion: 'Innovation', weight: '30%', description: 'How original and creative is the solution? Does it take a fresh angle on the problem?' },
    { criterion: 'Impact', weight: '25%', description: 'How meaningful is the solution? Would it change something real for real people?' },
    { criterion: 'Technical Execution', weight: '25%', description: 'Is the prototype functional? How clean and scalable is the implementation?' },
    { criterion: 'Presentation', weight: '20%', description: 'Can you clearly communicate the problem, solution, and potential in 5 minutes?' },
  ];

  const schedule = [
    { day: 'Day 1', events: [
      { time: '09:00 AM', label: 'Opening ceremony & keynote' },
      { time: '10:00 AM', label: 'Problem statements revealed' },
      { time: '11:00 AM', label: 'Build sprint begins' },
      { time: '03:00 PM', label: 'Workshop: Rapid Prototyping' },
      { time: '07:00 PM', label: 'Mentor sessions' },
    ]},
    { day: 'Day 2', events: [
      { time: '09:00 AM', label: 'Morning check-in & reviews' },
      { time: '12:00 PM', label: 'Final build deadline' },
      { time: '01:00 PM', label: 'Presentations begin' },
      { time: '04:00 PM', label: 'Judging panel deliberation' },
      { time: '06:00 PM', label: 'Awards ceremony & closing' },
    ]},
  ];

  return (
    <>
      <Header />

      <main style={{
        backgroundColor: '#05070D',
        minHeight: '100vh',
        padding: '160px 40px 100px',
        position: 'relative',
        zIndex: 5,
        pointerEvents: 'auto'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Hero */}
          <div style={{ marginBottom: '80px' }}>
            <p className="font-neue-roman-14" style={{ color: '#FFFFFF', opacity: 0.5, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>
              CSI ORIGIN — Chapter Three
            </p>
            <h1 className="font-machina-120" style={{ color: '#FFFFFF', lineHeight: 1.0, margin: 0 }}>
              The Arena
            </h1>
            <p className="font-neue-roman-24" style={{ color: '#FFFFFF', opacity: 0.8, marginTop: '30px', fontWeight: 'normal', lineHeight: 1.4, maxWidth: '800px' }}>
              Every challenge is an opportunity to redefine what is possible. Choose your frontier and start building.
            </p>
          </div>

          {/* Quote */}
          <div style={{ marginBottom: '80px', borderLeft: '2px solid rgba(255,255,255,0.25)', paddingLeft: '30px', maxWidth: '700px' }}>
            <p className="font-machina-36" style={{ color: '#FFFFFF', lineHeight: 1.2, fontStyle: 'italic' }}>
              "Where bold ideas compete."
            </p>
          </div>

          {/* Tracks */}
          <div style={{ marginBottom: '100px' }}>
            <h2 className="font-machina-54" style={{ color: '#FFFFFF', marginBottom: '40px' }}>Problem Tracks</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
            }}>
              {tracks.map((a, idx) => (
                <div key={idx} className="article-card">
                  <div className="article-image-wrapper" style={{ position: 'relative', height: '280px', backgroundColor: '#0B1F3A', borderRadius: '20px', overflow: 'hidden' }}>
                    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#b7bdcc' }}>
                      <span className="font-machina-36" style={{ opacity: 0.2, padding: '0 20px', textAlign: 'center' }}>{a.tag}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', marginTop: '20px', alignItems: 'center' }}>
                    <span className="font-neue-roman-12" style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      color: '#FFFFFF',
                      fontWeight: 'bold'
                    }}>{a.tag}</span>
                  </div>
                  <h3 className="font-machina-36" style={{ marginTop: '15px', color: '#FFFFFF', lineHeight: 1.2 }}>{a.title}</h3>
                  <p className="font-neue-roman-16" style={{ color: '#8FA3C0', marginTop: '10px', lineHeight: 1.5 }}>{a.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rules */}
          <div style={{ marginBottom: '100px', backgroundColor: '#0B1F3A', padding: '60px', borderRadius: '20px' }}>
            <h2 className="font-machina-54" style={{ color: '#FFFFFF', marginBottom: '40px' }}>Rules</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '30px' }}>
              {rules.map((r, i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px' }}>
                  <p className="font-neue-roman-12" style={{ color: '#FFFFFF', opacity: 0.45, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>{r.label}</p>
                  <p className="font-neue-roman-18" style={{ color: '#FFFFFF', lineHeight: 1.4, fontWeight: '500' }}>{r.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Judging Criteria */}
          <div style={{ marginBottom: '100px' }}>
            <h2 className="font-machina-54" style={{ color: '#FFFFFF', marginBottom: '40px' }}>Judging Criteria</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {judging.map((j, i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '30px 0', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '40px', alignItems: 'start' }}>
                  <div>
                    <h3 className="font-machina-36" style={{ color: '#FFFFFF', margin: '0 0 6px 0', lineHeight: 1.1 }}>{j.criterion}</h3>
                    <p className="font-neue-roman-12" style={{ color: '#FFFFFF', opacity: 0.45, letterSpacing: '2px', textTransform: 'uppercase', margin: 0 }}>{j.weight}</p>
                  </div>
                  <p className="font-neue-roman-18" style={{ color: '#8FA3C0', lineHeight: 1.6, margin: 0 }}>{j.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h2 className="font-machina-54" style={{ color: '#FFFFFF', marginBottom: '40px' }}>Schedule</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              {schedule.map((day, di) => (
                <div key={di}>
                  <h3 className="font-machina-36" style={{ color: '#FFFFFF', marginBottom: '24px' }}>{day.day}</h3>
                  {day.events.map((e, ei) => (
                    <div key={ei} style={{ display: 'flex', gap: '20px', paddingBottom: '18px', borderBottom: '1px solid rgba(255,255,255,0.12)', marginBottom: '18px' }}>
                      <span className="font-neue-roman-14" style={{ color: '#FFFFFF', opacity: 0.4, minWidth: '80px', flexShrink: 0 }}>{e.time}</span>
                      <span className="font-neue-roman-16" style={{ color: '#FFFFFF', lineHeight: 1.4 }}>{e.label}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
