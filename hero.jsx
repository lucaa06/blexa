// Hero section with live scanning demo + 5 layout variants

const ITALIAN_CITIES = ['Milano', 'Roma', 'Napoli', 'Torino', 'Bologna', 'Firenze', 'Venezia', 'Genova', 'Verona', 'Bari'];
const SAMPLE_LEADS = [
  { name: 'Ristorante La Bussola', cat: 'Ristoranti', city: 'Napoli', region: 'Campania', score: 18 },
  { name: 'Hotel Villa Aurora', cat: 'Hotel', city: 'Firenze', region: 'Toscana', score: 43 },
  { name: 'Studio Legale Ferrara', cat: 'Studi Legali', city: 'Milano', region: 'Lombardia', score: 9 },
  { name: 'Erboristeria Natura', cat: 'Erboristerie', city: 'Bologna', region: 'Emilia-Romagna', score: 52 },
  { name: 'Pasticceria San Marco', cat: 'Pasticcerie', city: 'Venezia', region: 'Veneto', score: 24 },
  { name: 'Officina Meccanica Rossi', cat: 'Officine', city: 'Torino', region: 'Piemonte', score: 31 },
  { name: 'Boutique Eleganza', cat: 'Abbigliamento', city: 'Roma', region: 'Lazio', score: 14 },
  { name: 'Centro Estetico Aura', cat: 'Estetica', city: 'Bari', region: 'Puglia', score: 38 },
];

const scoreClass = (s) => s < 40 ? 'low' : s < 70 ? 'mid' : 'high';
const scoreLabel = (s) => s < 40 ? 'Alta' : s < 70 ? 'Media' : 'Bassa';

// ─── Live scanning demo ───────────────────────────────────────────────────
function ScanningDemo({ compact = false }) {
  const [phase, setPhase] = React.useState('typing'); // typing → scanning → results
  const [typed, setTyped] = React.useState('');
  const [foundLeads, setFoundLeads] = React.useState([]);
  const [cityIdx, setCityIdx] = React.useState(0);
  const target = ITALIAN_CITIES[cityIdx];

  React.useEffect(() => {
    if (phase !== 'typing') return;
    if (typed.length < target.length) {
      const t = setTimeout(() => setTyped(target.slice(0, typed.length + 1)), 90);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase('scanning'), 600);
    return () => clearTimeout(t);
  }, [typed, phase, target]);

  React.useEffect(() => {
    if (phase !== 'scanning') return;
    setFoundLeads([]);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setFoundLeads(SAMPLE_LEADS.slice(0, i));
      if (i >= 4) {
        clearInterval(id);
        setTimeout(() => setPhase('results'), 600);
      }
    }, 280);
    return () => clearInterval(id);
  }, [phase]);

  React.useEffect(() => {
    if (phase !== 'results') return;
    const t = setTimeout(() => {
      setTyped('');
      setFoundLeads([]);
      setCityIdx((i) => (i + 1) % ITALIAN_CITIES.length);
      setPhase('typing');
    }, 4200);
    return () => clearTimeout(t);
  }, [phase]);

  const sources = ['Pagine Gialle', 'OpenStreetMap', 'TripAdvisor', 'TheFork', 'Pagine Bianche', 'Infobel', 'Yelp', 'Google'];

  return (
    <div className="scanner">
      <div className="scanner-chrome">
        <div className="scanner-dots"><span/><span/><span/></div>
        <div className="scanner-title mono">blexa · scanner</div>
        <div className={`scanner-status ${phase}`}>
          <span className="dot"/>{phase === 'typing' ? 'idle' : phase === 'scanning' ? 'scanning' : 'completed'}
        </div>
      </div>
      <div className="scanner-bar">
        <Icon.search width="14" height="14" style={{ color: 'var(--muted)', flexShrink: 0 }} />
        <span className="mono scanner-input">
          {typed}<span className={`caret ${phase === 'typing' ? 'on' : ''}`}>|</span>
        </span>
        <span className="scanner-cat mono">categoria: <b>ristoranti</b></span>
      </div>
      <div className="scanner-sources">
        {sources.map((s, i) => (
          <span key={s} className={`src mono ${phase !== 'typing' && i < (phase === 'scanning' ? foundLeads.length + 2 : 8) ? 'on' : ''}`}>
            <span className="src-tick"/>{s}
          </span>
        ))}
      </div>
      <div className="scanner-results">
        {SAMPLE_LEADS.slice(0, 4).map((lead, i) => {
          const visible = foundLeads.length > i || phase === 'results';
          return (
            <div key={lead.name} className={`lead-row ${visible ? 'in' : ''}`} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="lead-meta">
                <div className="lead-name">{lead.name}</div>
                <div className="lead-loc mono">
                  <Icon.pin width="11" height="11" />
                  {lead.city}, {lead.region}
                </div>
              </div>
              <div className="lead-cat mono">{lead.cat}</div>
              <div className={`score-chip ${scoreClass(lead.score)}`}>
                <span className="mono" style={{fontSize: 10, opacity: 0.7}}>SCORE</span>
                <b>{lead.score}</b>
              </div>
            </div>
          );
        })}
      </div>
      <div className="scanner-foot">
        <div className="foot-stat">
          <span className="mono small">Opportunità totali / mese</span>
          <b className="mono">€ 4.380</b>
        </div>
        <div className="foot-pace">
          <ScannerPulse active={phase === 'scanning'} />
        </div>
      </div>
    </div>
  );
}

