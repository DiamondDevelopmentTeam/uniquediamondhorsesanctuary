export type ResponsiveSources = {
  avif?: string
  webp?: string
}

export type HorsePhoto = {
  src: string
  alt: string
  caption?: string
  width: number
  height: number
  sources?: ResponsiveSources
  sizes?: string
}

export type Horse = {
  slug: string
  name: string
  profileName?: string
  image: string
  photos: HorsePhoto[]
  summary: string
  story: string[]
  age?: string
  birthDate?: string
  sex?: string
  breed?: string
  coat?: string
  careNeeds?: string[]
  companions?: string[]
  sponsorshipLabel?: string
  sponsorshipUrl?: string
  needsReview?: boolean
}

export type GalleryImage = HorsePhoto

export const siteUrl = 'https://diamonddevelopmentteam.github.io/uniquediamondhorsesanctuary/'

const responsivePhoto = (
  stem: string,
  alt: string,
  width = 1200,
  height = 800,
  caption?: string,
): HorsePhoto => ({
  src: `/images/horses/${stem}-1200.webp`,
  alt,
  caption,
  width,
  height,
  sources: {
    avif: [480, 768, 1200, 1600].map((size) => `/images/horses/${stem}-${size}.avif ${size}w`).join(', '),
    webp: [480, 768, 1200, 1600].map((size) => `/images/horses/${stem}-${size}.webp ${size}w`).join(', '),
  },
  sizes: '(max-width: 720px) 100vw, (max-width: 1200px) 80vw, 1200px',
})

const existingPhoto = (
  src: string,
  alt: string,
  width: number,
  height: number,
): HorsePhoto => ({ src, alt, width, height })

