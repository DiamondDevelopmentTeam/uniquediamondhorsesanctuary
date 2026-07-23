export type Horse = {
  name: string
  image: string
  summary: string
  story: string
}

export const contact = {
  address: '1026 SW 9th St, Suite D, Ocala, FL 34471',
  phone: '352-679-6566',
  emails: ['info@uniquediamondhorsesanctuary.org', 'vlake@uniquediamondhorsesanctuary.org'],
}

export const socialLinks = {
  facebook: 'https://www.facebook.com/people/Unique-Diamond-Horse-Sanctuary/61561321258918/',
  instagram: 'https://www.instagram.com/uniquediamondhorsesanctuary/',
  tiktok: 'https://www.tiktok.com/@uniquediamondhs',
  youtube: 'https://www.youtube.com/@TheUniqueDiamondHorseSanctuary',
}

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Horses', to: '/horses' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'News', to: '/news' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
]

export const zeffy = {
  donationUrl:
    import.meta.env.VITE_ZEFFY_DONATION_URL?.trim() ||
    'https://uniquediamondhorsesanctuary.org/donate-now/',
  embedUrl: import.meta.env.VITE_ZEFFY_EMBED_URL?.trim() || '',
  shopUrl:
    import.meta.env.VITE_ZEFFY_SHOP_URL?.trim() ||
    'https://www.zeffy.com/en-US/ticketing/unique-diamond-horse-sanctuarys-shop',
}

export const horses: Horse[] = [
  {
    name: 'Achiever',
    image: '/images/horse-achiever.webp',
    summary: 'A playful thoroughbred with a gentle-giant heart.',
    story:
      'Achiever is roughly sixteen years old. Once expected to race, he later lived as a backyard horse before finding his forever herd. He loves baths, sunshine, fast paddock runs, and making people laugh.',
  },
  {
    name: 'Barbie',
    image: '/images/horse-barbie.webp',
    summary: 'A spirited Welsh Arabian pony who found family here.',
    story:
      'Barbie arrived after her previous home no longer wanted a smaller horse. At the sanctuary, she found safety, a lively herd, and her best friend Misty.',
  },
  {
    name: 'Candy',
    image: '/images/horse-candy.webp',
    summary: 'A beloved member of the sanctuary herd.',
    story:
      'Candy is one of the cherished horses whose daily needs are supported through feed, veterinary care, hoof care, shelter, and patient attention from the sanctuary team.',
  },
  {
    name: 'Chance',
    image: '/images/horse-chance.webp',
    summary: 'A retired lesson horse enjoying a peaceful new chapter.',
    story:
      'Chance is a twenty-year-old quarter horse gelding. After years of helping children learn to ride and care for horses, this gentle giant now spends his days enjoying retirement.',
  },
  {
    name: 'Drama',
    image: '/images/horse-drama.webp',
    summary: 'A young thoroughbred receiving lifelong comfort and care.',
    story:
      'Drama developed arthritis after being trained too young. He can no longer race or be ridden, but he can play, eat, rest, and stay close to his best friend MyQuest.',
  },
  {
    name: 'Colt & Dutchess',
    image: '/images/horse-colt-dutchess.webp',
    summary: 'Mini horses with oversized personalities.',
    story:
      'Colt and Dutchess bring curiosity, energy, and joy to the sanctuary. Their bond with Magic is a bright example of how companionship helps rescued animals thrive.',
  },
  {
    name: 'Fancy',
    image: '/images/horse-fancy.webp',
    summary: 'A survivor whose recovery shows what consistent care can do.',
    story:
      'Fancy arrived severely underweight and with a leg that had not received the early care it needed. Around-the-clock nutrition, safety, and kindness helped her recover. She now loves brushing and attention.',
  },
  {
    name: 'Leonardo',
    image: '/images/horse-leonardo.webp',
    summary: 'A warmblood with a fancy stride and a devoted best friend.',
    story:
      'Leonardo came to the sanctuary after his owner passed away. New surroundings were frightening at first, but he quickly bonded with Shiner. The two now graze and explore together.',
  },
  {
    name: 'Magic',
    image: '/images/horse-magic.webp',
    summary: 'Designer Painted Magic receives specialized ongoing care.',
    story:
      'Magic lives with diabetes, white line disease, and laminitis. The sanctuary provides the careful management she needs, along with plenty of brushing, affection, and calm companionship.',
  },
  {
    name: 'Misty',
    image: '/images/horse-misty.webp',
    summary: 'A Welsh pony transformed by nourishment and kindness.',
    story:
      'Misty arrived in poor condition and initially appeared much older than she was. Today, she is a living portrait of recovery. She loves her herd, children, brushing, and her best friend Barbie.',
  },
  {
    name: 'All Our Munny',
    image: '/images/horse-munny.webp',
    summary: 'A former race prospect now protected from further injury.',
    story:
      'Munny fractured a sesamoid bone and can no longer race or jump beyond safe limits. His former owner chose sanctuary life to protect his future. He is known for sticking out his tongue to entertain people.',
  },
  {
    name: 'MyQuest',
    image: '/images/horse-myquest.webp',
    summary: 'A young thoroughbred whose racing injury changed his path.',
    story:
      'MyQuest broke a leg during his early racing career. Although healed, he cannot race or be ridden. He finds comfort in routine and in staying near his best friend Drama.',
  },
  {
    name: 'Sandy',
    image: '/images/horse-sandy.webp',
    summary: 'A retired quarter horse with a patient, generous spirit.',
    story:
      'Sandy is a twenty-four-year-old mare who once trail rode, barrel raced, and helped children learn. She now enjoys grazing, sunbathing, and following her herd through quiet Florida days.',
  },
  {
    name: 'Shiner',
    image: '/images/horse-shiner.webp',
    summary: 'A retired gelding living well despite chronic arthritis.',
    story:
      'Shiner has a prominent leg nodule and arthritis likely connected to years of competitive roping. He still moves with spirit and enjoys running beside Leonardo whenever he feels up to it.',
  },
  {
    name: 'Jellybean',
    image: '/images/horse-jellybean.webp',
    summary: 'A newer sanctuary resident settling into safety.',
    story:
      'Jellybean is part of the growing herd that depends on careful feeding, health monitoring, secure shelter, and the steady rhythm of compassionate daily care.',
  },
  {
    name: 'Hard Knocking',
    image: '/images/horse-hard-knocking.webp',
    summary: 'A former race winner who earned a gentler second act.',
    story:
      'Hard Knocking is a registered thoroughbred and former Monmouth Park winner. A serious leg injury ended his racing career, but surgery, rehabilitation, and dedicated care opened the door to a peaceful life.',
  },
]

