export const problems = [
  {
    title: 'Manual billing chaos',
    description: 'Handwritten tickets and calculator math slow checkout and leave money on the table.',
    icon: 'receipt',
  },
  {
    title: 'Paper inventory',
    description: 'Stock lives in notebooks. You learn about shortages only after an order fails.',
    icon: 'box',
  },
  {
    title: 'Zero live analytics',
    description: 'Owners guess peak hours and top movers — pricing stays reactive, not profitable.',
    icon: 'chart',
  },
  {
    title: 'Staff mistakes & leakage',
    description: 'Wrong rates, forgotten add-ons, and open tabs quietly erode margins.',
    icon: 'users',
  },
  {
    title: 'Paper menu only',
    description: 'No live updates or branding. Orders delay, tables turn slower, kitchen gets messy.',
    icon: 'qr',
  },
  {
    title: 'Disconnected tools',
    description: 'Sessions in one app, food in another, expenses in sheets — reports never match.',
    icon: 'puzzle',
  },
  {
    title: 'Revenue leakage',
    description: 'Untracked overtime, waived bills, and missed GST look like “a slow month.”',
    icon: 'leak',
  },
  {
    title: 'Long queues',
    description: 'Peak-hour bottlenecks at the counter kill the vibe — guests walk out.',
    icon: 'clock',
  },
  {
    title: 'No branch visibility',
    description: 'Multi-location owners fly blind. Each outlet invents its own process.',
    icon: 'branches',
  },
]

export const solutions = [
  {
    title: 'Gaming POS',
    description: 'Start, pause, extend, and settle sessions — rates, overtime, and food in one flow.',
    icon: 'game',
  },
  {
    title: 'Restaurant POS',
    description: 'Takeaway, dine-in, and staff orders with GST and branded receipts.',
    icon: 'pos',
  },
  {
    title: 'Kitchen display',
    description: 'Live QR + counter tickets from pending to ready — no lost slips.',
    icon: 'kitchen',
  },
  {
    title: 'Smart inventory',
    description: 'Auto stock deduction, low-stock alerts, and a full audit trail.',
    icon: 'inventory',
  },
  {
    title: 'Staff permissions',
    description: 'Role-based access so floor staff only touch what they need.',
    icon: 'staff',
  },
  {
    title: 'Analytics engine',
    description: 'Revenue, peak hours, stations, and food movers — by any date range.',
    icon: 'analytics',
  },
  {
    title: 'Bookings & blocks',
    description: 'Public slots with capacity rules and admin block-outs.',
    icon: 'calendar',
  },
  {
    title: 'QR ordering',
    description: 'Guests scan, order, and track live. Settle with UPI, cash, or card.',
    icon: 'qr',
  },
  {
    title: 'Expense tracking',
    description: 'Credit/debit ledger tied to reports so profit isn’t a guess.',
    icon: 'expense',
  },
  {
    title: 'CRM & expansion leads',
    description: 'Capture inquiries and move them through a simple pipeline.',
    icon: 'crm',
  },
]

export const systemFlow = [
  { title: 'Guest arrives', detail: 'Walk-in or QR table', icon: 'arrive' },
  { title: 'Floor runs', detail: 'Session or food order', icon: 'run' },
  { title: 'Kitchen syncs', detail: 'Live tickets & prep', icon: 'kitchen' },
  { title: 'Checkout', detail: 'GST, pay, receipt', icon: 'checkout' },
  { title: 'Owner sees', detail: 'Reports & stock', icon: 'owner' },
]