const makeHorse = (horse: Omit<Horse, 'image'>): Horse => ({
  ...horse,
  image: horse.photos[0].src,
})

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
  makeHorse({
    slug: 'achiever',
    name: 'Achiever',
    photos: [existingPhoto('/images/horse-achiever.webp', 'Achiever at Unique Diamond Horse Sanctuary', 1600, 1067)],
    age: '16 years old',
    sex: 'Gelding',
    breed: 'Thoroughbred',
    summary: 'A curious and playful Thoroughbred who believes he is exactly the right size.',
    companions: ['Fancy'],
    story: [
      'Hi! I’m a 16-year-old Thoroughbred. I was meant to race, but instead I ended up being kept as a backyard horse, sometimes called a pasture ornament, until I came to the sanctuary.',
      'They tell me I’m small for the average Thoroughbred, but I happen to think I’m absolutely perfect.',
      'I’m a silly guy who loves running around with my friends. I also love people, especially when I can search them for treats.',
      'I’m very curious, so whenever someone enters my field, I usually come over to inspect whatever they are doing.',
    ],
  }),
  makeHorse({
    slug: 'barbie',
    name: 'Barbie',
    photos: [existingPhoto('/images/horse-barbie.webp', 'Barbie at Unique Diamond Horse Sanctuary', 1067, 1600)],
    age: '5 years old',
    sex: 'Mare',
    breed: 'Welsh and Arabian cross',
    coat: 'Chestnut',
    summary: 'A gentle little beauty queen enjoying her forever home at the sanctuary.',
    companions: ['Misty', 'MyQuest'],
    story: [
      'Hello! I’m a 5-year-old Welsh and Arabian cross, and my coat is a beautiful shade of chestnut.',
      'I am a true beauty queen.',
      'Not much is known about my past, except that my previous owners no longer wanted a small horse, and I was surrendered.',
      'But don’t feel bad for me. I’m living my best life at the sanctuary.',
      'I’m gentle and sweet, easy to handle, and I enjoy being groomed and loved by humans.',
    ],
  }),
  makeHorse({
    slug: 'candy',
    name: 'Candy',
    photos: [
      responsivePhoto('candy-01', 'Candy at Unique Diamond Horse Sanctuary', 1200, 1800),
      responsivePhoto('candy-and-drama-01', 'Candy and Drama together at Unique Diamond Horse Sanctuary'),
    ],
    age: '6 years old',
    sex: 'Mare',
    breed: 'Thoroughbred',
    coat: 'Chestnut',
    summary: 'A chestnut Thoroughbred who found safety after a loving but difficult surrender.',
    companions: ['Jellybean', 'Drama'],
    story: [
      'Hi! I’m a 6-year-old Thoroughbred mare, and my coat color is called chestnut.',
      'I came to the sanctuary after my family experienced a very difficult loss. My owner loved me with all her heart, but after her husband passed away, she could no longer afford the cost of my care.',
      'Bringing me to the sanctuary was an act of pure love. Now I am safe, well fed, and enjoying my forever home with my pasture best friends, Jellybean and Drama.',
    ],
    sponsorshipLabel: 'Support Candy’s care',
  }),
  makeHorse({
    slug: 'chance',
    name: 'Chance',
    photos: [existingPhoto('/images/horse-chance.webp', 'Chance at Unique Diamond Horse Sanctuary', 1600, 1067)],
    age: '20 years old',
    sex: 'Gelding',
    breed: 'Quarter Horse',
    coat: 'Pinto',
    summary: 'A calm retired lesson horse who appreciates life’s quieter pleasures.',
    story: [
      'Howdy! I’m a 20-year-old Quarter Horse, and my beautiful coat color is called pinto.',
      'During my riding career, I was a lesson horse and taught many children how to ride.',
      'I’m a calm, quiet guy. Some people might call me an introvert.',
      'I enjoy peaceful grazing time, either alone or beside a calm friend, while my younger pasture mates run around and play.',
      'I love people, especially when they brush my coat and give me treats. What can I say? I enjoy the simple things in life.',
    ],
  }),
  makeHorse({
    slug: 'drama',
    name: 'Drama',
    photos: [
      responsivePhoto('drama-01', 'Drama at Unique Diamond Horse Sanctuary'),
      responsivePhoto('drama-02', 'Drama standing near the sanctuary barn'),
      responsivePhoto('drama-04', 'Drama moving through a sanctuary paddock'),
    ],
    age: '3 years old',
    sex: 'Gelding',
    breed: 'Thoroughbred',
    summary: 'A gentle young Thoroughbred enjoying life without the pressure of being ridden.',
    companions: ['Candy', 'Jellybean'],
    story: [
      'Hello there, friend! I’m a 3-year-old Thoroughbred gelding. I was born to race, but because my training began when I was very young, I developed a serious case of arthritis.',
      'Being ridden consistently would hurt me, so I came to the sanctuary to enjoy my days without having a job as a riding horse. I get to simply be a horse. It’s a pretty sweet deal, if you ask me.',
      'I’m a gentle giant, and I love people. I approach whenever someone is nearby. I enjoy placing my soft muzzle against their face and gently blowing my breath toward them. I especially love when they blow air back, because that is one way horses get to know one another.',
      'I also love running around my field when I get the zoomies, and I’m very fond of my girlfriends, Candy and Jellybean.',
    ],
  }),
  makeHorse({
    slug: 'star-and-dutchess',
    name: 'Star & Dutchess',
    photos: [
      responsivePhoto('star-and-dutchess-01', 'Star and Dutchess standing together'),
      responsivePhoto('star-01', 'Star at Unique Diamond Horse Sanctuary'),
      responsivePhoto('dutchess-01', 'Dutchess at Unique Diamond Horse Sanctuary'),
      responsivePhoto('star-dutchess-and-magic-01', 'Star, Dutchess, and Magic with the sanctuary herd', 1200, 1150),
    ],
    breed: 'Miniature horses',
    age: 'Both under one year old',
    summary: 'Two tiny young companions with enormous personalities.',
    companions: ['Magic'],
    story: [
      'We may be small, but we have no shortage of personality.',
      'Our favorite activity lately is testing the chewability of our human caretakers. So far, none of them have turned out to be edible, but because we are teething, do not expect our experiments to stop anytime soon.',
      'We are Miniature Horses, and we are both under one year old.',
      'We came to the sanctuary to provide companionship for Magic after he lost his longtime best friend, Charmer.',
      'Magic is now helping teach us manners while we grow into responsible members of the herd.',
    ],
    sponsorshipLabel: 'Support Star and Dutchess',
  }),
  makeHorse({
    slug: 'fancy',
    name: 'Fancy',
    photos: [
      responsivePhoto('fancy-01', 'Fancy at Unique Diamond Horse Sanctuary'),
      responsivePhoto('fancy-02', 'Fancy standing in a sanctuary pasture', 1200, 1800),
    ],
    sex: 'Mare',
    breed: 'Thoroughbred',
    coat: 'Chestnut with a white blaze and four white socks',
    summary: 'A resilient Thoroughbred whose spirit has never been limited by her past.',
    companions: ['Achiever'],
    story: [
      'Hello! I’m a Thoroughbred mare with a chestnut coat, a beautiful white blaze on my face, and four white socks. And yes, I know I’m beautiful.',
      'I was born with a leg that curves outward. It could have been corrected when I was still a young, growing foal if I had received proper care. Unfortunately, I was not cared for properly, and I arrived at the sanctuary severely malnourished.',
      'But I am resilient and strong. I do not allow my leg or my past to hold me back. I’m living my best life at Unique Diamond Horse Sanctuary.',
      'I love my horse friends, especially Achiever. I also love my humans. They have been very kind to me, and I always try my best to make them smile.',
    ],
  }),
  makeHorse({
    slug: 'leonardo',
    name: 'Leonardo',
    photos: [
      responsivePhoto('leonardo-02', 'Leonardo at Unique Diamond Horse Sanctuary'),
      responsivePhoto('leonardo-03', 'Leonardo looking toward the camera'),
      responsivePhoto('leonardo-04', 'Leonardo standing under a clear sky'),
    ],
    age: '14 years old',
    sex: 'Gelding',
    breed: 'Warmblood',
    coat: 'Pinto',
    summary: 'A devoted Warmblood who found confidence and friendship after losing his owner.',
    companions: ['Shinner'],
    story: [
      'Good day! I’m a 14-year-old Warmblood gelding, and my coat color is called pinto.',
      'Sadly, my owner passed away, and I was placed for adoption. I was very scared at first. I missed my owner, and I did not recognize anyone or understand my new surroundings.',
      'Then I met my friend Shinner, and we have been inseparable ever since.',
      'I love my new life. I’m the king of my field, and I do not like sharing Shinner with anyone, so we go out by ourselves, just the way I like it.',
    ],
  }),
  makeHorse({
    slug: 'magic',
    name: 'Magic',
    profileName: 'Designer Painted Magic',
    photos: [
      existingPhoto('/images/horse-magic.webp', 'Magic at Unique Diamond Horse Sanctuary', 1600, 1067),
      responsivePhoto('dutchess-and-magic-03', 'Dutchess and Magic with the sanctuary herd'),
      responsivePhoto('star-dutchess-and-magic-01', 'Star, Dutchess, and Magic with the sanctuary herd', 1200, 1150),
    ],
    sex: 'Male',
    breed: 'Shetland pony',
    age: 'Older pony',
    summary: 'An older Shetland pony thriving with careful support and two energetic young companions.',
    companions: ['Star', 'Dutchess'],
    story: [
      'My full government name is Designer Painted Magic, but you can just call me Magic.',
      'I am an older Shetland pony with several health conditions, including laminitis, diabetes, and white line disease. With proper care, I am thriving.',
      'My mom surrendered me and my best friend Charmer to the sanctuary so we could receive the best care possible.',
      'Charmer crossed the rainbow bridge earlier this year. I miss him dearly, but I know I will see him again one day.',
      'I now have two new friends, Dutchess and Star, who are very young and very energetic.',
      'But do not worry. I am teaching them manners, and under my guidance, I believe they will grow into fine members of society.',
    ],
    careNeeds: ['Laminitis', 'Diabetes', 'White line disease'],
    sponsorshipLabel: 'Help support Magic',
  }),
  makeHorse({
    slug: 'misty',
    name: 'Misty',
    photos: [responsivePhoto('misty-01', 'Misty at Unique Diamond Horse Sanctuary')],
    age: '14 years old',
    sex: 'Mare',
    breed: 'Welsh pony',
    summary: 'A calming Welsh pony whose remarkable recovery revealed her true age and spirit.',
    companions: ['Barbie', 'MyQuest'],
    story: [
      'Hi! I’m a 14-year-old Welsh pony.',
      'My humans initially believed I was much older because of the condition I was in when I arrived at the sanctuary.',
      'With plenty of care and attention, I had an amazing glow-up.',
      'My best friend is Barbie, and we are almost always together.',
      'I’m a sweet girl, and people say I have a calming presence. I love being groomed and receiving scratches. And if you give me treats, I will remember you forever.',
    ],
  }),
  makeHorse({
    slug: 'all-our-munny',
    name: 'All Our Munny',
    profileName: 'Munny',
    photos: [
      responsivePhoto('munny-01', 'All Our Munny at Unique Diamond Horse Sanctuary'),
      responsivePhoto('munny-02', 'All Our Munny looking toward the camera'),
      responsivePhoto('munny-03', 'All Our Munny moving through a sanctuary pasture'),
    ],
    age: '4 years old',
    breed: 'Thoroughbred',
    summary: 'A playful former race prospect protected from the risk of further injury.',
    story: [
      'Hello! The name is All Our Munny, but you can just call me Munny. I’m a 4-year-old Thoroughbred, and I was born to race.',
      'Unfortunately, I broke my sesamoid bone, which is somewhat like a person breaking their big toe.',
      'My mom made the difficult decision to surrender me to the sanctuary, where I will not be ridden. This protects me from being pushed under saddle and prevents further harm to my body.',
      'But don’t you dare pity me. I love my life here.',
      'My favorite activities include swinging fly masks around, chasing my pasture mates, wandering into the personal space of humans, and taking long naps.',
      'I also have a magical button on my nose. When someone presses it, I stick out my tongue.',
    ],
    careNeeds: ['Previous sesamoid fracture', 'Not ridden'],
  }),
  makeHorse({
    slug: 'myquest',
    name: 'MyQuest',
    photos: [existingPhoto('/images/horse-myquest.webp', 'MyQuest at Unique Diamond Horse Sanctuary', 1200, 1600)],
    birthDate: 'April 7, 2018',
    sex: 'Gelding',
    breed: 'Thoroughbred',
    summary: 'A water-loving Thoroughbred whose racing career ended after an early injury.',
    companions: ['Barbie', 'Misty'],
    story: [
      'Hay there! I’m a Thoroughbred gelding born on April 7, 2018. My sire is the famous Nyquist, and my dam is Strike Accord.',
      'My brief racing career ended abruptly after I injured my leg in the starting gate during my third race.',
      'My injury has healed, but I can no longer be ridden. Eventually, I found my way to Unique Diamond Horse Sanctuary.',
      'I’m very happy here. I love spending time with my pasture mates, Barbie and Misty.',
      'My favorite thing in the world is water. I enjoy splashing my hooves in the water trough, grabbing the hose and swinging it around, and then rolling in the mud I created. What more could a guy want in life?',
    ],
  }),
  makeHorse({
    slug: 'sandy',
    name: 'Sandy',
    photos: [
      responsivePhoto('sandy-02', 'Sandy at Unique Diamond Horse Sanctuary'),
      responsivePhoto('sandy-01', 'Sandy standing in a sanctuary paddock'),
      responsivePhoto('sandy-04', 'Sandy looking toward the camera', 1200, 1800),
    ],
    age: '24 years old',
    sex: 'Mare',
    breed: 'Quarter Horse',
    summary: 'A retired teacher, trail horse, and confident matriarch of the herd.',
    story: [
      'Hi! I’m a 24-year-old Quarter Horse. I used to barrel race, and I loved it.',
      'I am also a teacher. I have taught many children how to ride and care for horses, and I traveled many trails with my rider before coming here to retire.',
      'People call me quirky. Maybe it is because I stick my tongue out of my mouth about 70 percent of the time.',
      'My pasture mates respect me because I am strict about my boundaries. I’m a strong mare, and I will hold my ground when necessary. Someone has to put the youngsters in their place when they get out of hand, or hoof.',
      'But I am also gentle and kind. I would consider myself the matriarch of the herd.',
    ],
  }),
  makeHorse({
    slug: 'shiner',
    name: 'Shinner',
    photos: [responsivePhoto('shiner-01', 'Shinner standing in a shaded sanctuary pasture')],
    age: '24 years old',
    sex: 'Gelding',
    breed: 'Quarter Horse',
    summary: 'A happy retired gelding living every day beside his best friend Leonardo.',
    companions: ['Leonardo'],
    careNeeds: ['Arthritis', 'Previous knee injury'],
    story: [
      'Howdy! I’m a 24-year-old Quarter Horse gelding from California.',
      'I entered rescue after sustaining a knee injury from being used in roping competitions when I was too young and my body had not fully developed.',
      'Because of those early years, my left knee is much larger than my right, and I live with arthritis.',
      'I’m a happy horse in spite of what happened to me. I have a wonderful life at the sanctuary, where I get to spend every day simply being a horse with my best friend, Leonardo.',
    ],
  }),
  makeHorse({
    slug: 'jellybean',
    name: 'Jellybean',
    photos: [responsivePhoto('jellybean-01', 'Jellybean at Unique Diamond Horse Sanctuary', 1200, 1800)],
    summary: 'A lovingly surrendered resident receiving the continuous care they deserve.',
    companions: ['Candy', 'Drama'],
    story: [
      'Due to unexpected changes in their previous family’s circumstances and the rising cost of specialized care, Jellybean was lovingly surrendered to Unique Diamond Horse Sanctuary.',
      'That decision allowed Jellybean to continue receiving the consistent, high-standard care and lifelong safety they deserve.',
      'More details about Jellybean’s personality and history will be added as the sanctuary team completes the full biography.',
    ],
    sponsorshipLabel: 'Donate in honor of Jellybean',
    needsReview: true,
  }),
  makeHorse({
    slug: 'hard-knocking',
    name: 'Hard Knocking',
    photos: [existingPhoto('/images/horse-hard-knocking.webp', 'Hard Knocking at Unique Diamond Horse Sanctuary', 1600, 1067)],
    age: '8 years old',
    sex: 'Gelding',
    breed: 'Thoroughbred',
    summary: 'A former Monmouth Park winner enjoying a peaceful and well-earned retirement.',
    story: [
      'Hi there! I’m an 8-year-old Thoroughbred gelding. I was a successful racehorse and even won at Monmouth Park.',
      'I know, I’m a pretty big deal, yet I remain humble.',
      'I had to retire from racing after a serious leg injury. I needed surgery and a long rehabilitation, but my loving owners took excellent care of me.',
      'Once I fully recovered, they found me a peaceful place where I could enjoy a long and well-deserved retirement.',
      'I’m a gentle, intelligent, and inquisitive horse. Please allow me to place my nose in your hair or against your face. That is how I show affection.',
    ],
  }),
]

