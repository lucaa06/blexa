/**
 * GDPR Consent Manager — Conforme GDPR / EU Cookie Law
 * Shared module for all startup landing pages.
 * Loaded as regular <script> (NOT module) so it works from file:// protocol.
 *
 * Usage: <script src="../shared/gdpr.js"></script>
 *        then in your JS: initGDPR({ brandName: 'Fliq', accentColor: '#6366F1' });
 */

(function() {
  'use strict';

  const CONSENT_KEY = 'gdpr_consent';
  const CONSENT_VERSION = '1.0';

  function getDefaultConsent() {
    return { version: CONSENT_VERSION, necessary: true, analytics: false, marketing: false, timestamp: null };
  }

  function getConsent() {
    try {
      const raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (data.version !== CONSENT_VERSION) return null;
      return data;
    } catch { return null; }
  }

  function saveConsent(consent) {
    consent.timestamp = new Date().toISOString();
    consent.version = CONSENT_VERSION;
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  }

  function createBannerHTML(brandName) {
    return `
    <div class="gdpr-banner" id="gdpr-banner">
      <div class="gdpr-banner-inner">
        <div class="gdpr-banner-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="gdpr-banner-text">
          <p>Utilizziamo cookie tecnici necessari e, con il tuo consenso, cookie di analisi per migliorare la tua esperienza su ${brandName}. Puoi gestire le tue preferenze in qualsiasi momento.
          <a href="#" data-legal="privacy">Privacy Policy</a> · <a href="#" data-legal="cookie">Cookie Policy</a></p>
        </div>
        <div class="gdpr-banner-actions">
          <button class="gdpr-btn gdpr-btn-accept" id="gdpr-accept-all">Accetta tutto</button>
          <button class="gdpr-btn gdpr-btn-reject" id="gdpr-reject-all">Solo necessari</button>
          <button class="gdpr-btn gdpr-btn-settings" id="gdpr-open-settings">Personalizza</button>
        </div>
      </div>
    </div>`;
  }

  function createSettingsHTML(brandName) {
    return `
    <div class="gdpr-settings-overlay" id="gdpr-settings-overlay">
      <div class="gdpr-settings-modal">
        <h3>Preferenze Cookie</h3>
        <p>Su ${brandName} utilizziamo diverse categorie di cookie. Puoi scegliere quali abilitare. I cookie necessari non possono essere disattivati.</p>
        <div class="gdpr-cookie-group">
          <div class="gdpr-cookie-group-header">
            <h4>Cookie Necessari</h4>
            <span class="gdpr-tag required">Sempre attivi</span>
          </div>
          <p>Essenziali per il funzionamento del sito. Includono la gestione della sessione, le preferenze cookie e la sicurezza.</p>
        </div>
        <div class="gdpr-cookie-group">
          <div class="gdpr-cookie-group-header">
            <h4>Cookie Analitici</h4>
            <label class="gdpr-toggle"><input type="checkbox" id="gdpr-analytics-toggle"><span class="gdpr-toggle-slider"></span></label>
          </div>
          <p>Ci aiutano a capire come i visitatori interagiscono con il sito, raccogliendo informazioni in forma anonima (es. pagine visitate, tempo di permanenza).</p>
        </div>
        <div class="gdpr-cookie-group">
          <div class="gdpr-cookie-group-header">
            <h4>Cookie di Marketing</h4>
            <label class="gdpr-toggle"><input type="checkbox" id="gdpr-marketing-toggle"><span class="gdpr-toggle-slider"></span></label>
          </div>
          <p>Utilizzati per tracciare i visitatori e mostrare annunci pertinenti. Possono essere impostati da partner pubblicitari.</p>
        </div>
        <div class="gdpr-settings-actions">
          <button class="gdpr-btn gdpr-btn-save" id="gdpr-save-settings">Salva preferenze</button>
          <button class="gdpr-btn gdpr-btn-accept" id="gdpr-accept-all-settings">Accetta tutto</button>
        </div>
      </div>
    </div>`;
  }

  function createPrivacyHTML(brandName) {
    const slug = brandName.toLowerCase().replace(/[^a-z0-9]/g, '');
    return `
    <div class="legal-overlay" id="privacy-overlay">
      <div class="legal-modal">
        <button class="legal-modal-close" id="privacy-close" aria-label="Chiudi">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <h2>Privacy Policy</h2>
        <span class="legal-date">Ultimo aggiornamento: 26 Aprile 2026</span>
        <h3>1. Titolare del Trattamento</h3>
        <p>Il Titolare del trattamento dei dati personali è ${brandName}, contattabile all'indirizzo email: privacy@${slug}.it</p>
        <h3>2. Dati Raccolti</h3>
        <p>Raccogliamo le seguenti categorie di dati personali:</p>
        <ul>
          <li><strong>Dati identificativi:</strong> indirizzo email fornito volontariamente tramite il modulo di iscrizione alla lista d'attesa.</li>
          <li><strong>Dati di navigazione:</strong> indirizzo IP (anonimizzato), tipo di browser, sistema operativo, pagine visitate — raccolti tramite cookie analitici previo consenso.</li>
          <li><strong>Cookie tecnici:</strong> necessari per il funzionamento del sito (preferenze cookie, sessione).</li>
        </ul>
        <h3>3. Finalità del Trattamento</h3>
        <ul>
          <li>Gestione della lista d'attesa e comunicazioni relative al lancio del prodotto (base giuridica: consenso, art. 6.1.a GDPR).</li>
          <li>Analisi statistica anonima del traffico web (base giuridica: consenso, art. 6.1.a GDPR).</li>
          <li>Adempimento di obblighi di legge (base giuridica: obbligo legale, art. 6.1.c GDPR).</li>
        </ul>
        <h3>4. Conservazione dei Dati</h3>
        <p>I dati della lista d'attesa sono conservati fino al lancio del prodotto e comunque non oltre 24 mesi dalla raccolta. I dati analitici sono conservati in forma aggregata e anonima per 14 mesi.</p>
        <h3>5. Condivisione dei Dati</h3>
        <ul>
          <li><strong>Supabase Inc.</strong> (hosting database) — sede USA, adeguatezza garantita da DPF.</li>
          <li><strong>Google LLC</strong> (Google Analytics, solo con consenso) — sede USA, adeguatezza garantita da DPF.</li>
        </ul>
        <p>Non vendiamo né cediamo i tuoi dati personali a terzi per finalità di marketing.</p>
        <h3>6. Diritti dell'Interessato</h3>
        <p>Ai sensi degli artt. 15-22 del GDPR, hai il diritto di: accedere ai tuoi dati, richiederne la rettifica o cancellazione, limitare o opporti al trattamento, richiedere la portabilità, revocare il consenso, proporre reclamo al Garante Privacy.</p>
        <p>Per esercitare i tuoi diritti: privacy@${slug}.it</p>
        <h3>7. Sicurezza</h3>
        <p>Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali, inclusa crittografia TLS/SSL in transito e at-rest.</p>
      </div>
    </div>`;
  }

  function createCookiePolicyHTML(brandName) {
    return `
    <div class="legal-overlay" id="cookie-overlay">
      <div class="legal-modal">
        <button class="legal-modal-close" id="cookie-close" aria-label="Chiudi">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <h2>Cookie Policy</h2>
        <span class="legal-date">Ultimo aggiornamento: 26 Aprile 2026</span>
        <h3>1. Cosa Sono i Cookie</h3>
        <p>I cookie sono piccoli file di testo che i siti web memorizzano sul tuo dispositivo per ricordare le tue preferenze e migliorare la navigazione.</p>
        <h3>2. Cookie Utilizzati</h3>
        <p><strong>2.1 Cookie Tecnici (Necessari)</strong></p>
        <ul><li><strong>gdpr_consent</strong> — Memorizza le tue preferenze sui cookie. Durata: 12 mesi.</li></ul>
        <p><strong>2.2 Cookie Analitici (Previo Consenso)</strong></p>
        <ul><li><strong>_ga, _ga_*</strong> — Google Analytics. Dati anonimi sulla navigazione. Durata: 14 mesi. IP anonimizzato.</li></ul>
        <p><strong>2.3 Cookie di Marketing (Previo Consenso)</strong></p>
        <p>Attualmente non utilizziamo cookie di marketing.</p>
        <h3>3. Come Gestire i Cookie</h3>
        <p>Puoi modificare le tue preferenze cliccando su "Gestisci Cookie" nel footer del sito, o tramite il tuo browser:</p>
        <ul>
          <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie</li>
          <li><strong>Firefox:</strong> Impostazioni → Privacy e sicurezza</li>
          <li><strong>Safari:</strong> Preferenze → Privacy</li>
        </ul>
        <h3>4. Base Giuridica</h3>
        <p>Cookie tecnici: art. 122 D.Lgs. 196/2003. Cookie analitici e marketing: solo previo consenso esplicito (art. 6.1.a GDPR), revocabile in qualsiasi momento.</p>
      </div>
    </div>`;
  }

  function createTermsHTML(brandName) {
    const slug = brandName.toLowerCase().replace(/[^a-z0-9]/g, '');
    return `
    <div class="legal-overlay" id="terms-overlay">
      <div class="legal-modal">
        <button class="legal-modal-close" id="terms-close" aria-label="Chiudi">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <h2>Termini e Condizioni</h2>
        <span class="legal-date">Ultimo aggiornamento: 26 Aprile 2026</span>
        <h3>1. Accettazione</h3>
        <p>Accedendo al sito di ${brandName}, accetti i presenti Termini. Se non li accetti, non utilizzare il sito.</p>
        <h3>2. Descrizione del Servizio</h3>
        <p>${brandName} è un servizio in fase di sviluppo. Il sito raccoglie iscrizioni alla lista d'attesa, che non costituiscono un contratto di fornitura.</p>
        <h3>3. Lista d'Attesa</h3>
        <ul>
          <li>L'iscrizione è gratuita e non vincolante.</li>
          <li>Fornendo la tua email, acconsenti a ricevere comunicazioni relative al lancio.</li>
          <li>Puoi cancellarti scrivendo a info@${slug}.it</li>
        </ul>
        <h3>4. Proprietà Intellettuale</h3>
        <p>Tutti i contenuti del sito sono di proprietà esclusiva di ${brandName} e protetti dalle leggi italiane e internazionali.</p>
        <h3>5. Limitazione di Responsabilità</h3>
        <p>Il servizio è fornito "così com'è" senza garanzie di alcun tipo.</p>
        <h3>6. Legge Applicabile</h3>
        <p>Legge italiana. Foro competente: residenza del consumatore (art. 66-bis Codice del Consumo).</p>
        <h3>7. Contatti</h3>
        <p>info@${slug}.it</p>
      </div>
    </div>`;
  }

  // ── Expose globally ──────────────────────
  window.initGDPR = function({ brandName = 'Startup', accentColor = '#7C3AED' } = {}) {
    document.documentElement.style.setProperty('--gdpr-accent', accentColor);

    const container = document.createElement('div');
    container.id = 'gdpr-container';
    container.innerHTML =
      createBannerHTML(brandName) +
      createSettingsHTML(brandName) +
      createPrivacyHTML(brandName) +
      createCookiePolicyHTML(brandName) +
      createTermsHTML(brandName);
    document.body.appendChild(container);

    const banner = document.getElementById('gdpr-banner');
    const settingsOverlay = document.getElementById('gdpr-settings-overlay');
    const privacyOverlay = document.getElementById('privacy-overlay');
    const cookieOverlay = document.getElementById('cookie-overlay');
    const termsOverlay = document.getElementById('terms-overlay');
    const analyticsToggle = document.getElementById('gdpr-analytics-toggle');
    const marketingToggle = document.getElementById('gdpr-marketing-toggle');

    const existing = getConsent();
    if (!existing) {
      setTimeout(function() { banner.classList.add('visible'); }, 800);
    } else {
      applyConsent(existing);
    }

    function acceptAll() {
      var consent = { necessary: true, analytics: true, marketing: true };
      saveConsent(consent);
      applyConsent(consent);
      banner.classList.remove('visible');
      settingsOverlay.classList.remove('visible');
    }

    function rejectAll() {
      var consent = { necessary: true, analytics: false, marketing: false };
      saveConsent(consent);
      applyConsent(consent);
      banner.classList.remove('visible');
      settingsOverlay.classList.remove('visible');
    }

    function saveSettings() {
      var consent = {
        necessary: true,
        analytics: analyticsToggle.checked,
        marketing: marketingToggle.checked,
      };
      saveConsent(consent);
      applyConsent(consent);
      banner.classList.remove('visible');
      settingsOverlay.classList.remove('visible');
    }

    function applyConsent(consent) {
      if (consent.analytics && window.gtag) {
        window.gtag('consent', 'update', { analytics_storage: 'granted' });
      }
      if (consent.marketing && window.gtag) {
        window.gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
      }
    }

    function openSettings() {
      var ex = getConsent();
      if (ex) { analyticsToggle.checked = ex.analytics; marketingToggle.checked = ex.marketing; }
      settingsOverlay.classList.add('visible');
      banner.classList.remove('visible');
    }

    document.getElementById('gdpr-accept-all').addEventListener('click', acceptAll);
    document.getElementById('gdpr-reject-all').addEventListener('click', rejectAll);
    document.getElementById('gdpr-open-settings').addEventListener('click', openSettings);
    document.getElementById('gdpr-save-settings').addEventListener('click', saveSettings);
    document.getElementById('gdpr-accept-all-settings').addEventListener('click', acceptAll);

    settingsOverlay.addEventListener('click', function(e) { if (e.target === settingsOverlay) settingsOverlay.classList.remove('visible'); });

    document.addEventListener('click', function(e) {
      var target = e.target.closest('[data-legal]');
      if (!target) return;
      e.preventDefault();
      var type = target.dataset.legal;
      if (type === 'privacy') privacyOverlay.classList.add('visible');
      else if (type === 'cookie') cookieOverlay.classList.add('visible');
      else if (type === 'terms') termsOverlay.classList.add('visible');
    });

    document.getElementById('privacy-close').addEventListener('click', function() { privacyOverlay.classList.remove('visible'); });
    document.getElementById('cookie-close').addEventListener('click', function() { cookieOverlay.classList.remove('visible'); });
    document.getElementById('terms-close').addEventListener('click', function() { termsOverlay.classList.remove('visible'); });

    [privacyOverlay, cookieOverlay, termsOverlay].forEach(function(overlay) {
      overlay.addEventListener('click', function(e) { if (e.target === overlay) overlay.classList.remove('visible'); });
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        settingsOverlay.classList.remove('visible');
        privacyOverlay.classList.remove('visible');
        cookieOverlay.classList.remove('visible');
        termsOverlay.classList.remove('visible');
      }
    });

    window.__gdprOpenSettings = openSettings;
  };
})();