function ScannerPulse({ active }) {
  return (
    <div className={`pulse-track ${active ? 'on' : ''}`}>
      <div className="pulse-fill" />
    </div>
  );
}

// ─── Stats row under hero ─────────────────────────────────────────────────
function HeroStats() {
  return (
    <div className="hero-stats">
      <div className="hero-stat">
        <b className="mono">8</b>
        <span>fonti dati italiane</span>
      </div>
      <div className="hero-stat">
        <b className="mono">100<sup>+</sup></b>
        <span>colonne lead</span>
      </div>
      <div className="hero-stat">
        <b className="mono">4</b>
        <span>metriche del Digital Score</span>
      </div>
    </div>
  );
}

// ─── Countdown ────────────────────────────────────────────────────────────
function Countdown({ launchOffset = 14 }) {
  const target = React.useMemo(() => {
    const t = new Date();
    t.setDate(t.getDate() + launchOffset);
    t.setHours(10, 0, 0, 0);
    return t.getTime();
  }, [launchOffset]);
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const fmt = (n) => String(n).padStart(2, '0');
  return (
    <div className="countdown mono">
      <span className="cd-cell"><b>{fmt(d)}</b><i>g</i></span>
      <span className="cd-sep">:</span>
      <span className="cd-cell"><b>{fmt(h)}</b><i>h</i></span>
      <span className="cd-sep">:</span>
      <span className="cd-cell"><b>{fmt(m)}</b><i>m</i></span>
      <span className="cd-sep">:</span>
      <span className="cd-cell"><b>{fmt(s)}</b><i>s</i></span>
    </div>
  );
}

// ─── Email signup with validation ─────────────────────────────────────────
function SignupForm({ size = 'md' }) {
  const [email, setEmail] = React.useState('');
  const [state, setState] = React.useState('idle'); // idle | error | success | duplicate | loading
  const [touched, setTouched] = React.useState(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const submit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) { setState('error'); return; }
    setState('loading');
    if (window.handleWaitlistReact) {
      window.handleWaitlistReact(email, (resState) => {
        setState(resState);
        setTimeout(() => setState('idle'), 4000);
      });
    } else {
      setState('success');
      setTimeout(() => setState('idle'), 4000);
    }
  };
  return (
    <form className={`signup-form ${state} ${size}`} onSubmit={submit} noValidate>
      <input
        type="email"
        placeholder="la-tua-email@esempio.it"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setState('idle'); }}
        onBlur={() => setTouched(true)}
      />
      <button type="submit" className={`btn ${state === 'success' || state === 'duplicate' ? 'btn-accent' : 'btn-primary'}`} disabled={state === 'loading'}>
        {state === 'success' ? <>In lista <Icon.check width="16" height="16"/></> : state === 'duplicate' ? <>Già iscritto!</> : state === 'loading' ? <>...</> : <>Prenota posto <Icon.arrow width="16" height="16"/></>}
      </button>
    </form>
  );
}

