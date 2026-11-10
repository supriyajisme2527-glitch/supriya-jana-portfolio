/* =====================================================================
   EDIT THIS FILE to change anything on your website.

   - Every piece of text on the site lives here, taken from your CV.
   - YOUR PHOTO: replace the file  images/supriya.jpg  with a sharper
     portrait (same name). About 800 px wide works best.
   - Paste links into the `link` / `url` fields. While a link is empty ("")
     the site shows "Link coming soon" instead.
   - To add a project or role, copy one { ... } block (keep the comma
     between blocks) and give it a short, unique `id`.
   - `findings` adds a "Key findings" list to a project page. Add the real
     results of your analysis when you are ready.
   - `image` (optional) puts a real screenshot on a project card, for
     example image: "images/tableau-dashboard.png".
   - Every TOOL tile opens a "Projects" slide (skill tiles are plain, not
     clickable). To show a project there, add the project's `id` to that
     tile's `projects: [ ]` list, for example projects: ["mama-earth"].
     Create the project first in the PROJECTS list below, then list its id
     on as many tool tiles as you like. An empty list shows "Projects coming soon".
   - NOTE: "Power BI" and "AI tools" are not on your CV. They are included
     because you told me you use them. Delete them here if you prefer.
   ===================================================================== */

window.SITE = {

  name: "Supriya Jana",
  brandSub: "PGDM | Marketing Specialisation",

  /* The Download Resume button opens this PDF (an ATS-friendly CV, no date of birth or home address). To update it, replace the file. */
  resume: { url: "documents/Supriya-Jana-Resume.pdf" },

  /* ------------------------------ HERO ------------------------------ */
  hero: {
    hello: "Hello, I'm",
    title: "Pharmacist | PGDM, Marketing Specialisation",
    intro: "Pharmacist pursuing a PGDM in Marketing, blending pharmaceutical knowledge with marketing strategy to analyse consumer behaviour and make data-driven decisions. Open to full-time roles in pharma and consumer health marketing.",
    features: [
      /* tone: the slight icon colour (same names as the skill tiles: coral, blue, teal, orange, violet, green, gold, indigo, pink) */
      { icon: "megaphone", tone: "coral",  label: "Marketing" },
      { icon: "bars",      tone: "green",  label: "Data Analysis" },
      { icon: "search",    tone: "teal",   label: "Market Research" },
      { icon: "flask",     tone: "violet", label: "Pharma & Healthcare" }
    ],
    script: ["Better", "Strategies", "Bigger", "Impact"],
    photo: "images/supriya.jpg",
    photoAlt: "Portrait of Supriya Jana"
  },

  /* ------------------------------ ABOUT ------------------------------ */
  about: {
    /* Keep to about three lines. From her CV and LinkedIn; Meta Ads is a skill she stated herself. */
    text: "Registered pharmacist and PGDM (Marketing) student at ISME, combining pharma knowledge with market research, data analysis and Meta Ads. Open to full-time roles in pharma and consumer health marketing.",
    location: "Bangalore, India",
    journey: {
      title: "My Journey",
      items: [
        { icon: "cap",   title: "PGDM, Marketing",     line: "ISME",               when: "2025 – 2027 · Pursuing" },
        { icon: "flask", title: "B.Pharm",             line: "Bharat Technology",  when: "2019 – 2023 · CGPA 8.40" },
        { icon: "book",  title: "Higher Secondary & Secondary", line: "Ghoshpur High School · Kumarpur Hateswar High School", when: "69% (2017 – 19) · 81% (2017)" }
      ]
    },
    quote: {
      text: "I blend pharmaceutical knowledge with marketing strategy to analyse consumer behaviour and support data-driven decisions.",
      by: "Supriya Jana"
    },
    notebook: ["Collect", "Research", "Analyse", "Visualise", "Forecast"]
  },

  /* ----------------------------- SKILLS ----------------------------- */
  skills: {
    intro: "A blend of analytical thinking, market research and business acumen, grounded in a pharmacy background.",
    /* The nine tiles in the glass slide: five marketing tiles on the first row, then four
       (data, BI, AI, communication). Digital Marketing / Meta Ads and Agentic AI are skills
       she stated herself; they are not on the CV yet. */
    tiles: [
      /* Skill tiles are not clickable now, so `projects` below is not shown anywhere. It is kept so the
         project links can be switched back on (ids from the PROJECTS list). */
      /* tone: the slight colour of the icon (coral, blue, teal, orange, violet, green, gold, indigo, pink) */
      { id: "marketing-strategy",   tone: "coral",  icon: "megaphone", title: "Marketing Strategy",    sub: "Expansion & product strategy",         projects: ["mama-earth", "nova-consumer-behaviour"] },
      { id: "digital-marketing",    tone: "blue",   icon: "pointer",   title: "Digital Marketing",     sub: "Meta ad campaigns",                    projects: [] },
      { id: "market-research",      tone: "teal",   icon: "search",    title: "Market Research",       sub: "Data collection · Secondary research", projects: ["mama-earth", "delivery-in-minutes", "nova-consumer-behaviour"] },
      { id: "competitive-analysis", tone: "orange", icon: "target",    title: "Competitive Analysis",  sub: "Landscape · Entry barriers",           projects: ["delivery-in-minutes"] },
      { id: "consumer-insights",    tone: "violet", icon: "users",     title: "Consumer Insights",     sub: "Buying behaviour",                     projects: ["mama-earth", "pharma-crm", "nova-consumer-behaviour"] },
      { id: "data-analysis",        tone: "green",  icon: "bars",      title: "Data Analysis",         sub: "Excel · Pivot Tables",                 projects: ["mama-earth", "state-wise-sales"] },
      { id: "business-intelligence", tone: "gold",  icon: "monitor",   title: "Business Intelligence", sub: "Tableau · Power BI",                   projects: ["state-wise-sales", "bluestone-dashboard", "pharmaos-app", "pharma-os"] },
      { id: "agentic-ai",           tone: "indigo", icon: "bot",       title: "Agentic AI",            sub: "Building AI to create solutions",      projects: [] },
      { id: "communication",        tone: "pink",   icon: "palette",   title: "Communication",         sub: "Canva · Visual communication",         projects: [] }
    ],
    /* The full list, shown when "View All Skills" is opened (same groups as your CV) */
    groups: [
      { icon: "target",  title: "Market Strategy & Research",
        items: ["Competitive Analysis", "Market Research", "Expansion Strategy", "Consumer Insights"] },
      { icon: "bars",    title: "Data & Business Analytics",
        items: ["Excel", "Pivot Tables", "Data Analysis", "Sales Analysis", "Business Intelligence", "Tableau", "Power BI", "AI tools", "Agentic AI", "Orange"] },
      { icon: "palette", title: "Marketing & Communication",
        items: ["Digital Marketing", "Meta Ad Campaigns", "Presentation Design (Canva)", "Visual Communication", "Marketing Insights"] },
      { icon: "briefcase", title: "Professional Skills",
        items: ["Adaptability", "Time Management", "Multitasking", "Ability to Work Under Pressure"] }
    ]
  },

  /* ---------------------------- PROJECTS ---------------------------- */
  projects: [
    {
      id: "mama-earth", short: "Mama Earth", icon: "leaf", art: "forecast",
      title: "Mama Earth: Data-Driven Business Analysis",
      cardTitle: "Mama Earth: Business Analysis",
      category: "Business Analytics · Marketing Strategy",
      year: "Mar 2026",
      summary: "Marketing spend vs revenue, ANOVA on platform-wise sales, price vs satisfaction and a revenue forecast.",
      description: [
        "A data-driven look at Mama Earth's business and marketing strategy, built on data collection, market research and statistical testing."
      ],
      points: [
        "Conducted data collection and market research to analyse Mama Earth's business and marketing strategy.",
        "Performed a marketing spend vs revenue analysis.",
        "Ran an ANOVA test for platform-wise sales comparison.",
        "Analysed price vs customer satisfaction across product lines.",
        "Built a revenue forecast."
      ],
      findings: [],          // <- add your key results here, one line each
      tags: ["ANOVA", "Forecasting", "Pricing"],
      allTags: ["ANOVA", "Revenue forecasting", "Pricing analysis", "Market research"],
      link: "",              // <- paste a link to the report or slides here
      linkLabel: "View analysis",
      image: ""
    },
    {
      /* Source: her Strategic Management group presentation on Blinkit (7 slides, case scenario, Oct 2026), file
         documents/Blinkit-Strategic-Management-Presentation.pptx. Slides were exported to images with PowerPoint;
         the card shows a poster made from the front slide. Text is taken from the slides. The earlier CV-based text
         (Dec 2025, "secondary research on the delivery market: growth drivers, competitive landscape and entry
         barriers") was replaced on 6 Nov 2026 at her request to use the PPT for this section. */
      id: "delivery-in-minutes", short: "Delivery in Minutes", icon: "bolt", art: "bubbles",
      title: "Delivery in Minutes: Blinkit Strategic Assessment",
      cardTitle: "Delivery in Minutes: Blinkit Strategy",
      category: "Strategic Management \u00B7 Quick Commerce",
      year: "Oct 2026",
      summary: "A group strategy presentation on Blinkit: PESTEL scan, two drivers of change, four scenarios and a three-year roadmap.",
      description: [
        "A Strategic Management group presentation on Blinkit and India's quick-commerce business: scanning the external environment with PESTEL, then preparing for the next three years. It is built on a case scenario, so the external signals are possibilities to investigate, not confirmed outcomes.",
        "The deck moves from the case context (a promise of delivery in minutes against tensions between growth, speed and price) to PESTEL, the top opportunities and threats, two drivers of change, four scenarios and a recommendation to grow with discipline."
      ],
      pointsTitle: "What we did",
      points: [
        "Framed the strategic question: how should Blinkit prepare for the next three years, not just react to today?",
        "Scanned the external environment with PESTEL: political, economic, social, technological, environmental and legal signals.",
        "Prioritised the top opportunities (AI-led operations, digital urban demand, trust) and threats (cost and margin pressure, regulatory and workforce risk, weather).",
        "Chose two drivers of change, customer demand and operating cost, and built four scenarios from them.",
        "Recommended how to grow with discipline, with a three-year roadmap."
      ],
      findings: [
        "Three tensions sit behind the promise: growth vs profitability, speed vs sustainability, and price vs loyalty.",
        "Demand sets the size of the opportunity; operating cost decides whether it becomes sustainable profit.",
        "Four futures: The Scale-Up Window, Growth Under Pressure, Efficiency First and Defensive Reset. Scenario 4 (weak demand, rising costs) is the riskiest, so the plan must stay viable even there.",
        "Recommendation: grow with discipline. Expand only where order density justifies it, cut cost-to-serve with forecasting and route optimisation, and build trust and resilience.",
        "Roadmap: measure unit economics and pilot AI forecasting (0\u201312 months), scale profitable clusters (12\u201324), build resilient operations (24\u201336)."
      ],
      tags: ["PESTEL", "Scenario planning", "Strategy"],
      allTags: ["PESTEL", "Scenario planning", "Strategic management", "Quick commerce", "Group presentation"],
      link: "documents/Blinkit-Strategic-Management-Presentation.pptx",
      linkLabel: "Open the PPT",
      deck: true,
      fileNote: "PowerPoint file, 7 slides. It opens in PowerPoint.",
      image: "images/blinkit-poster.webp",
      galleryNote: "Group presentation by a team of five, based on a case scenario. Click a slide to see it full size.",
      gallery: [
        { img: "images/blinkit-slide-1.webp", thumb: "images/blinkit-slide-1-t.webp", title: "Title", caption: "Scanning the environment. Preparing for the future." },
        { img: "images/blinkit-slide-2.webp", thumb: "images/blinkit-slide-2-t.webp", title: "Context", caption: "Simple promise, complex delivery" },
        { img: "images/blinkit-slide-3.webp", thumb: "images/blinkit-slide-3-t.webp", title: "PESTEL", caption: "PESTEL: what is changing outside Blinkit" },
        { img: "images/blinkit-slide-4.webp", thumb: "images/blinkit-slide-4-t.webp", title: "Priorities", caption: "Top opportunities and threats" },
        { img: "images/blinkit-slide-5.webp", thumb: "images/blinkit-slide-5-t.webp", title: "Drivers", caption: "Two forces reshaping quick commerce" },
        { img: "images/blinkit-slide-6.webp", thumb: "images/blinkit-slide-6-t.webp", title: "Scenarios", caption: "Four plausible futures for Blinkit" },
        { img: "images/blinkit-slide-7.webp", thumb: "images/blinkit-slide-7-t.webp", title: "Strategy", caption: "Our recommendation: grow with discipline" }
      ]
    },
    {
      /* Source: her workbook OmniPulse_Digital_Marketing_Master_Project.xlsx (4 sheets, USD, Jan to Dec 2026), copied to
         documents/. Sheet pictures come from Excel's own web-page export rendered in Edge. The card picture is the headline
         part of a poster she supplied, cropped so that another company's logo, website, email and its "+48% Growth" label
         do not show. Numbers are the workbook's own results; wording stays neutral about who built which part. */
      id: "omnipulse-digital-marketing", short: "OmniPulse Excel Model", icon: "bars", art: "forecast",
      title: "OmniPulse: Digital Marketing Performance Model (Excel)",
      cardTitle: "OmniPulse: Digital Marketing Model",
      category: "Digital Marketing \u00B7 Excel Analytics",
      year: "2026",
      summary: "An Excel model of a year of digital marketing: spend, funnel, CAC, ROAS, channel benchmarks and customer lifetime value on one dashboard.",
      description: [
        "OmniPulse is an Excel master project on digital marketing performance. A monthly ledger follows each campaign from ad spend through impressions, clicks, leads and purchases to attributed revenue, and an executive dashboard rolls the year up by quarter, with a chart of ad spend against revenue.",
        "Two more sheets hold the channel directory with benchmark CAC and target ROAS, a customer lifetime value model that sets the allowable CAC, and a formula lab that shows each Excel function with its live result. The figures are the workbook's own model data."
      ],
      pointsTitle: "What the workbook does",
      points: [
        "Ledger: 12 months of campaigns with budget, actual spend, impressions, clicks, CTR, CPC, leads, CPL, purchases, conversion rate, CAC, attributed revenue, ROAS and ROI.",
        "Executive dashboard: total spend, attributed revenue, ROAS and blended CAC, a quarterly roll-up and a chart of quarterly ad spend against attributed revenue.",
        "Channels: six marketing channels with budget share, target CPC, benchmark CAC and target ROAS, plus a benchmark matrix built for HLOOKUP.",
        "Customer lifetime value: four customer segments, with CLV and the allowable CAC at a 3:1 ratio.",
        "Formula lab: SUM, SUMIF, COUNT, COUNTIF, VLOOKUP, HLOOKUP, INDEX/MATCH (as XLOOKUP), MIN, MEDIAN and MOD, each with its formula and live result."
      ],
      findings: [
        "Full year: $181,650 of ad spend produced $794,220 of attributed revenue, a 4.37x ROAS at a blended CAC of $27.12.",
        "ROAS rose every quarter, from 3.44x in Q1 to 5.50x in Q4, while CAC fell from $35.72 to $21.40.",
        "December was the strongest month: ROAS 6.03x and the lowest CAC, $19.56.",
        "Ten of the twelve months cleared the 3.5x ROAS hurdle.",
        "Email and lifecycle automation has the highest target ROAS (7.5x) and the lowest benchmark CAC ($15), on 8% of the budget."
      ],
      tags: ["Excel", "ROAS & CAC", "Marketing analytics"],
      allTags: ["Excel", "Digital marketing", "ROAS", "CAC", "Customer lifetime value", "Dashboard", "Formulas"],
      link: "documents/OmniPulse-Digital-Marketing-Master-Project.xlsx",
      linkLabel: "Open the Excel file",
      deck: true,
      fileNote: "Excel workbook, 4 sheets. It opens in Excel.",
      image: "images/omnipulse-card.webp",
      galleryNote: "Sheets from the workbook; the figures are its own model data. Click a sheet to see it full size.",
      gallery: [
        { img: "images/omnipulse-sheet-1.webp", thumb: "images/omnipulse-sheet-1-t.webp", title: "Dashboard", caption: "Executive dashboard: quarterly roll-up and chart" },
        { img: "images/omnipulse-sheet-2.webp", thumb: "images/omnipulse-sheet-2-t.webp", title: "Monthly ledger", caption: "Monthly marketing ledger: from ad spend to revenue" },
        { img: "images/omnipulse-sheet-3.webp", thumb: "images/omnipulse-sheet-3-t.webp", title: "Channels & CLV", caption: "Channel directory, benchmarks and customer lifetime value" },
        { img: "images/omnipulse-sheet-4.webp", thumb: "images/omnipulse-sheet-4-t.webp", title: "Formula lab", caption: "Formula lab: Excel functions with live results" }
      ]
    },
    {
      /* Source: her 9 full-page screenshots (with the simulation's menu bar) of the Universal Rental Car pricing simulation (Florida region). The front slide and the
         card poster were designed here from the results screen (cumulative profit $25.0M, final market share 43.3%, cumulative unit
         sales 7.13M, capacity utilization 68%, final month's profit $2.31M) plus a crop of the simulation's pre-tax profit chart.
         The Net income screenshot also shows the results box. The pictures run in the order of the simulation's own menu. */
      id: "pricing-simulation-universal", short: "Pricing Simulation", icon: "bars", art: "forecast",
      title: "Pricing Strategy Simulation: Universal Rental Car",
      cardTitle: "Pricing Simulation: Universal Rental Car",
      category: "Pricing Strategy \u00B7 Business Simulation",
      year: "Classroom simulation",
      summary: "Set prices month by month for a rental car region: $25.0M cumulative profit and a 43.3% final market share.",
      description: [
        "A business simulation in which I played district manager for the Florida region of Universal Rental Car. Florida was the company's worst-performing region: profit per car was well below average, stock-outs hit at demand peaks, unsold inventory built up in demand valleys, and a pricing war with the main competitor made it worse.",
        "The objective was a pricing strategy that improves financial results over the next 12 months. Each month I reviewed my results and the competitor's, set the next month's prices, and advanced one month at a time."
      ],
      points: [
        "Analysed the starting data: Universal's and the competitor's demand, sales, prices, fleet and capacity.",
        "Followed the dashboard for the Orlando and Florida markets: market share, unit sales per day, capacity utilization and fleet size.",
        "Compared weekday and weekend prices with the competitor's in the price history, and used the market research on business and leisure demand.",
        "Reviewed the Net Income page: monthly revenue, variable and fixed costs, vehicle inventory costs and pre-tax profit, with the pre-tax profit chart.",
        "Set the next month's prices, advanced one month at a time, and reviewed net income, capacity and market share after each step."
      ],
      findingsTitle: "Simulation results",
      findings: [
        "Cumulative profit: $25.0M.",
        "Final market share: 43.3%.",
        "Cumulative unit sales: 7.13M.",
        "Capacity utilization: 68%.",
        "Final month's profit: $2.31M. Monthly pre-tax profit dipped in the fourth month, then recovered and held at roughly $2.3M a month."
      ],
      tags: ["Pricing strategy", "Simulation", "Market share"],
      allTags: ["Pricing strategy", "Business simulation", "Market share", "Capacity utilization", "Profitability"],
      link: "",
      image: "images/pricing-sim-card.webp",
      galleryNote: "Front slide and the simulation's own screens. Click a screen to see it full size.",
      gallery: [
        { img: "images/pricing-sim-1.webp", thumb: "images/pricing-sim-1-t.webp", title: "Front slide", caption: "Pricing strategy simulation: Universal Rental Car" },
        { img: "images/pricing-sim-2.webp", thumb: "images/pricing-sim-2-t.webp", title: "The brief", caption: "Florida: the worst-performing region, and the objective" },
        { img: "images/pricing-sim-3.webp", thumb: "images/pricing-sim-3-t.webp", title: "Dashboard", caption: "Market share, unit sales, capacity and fleet size" },
        { img: "images/pricing-sim-4.webp", thumb: "images/pricing-sim-4-t.webp", title: "Price history", caption: "Weekday and weekend prices against the competitor" },
        { img: "images/pricing-sim-5.webp", thumb: "images/pricing-sim-5-t.webp", title: "Market demand", caption: "Forecast demand and market share" },
        { img: "images/pricing-sim-6.webp", thumb: "images/pricing-sim-6-t.webp", title: "Unit sales", caption: "Monthly sales and price history" },
        { img: "images/pricing-sim-7.webp", thumb: "images/pricing-sim-7-t.webp", title: "Fleet size", caption: "Fleet size against weekday and weekend orders" },
        { img: "images/pricing-sim-8.webp", thumb: "images/pricing-sim-8-t.webp", title: "Capacity", caption: "Monthly orders and capacity needed" },
        { img: "images/pricing-sim-9.webp", thumb: "images/pricing-sim-9-t.webp", title: "Market research", caption: "Market size and share by segment" },
        { img: "images/pricing-sim-10.webp", thumb: "images/pricing-sim-10-t.webp", title: "Net income", caption: "Revenue, costs and pre-tax profit, with the final results" }
      ]
    },
    {
      /* Source: her workbook "mama earth servey.xlsx" (6 sheets: DATA COLLECTION, DESCRIPTIVE, PRICE VS SATISFACTION,
         MARKET SPEND VS REVENUE, ANOVA 3 VARIANCE, FORCASTING) and the project cover poster (Academic Project, team of five,
         submitted 10 August 2026). It lives ONLY inside the Excel tool tile (not in a project tab). The workbook itself says the
         50 survey responses are hypothetical, so every text here says so. The dashboard drawn on the cover poster is an illustration. */
      id: "mamaearth-survey-excel", short: "Mamaearth Survey Model", icon: "leaf", art: "forecast",
      title: "Mamaearth: Customer Behaviour Analysis & Revenue Insights (Excel)",
      cardTitle: "Mamaearth: Customer Behaviour & Revenue Insights",
      category: "Consumer Behaviour \u00B7 Excel Analytics",
      year: "Aug 2026",
      summary: "An Excel study of Mamaearth: a 50-response survey, price vs satisfaction, marketing spend vs revenue, a three-channel ANOVA and a revenue forecast.",
      description: [
        "A data-driven study of Mamaearth's consumer and business performance, built in Excel by our team of five for the Consumer Behaviour in Urban and Rural Markets subject. It combines a customer survey (50 hypothetical responses) with 36 months of marketing spend and revenue.",
        "Each sheet answers one question: how aware and satisfied customers are, whether price perception drives satisfaction, whether marketing spend drives revenue, whether sales channels earn the same, and where revenue is heading."
      ],
      pointsTitle: "What we did",
      points: [
        "Designed a survey on brand awareness, purchase, product, price, packaging and availability ratings, and likelihood to recommend, across age, gender, income and region (the 50 responses are hypothetical).",
        "Summarised the survey: brand awareness, purchase rate, average product rating, and awareness by age group.",
        "Tested whether price perception affects customer satisfaction, using correlation and regression.",
        "Tested whether marketing spend affects revenue, and compared revenue across website, marketplace and B2B retail with a one-way ANOVA.",
        "Forecast revenue with Excel's forecast sheet and 95% confidence bounds, with a seasonality guide to the monthly revenue drivers."
      ],
      findingsTitle: "Results from the workbook",
      findings: [
        "Of the 50 hypothetical respondents, 76% had heard of Mamaearth and 60% had purchased; the average product rating was 3.32 out of 5.",
        "Awareness was highest in the 45+ group (100%) and the 25-34 group (87%), and lowest in the 35-44 group (33%).",
        "Price rating has a statistically significant effect on overall satisfaction (p < 0.05); product rating is not significant at 5% (p = 0.099). The model's R-squared is 0.73.",
        "Marketing spend and revenue move almost together (correlation 0.997, R-squared 0.994), so the null hypothesis was rejected.",
        "The three channels do not earn the same: marketplace has the highest average (62.2, against 45.8 for the website and 44.3 for B2B retail); F = 28.93, above the critical value of 3.08.",
        "The forecast carries the upward trend forward with seasonal swings; the seasonality guide marks October to November (Diwali) as the high peak."
      ],
      tags: ["Excel", "Consumer behaviour", "Regression"],
      allTags: ["Excel", "Consumer behaviour", "Survey analysis", "Regression", "ANOVA", "Forecasting", "Mamaearth"],
      link: "documents/Mamaearth-Customer-Survey-Analysis.xlsx",
      linkLabel: "Open the Excel file",
      deck: true,
      fileNote: "Excel workbook, 6 sheets. It opens in Excel. The survey responses are hypothetical.",
      image: "images/mamaearth-card.webp",
      galleryNote: "Project cover and the workbook's sheets. The survey responses are hypothetical, and the dashboard drawn on the cover is an illustration. Click a picture to see it full size.",
      gallery: [
        { img: "images/mamaearth-1.webp", thumb: "images/mamaearth-1-t.webp", title: "Project cover", caption: "Customer behaviour analysis and revenue insights: a data-driven study on Mamaearth" },
        { img: "images/mamaearth-2.webp", thumb: "images/mamaearth-2-t.webp", title: "Survey data", caption: "50 hypothetical survey responses with ratings and demographics" },
        { img: "images/mamaearth-3.webp", thumb: "images/mamaearth-3-t.webp", title: "Descriptive summary", caption: "Brand awareness, purchase rate, average rating and awareness by age group" },
        { img: "images/mamaearth-4.webp", thumb: "images/mamaearth-4-t.webp", title: "Price vs satisfaction", caption: "Correlation, regression and hypothesis test" },
        { img: "images/mamaearth-5.webp", thumb: "images/mamaearth-5-t.webp", title: "Spend vs revenue", caption: "36 months of marketing spend and revenue with regression" },
        { img: "images/mamaearth-6.webp", thumb: "images/mamaearth-6-t.webp", title: "Channel ANOVA", caption: "Revenue across website, marketplace and B2B retail" },
        { img: "images/mamaearth-7.webp", thumb: "images/mamaearth-7-t.webp", title: "Revenue forecast", caption: "Forecast with 95% confidence bounds and a seasonality guide" }
      ]
    },
    {
      id: "state-wise-sales", short: "State-Wise Sales", icon: "map", art: "tiles",
      title: "State-Wise Sales Analysis & Visualisation",
      cardTitle: "State-Wise Sales Visualisation",
      category: "Business Intelligence · Tableau",
      year: "Nov 2025",
      summary: "A Tableau dashboard presenting state-wise sales trends for business intelligence.",
      description: [
        "An interactive dashboard that turns state-wise sales data into something a business can read at a glance."
      ],
      points: [
        "Built a Tableau dashboard to present state-wise sales trends.",
        "Framed the visuals for business-intelligence decision-making."
      ],
      findings: [],
      tags: ["Tableau", "Dashboard", "Sales analysis"],
      allTags: ["Tableau", "Dashboard", "Sales analysis", "Business intelligence"],
      link: "",              // <- e.g. your Tableau Public link
      linkLabel: "View dashboard",
      image: ""
    },
    {
      /* Classroom group project (team of six). Source: the 17-page report documents/NOVA-Rural-Consumer-Behaviour-Report.pdf
         (original file The_Reddy_Family.pdf, dated 10 Aug 2026) and the NOVA project poster. The card shows the poster;
         clicking the poster opens the PDF in a new tab. Written in team voice because her own part is not stated. */
      id: "nova-consumer-behaviour", short: "NOVA Consumer Study", icon: "users", art: "bubbles",
      title: "Consumer Behaviour Analysis: Rural Shampoo Market (NOVA)",
      cardTitle: "Consumer Behaviour Analysis: Rural Shampoo Market",
      category: "Consumer Behaviour \u00B7 Market Research",
      year: "Aug 2026",
      summary: "How rural shoppers buy shampoo: five kirana stores, retailer interviews and recommendations for NOVA.",
      pdf: "documents/NOVA-Rural-Consumer-Behaviour-Report.pdf",
      chart: "images/nova-chart.webp",
      description: [
        "A classroom market-research project for NOVA, the natural, eco-friendly personal-care brand in our course. Our team of six studied how shampoo is bought in rural and peri-urban markets, through direct observation in five kirana and general stores in Kodathi and interviews with the retailers.",
        "The report links what we saw in the field to consumer-behaviour concepts (habitual buying, loyalty, perception, motivation, learning, family and retailer influence) and closes with recommendations for NOVA's market entry. The project chart and the full report open together on this page."
      ],
      pointsTitle: "What we did",
      points: [
        "Planned the study as a team: objectives, an observation checklist, a retailer interview guide and a customer questionnaire.",
        "Observed five kirana and general stores in Kodathi: shampoo brands, prices, pack formats, shelf space and stock-outs.",
        "Interviewed the five retailers on sales patterns, loyalty and switching, trial of new products, sustainability and digital payments.",
        "Mapped the field evidence to consumer-behaviour concepts such as habitual buying, brand loyalty, decision making, perception, motivation, learning and family influence.",
        "Turned the findings into eleven practical recommendations for NOVA."
      ],
      findings: [
        "Sachets were the main shampoo pack in all five stores, shelved at eye level above the counter; only one store sold bottles.",
        "Clinic Plus and Dove sachets were the best-sellers in four of the five stores.",
        "Loyalty looked like habit and availability, not attachment: repeat buying was high in four of five stores, with little active comparison.",
        "The retailer's recommendation was the strongest signal for trying a new brand, and free sachet samples were the most common trigger.",
        "Price led the choice: in one store customers simply bought whichever \u20B91 sachet was available. Sustainability was not a purchase motive.",
        "Two stores were close to out of stock because distributors visit weekly, not on demand."
      ],
      recsTitle: "Recommendations to NOVA",
      recommendations: [
        "Enter with sachets priced around \u20B91\u20132 so trial is easy.",
        "Build strong retailer relationships with good margins and a simple sales pitch.",
        "Use free sampling to drive trial; it works better than advertising here.",
        "Secure eye-level shelf space above the counter.",
        "Launch an anti-dandruff variant for women, especially in the dry season.",
        "Restock often: a stronger distribution cycle matters more than new SKUs.",
        "Hold off sustainability messaging until awareness grows."
      ],
      tags: ["Consumer behaviour", "Field research", "Retail"],
      allTags: ["Consumer behaviour", "Market research", "Field research", "Store observation", "FMCG", "Rural markets"],
      link: "documents/NOVA-Rural-Consumer-Behaviour-Report.pdf",
      linkLabel: "Open the full report (PDF)",
      image: "images/nova-card.webp",
      galleryNote: "Classroom project for NOVA, a conceptual brand.",
    },
    {
      /* Shown as a wide card in the "Internship Projects" tab. `image` is the cover card (the infographic);
         `gallery` holds the dashboard pages, which only open inside the project slide. The figures belong to
         a hypothetical BlueStone-style model (it says so on every page), so the text calls them illustrative. */
      id: "bluestone-dashboard", short: "BlueStone Dashboard", icon: "monitor", art: "tiles", featured: true,
      title: "BlueStone-Style Business Dashboard (Power BI)",
      cardTitle: "BlueStone-Style Business Dashboard",
      category: "Power BI · Retail Analytics",
      year: "2026",
      summary: "A five-page Power BI dashboard for a hypothetical BlueStone-style jewellery retailer: revenue, profit, product mix, customer segments and a profit simulator.",
      cta: "Open the dashboards",
      description: [
        "A five-page Power BI report on a hypothetical, BlueStone-style jewellery retailer (Apr 2023 to Oct 2026, ₹ at 1/25 scale, revenue excluding GST), so every figure is illustrative.",
        "Built with Claude, the Power BI MCP, VS Code and Git: a plain-English prompt turned into a working business dashboard."
      ],
      points: [
        "Built a five-page Power BI report: Overview, Profit & Stores, Product Mix, Segments and a Profit Simulator.",
        "Tracked net revenue, gross profit, operating costs, net profit, transactions and customers, with year and zone filters.",
        "Showed how profit swings by season and store, and where operating costs go.",
        "Linked discount bands to gross margin and compared margin by category.",
        "Grouped customers into segments (Champions, active and lapsed repeaters, one-time buyers) with a targeting playbook and a win-back list.",
        "Added a profit simulator with scenario controls for discounts, marketing, finance cost, price and volume."
      ],
      findings: [
        "Revenue up 38% in FY26; profit is still seasonal.",
        "Peak months earn the profit; interest eats the rest.",
        "Bangles lead sales; deep discounts erode margin.",
        "Champions are 14% of customers and 35% of gross profit.",
        "No single lever fixes it; together they nearly do."
      ],
      tags: ["Power BI", "Dashboard", "Simulator"],
      allTags: ["Power BI", "Claude", "Power BI MCP", "VS Code", "Git"],
      link: "",              // <- e.g. the link to the published Power BI report
      linkLabel: "Open live report",
      image: "images/bluestone-cover.webp",
      galleryNote: "Hypothetical BlueStone-style model with illustrative figures (₹ at 1/25 scale).",
      gallery: [
        { img: "images/bluestone-1-overview.webp",      thumb: "images/bluestone-1-overview-t.webp",      title: "Overview",        caption: "Revenue Up 38% in FY26; Profit Is Still Seasonal" },
        { img: "images/bluestone-2-profit-stores.webp", thumb: "images/bluestone-2-profit-stores-t.webp", title: "Profit & Stores", caption: "Peak Months Earn the Profit; Interest Eats the Rest" },
        { img: "images/bluestone-3-product-mix.webp",   thumb: "images/bluestone-3-product-mix-t.webp",   title: "Product Mix",     caption: "Bangles Lead Sales; Deep Discounts Erode Margin" },
        { img: "images/bluestone-4-segments.webp",      thumb: "images/bluestone-4-segments-t.webp",      title: "Segments",        caption: "Champions: 14% of Customers, 35% of Gross Profit" },
        { img: "images/bluestone-5-simulator.webp",     thumb: "images/bluestone-5-simulator-t.webp",     title: "Simulator",       caption: "No Single Lever Fixes It; Together They Nearly Do" }
      ]
    },
    {
      /* PharmaOS app (her local build at localhost:5173, demo workspace "Apex Pharmacy Group", a sample business).
         `image` is the front-page cover (Google Flow artwork + app screenshots, composed in HTML); `gallery` holds
         a screenshot of every page. The app is not online yet, so there is no `link`: add one when it is published. */
      id: "pharmaos-app", short: "PharmaOS App", icon: "monitor", art: "tiles", featured: true,
      title: "PharmaOS: Pharmacy & Distribution Platform",
      cardTitle: "PharmaOS: The Complete Platform",
      category: "Product · AI Platform",
      year: "2026",
      summary: "One platform for pharmacies and distributors: billing, stock, deliveries, customers, an AI assistant and reports, shown through a demo workspace.",
      cta: "Open the walkthrough",
      /* Under-maintenance box on the card and on the banner (it replaces the app button). Delete this `maintenance` block to bring the button back. */
      maintenance: { title: "Under maintenance", text: "PharmaOS is being updated and the live app is closed for now. The walkthrough still shows every page." },
      description: [
        "PharmaOS is the platform I am building for pharmacies and distributors: billing at the counter, stock and expiry, deliveries, customers and loyalty, AI and reports, all in one place.",
        "The walkthrough shows every page of the app. It runs on a demo workspace, Apex Pharmacy Group, a sample business, so every figure you see is illustrative."
      ],
      points: [
        "Billing: a guided four-step bill (customer, stock, cart and payment, receipt) with GST and UPI, for the pharmacy counter.",
        "Inventory: stock value, stock health, expiry warnings and replenishment, grouped by category.",
        "Planning and deliveries: orders by retail partner, credit exposure and profit after delivery, with dispatch and routes.",
        "CRM: customers grouped into Platinum, Gold, Silver and Bronze, loyalty progress, daily priorities and campaigns.",
        "AI: the Master Brain assistant and a Decision Intelligence screen where a CEO AI works with specialist agents.",
        "Reports and records: profit and loss, forecasting, digital sign-off, expenses with proofs, a document vault and settings for team, roles and security."
      ],
      findings: [],
      tags: ["AI", "Billing", "CRM", "Inventory"],
      allTags: ["PharmaOS", "AI", "Billing", "Inventory", "CRM", "Supply chain", "Reports"],
      link: "http://localhost:5173/app",
      linkLabel: "Open the PharmaOS app",
      image: "images/pharmaos-cover.webp",
      banner: "images/pharmaos-hero.webp",
      bannerChips: ["Billing", "Inventory", "Planning", "CRM", "AI agents", "Reports"],
      bannerNote: "Local build: the button opens on the computer where PharmaOS is running.",
      showcaseTitle: "Highlights",
      galleryTitle: "Every page of the app",
      showcase: [
        { img: "images/pharmaos-hl-1-billing.webp", label: "Billing", title: "A guided bill at the counter",
          text: "Five short fields capture the customer (name, phone, email, age and gender, location) while a live profile fills in beside them. New customers, returning customers and walk-ins are all supported." },
        { img: "images/pharmaos-hl-2-product.webp", label: "Inventory", title: "Every product has its own page",
          text: "Shown here for an insulin product: category, stock status, maker, pack and GST, what the medicine is used for, a barcode and SKU for the counter, and one-click actions to compare suppliers or receive stock." },
        { img: "images/pharmaos-hl-3-planning.webp", label: "Planning", title: "Orders by date and retail partner",
          text: "A calendar marks placed, on-time, late, planned and likely orders. Each order breaks down into cost of goods, gross profit, delivery share and profit after delivery." },
        { img: "images/pharmaos-hl-4-customer-trend.webp", label: "Customer intelligence", title: "Business trend and the next likely order",
          text: "For each retail partner: the value of delivered orders over 30 days to 12 months, an alert when business falls, and an estimated next order with a reminder ready to review and send." },
        { img: "images/pharmaos-hl-5-customer-behaviour.webp", label: "Customer intelligence", title: "How a customer buys and how we deliver",
          text: "Ordering pattern by weekday and channel, regularity and order size, on-time versus late deliveries, and the account's location and contact details (phone numbers blurred)." },
        { img: "images/pharmaos-hl-6-profit-loss.webp", label: "Reports", title: "Profit and loss, in one view",
          text: "Revenue, cost of goods, expenses and tax roll into net profit and net margin, with a revenue-to-profit bridge and a \"where every \u20B9100 goes\" split. Switch between this month, last month, quarter, year to date and 12 months, or export to Excel." },
        { img: "images/pharmaos-hl-7-expenses.webp", label: "Reports", title: "Every rupee spent, with its proof",
          text: "A spending timeline, where the money went by category, and proof coverage that shows how many expenses have their bill attached." },
        { img: "images/pharmaos-hl-8-agents.webp", label: "AI", title: "A CEO AI with specialist agents",
          text: "Decision Intelligence puts a CEO Master AI above Sales, Marketing, CFO, COO and HR agents, each with its own tools and its people: medical representatives, delivery partners and office staff." }
      ],
      galleryNote: "Demo workspace with sample data (Apex Pharmacy Group); no real customers or sales.",
      gallery: [
        { img: "images/pharmaos-00-signin.webp", thumb: "images/pharmaos-00-signin-t.webp", title: "Sign in", caption: "Sign in, or open the complete demo with no sign-up" },
        { img: "images/pharmaos-01-dashboard.webp", thumb: "images/pharmaos-01-dashboard-t.webp", title: "Dashboard", caption: "Sales trend, top products and daily insights" },
        { img: "images/pharmaos-02-billing.webp", thumb: "images/pharmaos-02-billing-t.webp", title: "Billing", caption: "A guided bill: customer, stock, cart and payment, receipt" },
        { img: "images/pharmaos-03-inventory.webp", thumb: "images/pharmaos-03-inventory-t.webp", title: "Inventory", caption: "Stock value, stock health, expiry and category view" },
        { img: "images/pharmaos-04-planning.webp", thumb: "images/pharmaos-04-planning-t.webp", title: "Planning", caption: "Delivery control: orders by retail partner, credit and profit after delivery" },
        { img: "images/pharmaos-05-crm.webp", thumb: "images/pharmaos-05-crm-t.webp", title: "CRM", caption: "Customer segments, today's priorities and loyalty progress" },
        { img: "images/pharmaos-06-ai-assistant.webp", thumb: "images/pharmaos-06-ai-assistant-t.webp", title: "AI Assistant", caption: "Master Brain AI, built to answer from the pharmacy's own data" },
        { img: "images/pharmaos-07-field-force.webp", thumb: "images/pharmaos-07-field-force-t.webp", title: "Field Force", caption: "Team and cost, performance, and who to visit and when" },
        { img: "images/pharmaos-08-decision-intelligence.webp", thumb: "images/pharmaos-08-decision-intelligence-t.webp", title: "Decision Intelligence", caption: "A CEO AI with specialist agents, connectors and activity" },
        { img: "images/pharmaos-09-reports.webp", thumb: "images/pharmaos-09-reports-t.webp", title: "Reports", caption: "Profit and loss, forecasting, digital signature, expenses and proofs" },
        { img: "images/pharmaos-10-storage.webp", thumb: "images/pharmaos-10-storage-t.webp", title: "Storage", caption: "A document vault for bills, invoices, proofs and licences" },
        { img: "images/pharmaos-11-settings.webp", thumb: "images/pharmaos-11-settings-t.webp", title: "Settings", caption: "Business profile, UPI, stock alerts, loyalty rules, team, roles and security" }
      ]
    },
    {
      /* From her LinkedIn post "PHARMA OS" (Aug 2026) and the sign-in page of the live app. She says she is
         building it, so the text says "building" and never claims users or results. The poster was made in
         Google Flow; its green band carries the link. */
      id: "pharma-os", short: "Pharma OS", icon: "flask", art: "tiles", featured: true, thumbRatio: "16 / 9",
      title: "Pharma OS: AI, CRM and Business Intelligence for Pharmacies",
      cardTitle: "Pharma OS",
      category: "AI Platform · Pharma Business Intelligence",
      year: "2026",
      summary: "A platform that helps retail pharmacies, distributors and stockists turn their sales, customer and inventory data into insights, predictions and decisions.",
      cta: "See the project",
      description: [
        "AI shouldn't be a privilege of big pharma. Large pharmaceutical companies have AI, data teams and technology, while thousands of retail pharmacies, distributors and traditional stockists don't. They still hold valuable data (sales, customers, inventory, margins, purchase history), but most of it is recorded and not understood.",
        "Pharma OS is the platform I am building for them: not just telling a business what happened, but helping it understand what happens next."
      ],
      points: [
        "Turns data into insights, customers into intelligence, inventory into predictions, numbers into decisions and AI into action.",
        "Gives each business its own isolated workspace: products, customers, transactions, employees and AI insights never cross business boundaries.",
        "Uses role-based access (platform admin, business owner, employee) and row-level security on every record.",
        "Builds adaptive dashboards from each business's own data.",
        "Live sign-in page published online; the build is in progress."
      ],
      findings: [],
      tags: ["AI", "CRM", "Business Intelligence"],
      allTags: ["AI", "CRM", "Business Intelligence", "Predictive analytics", "Pharma distribution"],
      link: "https://pharma-os-sj.lovable.app",
      linkLabel: "Open Pharma OS",
      image: "images/pharma-os-poster.webp",
      gallery: [
        { img: "images/pharma-os-poster.webp", title: "Poster", caption: "" }
      ]
    },
    {
      /* From her LinkedIn post "The Observation That Made Me Build a Pharmacy CRM" (Aug 2026). No live link yet,
         so the button opens that post. Wording is "designed to", because it is being built. */
      id: "pharma-crm", short: "Pharma CRM", icon: "users", art: "bubbles", featured: true, thumbRatio: "16 / 9",
      title: "Pharma CRM: Customer Intelligence for Retail Pharmacies",
      cardTitle: "Pharma CRM",
      category: "AI + CRM · Retail Pharmacy",
      year: "2026",
      summary: "A customer-intelligence and AI-powered CRM designed to help independent pharmacies understand customers, spot retention opportunities and decide who to follow up with, and why.",
      cta: "See the project",
      description: [
        "During a CRM assignment I compared three very different businesses: Apollo, MedPlus and a general local store. Big brands track behaviour, purchase history, loyalty and retention. A local store or independent pharmacy often knows its customers personally, but has no structured customer data, no Customer 360, no churn prediction, no segmentation and no systematic retention strategy.",
        "That gap led me to start building Pharma CRM: big businesses have the data, small businesses have the relationships, and technology can bring both together."
      ],
      points: [
        "Studied how Apollo, MedPlus and a general local store manage customer relationships.",
        "Spotted the gap: enterprise-level CRM intelligence is out of reach for independent pharmacies.",
        "Designed Pharma CRM around Customer 360, segmentation, churn prediction and retention strategy.",
        "Built to answer one practical question: who should we follow up with, and why?"
      ],
      findings: [],
      tags: ["CRM", "AI", "Customer retention"],
      allTags: ["CRM", "AI", "Customer intelligence", "Retail pharmacy", "Retention"],
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7493188285855395840/",
      linkLabel: "Read the build story",
      image: "images/pharma-crm-poster.webp",
      gallery: [
        { img: "images/pharma-crm-poster.webp", title: "Poster", caption: "" }
      ]
    },
    {
      /* Source: her Orange workflow "final Diabetes data mining.ows" and the public Pima Indians Diabetes data (diabetes.csv, 768 rows).
         Pictures are drawn here: the workflow from the .ows positions and links, the other figures from the workflow's own settings
         re-run in Orange 3.40 (stratified 5-fold cross-validation on the 70% sample, 538 records). Wording stays neutral about who
         built which part. The 24-row "Test Data" file is described only as a file loaded into Predictions (it repeats training rows). */
      id: "diabetes-prediction-orange", short: "Diabetes Prediction", icon: "pie", art: "forecast", featured: true, thumbRatio: "16 / 9",
      title: "Diabetes Prediction: Data Mining in Orange",
      cardTitle: "Diabetes Prediction (Orange)",
      category: "Data Mining · Healthcare Analytics",
      year: "Data mining project",
      summary: "A data-mining workflow in Orange that compares four models on 768 patient records to predict diabetes. Logistic Regression scored best: 79.4% accuracy, AUC 0.832.",
      cta: "See the project",
      description: [
        "A diabetes-prediction project built as a visual data-mining workflow in Orange. It uses the public Pima Indians Diabetes dataset: 768 patient records, eight health measures (pregnancies, glucose, blood pressure, skin thickness, insulin, BMI, pedigree function and age) and one outcome, diabetes yes or no, which is positive in 34.9% of the records.",
        "The workflow loads the data, imputes missing values, takes a 70% sample and compares kNN, Logistic Regression, a decision Tree and a Random Forest in Test and Score with 5-fold cross-validation. A Confusion Matrix shows where each model is right and wrong, and a separate 24-record file is loaded into Predictions."
      ],
      pointsTitle: "How the workflow runs",
      points: [
        "Data: File and Data Table load and inspect the 768 records, with the outcome set as the class to predict.",
        "Preprocess: imputes missing values before modelling.",
        "Data Sampler: draws a 70% fixed-proportion sample, 538 records.",
        "Models: kNN (k = 5), Logistic Regression (L2), Tree and Random Forest (10 trees).",
        "Evaluation: Test and Score with stratified 5-fold cross-validation, then a Confusion Matrix.",
        "Predictions and Distributions: a 24-record file is loaded into Predictions and its output goes to Distributions."
      ],
      findingsTitle: "Results",
      findings: [
        "Logistic Regression scored best on every measure: AUC 0.832, accuracy 79.4%, F1 0.788.",
        "Random Forest followed with 75.3% accuracy and AUC 0.796; Tree and kNN reached 73.6% and 73.0%.",
        "Logistic Regression cleared 89% of the non-diabetic records (312 of 349) and found 61% of the diabetic ones (115 of 189).",
        "Missed diabetic cases are the main weakness: every model found fewer than two thirds of them.",
        "Glucose, BMI, insulin and age are all higher on average in the diabetic group."
      ],
      tags: ["Orange", "Data mining", "Classification"],
      allTags: ["Orange", "Data mining", "Classification", "Logistic regression", "Random forest", "kNN", "Decision tree", "Cross-validation", "Healthcare analytics"],
      link: "",
      image: "images/diabetes-poster.webp",
      galleryNote: "The poster is an illustration; the other pictures are drawn from the workflow and its results. Click one to see it full size.",
      gallery: [
        { img: "images/diabetes-poster.webp", thumb: "images/diabetes-poster-t.webp", title: "Poster", caption: "Diabetes prediction using Orange data mining" },
        { img: "images/diabetes-1.webp", thumb: "images/diabetes-1-t.webp", title: "Summary slide", caption: "Diabetes prediction: four models compared in Orange" },
        { img: "images/diabetes-2.webp", thumb: "images/diabetes-2-t.webp", title: "Dataset", caption: "768 patient records, 8 inputs and the outcome balance" },
        { img: "images/diabetes-3.webp", thumb: "images/diabetes-3-t.webp", title: "Workflow", caption: "The Orange workflow, from data to evaluation" },
        { img: "images/diabetes-4.webp", thumb: "images/diabetes-4-t.webp", title: "Model scores", caption: "Test and Score: AUC, accuracy, F1, precision, recall, MCC" },
        { img: "images/diabetes-5.webp", thumb: "images/diabetes-5-t.webp", title: "Confusion matrices", caption: "What each model got right and wrong" }
      ]
    },
    {
      /* Source: her two Instagram Feed ad creatives for The Lazy Baker (After Dark, Rainy Days; 1440 x 1800, 4:5) and her IMC planning
         report (Part 3, dated 5 Nov 2026). The four pictures were designed here around her two ads. Objective, budget, flight and
         targets are the report's proposals and assumptions, not results; the like counts (46, 29, 34, 24) are the report's own audit of
         the brand's 35 Instagram posts. This project is deliberately NOT in a projectTabs list: it shows only on the Canva tile. Wording
         stays neutral about who built which part. */
      id: "lazy-baker-ad-campaign", short: "Lazy Baker Ad Campaign", icon: "palette", art: "brand",
      title: "The Lazy Baker: Ad Campaign for Instagram",
      cardTitle: "The Lazy Baker Ad Campaign",
      category: "Advertising · Campaign Creative",
      year: "2026",
      summary: "Two Instagram Feed ads for The Lazy Baker, a Bengaluru eggless frozen cookie dough brand, built on one idea: lazy never tasted this warm.",
      description: [
        "An advertising campaign for The Lazy Baker, a Bengaluru brand that sells eggless frozen cookie dough to bake at home in about 15 minutes, in an oven or a kadai. The brand's problem is reach: a small audience and no obvious way to order. The plan behind the ads speaks to late-evening cravers in Bengaluru aged 22 to 34 and sends every ad to one action, an order on WhatsApp.",
        "Two creatives carry the idea “Lazy never tasted this warm.”: After Dark, for late-night cravings, and Rainy Days, for staying in when it rains. Both carry the brand logo and its orange accents, three proof pills (eggless, from your freezer, oven or kadai), a “Ready in 15 minutes” sticker, the pack shot and a single WhatsApp button, with the 2-day order lead time always visible."
      ],
      pointsTitle: "What the campaign does",
      points: [
        "After Dark: a late-night kitchen scene with the line “For the late-night cravings. Freshly baked, whenever you need it.” and a button to order on WhatsApp.",
        "Rainy Days: a rain-streaked window, a plate of cookies and a cup of chai, with “Rain outside, cookies inside.” and a button to reserve a rainy-day stash.",
        "One shared system: the logo, three proof pills, the 15-minute sticker, the pack shot, and a footer line with the Instagram handle, the city and the 2-day notice.",
        "Format: Instagram Feed ads, 4:5 at 1440 × 1800 px, planned as Click-to-WhatsApp ads for Bengaluru, ages 22 to 34."
      ],
      findingsTitle: "The plan behind the ads (proposals, not results)",
      findings: [
        "Objective: 80 first-time orders in 6 weeks, from outside the founders' circle, at a media cost of ₹500 or less per first order.",
        "Budget: a ₹50,000 pilot, of which ₹32,000 goes to Instagram ads.",
        "Flight: live from 16 November to 27 December 2026, reviewed on 4 January 2027.",
        "Why these two moods: the brand's own 10 PM cravings post earned 46 likes against an average of 29, and benefit-led posts averaged 34 likes against 24 for mood posts."
      ],
      tags: ["Canva", "Instagram ads", "Campaign creative"],
      allTags: ["Canva", "Advertising", "Instagram ads", "Click-to-WhatsApp", "IMC planning", "Campaign creative"],
      link: "",
      image: "images/lazy-baker-card.webp",
      galleryNote: "The two ads and the plan behind them. Click a picture to see it full size.",
      gallery: [
        { img: "images/lazy-baker-1.webp", thumb: "images/lazy-baker-1-t.webp", title: "Campaign", caption: "The Lazy Baker ad campaign: two Instagram Feed ads" },
        { img: "images/lazy-baker-2.webp", thumb: "images/lazy-baker-2-t.webp", title: "After Dark", caption: "Ad 1: for the late-night cravings" },
        { img: "images/lazy-baker-3.webp", thumb: "images/lazy-baker-3-t.webp", title: "Rainy Days", caption: "Ad 2: rain outside, cookies inside" },
        { img: "images/lazy-baker-4.webp", thumb: "images/lazy-baker-4-t.webp", title: "The plan", caption: "Objective, audience, budget and flight from the IMC planning report" }
      ]
    }
  ],
  /* The tabs above the project cards. `projects` lists project ids. A tab with no
     projects shows its `soon` card. Delete a tab you do not want. */
  projectTabs: [
    { label: "Classroom Projects",      icon: "cap",       projects: ["nova-consumer-behaviour", "omnipulse-digital-marketing", "delivery-in-minutes", "pricing-simulation-universal"] },
    { label: "AI Projects",              icon: "monitor",   projects: ["pharmaos-app", "pharma-os", "pharma-crm", "diabetes-prediction-orange"] },
    { label: "Internship Projects",     icon: "briefcase", projects: ["bluestone-dashboard"] }
  ],

  /* ---------------------------- EXPERIENCE ---------------------------- */
  experience: [
    {
      id: "bluestone", short: "BlueStone", icon: "bag", tint: "sky",   /* tint: sky, blush or butter */
      title: "Marketing Intern",
      org: "BlueStone Jewellery & Lifestyle Pvt. Ltd.",
      orgShort: "BlueStone Jewellery & Lifestyle",
      category: "Marketing Intern",
      year: "May – Jun 2026",
      location: "BlueStone Jewellery & Lifestyle Pvt. Ltd.",
      description: [
        "A marketing internship at a retail jewellery and lifestyle brand, working close to the customer, where marketing strategy meets real shopping behaviour."
      ],
      points: [
        "Assisted customers and enhanced their in-store shopping experience.",
        "Managed inventory and supported retail marketing events."
      ],
      tags: ["Retail marketing", "Customer experience", "Inventory", "Events"]
    },
    {
      id: "duta-deepti", short: "Duta-Deepti Hospital", icon: "hospital", tint: "blush",
      title: "Hospital Training",
      org: "Duta-Deepti Satsang Charitable Hospital",
      orgShort: "Duta-Deepti Satsang Hospital",
      category: "Hospital Training",
      year: "Aug 2023 – Mar 2024",
      location: "Deoghar, Jharkhand",
      description: [
        "Hospital training that showed me how a pharmacy runs day to day, and how care reaches patients."
      ],
      points: [
        "Managed medicine inventory and supported daily pharmacy operations.",
        "Assisted in medical camps and patient healthcare services."
      ],
      tags: ["Pharmacy operations", "Inventory", "Patient care"]
    },
    {
      id: "sun-pharma", short: "Sun Pharma", icon: "flask", tint: "butter",
      title: "Industrial Training",
      org: "Sun Pharma Pvt. Ltd.",
      orgShort: "Sun Pharma",
      category: "Industrial Training",
      year: "Feb – Mar 2023",
      location: "Delhi",
      description: [
        "Industrial training with the Clinical Research team, where accuracy and documentation come first."
      ],
      points: [
        "Assisted the Clinical Research team with documentation and records.",
        "Learned GMP practices and pharmaceutical quality standards."
      ],
      tags: ["Clinical research", "GMP", "Quality standards"]
    }
  ],

  /* -------------------------- CERTIFICATIONS -------------------------- */
  certifications: [
    { icon: "users", art: "psych", title: "Marketing Psychology",
      org: "Infosys Springboard", period: "Aug – Dec 2025", tags: ["Pavlov", "Halo", "Scarcity"],
      summary: "How buying decisions are influenced by the Pavlov, Halo and Scarcity effects." },
    /* IIM Bangalore: name, issuer and date are from her IIMBx certificate (issued 20 Oct 2026);
       images/iimb.png is the IIMB mark taken from that same certificate */
    { icon: "award", image: "images/iimb.png", title: "The Essence of Leadership",
      org: "IIM Bangalore (IIMBx)", period: "Oct 2026", tags: ["Leadership", "Literature"],
      summary: "Explorations from literature, offered by IIM Bangalore through IIMBx." },
    { icon: "megaphone", art: "brand", title: "Online Brand Management",
      org: "Infosys Springboard", period: "Aug – Dec 2025", tags: ["Skimming", "Placement"],
      summary: "Profit-maximisation: market skimming and product-line placement." },
    { icon: "sparkle", art: "digital", title: "Digital Marketing",
      org: "In progress", period: "Learning", tags: ["Learning"], learning: true,
      summary: "Currently learning, building on my brand and marketing training." }
  ],

  /* ------------------------------ TOOLS ------------------------------ */
  tools: [
    /* logo: the brand mark drawn in script.js (LOGOS); icon is the fallback.
       Orange (data mining) was added by her; it is not on the CV. */
    /* projects: ids from the PROJECTS list to show on that tool's slide (add yours; [] = "coming soon") */
    /* tint: very light box colour that echoes the logo (green, orange, yellow, blue, teal, lilac) */
    { id: "excel",   tint: "green",  logo: "excel",   icon: "sheet",   label: "Excel",    projects: ["omnipulse-digital-marketing", "mamaearth-survey-excel"] },
    { id: "orange",  tint: "orange", logo: "orange",  icon: "pie",     label: "Orange",   projects: ["diabetes-prediction-orange"] },
    { id: "powerbi", tint: "yellow", logo: "powerbi", icon: "pie",     label: "Power BI", projects: ["bluestone-dashboard"] },
    { id: "powerpoint", tint: "red", logo: "powerpoint", icon: "monitor", label: "PowerPoint", projects: ["delivery-in-minutes"] },
    { id: "canva",   tint: "teal",   logo: "canva",   icon: "palette", label: "Canva",    projects: ["lazy-baker-ad-campaign"] },
    { id: "ai",      tint: "lilac",  logo: "ai",      icon: "sparkle", label: "AI Tools", projects: ["pharmaos-app", "pharma-os", "pharma-crm", "bluestone-dashboard"] }
  ],

  /* ---------------------------- ACHIEVEMENTS ---------------------------- */
  achievements: [
    /* tint: very light box colour (lilac, gold, sky, rose, aqua, peach); gold is kept for the pharmacist registration */
    { icon: "users",  tint: "lilac", text: "President, Entrepreneurship Cell, ISME" },
    { icon: "shield", tint: "gold",  text: "Registered pharmacist, West Bengal Pharmacy Council" },
    { icon: "flask",  tint: "sky",   text: "Secured a place in R&D at Sun Pharma as an intern" },
    { icon: "award",  tint: "rose",  text: "3rd position, poster presentation, BT-Pharmakon" },
    { icon: "ball",   tint: "aqua",  text: "Represented Bharat Technology in intercollegiate volleyball" },
    { icon: "drum",   tint: "peach", text: "Performed in musical concerts as a tabla artist" }
  ],

  /* ----------------------- INTERESTS & LANGUAGES ----------------------- */
  interests: ["Communication & relationships", "Fishing", "Tabla", "Cooking", "Curiosity for new ideas"],
  languages: ["Bengali", "English", "Hindi"],

  /* ----------------------------- CONTACT ----------------------------- */
  contact: {
    email: "supriyaj.isme2527@gmail.com",
    linkedin: { handle: "linkedin.com/in/supriya-jana", url: "https://www.linkedin.com/in/supriya-jana" },
    youtube: { url: "https://www.youtube.com/@Supriyajana-b3j5e" }
  },

  footerLine: "Where pharmaceutical knowledge meets marketing strategy.",

  /* LIMITED-EDITION HOOK in the footer (the whole footer is gold).
     `line` is the sentence shown in the middle. `seconds` is the length of the countdown:
     it starts when a visitor scrolls the footer into view, runs once, then shows `closed`.
     It starts again on each new visit or page reload.
     Keep the wording playful, so recruiters read it as a hook and not as a real deadline.
     Delete this whole block to remove the countdown. */
  limited: {
    line: "Driven by a continuous learning mindset.",
    caption: "Time left to grab it",
    seconds: 60,
    closed: "Time's up, but my inbox is still open."
  },

  /* ----------------------- SECTION HEADINGS ----------------------- */
  copy: {
    about:          { title: "About Me" },
    skills:         { title: "Skills & Expertise" },
    projects:       { title: "Projects",              lede: "Analytical projects from my PGDM, from market research to business intelligence." },
    certifications: { title: "Certifications",        lede: "Learning in consumer behaviour, brand management and leadership." },
    experience:     { title: "Internships" },
    tools:          { title: "Tools & Technologies",  lede: "Tools I use to collect, analyse and present data." },
    achievements:   { title: "Achievements",          lede: "Milestones that shaped my journey." },
    interests:      { title: "Interests & Languages" }
  }
};
