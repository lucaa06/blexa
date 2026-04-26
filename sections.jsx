// Sections: Problem, Solution (3 steps), Features, Score, Pricing, Testimonials, FAQ, Footer

// ─── Problem ──────────────────────────────────────────────────────────────
function ProblemSection() {
  const items = [
    {
      icon: 'clock',
      title: 'Ore perse nella ricerca',
      body: 'Cerchi manualmente su Google, Pagine Gialle, mappe. Un lavoro che richiede ore per trovare qualche decina di lead di qualità dubbia.',
      stat: '~12h / sett',
    },
    {
      icon: 'warn',
      title: 'Lead non qualificati',
      body: 'Contatti imprese che hanno già un sito decente, o che non hanno bisogno dei tuoi servizi. Zero conversioni, tanta frustrazione.',
      stat: '< 2% reply',
    },
    {
      icon: 'chart',
      title: 'Pipeline vuota, entrate instabili',
      body: 'Senza un flusso costante di nuovi prospect, le entrate dipendono dal passaparola. Un modello fragile che non scala.',
      stat: 'No scale',
    },
  ];
  return (
    <section className="section section-problem" id="problema">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Il problema</div>
            <h2 className="section-title">
              Stai ancora cercando<br/>
              <span className="serif">clienti uno per uno?</span>
            </h2>
          </div>
          <p className="lead">
            Ogni ora che passi a cercare manualmente è un'ora che non stai chiudendo contratti. Le agenzie web e i freelancer italiani perdono decine di ore al mese su attività che un software può fare in minuti.
          </p>
        </div>
        <div className="problem-grid">
          {items.map((it, i) => {
            const I = Icon[it.icon];
            return (
              <div key={i} className="problem-card">
                <div className="problem-num mono">{String(i + 1).padStart(2, '0')}</div>
                <div className="problem-icon"><I width="22" height="22"/></div>
                <h3>{it.title}</h3>
                <p>{it.body}</p>
                <div className="problem-stat mono">{it.stat}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Solution (3 steps) ───────────────────────────────────────────────────
function SolutionSection() {
  const steps = [
    {
      n: '01',
      title: 'Scegli città e categoria',
      body: 'Indica una o più città italiane e il tipo di attività (ristoranti, studi legali, hotel, negozi…). Blexa fa il resto su 8 fonti in parallelo.',
      illustration: <StepIllustration1 />,
    },
    {
      n: '02',
      title: 'Blexa calcola il Digital Score',
      body: "Il motore di audit analizza ogni sito web: SEO, mobile, design, contenuti. Assegna un punteggio 0-100. Più è basso, più è un'opportunità per te.",
      illustration: <StepIllustration2 />,
    },
    {
      n: '03',
      title: 'Ricevi lead + outreach',
      body: 'Ottieni una lista filtrata con email, telefono, indirizzo e score. Invia campagne email personalizzate da Blexa. Traccia le risposte e chiudi.',
      illustration: <StepIllustration3 />,
    },
  ];
  return (
    <section className="section section-solution" id="come">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">La soluzione</div>
            <h2 className="section-title">
              Blexa lavora per te.<br/>
              <span className="serif">Tu chiudi i contratti.</span>
            </h2>
          </div>
          <p className="lead">
            In 3 passi trasformiamo ogni città italiana in una miniera di opportunità qualificate pronte per il closing.
          </p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div key={i} className="step">
              <div className="step-illustration">{s.illustration}</div>
              <div className="step-meta">
                <span className="step-n mono">{s.n}</span>
                <span className="step-line"/>
              </div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepIllustration1() {
  return (
    <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="ill">
      <rect x="0.5" y="0.5" width="279" height="159" rx="11.5" fill="var(--bg-tint)" stroke="var(--line)"/>
      <rect x="20" y="22" width="240" height="36" rx="8" fill="var(--bg-elev)" stroke="var(--line)"/>
      <text x="34" y="44" fontFamily="var(--font-mono)" fontSize="12" fill="var(--fg)">Milano, Roma, Napoli</text>
      <rect x="200" y="30" width="48" height="20" rx="10" fill="var(--fg)"/>
      <text x="224" y="44" fontFamily="var(--font-mono)" fontSize="10" fill="var(--bg)" textAnchor="middle">Cerca</text>
      <rect x="20" y="70" width="62" height="22" rx="11" fill="var(--accent-tint)" stroke="rgba(220,38,38,0.18)"/>
      <text x="51" y="84" fontFamily="var(--font-mono)" fontSize="10" fill="#b91c1c" textAnchor="middle">ristoranti</text>
      <rect x="86" y="70" width="58" height="22" rx="11" fill="var(--bg-elev)" stroke="var(--line-2)"/>
      <text x="115" y="84" fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)" textAnchor="middle">hotel</text>
      <rect x="148" y="70" width="78" height="22" rx="11" fill="var(--bg-elev)" stroke="var(--line-2)"/>
      <text x="187" y="84" fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)" textAnchor="middle">studi legali</text>
      <g opacity="0.8">
        <path d="M30 120 Q70 100, 110 118 T200 110 T260 122" stroke="var(--accent)" strokeWidth="1.2" strokeDasharray="3 3" fill="none"/>
        <circle cx="50" cy="115" r="3" fill="var(--accent)"/>
        <circle cx="120" cy="116" r="3" fill="var(--accent)"/>
        <circle cx="190" cy="111" r="3" fill="var(--accent)"/>
        <circle cx="240" cy="118" r="3" fill="var(--accent)"/>
      </g>
    </svg>
  );
}

function StepIllustration2() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="ill">
      <rect x="0.5" y="0.5" width="279" height="159" rx="11.5" fill="var(--bg-tint)" stroke="var(--line)"/>
      <circle cx="140" cy="80" r="48" stroke="var(--line-2)" strokeWidth="1.5" fill="var(--bg-elev)"/>
      <circle cx="140" cy="80" r="48" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round"
              strokeDasharray="180 360" transform="rotate(-90 140 80)"/>
      <text x="140" y="76" fontFamily="var(--font-mono)" fontSize="32" fill="var(--fg)" textAnchor="middle" fontWeight="500">17</text>
      <text x="140" y="94" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)" textAnchor="middle" letterSpacing="1">SCORE</text>
      <g fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">
        <text x="220" y="50">SEO 12</text>
        <text x="220" y="78">MOBILE 28</text>
        <text x="220" y="106">DESIGN 18</text>
        <text x="220" y="134">CONTENT 8</text>
      </g>
      <g stroke="var(--line-2)" strokeWidth="1">
        <line x1="190" y1="46" x2="216" y2="46"/>
        <line x1="190" y1="74" x2="216" y2="74"/>
        <line x1="190" y1="102" x2="216" y2="102"/>
        <line x1="190" y1="130" x2="216" y2="130"/>
      </g>
    </svg>
  );
}

function StepIllustration3() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="ill">
      <rect x="0.5" y="0.5" width="279" height="159" rx="11.5" fill="var(--bg-tint)" stroke="var(--line)"/>
      <rect x="20" y="20" width="160" height="36" rx="8" fill="var(--bg-elev)" stroke="var(--line)"/>
      <circle cx="38" cy="38" r="9" fill="var(--accent-tint)"/>
      <text x="38" y="42" fontFamily="var(--font-sans)" fontSize="11" fill="#b91c1c" textAnchor="middle" fontWeight="600">M</text>
      <rect x="54" y="32" width="80" height="4" rx="2" fill="var(--fg-2)" opacity="0.6"/>
      <rect x="54" y="40" width="100" height="3" rx="1.5" fill="var(--muted-2)" opacity="0.6"/>
      <rect x="20" y="62" width="160" height="36" rx="8" fill="var(--bg-elev)" stroke="var(--line)"/>
      <circle cx="38" cy="80" r="9" fill="rgba(21,128,61,0.15)"/>
      <text x="38" y="84" fontFamily="var(--font-sans)" fontSize="11" fill="#15803d" textAnchor="middle" fontWeight="600">A</text>
      <rect x="54" y="74" width="65" height="4" rx="2" fill="var(--fg-2)" opacity="0.6"/>
      <rect x="54" y="82" width="90" height="3" rx="1.5" fill="var(--muted-2)" opacity="0.6"/>
      <rect x="20" y="104" width="160" height="36" rx="8" fill="var(--bg-elev)" stroke="var(--line)"/>
      <circle cx="38" cy="122" r="9" fill="rgba(180,83,9,0.15)"/>
      <text x="38" y="126" fontFamily="var(--font-sans)" fontSize="11" fill="#92400e" textAnchor="middle" fontWeight="600">G</text>
      <rect x="54" y="116" width="72" height="4" rx="2" fill="var(--fg-2)" opacity="0.6"/>
      <rect x="54" y="124" width="84" height="3" rx="1.5" fill="var(--muted-2)" opacity="0.6"/>
      <g>
        <rect x="200" y="40" width="60" height="80" rx="10" fill="var(--fg)"/>
        <path d="M210 60 L230 76 L250 60" stroke="var(--bg)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <rect x="208" y="56" width="44" height="32" rx="3" stroke="var(--bg)" strokeWidth="1.2" fill="none"/>
        <text x="230" y="106" fontFamily="var(--font-mono)" fontSize="9" fill="var(--bg)" textAnchor="middle">3 inviate</text>
      </g>
    </svg>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────
function FeaturesSection() {
  const features = [
    { icon: 'layers', title: 'Scanner multi-fonte', body: '8 fonti dati italiane in parallelo: Pagine Gialle, TripAdvisor, OSM, TheFork, Infobel e altro. Massima copertura del territorio.' },
    { icon: 'spark', title: 'Digital Score AI', body: 'Punteggio 0-100 calcolato su SEO, mobile-first, design e qualità contenuti. Identifica istantaneamente le migliori opportunità.' },
    { icon: 'mail', title: 'Email broadcast', body: 'Invia campagne personalizzate dal tuo Gmail, Outlook o SMTP custom. Template variabili per ogni lead.' },
    { icon: 'users', title: 'CRM integrato', body: 'Gestisci lo stato di ogni lead: nuovo, contattato, interessato, chiuso. Note, tag personalizzati, storico attività.' },
    { icon: 'filter', title: 'Filtri avanzati', body: 'Filtra per città, quartiere, categoria, range di Digital Score, presenza email, tipo sito. Trova il cliente ideale.' },
    { icon: 'chart', title: 'Analytics campagne', body: 'Tassi di apertura, risposte e conversioni per ogni campagna. Sincronizzazione IMAP automatica delle risposte.' },
    { icon: 'shield', title: 'GDPR compliant', body: 'Dati pubblici da directory ufficiali. Conforme al Regolamento Europeo 2016/679. Server in Europa.' },
    { icon: 'globe', title: 'Copertura nazionale', body: 'Ogni comune italiano, dal centro storico al piccolo paese. Nessun limite geografico: scala su tutto il territorio.' },
  ];
  return (
    <section className="section section-features" id="funzionalita">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Funzionalità</div>
            <h2 className="section-title">
              Tutto quello che serve.<br/>
              <span className="serif">Niente di superfluo.</span>
            </h2>
          </div>
        </div>
        <div className="features-grid">
          {features.map((f, i) => {
            const I = Icon[f.icon];
            return (
              <div key={i} className="feature">
                <div className="feature-icon"><I width="22" height="22"/></div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Digital Score (animated on scroll) ───────────────────────────────────
function ScoreSection() {
  const ref = React.useRef(null);
  const [progress, setProgress] = React.useState(0); // 0..1
  const [interactive, setInteractive] = React.useState(false);
  const [scores, setScores] = React.useState({ seo: 12, mobile: 28, design: 18, content: 8 });

  React.useEffect(() => {
    const onScroll = () => {
      if (!ref.current || interactive) return;
      const r = ref.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const total = r.height + winH * 0.5;
      const t = Math.max(0, Math.min(1, (winH - r.top) / total));
      setProgress(t);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [interactive]);

  const targets = { seo: 12, mobile: 28, design: 18, content: 8 };
  const animated = interactive ? scores : {
    seo: Math.round(targets.seo * progress),
    mobile: Math.round(targets.mobile * progress),
    design: Math.round(targets.design * progress),
    content: Math.round(targets.content * progress),
  };
  const total = Math.round((animated.seo + animated.mobile + animated.design + animated.content) / 4);

  const opportunity = total < 40 ? { label: 'Opportunità Alta', tone: 'low' }
    : total < 70 ? { label: 'Opportunità Media', tone: 'mid' }
    : { label: 'Già digitalizzato', tone: 'high' };

  return (
    <section className="section section-score" id="score" ref={ref}>
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Come funziona</div>
            <h2 className="section-title">
              Il <span className="serif">Digital Score</span><br/>
              che fa la differenza
            </h2>
          </div>
          <p className="lead">
            Non tutti i lead valgono uguale. Il Digital Score misura la debolezza digitale di ogni attività su 4 dimensioni: più è basso, più è pronta ad acquistare il tuo servizio.
          </p>
        </div>

        <div className="score-grid">
          <div className="score-visual">
            <div className="score-card">
              <ScoreRing value={total} tone={opportunity.tone} />
              <div className="score-meta">
                <div className="mono small">DIGITAL SCORE</div>
                <div className={`score-opp tone-${opportunity.tone}`}>
                  <span className="dot"/>{opportunity.label}
                </div>
              </div>
            </div>
            <div className="score-bars">
              {[
                ['SEO', animated.seo, 100, 'seo'],
                ['Mobile', animated.mobile, 100, 'mobile'],
                ['Design', animated.design, 100, 'design'],
                ['Content', animated.content, 100, 'content'],
              ].map(([label, val, max, key]) => (
                <div key={label} className="score-bar-row">
                  <div className="score-bar-label">
                    <span>{label}</span>
                    <span className="mono">{val}</span>
                  </div>
                  <div className="score-bar">
                    <div className="score-bar-fill" style={{ width: `${val}%` }} />
                  </div>
                  {interactive && (
                    <input type="range" min="0" max="100" value={val} className="score-range"
                           onChange={(e) => setScores({ ...scores, [key]: Number(e.target.value) })}/>
                  )}
                </div>
              ))}
              <button className="score-toggle" onClick={() => setInteractive(!interactive)}>
                {interactive ? 'Reset animazione' : 'Prova tu →'}
              </button>
            </div>
          </div>

          <div className="score-legend">
            <h3 style={{ fontWeight: 500, fontSize: 14, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 24 }}>
              Come leggere il score
            </h3>
            <div className="legend-row">
              <div className="legend-range mono"><span className="dot tone-low"/>0–39</div>
              <div className="legend-text">
                <b>Opportunità Alta</b>
                <p>Presenza digitale quasi assente. Massima probabilità di conversione. Cliente ideale per siti web, SEO, social.</p>
              </div>
            </div>
            <div className="legend-row">
              <div className="legend-range mono"><span className="dot tone-mid"/>40–69</div>
              <div className="legend-text">
                <b>Opportunità Media</b>
                <p>Sito presente ma migliorabile. Ottimo per restyling, SEO o campagne adv.</p>
              </div>
            </div>
            <div className="legend-row">
              <div className="legend-range mono"><span className="dot tone-high"/>70–100</div>
              <div className="legend-text">
                <b>Già digitalizzato</b>
                <p>Sito ottimizzato. Puoi escluderlo o proporre servizi avanzati (ads, automazioni, CRM).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreRing({ value, tone }) {
  const r = 76;
  const C = 2 * Math.PI * r;
  const frac = value / 100;
  const color = tone === 'low' ? 'var(--accent)' : tone === 'mid' ? '#b45309' : '#15803d';
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className="score-ring">
      <circle cx="100" cy="100" r={r} stroke="var(--line)" strokeWidth="2" fill="none"/>
      <circle cx="100" cy="100" r={r} stroke={color} strokeWidth="6" fill="none"
              strokeLinecap="round"
              strokeDasharray={`${C * frac} ${C}`}
              transform="rotate(-90 100 100)"
              style={{ transition: 'stroke-dasharray 600ms cubic-bezier(.2,.6,.2,1)' }}/>
      <text x="100" y="104" fontFamily="var(--font-mono)" fontSize="56" fill="var(--fg)" textAnchor="middle" fontWeight="500" letterSpacing="-2">{value}</text>
      <text x="100" y="128" fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)" textAnchor="middle" letterSpacing="2">/ 100</text>
    </svg>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────
function PricingSection({ style = 'cards' }) {
  const [billing, setBilling] = React.useState('monthly'); // monthly | yearly
  const factor = billing === 'yearly' ? 10 : 1;
  const fmt = (n) => `€${n}`;
  return (
    <section className="section section-pricing" id="prezzi">
      <div className="container">
        <div className="section-head section-head-center">
          <div className="eyebrow">Prezzi</div>
          <h2 className="section-title">
            Entra in beta.<br/>
            <span className="serif">Blocca il prezzo per sempre.</span>
          </h2>
          <p className="lead">
            I primi 200 beta tester pagano €39/mese per sempre. Poi il prezzo sale a €89/mese.
          </p>
          <div className="billing-toggle">
            <button className={billing === 'monthly' ? 'on' : ''} onClick={() => setBilling('monthly')}>Mensile</button>
            <button className={billing === 'yearly' ? 'on' : ''} onClick={() => setBilling('yearly')}>
              Annuale <span className="tag" style={{marginLeft:8}}>−2 mesi</span>
            </button>
          </div>
        </div>

        <div className={`pricing-grid pricing-${style}`}>
          {/* Standard plan */}
          <div className="price-card price-card-standard">
            <div className="price-head">
              <h3>Standard</h3>
              <span className="tag">Dal lancio</span>
            </div>
            <div className="price-amount">
              <span className="amt mono">{fmt(89 * factor)}</span>
              <span className="per">{billing === 'monthly' ? '/mese' : '/anno'}</span>
            </div>
            <p className="price-note">Disponibile dal lancio ufficiale.</p>
            <ul className="price-list">
              <li><Icon.check width="16" height="16"/>Scanner multi-fonte illimitato</li>
              <li><Icon.check width="16" height="16"/>Digital Score + Audit completo</li>
              <li><Icon.check width="16" height="16"/>Email broadcast</li>
              <li><Icon.check width="16" height="16"/>CRM integrato</li>
              <li><Icon.check width="16" height="16"/>Supporto email</li>
            </ul>
            <button className="btn btn-ghost btn-lg" disabled style={{ width: '100%' }}>Aspetta il lancio</button>
          </div>

          {/* Beta plan */}
          <div className="price-card price-card-beta">
            <div className="ribbon mono"><Icon.flame width="11" height="11"/> Early Bird · Solo 200 posti</div>
            <div className="price-head">
              <h3>Beta Tester</h3>
              <span className="tag tag-accent mono">−56%</span>
            </div>
            <div className="price-amount">
              <span className="amt-strike mono">{fmt(89 * factor)}</span>
              <span className="amt mono accent-num">{fmt(39 * factor)}</span>
              <span className="per">{billing === 'monthly' ? '/mese' : '/anno'}</span>
            </div>
            <p className="price-note">Prezzo bloccato per sempre. Risparmi il 56% — per sempre.</p>
            <ul className="price-list">
              <li><Icon.check width="16" height="16"/>Tutto del piano Standard</li>
              <li><Icon.check width="16" height="16"/>Accesso beta immediato</li>
              <li><Icon.check width="16" height="16"/>Influenza il product roadmap</li>
              <li><Icon.check width="16" height="16"/>Badge "Founding Member"</li>
              <li><Icon.check width="16" height="16"/>Supporto prioritario</li>
            </ul>
            <button className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              Prenota per {fmt(39 * factor)}{billing === 'monthly' ? '/mese' : '/anno'}
              <Icon.arrow width="16" height="16"/>
            </button>
            <p className="price-fineprint">Nessun addebito ora · Carta di credito solo al lancio</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────
function TestimonialsSection() {
  const items = [
    {
      quote: 'In 20 minuti ho trovato 47 ristoranti nella mia città con Digital Score sotto 30. Ho mandato 30 email e ho già 4 risposte positive. ROI immediato.',
      name: 'Marco R.', role: 'Web Designer Freelancer · Milano', initial: 'M', a: 'a1',
      stat: { v: '4', l: 'risposte / 30' },
    },
    {
      quote: "Finalmente uno strumento pensato per il mercato italiano. Pagine Gialle + TripAdvisor in un'unica lista con il sito già analizzato. Brillante.",
      name: 'Alessia T.', role: 'Titolare Agenzia Web · Napoli', initial: 'A', a: 'a3',
      stat: { v: '8h', l: 'risparmiate / sett' },
    },
    {
      quote: 'Ho azzerato il tempo dedicato alla ricerca clienti. Ogni lunedì mattina lancio una scansione, filtro i low-score e la settimana ha già senso. Produttività +300%.',
      name: 'Giovanni P.', role: 'SEO Consultant · Roma', initial: 'G', a: 'a2',
      stat: { v: '+300%', l: 'produttività' },
    },
  ];
  return (
    <section className="section section-testimonials" id="testimonianze">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Testimonianze</div>
            <h2 className="section-title">
              Cosa dicono i nostri<br/>
              <span className="serif">beta tester</span>
            </h2>
          </div>
          <p className="lead">I primi professionisti ad accedere hanno già condiviso la loro esperienza.</p>
        </div>
        <div className="testimonials-grid">
          {items.map((t, i) => (
            <div key={i} className="testimonial">
              <div className="stars">
                {[0,1,2,3,4].map(k => <Icon.star key={k} width="14" height="14" style={{color:'#b45309'}}/>)}
              </div>
              <blockquote>{t.quote}</blockquote>
              <div className="testimonial-foot">
                <div className="testimonial-author">
                  <span className={`avatar ${t.a}`} style={{ width: 36, height: 36, fontSize: 13, marginLeft: 0 }}>{t.initial}</span>
                  <div>
                    <b>{t.name}</b>
                    <span>{t.role}</span>
                  </div>
                </div>
                <div className="testimonial-stat">
                  <b className="mono">{t.stat.v}</b>
                  <span className="mono">{t.stat.l}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────
function FAQSection() {
  const items = [
    { q: "Cosa succede dopo che entro in beta?", a: "Ricevi immediatamente l'accesso alla dashboard e puoi lanciare la prima scansione. Non addebitiamo nulla finché non lanciamo ufficialmente; al lancio sblocchi il prezzo €39/mese per sempre, con possibilità di disdire in qualsiasi momento." },
    { q: 'I dati sono conformi al GDPR?', a: 'Sì. Blexa raccoglie esclusivamente dati pubblici da directory ufficiali italiane (Pagine Gialle, OpenStreetMap, TripAdvisor, ecc.). Nessuna scraping di dati privati. Server in Europa, conforme al Regolamento UE 2016/679.' },
    { q: 'Posso integrare il mio account email?', a: 'Sì. Connetti Gmail, Outlook o un server SMTP custom. Le email vengono inviate dal tuo dominio, mantenendo deliverability e branding. Le risposte vengono sincronizzate via IMAP nel CRM.' },
    { q: 'Quante città posso scansionare?', a: 'Illimitate. Ogni piano include scansioni illimitate su tutti i comuni italiani. Pianifica scan ricorrenti settimanali o mensili.' },
    { q: 'Cosa succede se cancello?', a: 'Mantieni accesso fino alla fine del periodo già pagato. Esporti tutti i tuoi lead in CSV. Nessuna penale, nessun vincolo.' },
    { q: 'Come viene calcolato il Digital Score?', a: 'Il motore analizza 4 dimensioni del sito di ogni attività: SEO tecnico, esperienza mobile, qualità del design, profondità dei contenuti. Aggrega i punteggi in un valore 0–100 dove più basso = più opportunità.' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section section-faq" id="faq">
      <div className="container-narrow">
        <div className="section-head section-head-center">
          <div className="eyebrow">FAQ</div>
          <h2 className="section-title">
            Hai domande?<br/>
            <span className="serif">Abbiamo le risposte.</span>
          </h2>
        </div>
        <div className="faq-list">
          {items.map((it, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="faq-icon">
                  {open === i ? <Icon.minus width="18" height="18"/> : <Icon.plus width="18" height="18"/>}
                </span>
              </button>
              <div className="faq-a-wrap">
                <p className="faq-a">{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section className="section section-final-cta">
      <div className="container">
        <div className="final-cta">
          <div className="final-cta-meta">
            <span className="mono small">Lancio fra</span>
            <Countdown launchOffset={9}/>
          </div>
          <h2>
            Mancano <span className="accent-num mono">127</span> posti.<br/>
            <span className="serif">Entra in beta prima che sia tardi.</span>
          </h2>
          <p className="lead">Ogni giorno che aspetti è un giorno in cui qualcuno ha già trovato i tuoi potenziali clienti.</p>
          <div className="final-form">
            <SignupForm />
          </div>
          <div className="seats-bar">
            <div className="seats-track">
              <div className="seats-fill" style={{ width: '36.5%' }}/>
            </div>
            <div className="seats-text mono">
              <span><b>73</b> posti occupati</span>
              <span><b>200</b> totali</span>
            </div>
          </div>
          <p className="footnote">Nessuna carta di credito ora · Cancella quando vuoi · Dati al sicuro</p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────
function Footer({ logoVariant }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Wordmark logoVariant={logoVariant} size={28} />
            <p className="footer-tag">
              Lead generation per agenzie web e freelancer in Italia.<br/>
              <span className="mono small">Fatto con cura in Italia.</span>
            </p>
          </div>
          <div className="footer-cols">
            <div>
              <h4>Prodotto</h4>
              <a href="#funzionalita">Funzionalità</a>
              <a href="#score">Digital Score</a>
              <a href="#prezzi">Prezzi</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <h4>Risorse</h4>
              <a href="#">Blog</a>
              <a href="#">Casi studio</a>
              <a href="#">Documentazione</a>
              <a href="#">API</a>
            </div>
            <div>
              <h4>Azienda</h4>
              <a href="#">Chi siamo</a>
              <a href="#">Contatti</a>
              <a href="privacy.html">Privacy</a>
              <a href="cookie.html">Cookie</a>
              <a href="terms.html">Termini</a>
              <a href="#" onClick={(e) => { e.preventDefault(); window.__gdprOpenSettings && window.__gdprOpenSettings(); }}>Gestisci Cookie</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="mono small">© 2026 Blexa S.r.l. · Tutti i diritti riservati</span>
          <span className="mono small">P.IVA IT12345678901 · GDPR · ISO 27001</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  ProblemSection, SolutionSection, FeaturesSection, ScoreSection,
  PricingSection, TestimonialsSection, FAQSection, FinalCTASection, Footer,
});