export const featureCards = [
  {
    title: 'Gaming sessions',
    problem: 'Timers on phones and sticky notes lose money.',
    benefit: 'Pause, resume, extend, or open-ended play. Add food mid-session and print branded receipts.',
    icon: 'game',
    tags: ['Pause / resume', 'Weekday & weekend rates', 'Split billing', 'Overtime'],
  },
  {
    title: 'Restaurant POS',
    problem: 'Separate food counters create messy reconciliations.',
    benefit: 'Takeaway, dine-in, and staff orders with discounts, GST, and cash / UPI / card.',
    icon: 'pos',
    tags: ['Takeaway', 'Dine-in', 'Staff orders', 'GST ready'],
  },
  {
    title: 'Kitchen display',
    problem: 'Shouted orders and lost slips kill kitchen speed.',
    benefit: 'QR and counter orders on one live board — status, prep ETAs, and notes.',
    icon: 'kitchen',
    tags: ['Live pipeline', 'Prep ETAs', 'Status history'],
  },
  {
    title: 'Inventory that fights theft',
    problem: 'Stock disappears between “we had it” and “we’re out.”',
    benefit: 'Auto deduct on sale, restore on void, low-stock alerts, and a full audit trail.',
    icon: 'inventory',
    tags: ['Auto deduct', 'Low-stock alerts', 'Audit trail'],
  },
  {
    title: 'Billing history & invoices',
    problem: 'Finding yesterday’s bill means digging through drawers.',
    benefit: 'Search bills, export CSV, void with stock restore, and sequential invoice numbers.',
    icon: 'invoice',
    tags: ['CSV export', 'Invoice numbers', 'Void & restore'],
  },
  {
    title: 'Reports that drive decisions',
    problem: 'Spreadsheets that are always a week late.',
    benefit: 'Game types, stations, peak hours, food movers, and expense-aware summaries.',
    icon: 'reports',
    tags: ['Peak hours', 'Top products', 'Station analytics'],
  },
  {
    title: 'Staff & feature control',
    problem: 'Everyone has the same access — or none at all.',
    benefit: 'Owner to viewer roles with module locks per plan and per person.',
    icon: 'staff',
    tags: ['Role permissions', 'Module flags', 'Attendance-ready'],
  },
  {
    title: 'Bookings & events',
    problem: 'WhatsApp booking threads don’t scale.',
    benefit: 'Online gaming slots, tournaments, and public event listings for your site.',
    icon: 'calendar',
    tags: ['Slot bookings', 'Slot blocks', 'Tournaments'],
  },
  {
    title: 'White-label branding',
    problem: 'Generic software makes your brand look rented.',
    benefit: 'Your logo, colors, receipts, and menu identity — without custom software.',
    icon: 'brand',
    tags: ['Logo & colors', 'Custom receipts', 'Own domain ready'],
  },
  {
    title: 'Vendor & district sessions',
    problem: 'Partner bookings are priced ad-hoc and hard to track.',
    benefit: 'Prepaid session packs for partners — guests still pay for food extras.',
    icon: 'vendor',
    tags: ['Vendor packs', 'Prepaid sessions'],
  },
]

export const industries = [
  { name: 'Gaming Lounge', blurb: 'Sessions, stations, food add-ons, and peak-hour control.', icon: 'lounge' },
  { name: 'Restaurant', blurb: 'Counter POS, kitchen tickets, GST, and honest inventory.', icon: 'restaurant' },
  { name: 'Café', blurb: 'QR menus, takeaway, and entertainment nights in one tool.', icon: 'cafe' },
  { name: 'PlayStation Arena', blurb: 'Console timers with pause/resume and overtime billing.', icon: 'console' },
  { name: 'Pool & Snooker Club', blurb: 'Table time, party size, and F&B tabs at checkout.', icon: 'pool' },
  { name: 'Esports Arena', blurb: 'Events and high-throughput billing when the floor is packed.', icon: 'esports' },
  { name: 'Food Court', blurb: 'Fast counter billing with stock alerts on busy SKUs.', icon: 'foodcourt' },
  { name: 'Gaming Network', blurb: 'White-label tenants, plans, and expansion pipelines.', icon: 'network' },
  { name: 'Entertainment Center', blurb: 'Games, food, bookings, and events in one OS.', icon: 'center' },
]

export const testimonials = [
  {
    quote:
      'Checkout used to take forever on weekend nights. With LoftOS we cut billing time by about 40% and overtime no longer slips through.',
    name: 'Arjun Mehta',
    role: 'Owner, Neon Play Lounge',
    metric: '40% faster billing',
  },
  {
    quote:
      'Inventory used to be a weekly fight. Auto-deduction and low-stock alerts dropped our unexplained loss by roughly 60%.',
    name: 'Priya Nair',
    role: 'Owner, Ember Kitchen & Café',
    metric: '60% less inventory loss',
  },
  {
    quote:
      'QR ordering changed the floor. Guests order from the table, kitchen sees everything live, and we turned tables almost 2× on peak evenings.',
    name: 'Rahul Desai',
    role: 'Manager, Circuit Board Café',
    metric: '2× operational efficiency',
  },
  {
    quote:
      'We onboarded three new outlets on white-label LoftOS. Same platform, their branding — and repeat bookings jumped about 30%.',
    name: 'Sneha Kapoor',
    role: 'Operations Director, Arcadia Group',
    metric: '30% more repeat guests',
  },
]

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹2,999',
    period: '/month',
    description: 'For single-location lounges getting off paper billing.',
    features: [
      'Gaming sessions & rates',
      'Restaurant counter POS',
      'Inventory + low-stock alerts',
      'Billing history & receipts',
      'Staff management (basic)',
      'White-label branding',
      '14-day free trial',
    ],
    cta: 'Start free trial',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '₹5,999',
    period: '/month',
    description: 'For busy cafés that need analytics and expense clarity.',
    features: [
      'Everything in Starter',
      'Full analytics & reports',
      'Expense ledger',
      'Vendor / district sessions',
      'Advanced staff permissions',
      'CSV bill exports',
      'Priority onboarding',
    ],
    cta: 'Book a demo',
    highlighted: false,
  },
  {
    id: 'business',
    name: 'Business',
    price: '₹9,999',
    period: '/month',
    description: 'For multi-location and multi-tenant entertainment brands.',
    features: [
      'Everything in Pro',
      'Slot bookings & block-outs',
      'Public events management',
      'Expansion inquiry CRM',
      'Feature flags per tenant',
      'Superadmin control plane',
      'Dedicated success support',
    ],
    cta: 'Talk to sales',
    highlighted: true,
  },
]

