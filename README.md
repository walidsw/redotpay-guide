# RedotPay sign-up guide (independent blog)

A simple, mobile-friendly website (English + Bangla) that explains how to open a RedotPay account, with your referral code and a copy button.
It's plain HTML/CSS/JS with no build step.

```
redotpay-guide/
  config.js   <- the only file you need to edit
  index.html  <- English page
  bn.html     <- Bangla page
  style.css
  main.js
```

## 1. Put in your referral code

1. In the RedotPay app, go to **[Referral] → [Invite Now]** and copy your code (and your link if you want).
2. Open `config.js` and change:
   ```js
   referralCode: "YOUR-CODE",   // -> "ABC123"
   referralLink: "",            // optional, e.g. "https://..." (shows a button)
   lastChecked: "23 November 2026",
   ```
3. Save. Both pages (English and Bangla) update automatically.

To preview, double-click `index.html` to open it in your browser.

## 2. Publish it for free

**Option A: Netlify Drop (easiest)**
1. Go to https://app.netlify.com/drop
2. Drag the whole `redotpay-guide` folder onto the page.
3. You get a link like `https://something.netlify.app`. Create a free account to keep it and to rename it.
   To update later, drag the folder again in your site's **Deploys** tab.

**Option B: GitHub Pages**
1. Create a free GitHub account and a new **public** repository (e.g. `redotpay-guide`).
2. Click **Add file → Upload files** and upload everything inside this folder (not the folder itself), then **Commit**.
3. Go to **Settings → Pages**, set **Source: Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute your site is at `https://YOUR-USERNAME.github.io/redotpay-guide/`.

## 3. Keep it honest and up to date

- Fees and rules change. Every few months, re-check the help center pages listed at the bottom of each page, fix anything that changed, and update `lastChecked`.
- Keep the referral disclosure and the disclaimer. Referral programs and ad platforms usually require clear disclosure.
- Don't add RedotPay's logo or make the site look official.
- Read RedotPay's referral terms in the app. For example, RedotPay says you get no commission on card orders where the friend used a discount code of 50% or more.

## Facts used (from RedotPay's help center, articles dated Jul–Oct 2026, checked 23 Nov 2026)

- Sign up: email, Google or Apple ID. Referral code goes in "Referral Code (Optional)" on the log-in screen, **only at registration**.
- KYC: 18+, original ID valid 3+ months, face scan, address (000000 if there's no postal code), 4–5 question questionnaire. Usually a few minutes, 1–3 business days if extra documents are needed.
- Cards: virtual 10 USD, physical 100 USD, one-time and non-refundable, paid from your balance. The 5 USD sign-up reward is for spending only and lasts 30 days.
- Spending: no fee in the card's currency, 1.2% in other currencies, 1% crypto conversion. ATM: 2% (USD card 3% above 10,000 USD/month).
- Bangladesh was **not** on RedotPay's unsupported-country, app-access or card-issuance restriction lists when checked. The card **delivery** restriction list was not checked.
- Not found in the help center, so left out: exact referral commission percentages and deposit fees.
