import Section from "../../components/Section";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container">
          <span className="badge">Policies</span>
          <h1>Privacy Policy</h1>
          <p className="lead m-0">
            Your privacy is important to The Cervantes Group. This page explains what we
            collect, how we use it, and your choices.
          </p>

          {/* quick switch between policies */}
          <div style={{display:"flex", gap:10, marginTop:14, flexWrap:"wrap"}}>
            <Link className="chip" to="/legal-notice">Legal Notice</Link>
            <span className="chip">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <Section id="privacy" noReveal>
        <div className="legal text">
          <p>This is the web site of <strong>The Cervantes Group.</strong></p>

          <p>
            We can be reached via e-mail at{" "}
            <a href="mailto:info@thecervantesgroup.com">info@thecervantesgroup.com</a>.
          </p>

          <p>
            For each visitor to our web page, our server may recognize only the consumer’s
            domain name (where possible). We collect the e-mail addresses of those who
            communicate with us via e-mail, aggregate information on what pages visitors
            access or visit, and information volunteered by the consumer (such as survey
            info and/or site registrations).
          </p>

          <p>
            The information we collect is used to improve the content of our site, to notify
            consumers about updates, and by us to contact consumers for marketing
            purposes. It is <em>not</em> shared with other organizations for commercial purposes.
          </p>

          <p>
            If you do not want to receive e-mail from us in the future, please let us know
            by emailing the address above or contacting us by phone or post and telling us
            you do not wish to receive communications.
          </p>

          <p>
            If you supply us with your postal address online you will only receive the
            information for which you provided your address. Please provide your exact name
            and address so we can honor the request. If you provide a phone number, you
            may receive telephone contact regarding orders you placed online; provide your
            correct number and we will ensure your name is removed from our call list.
          </p>

          <h3>Register Policy &amp; Consent</h3>
          <p><strong>Register Policy.</strong> By registering you agree to our Consent Policy.</p>
          <p>
            <strong>Consent Policy.</strong> I certify that the facts set forth in my application
            are true and complete to the best of my knowledge. I understand that if I am
            offered employment, any falsified statements shall be sufficient grounds for
            non-hiring or dismissal. I understand employment is at-will. Submission of an
            application authorizes the Company to obtain information regarding prior
            employment, government agency, and school records. I authorize anyone
            possessing this information to furnish it to the Company and release all parties
            from liability for doing so.
          </p>

          <h3>The Cervantes Group Accommodations</h3>
          <p>
            The Cervantes Group complies with the Americans with Disabilities Act (ADA)
            and applicable state/local laws. We do not discriminate against qualified
            applicants and will provide reasonable accommodations unless doing so causes
            undue hardship. If you need an accommodation to apply or to use our online
            application, contact{" "}
            <a href="mailto:berta@thecervantesgroup.com">berta@thecervantesgroup.com</a>.
          </p>

          <h3>1. What is Personal Information?</h3>
          <p>
            “Personal Information” is information that, alone or combined with other data,
            identifies you. When we combine non-identifying information with Personal
            Information, we treat the combined data as Personal Information.
          </p>

          <h3>2. Scope</h3>
          <p>
            This Privacy Policy applies to ESD-operated websites that link to it (including
            <em> thecervantesgroup.com</em>) and to the services described on the Site
            (the “Services”). Practices may vary slightly between the Site and the Services.
          </p>

          <h3>3. How We Collect and Use Personal Information</h3>
          <p><strong>Contact &amp; Account Information.</strong> We collect details you provide
            (name, email, phone, payment info) to deliver the Services, respond to
            inquiries, bill you, and send service-related updates or—where allowed—product
            news.</p>
          <p><strong>IP Address &amp; Header Information.</strong> We automatically collect
            technical data (e.g., IP, browser, OS, language, screen size, referrer) for
            security, abuse prevention, and trend analysis.</p>
          <p><strong>Traffic Data/Analytics.</strong> We may use tools such as Google or
            Microsoft Analytics to understand site usage and improve content and
            performance.</p>

          <h3>4. Cookies &amp; Similar Technologies</h3>
          <p>
            We use cookies and similar technologies (pixel tags, web beacons, local storage)
            to operate and personalize the Site and improve performance (e.g., load
            balancing). You can block or delete cookies in your browser; some features may
            not function properly without them.
          </p>

          <h3>5. How We Share Personal Information</h3>
          <p>We share Personal Information only as described here or with your consent:</p>
          <ul>
            <li><strong>Service Providers.</strong> Vendors who host, process, support, bill,
              analyze, or otherwise help us deliver the Site/Services (e.g., Panza/PANZAJobs)
              under comparable privacy commitments.</li>
            <li><strong>Corporate Transactions / Accounting / Audit / Tax.</strong> In the event of a
              merger, acquisition, asset transfer, or similar review/transaction, user data
              may be transferred or disclosed as permitted by law.</li>
            <li><strong>Legal / Safety.</strong> To law enforcement, government agencies, courts,
              or others as required by law or to protect rights, property, or safety.</li>
          </ul>

          <h3>6. EU/UK/Swiss Personal Information</h3>
          <p>
            We endeavor to handle cross-border data in line with applicable frameworks and
            principles. If you are in the EU/UK/Switzerland and have questions or complaints,
            contact <a href="mailto:privacy@thecervantesgroup.com">privacy@thecervantesgroup.com</a>.
          </p>

          <h3>7. Your Data Subject Rights</h3>
          <p>
            If you would like to access, amend, erase, or object to/restrict processing of
            Personal Information collected via the Site, email{" "}
            <a href="mailto:privacy@thecervantesgroup.com">privacy@thecervantesgroup.com</a>.
            Depending on your location, you may also have the right to lodge a complaint
            with your supervisory authority.
          </p>

          <h3>8. Children’s Personal Data</h3>
          <p>
            The Site is not intended for children under sixteen (16). If we learn we collected
            children’s data without a lawful basis, we will delete it promptly.
          </p>

          <h3>9. Retention</h3>
          <p>
            We retain Personal Information as needed to fulfill the purposes described here,
            unless a longer period is required by law.
          </p>

          <h3>10. Security</h3>
          <p>
            We implement safeguards (encrypted storage, firewalls, password protections,
            access controls, training). No method of transmission or storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>

          <h3>11. Third-Party Links</h3>
          <p>
            Our Site may link to third-party websites. Their practices are not governed by
            this policy. Review those sites’ policies before providing information.
          </p>

          <h3>12. Changes &amp; Contact</h3>
          <p>
            We may update this policy and will post changes here (see “Last Updated”). If
            changes are material, we may also notify you by email or site notice. Where
            required, we will obtain consent. For questions, contact{" "}
            <a href="mailto:privacy@thecervantesgroup.com">privacy@thecervantesgroup.com</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