export const faqs = [
  {
    q: 'What is LoftOS?',
    a: 'LoftOS is a white-label, multi-tenant operating system for gaming cafés, PlayStation lounges, restaurants, and entertainment centers — covering sessions, POS, QR ordering, inventory, staff, bookings, and reports.',
  },
  {
    q: 'What is a gaming POS?',
    a: 'A gaming POS manages timed play sessions with start/pause/resume, weekday and weekend rates, overtime, food add-ons, discounts, GST, and printable receipts — purpose-built for lounges and arenas.',
  },
  {
    q: 'How does QR ordering work?',
    a: 'You create tables with unique QR codes. Guests scan, browse your menu, place orders with notes, and track status live while the kitchen board updates in real time. Settle the table bill with discount, GST, and payment mode.',
  },
  {
    q: 'Can I white-label LoftOS with my branding?',
    a: 'Yes. Each business gets its own logo, colors, receipt header/footer, business name, public menu identity, and isolated data — without building software from scratch.',
  },
  {
    q: 'Can I manage multiple branches or outlets?',
    a: 'LoftOS is multi-tenant: each outlet is an organization with its own branding, menu, staff, and reports. Platform owners control plans, features, and onboarding from a superadmin console.',
  },
  {
    q: 'Can staff have different permissions?',
    a: 'Yes. Roles include owner, admin, manager, staff, and viewer, with per-user feature grants so floor staff cannot access sensitive modules.',
  },
  {
    q: 'Does inventory deduct automatically?',
    a: 'Yes. Food sales deduct stock automatically. Cancels, voids, and restores update inventory, and every change is logged in a transaction audit trail.',
  },
  {
    q: 'Is GST supported?',
    a: 'Yes. Set an organization-level GST rate (commonly 18%) and optionally apply GST per bill with rate, amount, and subtotal fields on invoices.',
  },
  {
    q: 'Can I print receipts?',
    a: 'Yes. Session and counter receipts print with your white-label branding, invoice numbers, payment details, and line items.',
  },
  {
    q: 'Can I pause a gaming session?',
    a: 'Yes. Pause and resume the billing timer so guests aren’t charged for breaks. You can also extend booked minutes or run open-ended sessions.',
  },
  {
    q: 'Does LoftOS support UPI and cash payments?',
    a: 'Yes. Record cash (with tender and change), UPI, card, or other payment modes — plus payroll mode for staff meals where needed.',
  },
  {
    q: 'Can customers book gaming slots online?',
    a: 'On Business plans, public slot booking respects capacity and open hours. Admins can confirm, complete, or cancel bookings and block slots when needed.',
  },
  {
    q: 'Can I host tournaments and events?',
    a: 'Yes. Run event-type sessions in POS and publish marketing events with images and booking links for your public website.',
  },
  {
    q: 'What reports are included?',
    a: 'Revenue by day, game-type and station analytics, customer and party-size insights, time-of-day peaks, event analytics, and food performance with expense-aware summaries.',
  },
  {
    q: 'Is my data isolated from other businesses?',
    a: 'Yes. Multi-tenant architecture scopes every record to an organization ID so menus, bills, staff, and customers stay isolated.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes. New organizations typically start with a 14-day trial so you can run real sessions and QR orders before committing.',
  },
  {
    q: 'Can I export billing history?',
    a: 'Pro and above support CSV export of completed bills including invoice, GST, payments, vendors, and food lines.',
  },
  {
    q: 'What is vendor or district booking?',
    a: 'Vendor packs let partner organizers prepay session counts for groups, while guests can still pay for extras like food — ideal for colleges and districts.',
  },
  {
    q: 'Can I control which modules a business can use?',
    a: 'Yes. Feature flags follow plan defaults (Starter, Pro, Business) and can be overridden per organization by the platform superadmin.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a free demo or start a trial. We’ll onboard your workspace, branding, game rates, and menu so your team can go live quickly.',
  },
]

export const stats = [
  { value: 10000, suffix: '+', label: 'Gaming sessions managed' },
  { value: 5, suffix: 'M+', label: 'Orders processed', decimals: 0 },
  { value: 99.9, suffix: '%', label: 'System uptime', decimals: 1 },
  { value: 40, suffix: '%', label: 'Faster billing', decimals: 0 },
]

export const clientLogos = [
  'Neon Arena',
  'Ember Kitchen',
  'Circuit Café',
  'PS Lounge 64',
  'Arcadia Network',
  'Cue Club',
]
