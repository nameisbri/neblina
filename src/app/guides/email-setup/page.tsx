import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Connect Your Business Email to Gmail',
  description: 'Step-by-step guide to connect your business email to Gmail.',
}

export default function EmailSetupGuidePage() {
  return (
    <div className="min-h-screen bg-deep-night">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-deep-night/95 backdrop-blur-sm border-b border-fog-mid/20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <span className="font-serif text-xl text-particle-glow">Neblina</span>
          <span className="text-xs text-text-secondary uppercase tracking-widest">Client Guide</span>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-32 pb-16 text-center animate-fade-in">
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary tracking-tight">
          Connect Your Business Email to Gmail
        </h1>
        <p className="mt-6 text-lg text-text-secondary">
          Set up your business email in Gmail so you can send and receive from one inbox. Takes about 5 minutes.
        </p>
      </div>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 md:px-12 space-y-16 pb-24">

        {/* Prerequisites Card */}
        <div className="bg-fog-deep/60 border border-fog-mid/20 rounded-2xl p-8">
          <h2 className="font-semibold text-lg text-text-primary mb-4">Before you start</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-particle-glow mt-0.5">✓</span>
              <span className="text-text-secondary">Your business email address (e.g., you@yourdomain.com)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-particle-glow mt-0.5">✓</span>
              <span className="text-text-secondary">Your email password (provided by Neblina or your hosting provider)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-particle-glow mt-0.5">✓</span>
              <span className="text-text-secondary">Gmail open on your desktop browser</span>
            </li>
          </ul>
        </div>

        {/* Table of Contents */}
        <nav>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6">
            <a href="#part-a" className="text-particle-glow hover:text-cta-hover transition-colors">
              Part A: Receive Emails
            </a>
            <span className="hidden sm:inline text-fog-mid">·</span>
            <a href="#part-b" className="text-particle-glow hover:text-cta-hover transition-colors">
              Part B: Send Emails
            </a>
            <span className="hidden sm:inline text-fog-mid">·</span>
            <a href="#quick-reference" className="text-particle-glow hover:text-cta-hover transition-colors">
              Quick Reference
            </a>
            <span className="hidden sm:inline text-fog-mid">·</span>
            <a href="#video" className="text-particle-glow hover:text-cta-hover transition-colors">
              Video Walkthrough
            </a>
          </div>
        </nav>

        {/* Part A: Receive Emails in Gmail */}
        <section id="part-a" className="scroll-mt-20">
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-2">
            Part A: Receive Emails in Gmail
          </h2>
          <div className="border-t border-fog-mid/20 mb-10" />

          <ol className="space-y-12 list-none p-0 m-0">
            {/* Step 1 */}
            <li className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-particle-glow/10 text-particle-glow flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-semibold">1</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-text-primary text-lg">Open Gmail Settings</h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">
                    Open Gmail and click the gear icon in the top-right corner. Select &quot;See all settings&quot; from the dropdown.
                  </p>
                </div>
              </div>
              <img
                src="/guides/email-setup/01-settings.gif"
                alt="Gmail inbox showing the Settings gear icon"
                width={800}
                height={500}
                className="rounded-xl border border-fog-mid/20 w-full"
              />
            </li>

            {/* Step 2 */}
            <li className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-particle-glow/10 text-particle-glow flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-semibold">2</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-text-primary text-lg">Go to Accounts and Import</h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">
                    Click the &quot;Accounts and Import&quot; tab, then click &quot;Add a mail account&quot; under &quot;Check mail from other accounts.&quot;
                  </p>
                </div>
              </div>
              <img
                src="/guides/email-setup/02-accounts-tab.gif"
                alt="Accounts and Import tab with Add a mail account link"
                width={800}
                height={500}
                loading="lazy"
                className="rounded-xl border border-fog-mid/20 w-full"
              />
            </li>

            {/* Step 3 */}
            <li className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-particle-glow/10 text-particle-glow flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-semibold">3</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-text-primary text-lg">Enter your business email</h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">
                    In the popup window, type your full business email address and click Next.
                  </p>
                </div>
              </div>
              <img
                src="/guides/email-setup/03-enter-email.gif"
                alt="Entering business email address in the popup window"
                width={800}
                height={500}
                loading="lazy"
                className="rounded-xl border border-fog-mid/20 w-full"
              />
            </li>

            {/* Step 4 */}
            <li className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-particle-glow/10 text-particle-glow flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-semibold">4</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-text-primary text-lg">Select POP3</h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">
                    Select &quot;Import emails from my other account (POP3)&quot; and click Next.
                  </p>
                </div>
              </div>
            </li>

            {/* Step 5 */}
            <li className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-particle-glow/10 text-particle-glow flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-semibold">5</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-text-primary text-lg">Enter server details</h3>
                  <div className="mt-2 text-text-secondary leading-relaxed">
                    <p>Fill in the following:</p>
                    <ul className="mt-3 space-y-2 ml-1">
                      <li className="flex items-start gap-2">
                        <span className="text-fog-mid mt-1.5">•</span>
                        <span>Username: your full business email address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fog-mid mt-1.5">•</span>
                        <span>Password: your business email password</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fog-mid mt-1.5">•</span>
                        <span>POP Server: <code className="bg-fog-deep px-1.5 py-0.5 rounded text-particle-glow font-mono text-sm">imap.titan.email</code></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fog-mid mt-1.5">•</span>
                        <span>Port: <code className="bg-fog-deep px-1.5 py-0.5 rounded text-particle-glow font-mono text-sm">995</code></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fog-mid mt-1.5">•</span>
                        <span>Check &quot;Always use a secure connection (SSL)&quot;</span>
                      </li>
                    </ul>
                    <p className="mt-3">Click &quot;Add Account.&quot;</p>
                  </div>
                </div>
              </div>
              <img
                src="/guides/email-setup/04-select-pop3.gif"
                alt="POP3 import option and server settings form"
                width={800}
                height={500}
                loading="lazy"
                className="rounded-xl border border-fog-mid/20 w-full"
              />
            </li>

            {/* Tip after Step 5 */}
            <li className="list-none">
              <div className="bg-particle-glow/5 border-l-2 border-particle-glow rounded-r-lg p-4">
                <p className="text-particle-glow font-semibold text-sm mb-1">Tip</p>
                <p className="text-text-secondary text-sm">Leave &quot;Label incoming messages&quot; checked to easily filter business emails in Gmail.</p>
              </div>
            </li>

            {/* Step 6 */}
            <li className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-particle-glow/10 text-particle-glow flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-semibold">6</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-text-primary text-lg">Confirm and enable send-as</h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">
                    You&apos;ll see a confirmation that the account was added. Select &quot;Yes, I want to be able to send mail as [your business email]&quot; and click Next.
                  </p>
                </div>
              </div>
              <img
                src="/guides/email-setup/05-send-as-confirm.gif"
                alt="Account added confirmation with send-as option"
                width={800}
                height={500}
                loading="lazy"
                className="rounded-xl border border-fog-mid/20 w-full"
              />
              <img
                src="/guides/email-setup/07-account-added.gif"
                alt="Account successfully added message"
                width={800}
                height={500}
                loading="lazy"
                className="rounded-xl border border-fog-mid/20 w-full"
              />
            </li>
          </ol>
        </section>

        {/* Part B: Send Emails from Your Business Address */}
        <section id="part-b" className="scroll-mt-20">
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-2">
            Part B: Send Emails from Your Business Address
          </h2>
          <div className="border-t border-fog-mid/20 mb-10" />

          <ol start={7} className="space-y-12 list-none p-0 m-0">
            {/* Step 7 */}
            <li className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-particle-glow/10 text-particle-glow flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-semibold">7</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-text-primary text-lg">Set your display name</h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">
                    Enter the name you want recipients to see in the &quot;From&quot; field (e.g., your full name or business name). Click Next Step.
                  </p>
                </div>
              </div>
            </li>

            {/* Step 8 */}
            <li className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-particle-glow/10 text-particle-glow flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-semibold">8</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-text-primary text-lg">Configure SMTP</h3>
                  <div className="mt-2 text-text-secondary leading-relaxed">
                    <p>Fill in the outgoing mail server settings:</p>
                    <ul className="mt-3 space-y-2 ml-1">
                      <li className="flex items-start gap-2">
                        <span className="text-fog-mid mt-1.5">•</span>
                        <span>SMTP Server: <code className="bg-fog-deep px-1.5 py-0.5 rounded text-particle-glow font-mono text-sm">smtp.titan.email</code></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fog-mid mt-1.5">•</span>
                        <span>Port: <code className="bg-fog-deep px-1.5 py-0.5 rounded text-particle-glow font-mono text-sm">587</code></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fog-mid mt-1.5">•</span>
                        <span>Username: your full business email address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fog-mid mt-1.5">•</span>
                        <span>Password: your business email password</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-fog-mid mt-1.5">•</span>
                        <span>Select &quot;Secured connection using TLS&quot;</span>
                      </li>
                    </ul>
                    <p className="mt-3">Click &quot;Add Account.&quot;</p>
                  </div>
                </div>
              </div>
              <img
                src="/guides/email-setup/06-smtp-config.gif"
                alt="SMTP server settings configuration form"
                width={800}
                height={500}
                loading="lazy"
                className="rounded-xl border border-fog-mid/20 w-full"
              />
            </li>

            {/* Step 9 */}
            <li className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-particle-glow/10 text-particle-glow flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-semibold">9</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-text-primary text-lg">Verify your email</h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">
                    Gmail sends a verification email to your business address. Open it and click the confirmation link, or copy the code and paste it back in Gmail.
                  </p>
                </div>
              </div>
            </li>

            {/* Tip after Step 9 */}
            <li className="list-none">
              <div className="bg-particle-glow/5 border-l-2 border-particle-glow rounded-r-lg p-4">
                <p className="text-particle-glow font-semibold text-sm mb-1">Tip</p>
                <p className="text-text-secondary text-sm">Don&apos;t see the verification email? Click &quot;Check mail now&quot; in Gmail Settings, or log in directly at your email provider&apos;s webmail.</p>
              </div>
            </li>

            {/* Step 10 */}
            <li className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-particle-glow/10 text-particle-glow flex items-center justify-center shrink-0">
                  <span className="font-serif text-lg font-semibold">10</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-text-primary text-lg">You&apos;re all set</h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">
                    Your business email now appears under both &quot;Send mail as&quot; and &quot;Check mail from other accounts&quot; in Gmail Settings. You can send and receive business emails directly from Gmail.
                  </p>
                </div>
              </div>
              <img
                src="/guides/email-setup/08-final-result.gif"
                alt="Final Accounts and Import view showing both configurations"
                width={800}
                height={500}
                loading="lazy"
                className="rounded-xl border border-fog-mid/20 w-full"
              />
            </li>
          </ol>
        </section>

        {/* Quick Reference Card */}
        <section id="quick-reference" className="scroll-mt-20">
          <div className="bg-fog-deep/60 border border-fog-mid/20 rounded-2xl p-8">
            <h2 className="font-serif text-xl text-text-primary mb-6">Server Settings at a Glance</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-fog-mid/20">
                    <th className="py-3 px-4 text-text-secondary text-sm uppercase tracking-wider font-medium">Purpose</th>
                    <th className="py-3 px-4 text-text-secondary text-sm uppercase tracking-wider font-medium">Server</th>
                    <th className="py-3 px-4 text-text-secondary text-sm uppercase tracking-wider font-medium">Port</th>
                    <th className="py-3 px-4 text-text-secondary text-sm uppercase tracking-wider font-medium">Security</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-fog-mid/10">
                    <td className="py-3 px-4 text-text-primary">Incoming (POP3)</td>
                    <td className="py-3 px-4 font-mono text-particle-glow">imap.titan.email</td>
                    <td className="py-3 px-4 font-mono text-particle-glow">995</td>
                    <td className="py-3 px-4 text-text-primary">SSL</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-text-primary">Outgoing (SMTP)</td>
                    <td className="py-3 px-4 font-mono text-particle-glow">smtp.titan.email</td>
                    <td className="py-3 px-4 font-mono text-particle-glow">587</td>
                    <td className="py-3 px-4 text-text-primary">TLS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section id="video" className="scroll-mt-20">
          <h2 className="font-serif text-xl text-text-primary mb-6">Video Walkthrough</h2>
          <div className="aspect-video rounded-xl overflow-hidden border border-fog-mid/20">
            <iframe
              src="https://www.loom.com/embed/22f6561896614d4fb601130ea67796ef"
              allowFullScreen
              loading="lazy"
              title="Email setup video walkthrough"
              className="w-full h-full border-0"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 md:px-12 border-t border-fog-mid/20 py-16 text-center">
        <p className="font-serif text-xl text-particle-glow mb-2">Neblina</p>
        <p className="text-text-secondary text-sm">
          Questions? Reach out to your Neblina Digital contact.
        </p>
      </footer>
    </div>
  )
}
