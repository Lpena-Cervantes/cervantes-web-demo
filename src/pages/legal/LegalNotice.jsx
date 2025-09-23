import Section from "../../components/Section";
import { Link } from "react-router-dom";

export default function LegalNotice() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container">
          <span className="badge">Policies</span>
          <h1>Legal Notice</h1>
          <p className="lead m-0">
            Please read these terms carefully. By using this site you accept them in full.
          </p>

          {/* quick switch to Privacy Policy */}
          <div style={{display:"flex", gap:10, marginTop:14, flexWrap:"wrap"}}>
            <span className="chip">Legal Notice</span>
            <Link className="chip" to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section id="legal" noReveal>
        <div className="legal text">
          <p>
            BY USING THIS SITE, YOU HAVE ACCEPTED THESE TERMS AND CONDITIONS IN THEIR
            ENTIRETY. PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY.
          </p>

          <p>
            By accessing and using one of these World Wide Web sites
            (“www.TheCervantesGroup.com”, collectively “The Cervantes Group Websites”)
            you are subject to these terms and conditions.
          </p>

          <h3>Using the Resources on The Cervantes Group Websites</h3>
          <p>
            The information, data, artwork, audio, pictures, text, or ideas (collectively,
            “Resources”) found on The Cervantes Group Websites are protected by copyright
            laws. These Resources are available for personal or educational purposes only.
            You may not modify, use, or distribute the Resources for any other purpose
            without written consent from The Cervantes Group. Besides the exceptions listed
            below, you may not post, transmit, distribute, republish, reproduce, modify, or
            sell any Resources on The Cervantes Group Websites.
          </p>

          <h3>Exceptions</h3>
          <p>
            You may print Resources from The Cervantes Group Websites for educational or
            personal use only; you must include any copyright notice originally included
            with the Resources on all reproductions.
          </p>
          <p>
            All Resources contained on The Cervantes Group Websites have been collected
            from many different sources and are subject to change without notice.
            All media files on The Cervantes Group Websites are property of the respective
            owners and may be protected by copyright laws. You may not, UNDER ANY
            CIRCUMSTANCES, publish, publicly exhibit, distribute, sell, reproduce, or alter
            any media made accessible on The Cervantes Group Websites without express
            written consent from the owner of the media files.
          </p>

          <h3>Links to other Sites</h3>
          <p>
            All sites linked from The Cervantes Group Websites are not regulated by The
            Cervantes Group. Therefore, The Cervantes Group holds no control over these
            sites and does not hold any responsibility or liability for any materials or
            communications available at such linked sites. The Cervantes Group does not
            intend the links on The Cervantes Group Websites to be endorsements or
            advertisements for the entities connected through the links. These links are
            provided for convenience only.
          </p>

          <h3>Warranty Disclaimer</h3>
          <p>
            The information, data, or services (collectively, “Data”) made available at The
            Cervantes Group Websites are provided by the publisher, “The Cervantes Group,”
            without any kind of warranty. The Cervantes Group disclaims any warranties,
            representations, and misrepresentations, including without limitation, the
            implied warranties of merchantability and fitness for any purpose.
          </p>
          <p>
            The Cervantes Group shall have absolutely no liability in connection with the
            services including, without limitation, any liability for damage to your
            computer data, hardware, software, public or private business, and person
            resulting from the Data or the lack thereof available on The Cervantes Group
            Websites. The Cervantes Group shall have no liability or responsibility for:
          </p>
          <ol type="a">
            <li>
              any injury or loss, in whole or in part, by its omissions, additions, actions,
              or negligence, or for contingencies beyond its control, in compiling,
              presenting, or delivering the Data;
            </li>
            <li>
              any misrepresentations, omissions, errors, inaccuracies, or corruptive states
              in the Data no matter how caused or delayed; or
            </li>
            <li>
              any decision taken or not taken in reliance on the Data given hereunder.
            </li>
          </ol>
          <p>
            The Cervantes Group makes and implies no warranty, guaranty, or representation
            of the content, accuracy, sequence, completeness, or timeliness of the Data or
            that the Data can be relied upon for any reason. The Cervantes Group makes and
            implies no warranty, guaranty, or representation that the Data found here will be
            error-less or continuous or that any mistakes can be corrected.
          </p>
          <p className="muted">
            For purposes of this section, “The Cervantes Group” shall include The
            Cervantes Group, and all of its divisions, successors, parent companies,
            subsidiaries, employees, partners, agents, principals, representatives, online
            properties, and any third-party providers or sources of information, data, or files.
          </p>

          <h3>
            Notice to external websites and Internet Server owners represented in
            The Cervantes Group
          </h3>
          <p>
            The Cervantes Group reserves the right to include or exclude the types of
            websites or internet servers linked or listed on The Cervantes Group Websites,
            and can include or remove a site at any time, for any reason. You are completely
            responsible for the development and maintenance of your site and all its
            materials. You are solely responsible for: the accuracy and appropriateness of
            data posted on your site; ensuring your site is lawful and does not infringe the
            rights of any third party (including copyright, trademarks, policies, privacy, or
            personal/proprietary rights); and ensuring your site contains no libelous,
            illegal, or obscene information. The Cervantes Group disclaims all liability for
            these matters, and you agree to hold us harmless for all claims, damages, and
            expenses (including attorney’s fees) relating to the operation, development, and
            contents of your site.
          </p>

          <h3>Liability Limitation</h3>
          <p>
            Under no circumstances shall The Cervantes Group be held liable for any damages
            or losses whatsoever, whether in contract, tort or any other reason, from the use
            of, or dependence on, the Data, or from the general use of the Internet.
          </p>
          <p className="muted">
            For purposes of this section, “The Cervantes Group” shall include The
            Cervantes Group, and all of its divisions, successors, parent companies,
            subsidiaries, employees, partners, agents, principals, representatives, online
            properties, and any third-party providers or sources of information, data, or files.
          </p>
        </div>
      </Section>
    </>
  );
}