export const galleryImages: GalleryImage[] = [
  responsivePhoto('candy-01', 'Candy at Unique Diamond Horse Sanctuary', 1200, 1800),
  responsivePhoto('drama-03', 'Drama at Unique Diamond Horse Sanctuary'),
  responsivePhoto('dutchess-01', 'Dutchess at Unique Diamond Horse Sanctuary'),
  responsivePhoto('fancy-01', 'Fancy at Unique Diamond Horse Sanctuary'),
  responsivePhoto('jellybean-01', 'Jellybean at Unique Diamond Horse Sanctuary', 1200, 1800),
  responsivePhoto('leonardo-03', 'Leonardo at Unique Diamond Horse Sanctuary'),
  existingPhoto('/images/horse-magic.webp', 'Magic at Unique Diamond Horse Sanctuary', 1600, 1067),
  responsivePhoto('misty-01', 'Misty at Unique Diamond Horse Sanctuary'),
  responsivePhoto('munny-02', 'All Our Munny at Unique Diamond Horse Sanctuary'),
  responsivePhoto('sandy-03', 'Sandy at Unique Diamond Horse Sanctuary'),
  responsivePhoto('shiner-01', 'Shinner at Unique Diamond Horse Sanctuary'),
  responsivePhoto('star-02', 'Star at Unique Diamond Horse Sanctuary'),
  responsivePhoto('candy-and-drama-01', 'Candy and Drama together at Unique Diamond Horse Sanctuary'),
  responsivePhoto('star-and-dutchess-02', 'Star and Dutchess standing together'),
  responsivePhoto('star-dutchess-and-magic-01', 'Star, Dutchess, and Magic with the sanctuary herd', 1200, 1150),
]

export const getHorseBySlug = (slug: string) => horses.find((horse) => horse.slug === slug)

export const getHorseProfileUrl = (slug: string) => new URL(`horses/${slug}`, siteUrl).toString()

export const getHorseDonationUrl = (horse: Horse) => horse.sponsorshipUrl || zeffy.donationUrl

export const getRelatedHorses = (horse: Horse, count = 3) => {
  const currentIndex = horses.findIndex((resident) => resident.slug === horse.slug)
  return Array.from({ length: Math.min(count, horses.length - 1) }, (_, offset) => (
    horses[(currentIndex + offset + 1) % horses.length]
  ))
}

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
