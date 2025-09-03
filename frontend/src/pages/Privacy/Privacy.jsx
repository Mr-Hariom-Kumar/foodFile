import React from 'react'
import './Privacy.css'

const Privacy = () => {
  const dates = new Date(Date.now())
  const dates2 = dates.toLocaleDateString()

  return (
    <div id="tomato-legal">
        <section id="terms">
            <h1>About Us</h1>
            <p>
                Hi, I’m <strong>Hariom Kumar</strong>, a student and the creator of <strong>Tomato</strong>.  
                I love building projects, experimenting with new ideas, and learning through real-world 
                applications. Tomato is one of my practice projects where I explore how food delivery 
                apps work — from design and development to user experience.  
            </p>
            <p>
                My goal is to keep learning, improving, and creating useful projects that solve problems 
                and help me grow as a developer.  
            </p>
        </section>

      
      <section id="terms">
        <h1>Terms &amp; Conditions</h1>
        <p><strong>Effective Date:</strong> {dates2}</p>
        <p>
          Welcome to <strong>Tomato</strong> (“<em>Tomato</em>”, “<em>we</em>”, “<em>us</em>”, or “<em>our</em>”). 
          These Terms &amp; Conditions (“<em>Terms</em>”) govern your access to and use of the Tomato mobile 
          application, website, and related services (collectively, the “<em>Service</em>”). By accessing or 
          using the Service, you agree to be bound by these Terms.
        </p>

        <h2>1. Eligibility &amp; Account</h2>
        <ul>
          <li>You must be at least 18 years old (or the age of majority in your jurisdiction) to use the Service.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</li>
          <li>Provide accurate and complete information and keep it updated.</li>
        </ul>

        <h2>2. Service Description</h2>
        <p>
          Tomato enables users to discover restaurants and stores (“<em>Merchants</em>”), place orders for food 
          and beverages, and arrange delivery or pickup via independent delivery partners (“<em>Delivery Partners</em>”). 
          Tomato is a technology platform and does not prepare food, operate restaurants, or employ Delivery Partners.
        </p>

        
      </section>

      <hr />

     
      <section id="privacy">
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> {dates2}</p>
        <p>
          This Privacy Policy describes how <strong>Tomato</strong> collects, uses, discloses, and protects your 
          information when you use our Service. By using the Service, you consent to this Policy.
        </p>

        
      </section>

      <hr />

      
      <section id="consent">
        <p>
          By creating an account or placing an order on Tomato, you acknowledge that you have read and agree to 
          Tomato’s <a href="#terms">Terms &amp; Conditions</a> and <a href="#privacy">Privacy Policy</a>.
        </p>

        <h2>3. Sharing &amp; Disclosure of Information</h2>
<p>We value your trust and only share your personal information in limited circumstances:</p>
<ul>
  <li>
    <strong>With Merchants &amp; Delivery Partners:</strong> 
    We share your order details (items, delivery address, contact number, and special instructions) 
    with the restaurant, store, or delivery partner so that your order can be prepared and delivered.
  </li>
  <li>
    <strong>With Service Providers:</strong> 
    We work with third-party vendors for payment processing, cloud hosting, analytics, customer support, 
    and marketing. These partners only receive the data necessary to perform their services and are 
    bound by confidentiality obligations.
  </li>
  <li>
    <strong>For Legal Reasons:</strong> 
    We may disclose information if required by law, legal process, or government request, or to protect 
    the safety, rights, or property of Tomato, our users, or the public.
  </li>
  <li>
    <strong>During Business Transfers:</strong> 
    In case of a merger, acquisition, or sale of assets, your information may be transferred as part of 
    the business deal.
  </li>
  <li>
    <strong>With Your Consent:</strong> 
    We will share your information with third parties when you give us explicit permission to do so.
  </li>
</ul>

      </section>
      <p>Thank you❤️</p>

    </div>
  )
}

export default Privacy
