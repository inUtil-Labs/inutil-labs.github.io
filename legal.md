---
layout: page
title: Privacy Policy
---
<div class="col-lg-12 text-center">
	<h2 class="section-heading text-uppercase">Privacy Policy and Data Security</h2>
</div>

# Privacy Policy
**Last Updated: November 14th, 2025**

This Privacy Policy explains how **Inutil Labs, Inc.** (“Inutil Labs”, “we”, “us”) processes personal data when providing our stateless API Services.

We are committed to complying with **EU GDPR**, **UK GDPR**, and other applicable privacy laws.

---

## 1. Who We Are
**Inutil Labs, Inc.**  
EIN: 38-4250967  
Address: 2810 N Church St, Wilmington, DE 19802-4447  
Email: **info@inutil-labs.com**

---

## 2. Nature of Our Services
Inutil Labs provides direct API-based metadata processing (e.g., number validation). All request data is processed **only in volatile memory**, and is **never stored, cached, persisted, or logged**, except as specifically noted.

---

## 3. Categories of Data Processed
We process the following **transient** data only:
- API request payloads (e.g., phone number strings)
- Technical metadata necessary to generate a response

Data is processed solely **in memory** and is destroyed immediately after the response is generated.

---

## 4. Data We Do Not Collect or Store
Inutil Labs does **NOT**:
- Retain API request bodies  
- Store or log personal data  
- Log phone numbers  
- Store IP addresses  
- Cache request metadata  
- Profile users  
- Build datasets or models from Client data  

---

## 5. Data We Do Retain
Minimal operational metadata:
- API key identification (for authentication)  
- Request counters (numerical only, never data content)  
- Error codes (without identifying information)  
- Billing records required by law (via Stripe)  

No personal or sensitive data is stored.

---

## 6. Lawful Basis (GDPR Art. 6)
We process data under:
- **Art. 6(1)(b)** – performance of a contract  
- **Art. 6(1)(f)** – legitimate interest (ensuring service security and availability)  

---

## 7. Subprocessors
Inutil Labs uses the following subprocessors:

| Subprocessor | Purpose | Location |
|-------------|----------|----------|
| Akamai / Linode | Compute & hosting | USA |
| Cloudflare | Edge security + WAF | Global |
| Stripe | Billing only | USA |

Client is responsible for subprocessors used on its own side (e.g., gateways).

---

## 8. International Transfers
Data processed by Inutil Labs occurs in the United States.  
For EU/EEA/UK customers, transfers are covered by:

- **Standard Contractual Clauses (SCCs)**  
- No data is retained after processing, reducing associated risk  

---

## 9. Data Subject Rights
GDPR rights apply; however, because we retain **zero request content**, we typically cannot:
- Access data  
- Rectify data  
- Delete stored data (none exists)  

We can confirm non-retention and assist with metadata limited to billing or account data.

Requests may be submitted to **info@inutil-labs.com**.

---

## 10. Security Measures
We use:
- Network-level security (Cloudflare)  
- Secured isolated compute (Akamai/Linode)  
- TLS encryption for all traffic  
- No data persistence  

---

## 11. Breach Notification
If a security incident affects Client data, we will notify the Client at **info@inutil-labs.com** without undue delay.

---

## 12. Contact
For privacy or GDPR matters:  
**info@inutil-labs.com**


inUtil Labs does its best to provide clear and transparent information and policies around our privacy and data sharing practices. For more information about our privacy practices or if you have questions, please contact us by email at <a href="mailto:{{ site.email }}">{{ site.email }}</a>.