// ─── Hero variants ────────────────────────────────────────────────────────

function HeroV1_Split() {
  return (
    <section className="hero hero-split">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="pill" style={{ marginBottom: 24 }}>
            <span className="pill-icon"><Icon.lock width="12" height="12"/></span>
            Beta chiusa · Accesso anticipato
          </div>
          <h1>
            I tuoi prossimi clienti<br/>
            <span className="serif">esistono già.</span><br/>
            Li stai cercando<br/>nel posto sbagliato.
          </h1>
          <p className="lead" style={{ marginTop: 28 }}>
            Blexa scannerizza ogni angolo d'Italia, calcola il <b style={{color:'var(--fg)'}}>Digital Score</b> delle attività locali e ti consegna liste di lead qualificati pronti per il closing — in pochi minuti.
          </p>
          <div style={{ marginTop: 36 }}>
            <SignupForm />
          </div>
          <div className="trust-row">
            <span className="trust-item"><span className="trust-dot"/>Nessuna carta di credito</span>
            <span className="trust-item"><span className="trust-dot"/>Accesso immediato</span>
            <span className="trust-item"><span className="trust-dot"/>Cancella quando vuoi</span>
          </div>
          <div className="hero-social">
            <div className="avatar-stack">
              <span className="avatar a1">M</span>
              <span className="avatar a2">A</span>
              <span className="avatar a3">G</span>
              <span className="avatar a4">R</span>
            </div>
            <span className="hero-social-text">
              Già <b>73</b> professionisti in lista · Mancano <b className="mono accent-num">127</b> posti
            </span>
          </div>
        </div>
        <div className="hero-demo">
          <ScanningDemo />
        </div>
      </div>
      <div className="container">
        <HeroStats />
      </div>
    </section>
  );
}

function HeroV2_Centered() {
  return (
    <section className="hero hero-centered">
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <div className="pill" style={{ marginBottom: 32 }}>
          <span className="pill-icon"><Icon.flame width="12" height="12"/></span>
          127 posti rimasti · Lancio fra <Countdown launchOffset={9}/>
        </div>
        <h1 style={{ textWrap: 'balance' }}>
          I tuoi prossimi clienti <span className="serif">esistono già.</span> Li stai cercando nel posto sbagliato.
        </h1>
        <p className="lead" style={{ margin: '28px auto 36px', textAlign: 'center' }}>
          Blexa scannerizza ogni angolo d'Italia, calcola il Digital Score delle attività locali e ti consegna liste di lead qualificati pronti per il closing.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SignupForm />
        </div>
        <div className="trust-row" style={{ justifyContent: 'center' }}>
          <span className="trust-item"><span className="trust-dot"/>Nessuna carta</span>
          <span className="trust-item"><span className="trust-dot"/>Accesso immediato</span>
          <span className="trust-item"><span className="trust-dot"/>Cancella quando vuoi</span>
        </div>
      </div>
      <div className="container" style={{ marginTop: 80 }}>
        <ScanningDemo />
      </div>
    </section>
  );
}

