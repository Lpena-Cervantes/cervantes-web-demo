import Section from "../../components/Section";
import { useForm } from "react-hook-form";

export default function Contact(){
  const { register, handleSubmit, reset, formState:{ errors, isSubmitting } } = useForm();
  const onSubmit = async (data)=>{
    console.log("Lead:", data);
    alert("Thanks! We’ll get back to you shortly.");
    reset();
  };

  return (
    <Section id="contact">
      {/* Heading OUTSIDE the grid so both columns align */}
      <h2>Let’s bring your idea to life</h2>
      <p className="lead" style={{marginBottom: 16}}>
        Tell us a bit about your needs. We’ll respond within one business day.
      </p>

      {/* Two-column layout: form + sidebar */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: "minmax(420px,1fr) minmax(320px,.85fr)",
          gap: 24,
          alignItems: "start" // 🔹 no more stretch
        }}
      >
        {/* LEFT: form */}
        <form
          className="card round"
          onSubmit={handleSubmit(onSubmit)}
          style={{ padding: 20, display: "grid", gap: 14 }}
        >
          {/* Honeypot */}
          <input
            type="text"
            name="company_website"
            style={{display:"none"}}
            tabIndex={-1}
            autoComplete="off"
            {...register("company_website")}
          />

          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div>
              <label>Full name</label>
              <input className="round" placeholder="Jane Doe" {...register("name", { required: true })} />
              {errors.name && <small style={{ color: "#ffb199" }}>Name is required.</small>}
            </div>
            <div>
              <label>Company</label>
              <input className="round" placeholder="Acme Corp" {...register("company")} />
            </div>
            <div>
              <label>Email</label>
              <input className="round" type="email" placeholder="you@company.com" {...register("email", { required: true })} />
              {errors.email && <small style={{ color: "#ffb199" }}>Email is required.</small>}
            </div>
            <div>
              <label>Phone</label>
              <input className="round" type="tel" placeholder="+1 (555) 555-5555" {...register("phone")} />
            </div>
            <div>
              <label>Budget range</label>
              <select className="round" {...register("budget")}>
                <option value="">Select…</option>
                <option>$10k–$25k</option>
                <option>$25k–$100k</option>
                <option>$100k–$500k</option>
                <option>$500k+</option>
              </select>
            </div>
            <div>
              <label>Project type</label>
              <select className="round" {...register("type")}>
                <option value="">Select…</option>
                <option>New product / MVP</option>
                <option>Modernization</option>
                <option>Managed Services</option>
                <option>Cybersecurity</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label>How can we help?</label>
            <textarea
              className="round"
              rows={5}
              placeholder="Briefly describe your goals and timeline…"
              {...register("message", { required: true })}
            />
            {errors.message && <small style={{ color: "#ffb199" }}>Please include a short message.</small>}
          </div>

          <label style={{display:"grid", gridTemplateColumns:"20px 1fr", alignItems:"center", gap:10}}>
            <input type="checkbox" {...register("consent", { required: true })} />
            <span>I agree to be contacted and accept the <a href="privacy-policy.html">Privacy Policy</a>.</span>
          </label>

          <div>
            <button className="btn" disabled={isSubmitting} type="submit" aria-label="Submit contact form">
              {isSubmitting ? "Sending…" : "Get in touch"}
            </button>
          </div>
        </form>

        {/* RIGHT: sidebar */}
        <aside
          className="card round"
          style={{
            padding: 20,
            maxWidth: 340,
            alignSelf: "start"
          }}
        >
          <h3>Prefer to talk?</h3>
          <p className="lead">
            Call <a href="tel:18667297597">1-866-729-7597</a> or email <a href="mailto:info@thecervantesgroup.com">info@thecervantesgroup.com</a>.
          </p>
          <hr className="hr" />
          <h3>Why partner with us</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)" }}>
            <li>Enterprise delivery with agile speed</li>
            <li>Security baked into every stage</li>
            <li>Near-shore collaboration in your time zone</li>
            <li>WBENC & NMSDC certified</li>
          </ul>
        </aside>
      </div>

      {/* inputs base styles + textarea guardrails + responsive stacking */}
      <style>{`
        input, select, textarea {
          width:100%; padding:12px 14px; background:#0f1012; color:var(--text);
          border:1px solid #242426; border-radius:12px;
        }
        label { display:block; margin-bottom:6px; color:#e6e6e8; font-size:.95rem; }

        /* Keep the big textarea from breaking the layout */
        textarea {
          resize: vertical;
          min-height: 120px;
          max-height: 280px;
          overflow: auto;
        }

        @media (max-width: 980px){
          #contact .grid {
            grid-template-columns: 1fr !important; /* stack form + sidebar */
          }
          #contact aside {
            max-width: 100% !important;
            margin-top: 20px; /* add spacing under form */
          }
          textarea { max-height: 220px; }
        }
      `}</style>
    </Section>
  );
}
