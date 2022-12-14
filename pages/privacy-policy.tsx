import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <Navbar />
      {/* <div style={{ minHeight: "80vh" }}>heyooooooo</div>       */}
      <div
        className="container my-5"
        style={{ maxWidth: "800px", color: "#495057" }}
      >
        <h3>Privacy Policy&nbsp;</h3>
        <p>
          <span className="">
            This Privacy Policy is prepared by DeanAndSomeCarsand whose
            registered address is DeanAndSomeCars (&ldquo;We&rdquo;) are
            committed to protecting and preserving the privacy of our visitors
            when visiting our site or communicating electronically with us.
          </span>
        </p>
        <p>
          <span className="">
            This policy sets out how we process any personal data we collect
            from you or that you provide to us through our website and social
            media sites. We confirm that we will keep your information secure
            and that we will comply fully with all applicable United States of
            America Data Protection legislation and regulations. Please read the
            following carefully to understand what happens to personal data that
            you choose to provide to us, or that we collect from you when you
            visit our sites. By submitting information you are accepting and
            consenting to the practices described in this policy.
          </span>
        </p>
        <h4>Types of information we may collect from you</h4>
        <p>
          <span className="">
            We may collect, store and use the following kinds of personal
            information about individuals who visit and use our website and
            social media sites:
          </span>
        </p>
        <p>
          <span className="">
            <strong>Information you supply to us.</strong>
          </span>
          <span className="">
            {" "}
            You may supply us with information about you by filling in forms on
            our website or social media. This includes information you provide
            when you submit a contact/enquiry form. The information you give us
            may include, but not limited to, your name, address, e-mail address
            and phone number.
          </span>
        </p>
        <h4>How we may use the information we collect</h4>
        <p>
          <span className="">
            We use the information in the following ways:
          </span>
        </p>
        <p>
          <span className="">
            <strong>Information you supply to us. </strong>
          </span>
          <span className="">We will use this information:</span>
        </p>
        <ul>
          <li>
            <span className="">
              to provide you with information and/or services that you request
              from us;
            </span>
          </li>
          <li>
            <span className="">
              To contact you to provide the information requested.
            </span>
          </li>
        </ul>
        <h4>Disclosure of your information</h4>
        <p>
          <span className="">
            Any information you provide to us will either be emailed directly to
            us or may be stored on a secure server.
          </span>
        </p>
        <p>
          <span className="">
            We do not rent, sell or share personal information about you with
            other people or non-affiliated companies.
          </span>
        </p>
        <p>
          <span className="">
            We will use all reasonable efforts to ensure that your personal data
            is not disclosed to regional/national institutions and authorities,
            unless required by law or other regulations.
          </span>
        </p>
        <p>
          <span className="">
            Unfortunately, the transmission of information via the internet is
            not completely secure. Although we will do our best to protect your
            personal data, we cannot guarantee the security of your data
            transmitted to our site; any transmission is at your own risk. Once
            we have received your information, we will use strict procedures and
            security features to try to prevent unauthorised access.
          </span>
        </p>
        <h4>Your rights &ndash; access to your personal data</h4>
        <p>
          <span className="">
            You have the right to ensure that your personal data is being
            processed lawfully (&ldquo;Subject Access Right&rdquo;). Your
            subject access right can be exercised in accordance with data
            protection laws and regulations. Any subject access request must be
            made in writing to{" "}
          </span>
          <a
            href="mailto:DeanAndSomeCars@gmail.com"
            target="_blank"
            rel="noopener"
          >
            DeanAndSomeCars@gmail.com
          </a>
          <span className="">
            {" "}
            . We will provide your personal data to you within the statutory
            time frames. To enable us to trace any of your personal data that we
            may be holding, we may need to request further information from you.
            If you have a complaint about how we have used your information, you
            have the right to complain to the Information Commissioner&rsquo;s
            Office (ICO).
          </span>
        </p>
        <h4>Changes to our privacy policy</h4>
        <p>
          <span className="">
            Any changes we may make to our privacy policy in the future will be
            posted on this page and, where appropriate, notified to you by
            e-mail. Please check back frequently to see any updates or changes
            to our privacy policy.
          </span>
        </p>
        <h4>Contact</h4>
        <p>
          <span className="fs-6">
            Questions, comments and requests regarding this privacy policy are
            welcomed and should be addressed to Dean of
            deanandsomecars@gmail.com.
          </span>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