export const galleryImages = [
  '/images/about-banner.webp',
  '/images/horse-portrait-1.webp',
  '/images/horse-portrait-2.webp',
  '/images/horse-portrait-3.webp',
  '/images/horse-portrait-4.webp',
  '/images/horse-portrait-5.webp',
  '/images/horse-portrait-6.webp',
  '/images/hero-horses.webp',
  '/images/horse-field.webp',
  '/images/horse-care.webp',
  '/images/sanctuary-life.webp',
  ...horses.map((horse) => horse.image),
]

export const blogPosts = [
  {
    title: 'What Rescued Horses Teach Us About Trust, Patience, and Second Chances',
    excerpt:
      'Trust is never rushed. Rescue horses show us how safety is built through consistency, quiet observation, and a willingness to let healing move at its own pace.',
    date: 'Sanctuary Reflections',
  },
  {
    title: 'When Rescue Becomes a Lifelong Promise',
    excerpt:
      'Intake is only one moment. The true promise includes years of feed, hoof care, veterinary support, maintenance, and attention tailored to each horse.',
    date: 'Care & Responsibility',
  },
  {
    title: 'More Than a Rescue: Understanding Trauma in Horses',
    excerpt:
      'Physical recovery is visible, but emotional rehabilitation often unfolds in smaller signs: a relaxed posture, a curious step forward, or a horse choosing connection.',
    date: 'Equine Wellness',
  },
  {
    title: 'Healing Together: Horses and Foster Children',
    excerpt:
      'The calm presence of a horse can create room for confidence, empathy, and trust. These connections remind us that care can travel in both directions.',
    date: 'Community',
  },
  {
    title: 'Healing Hooves and Hearts',
    excerpt:
      'Thoughtful equine experiences can offer children a quiet setting to practice patience, boundaries, communication, and compassionate leadership.',
    date: 'Youth Programs',
  },
  {
    title: 'The Unseen Heroes of the Equine World',
    excerpt:
      'Behind every comfortable horse is a network of donors, veterinarians, farriers, volunteers, caretakers, and neighbors who keep the work moving.',
    date: 'Sanctuary Life',
  },
]

export const faqs = [
  {
    question: 'What is Unique Diamond Horse Sanctuary?',
    answer:
      'Unique Diamond Horse Sanctuary is a nonprofit rescue and sanctuary dedicated to providing rescued horses with safe shelter, daily care, rehabilitation, and long-term support.',
  },
  {
    question: 'Is the sanctuary currently accepting new horses?',
    answer:
      'No. The sanctuary is currently at full capacity. This protects the space, attention, and resources needed by the horses and ponies already in its care.',
  },
  {
    question: 'Can I visit the sanctuary?',
    answer:
      'Visits are limited and available by request only. The sanctuary carefully manages outside contact to protect the health and calm of the herd, especially during equine virus concerns.',
  },
  {
    question: 'Are group visits or events allowed?',
    answer:
      'Group visits and events are currently restricted. Any possible visit must be requested in advance and reviewed against current animal-care and health needs.',
  },
  {
    question: 'Why are donations so important?',
    answer:
      'Donations help pay for hay, grain, veterinary treatment, medications, farrier services, fencing, shelter maintenance, bedding, rehabilitation, and everyday supplies.',
  },
  {
    question: 'How does my donation help?',
    answer:
      'Your support helps fund the direct care and upkeep of the animals, including food, water, medical care, hoof care, safe shelter, and long-term sanctuary needs.',
  },
  {
    question: 'Can I sponsor a horse?',
    answer:
      'Horse sponsorship can be a meaningful way to support ongoing care. Contact the sanctuary to ask about current sponsorship opportunities and the horses with the greatest needs.',
  },
  {
    question: 'Can I volunteer?',
    answer:
      'Volunteer opportunities vary according to health protocols and animal-care needs. Please send a request through the contact page so the team can review current availability.',
  },
  {
    question: 'How else can I help?',
    answer:
      'You can shop the sanctuary collection, share the mission on social media, tell others about responsible horse rescue, and support approved community efforts.',
  },
]