function HeroV3_Editorial() {
  return (
    <section className="hero hero-editorial">
      <div className="container">
        <div className="editorial-grid">
          <div className="editorial-left">
            <div className="eyebrow">Lead Generation · Italia</div>
          </div>
          <div className="editorial-right">
            <div className="eyebrow">No. 001 / Beta</div>
          </div>
        </div>
        <h1 className="editorial-headline">
          I tuoi prossimi <span className="serif">clienti</span><br/>
          esistono già. <span className="serif">Li stai cercando</span><br/>
          nel <s style={{textDecorationColor:'var(--accent)', textDecorationThickness:'3px'}}>posto sbagliato</s>.
        </h1>
        <div className="editorial-grid editorial-foot">
          <div>
            <p className="lead">Blexa scannerizza l'Italia, calcola il Digital Score di ogni attività locale e ti consegna liste di lead qualificati. In minuti.</p>
            <div style={{ marginTop: 28 }}><SignupForm /></div>
          </div>
          <div className="editorial-meta">
            <div className="meta-row"><span className="mono small">Fonti</span><b>8 italiane</b></div>
            <div className="meta-row"><span className="mono small">Score</span><b>0–100 AI</b></div>
            <div className="meta-row"><span className="mono small">Outreach</span><b>integrato</b></div>
            <div className="meta-row"><span className="mono small">GDPR</span><b>conforme</b></div>
          </div>
        </div>
        <div style={{ marginTop: 64 }}>
          <ScanningDemo />
        </div>
      </div>
    </section>
  );
}

function HeroV4_Terminal() {
  return (
    <section className="hero hero-terminal">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="terminal-banner mono">
            <span className="dot accent"/> blexa@beta:~$ <span className="terminal-cmd">scan --italia --score &lt; 40</span>
          </div>
          <h1>
            Smetti di <span className="serif">cercare</span>.<br/>
            Inizia a <span className="accent-text">chiudere</span>.
          </h1>
          <p className="lead" style={{ marginTop: 28 }}>
            Blexa è il motore di prospecting per agenzie e freelancer italiani. Scannerizza, qualifica, invia. Tutto da un'unica dashboard.
          </p>
          <ul className="check-list">
            <li><Icon.check width="18" height="18"/>8 fonti italiane in parallelo</li>
            <li><Icon.check width="18" height="18"/>Digital Score AI per ogni lead</li>
            <li><Icon.check width="18" height="18"/>Email broadcast da Gmail / Outlook / SMTP</li>
          </ul>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn btn-primary btn-lg" href="#prezzi">Prenota posto gratuito <Icon.arrow width="16" height="16"/></a>
            <a className="btn btn-ghost btn-lg" href="#come">Come funziona</a>
          </div>
        </div>
        <div className="hero-demo">
          <ScanningDemo />
        </div>
      </div>
    </section>
  );
}

function HeroV5_BigType() {
  return (
    <section className="hero hero-bigtype">
      <div className="container">
        <div className="bigtype-meta">
          <div className="eyebrow">Beta · Italia · 73/200</div>
          <Countdown launchOffset={9}/>
        </div>
        <h1 className="bigtype-headline">
          <span className="bt-line">Trova clienti</span>
          <span className="bt-line"><span className="serif">che hanno</span> bisogno</span>
          <span className="bt-line">di te <span className="serif">— oggi</span>.</span>
        </h1>
        <div className="bigtype-grid">
          <div>
            <p className="lead">8 fonti italiane. Un Digital Score per ogni attività. Email broadcast integrato. Tutto da una dashboard.</p>
            <div style={{ marginTop: 24 }}><SignupForm /></div>
            <div className="trust-row">
              <span className="trust-item"><span className="trust-dot"/>Senza carta</span>
              <span className="trust-item"><span className="trust-dot"/>Disdici quando vuoi</span>
            </div>
          </div>
          <div className="bigtype-demo">
            <ScanningDemo compact />
          </div>
        </div>
      </div>
    </section>
  );
}

const HERO_VARIANTS = {
  split: HeroV1_Split,
  centered: HeroV2_Centered,
  editorial: HeroV3_Editorial,
  terminal: HeroV4_Terminal,
  bigtype: HeroV5_BigType,
};

Object.assign(window, {
  ScanningDemo, HeroStats, Countdown, SignupForm,
  HeroV1_Split, HeroV2_Centered, HeroV3_Editorial, HeroV4_Terminal, HeroV5_BigType,
  HERO_VARIANTS, SAMPLE_LEADS, scoreClass, scoreLabel,
});
