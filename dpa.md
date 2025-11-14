---
layout: page
title: Data Processing Addendum
---
<div class="col-lg-12 text-center">
	<h2 class="section-heading text-uppercase">Data processing addendum</h2>
</div>

# Data Processing Addendum (DPA)
**Last Updated: November 14th, 2025**

This DPA forms part of the Agreement between **Inutil Labs, Inc.** (“Processor”) and the Client (“Controller”) regarding processing of personal data through the Services.

---

## 1. Parties
**Processor:**  
Inutil Labs, Inc.  
2810 N Church St, Wilmington, DE 19802-4447  
info@inutil-labs.com  

**Controller:**  
The Client identified in the applicable Order Form or Agreement.

---

## 2. Nature and Purpose of Processing
Processor provides stateless API services. Processing occurs **only in volatile memory**, solely to generate API responses.

Processor **does not**:
- store data  
- cache data  
- log request content  
- retain personal data after processing  

Purpose: performance of the contract between Parties.

---

## 3. Categories of Data Subjects
- Individuals whose data Controller submits to the API (e.g., phone number owners)

---

## 4. Categories of Personal Data
- Phone numbers or other metadata submitted in API requests  
- Technical request parameters (transient only)  

---

## 5. Duration of Processing
Processing is ephemeral and ceases immediately after each API response.

No data is retained by Processor.

---

## 6. Processor Obligations
Processor shall:
- Process data only on documented instructions  
- Maintain confidentiality  
- Implement appropriate security measures  
- Assist with GDPR obligations to the extent applicable  
- Notify Controller of any personal data breach without undue delay  
- Delete all transient data immediately after use (automatic, in-memory only)  

---

## 7. Transfers to the United States
Processor is located in the United States.  
Transfers are governed by:
- **EU Standard Contractual Clauses (SCCs)**  
- No retention minimizes risk  

---

## 8. Subprocessors
Processor uses the following subprocessors:

| Subprocessor | Purpose | Location |
|-------------|----------|----------|
| Akamai / Linode | Compute & hosting | USA |
| Cloudflare | Network edge security | Global |
| Stripe | Billing-only processor | USA |

Processor shall notify Controller of changes to subprocessors when reasonably possible.

---

## 9. Controller Obligations
Controller shall:
- Ensure it has lawful basis to submit data  
- Not send excessive or unnecessary personal data  
- Configure its systems to avoid transmitting data it does not intend to process  

---

## 10. Security
Processor utilizes:
- TLS encryption  
- Isolated compute environments  
- Infrastructure firewalls  
- Cloudflare WAF  
- No data persistence  

---

## 11. Breach Notification
Processor will notify Controller via **info@inutil-labs.com** without undue delay in the event of a personal data breach.

---

## 12. Data Subject Requests
Since Processor does not retain data, Processor cannot:
- Access  
- Rectify  
- Export  
- Erase  

request content.

Processor will forward requests received directly from individuals to Controller.

---

## 13. Termination
Upon termination of the Agreement, Processor retains no data and therefore has no additional deletion obligations.

---

## 14. Contact
All communications under this DPA:  
**info@inutil-labs.com**

