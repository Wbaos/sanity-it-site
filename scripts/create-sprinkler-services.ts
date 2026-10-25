import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "celkrwoq",
  dataset: "production",
  apiVersion: "2026-06-16",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

const CATEGORY_ID = "c003bab9-52d7-4ef7-af76-46d5dd09e341";
const GROUP_ID = "f336fdb0-791c-4870-b828-54a6f36c36d5";

const common = {
  _type: "service",
  enabled: true,
  showPrice: false,
  pricingModel: "flat",
  rating: 5,
  reviewsCount: 14,
  mode: "in-home",
  category: { _type: "reference", _ref: CATEGORY_ID },
  group: { _type: "reference", _ref: GROUP_ID },
  gallery: [],
  videos: [],
  questions: [], // no add-ons

  testimonials: [
    {
        _key: "google-review-jackie",
        name: "Jackie",
        text: "I had a great experience with the sprinkler repair service I received today from Wilber. He arrived right on time, was very knowledgeable and professional, and took the time to explain what needed to be done. He was polite, courteous, and went above and beyond to make sure the job was completed correctly. It's clear he takes pride in his work and cares about doing things the right way. I highly recommend him to anyone needing sprinkler repairs!",
        date: "2026-06-15",
        rating: 5,
    },
    {
        _key: "google-review-salvadora0",
        name: "salvadora0",
        text: "The technician, Wilbert, is very knowledgeable and professional. He completed four major projects for us. On two houses, he replaced old mechanical water timers with modern electronic systems and helped us work directly with the manufacturer, Rain Bird, over the phone to fully automate the sprinkler systems. He also installed three floodlight cameras, which required the addition of two Wi-Fi extenders. The electrical work was done professionally, and the cameras are now fully connected to the Ring app, allowing us to monitor our home remotely. I would definitely hire this company again for any sprinkler system automation or security camera installation.",
        date: "2026-05-26",
        rating: 5,
    },
    {
        _key: "google-review-mario-arcacha",
        name: "Mario Arcacha",
        text: "I would like to commend Wilber for an excellent and professional job fixing my sprinkler system, which included replacing a 4-zone index valve and numerous sprinkler heads on my property. Many of my sprinkler lines were damaged and cracked by the roots from live oaks, some of which were leaking underground and not noticeable above ground. Wilber fixed everything at a very reasonable price, and he took the time to do it correctly and timely. A big thank you to Wilber, whom I highly recommend.",
        date: "2026-05-05",
        rating: 5,
    },
    {
        _key: "google-review-genesis-blanco",
        name: "Genesis Blanco",
        text: "Excellent experience from start to finish. The irrigation and sprinkler system was installed professionally, everything works perfectly, and the attention to detail was outstanding. The team was punctual, knowledgeable, and made sure everything was done the right way. My lawn already looks much healthier and the coverage is great. Highly recommend them to anyone looking for reliable and high-quality irrigation services.",
        date: "2026-05-05",
        rating: 5,
    },
    {
        _key: "google-review-bayside-pro-homes",
        name: "Bayside Pro Homes",
        text: "Excelente servicio. Gracias por todo el esfuerzo y el gran trabajo que hicieron en mi casa. 100 % recomendados.",
        date: "2026-05-05",
        rating: 5,
    },
    {
        _key: "google-review-leonida-hedges",
        name: "Leonida Hedges",
        text: "Wilber did an excellent job on the repair of my sprinkler system. A very nice guy and knows his stuff very well. Quick to respond when you call for the service. Thank you for the job well done.",
        date: "2026-04-28",
        rating: 5,
    },
    {
        _key: "google-review-john-hayes",
        name: "John Hayes",
        text: "I just called CallTechCare and he came quick, fixed my valve. Thank you so much.",
        date: "2026-04-21",
        rating: 5,
    },
    {
        _key: "google-review-ajaz-hussain",
        name: "AJAZ HUSSAIN",
        text: "AMAZING JOB. GOOD AFFORDABLE PRICING. Wilber was VERY NICE. He is bilingual. Speaks both Spanish and English.",
        date: "2026-04-21",
        rating: 5,
    },
    ],
};

const services = [
  {
    ...common,
    _id: "service-sprinkler-repair",
    popular: true,
    title: "Sprinkler Repair",
    slug: { _type: "slug", current: "sprinkler-repair" },
    serviceType: "support",
    description:
      "Professional sprinkler repair for broken sprinkler heads, low pressure, leaking pipes, dry spots, and zones not working properly.",
    navDescription: "Sprinkler repair and troubleshooting",
    details: [
      "Complete sprinkler system inspection",
      "Broken sprinkler head replacement",
      "Sprinkler zone troubleshooting",
      "Low water pressure diagnostics",
      "Leaking sprinkler pipe repair",
      "Dry spot and coverage adjustment",
      "Timer and controller check",
      "Valve and solenoid inspection",
      "Spray pattern adjustment",
      "System testing after repairs",
    ],
    faqs: [
      {
        _key: "sprinkler-repair-faq-1",
        q: "Do you repair sprinkler zones that are not working?",
        a: "Yes. We troubleshoot sprinkler zones that will not turn on, have low pressure, have poor coverage, or are not watering properly.",
      },
      {
        _key: "sprinkler-repair-faq-2",
        q: "Do you replace broken sprinkler heads?",
        a: "Yes. We replace damaged sprinkler heads and adjust the spray pattern to improve coverage.",
      },
      {
        _key: "sprinkler-repair-faq-3",
        q: "Can you diagnose low sprinkler pressure?",
        a: "Yes. Low pressure may be caused by a broken pipe, bad valve, clogged sprinkler head, pump issue, or system design problem.",
      },
      {
        _key: "sprinkler-repair-faq-4",
        q: "Do you service residential and commercial sprinkler systems?",
        a: "Yes. CallTechCare provides sprinkler repair for homes, commercial properties, property managers, and small business locations.",
      },
    ],
  },

  {
    ...common,
    _id: "service-sprinkler-pump-replacement",
    popular: true,
    title: "Sprinkler Pump Replacement",
    slug: { _type: "slug", current: "sprinkler-pump-replacement" },
    serviceType: "installation",
    description:
      "Sprinkler pump repair and replacement for irrigation systems with weak pressure, pump failure, priming issues, or pump start relay problems.",
    navDescription: "Pump replacement and pressure issues",
    details: [
      "Sprinkler pump diagnosis",
      "Old pump removal",
      "New sprinkler pump installation",
      "Pump start relay inspection",
      "Check valve inspection or replacement",
      "PVC pipe and fitting connections",
      "Pressure and flow testing",
      "Priming and startup check",
      "Timer-to-pump communication check",
      "Final system testing by zone",
    ],
    faqs: [
      {
        _key: "pump-faq-1",
        q: "Can you replace my sprinkler pump?",
        a: "Yes. We can replace sprinkler pumps and check related components such as check valves, pump start relays, PVC fittings, and system pressure.",
      },
      {
        _key: "pump-faq-2",
        q: "Why is my sprinkler pump not turning on?",
        a: "The issue may be caused by the pump, timer, pump start relay, electrical power, wiring, or pressure-related problems.",
      },
      {
        _key: "pump-faq-3",
        q: "Why does my sprinkler pump lose prime?",
        a: "A pump may lose prime because of a bad check valve, air leak, cracked fitting, suction-side issue, or well supply problem.",
      },
      {
        _key: "pump-faq-4",
        q: "Do you install pump start relays?",
        a: "Yes. We can install or replace pump start relays when the sprinkler controller needs to activate the irrigation pump.",
      },
    ],
  },

  {
    ...common,
    _id: "service-sprinkler-valve-repair",
    popular: true,
    title: "Sprinkler Valve Repair",
    slug: { _type: "slug", current: "sprinkler-valve-repair" },
    serviceType: "support",
    description:
      "Sprinkler valve repair for leaking valves, stuck valves, zones that stay on, zones that will not turn on, and valve box issues.",
    navDescription: "Valve repair and zone control",
    details: [
      "Sprinkler valve troubleshooting",
      "Solenoid testing",
      "Valve wiring inspection",
      "Leaking valve repair",
      "Stuck valve diagnosis",
      "Valve replacement when needed",
      "Valve box inspection",
      "Zone operation testing",
      "Controller signal testing",
      "System pressure and flow check",
    ],
    faqs: [
      {
        _key: "valve-faq-1",
        q: "Do you repair sprinkler valves that stay open?",
        a: "Yes. We troubleshoot valves that do not close, continue running, leak, or fail to open.",
      },
      {
        _key: "valve-faq-2",
        q: "Can a bad valve cause one sprinkler zone not to work?",
        a: "Yes. A bad valve, solenoid, wiring issue, or controller problem can cause a sprinkler zone to stop working.",
      },
      {
        _key: "valve-faq-3",
        q: "Do you replace sprinkler solenoids?",
        a: "Yes. If the solenoid is faulty and the valve body is still usable, we may be able to replace the solenoid instead of the entire valve.",
      },
      {
        _key: "valve-faq-4",
        q: "Can you clean up old valve boxes?",
        a: "Yes. We can inspect, repair, and organize valve boxes to improve access and make future service easier.",
      },
    ],
  },

  {
    ...common,
    _id: "service-sprinkler-leak-repair",
    popular: false,
    title: "Sprinkler Leak Repair",
    slug: { _type: "slug", current: "sprinkler-leak-repair" },
    serviceType: "support",
    description:
      "Sprinkler leak repair for underground PVC leaks, broken pipes, leaking fittings, water pooling, and pressure loss.",
    navDescription: "Leak detection and pipe repair",
    details: [
      "Leak inspection",
      "Underground sprinkler pipe repair",
      "Broken PVC pipe replacement",
      "Leaking fitting repair",
      "Coupling and connection replacement",
      "Water pooling troubleshooting",
      "Low pressure caused by leaks",
      "System pressure check",
      "Affected zone testing",
      "Final leak check after repair",
    ],
    faqs: [
      {
        _key: "leak-faq-1",
        q: "Do you repair underground sprinkler leaks?",
        a: "Yes. We repair broken sprinkler pipes, PVC leaks, damaged fittings, and water pooling issues.",
      },
      {
        _key: "leak-faq-2",
        q: "How do I know if my sprinkler system has a leak?",
        a: "Common signs include low pressure, wet areas in the yard, water pooling, higher water bills, or zones not spraying correctly.",
      },
      {
        _key: "leak-faq-3",
        q: "Can a sprinkler leak cause low pressure?",
        a: "Yes. A broken pipe or underground leak can reduce pressure and cause one or more zones to perform poorly.",
      },
      {
        _key: "leak-faq-4",
        q: "Do you replace broken PVC sprinkler lines?",
        a: "Yes. We can cut out damaged PVC sections and install new pipe, fittings, or couplings as needed.",
      },
    ],
  },

  {
    ...common,
    _id: "service-sprinkler-timer-installation",
    popular: true,
    title: "Sprinkler Timer Installation",
    slug: { _type: "slug", current: "sprinkler-timer-installation" },
    serviceType: "installation",
    description:
      "Sprinkler timer installation and programming for digital controllers, WiFi timers, rain sensor-ready systems, and multi-zone irrigation setups.",
    navDescription: "Timer setup and programming",
    details: [
      "Old sprinkler timer removal",
      "New sprinkler timer installation",
      "Digital controller setup",
      "WiFi controller setup when applicable",
      "Zone wiring connection",
      "Watering schedule programming",
      "Rain sensor compatibility check",
      "Pump start relay compatibility check",
      "Manual zone testing",
      "Customer walkthrough after setup",
    ],
    faqs: [
      {
        _key: "timer-faq-1",
        q: "Can you replace my old sprinkler timer?",
        a: "Yes. We can remove your old sprinkler timer, install a new digital or WiFi controller, and program your watering schedule.",
      },
      {
        _key: "timer-faq-2",
        q: "Can you program my sprinkler timer?",
        a: "Yes. We can program watering days, start times, run times, and zones based on your lawn and system needs.",
      },
      {
        _key: "timer-faq-3",
        q: "Can you connect a rain sensor to my sprinkler timer?",
        a: "Yes. If your controller is compatible, we can install and connect a rain sensor to help prevent watering during rainy weather.",
      },
      {
        _key: "timer-faq-4",
        q: "Can a bad timer cause sprinkler zones not to work?",
        a: "Yes. A faulty controller, bad wiring connection, or programming issue can prevent zones from turning on properly.",
      },
    ],
  },

  {
    ...common,
    _id: "service-wifi-sprinkler-controller-upgrade",
    popular: true,
    title: "WiFi Sprinkler Controller Upgrade",
    slug: { _type: "slug", current: "wifi-sprinkler-controller-upgrade" },
    serviceType: "installation",
    description:
      "Upgrade your sprinkler system to a smart WiFi controller so you can control watering schedules, rain delays, and zones from your phone.",
    navDescription: "Smart app-controlled sprinkler timer",
    details: [
      "Smart sprinkler controller installation",
      "WiFi connection setup",
      "Mobile app setup",
      "Zone naming and programming",
      "Watering schedule setup",
      "Rain delay setup",
      "Controller wiring check",
      "System compatibility check",
      "Manual zone testing",
      "Basic customer walkthrough",
    ],
    faqs: [
      {
        _key: "wifi-controller-faq-1",
        q: "Can I control my sprinkler system from my phone?",
        a: "Yes. With a compatible WiFi sprinkler controller, you can manage watering schedules, zones, and rain delays from your phone.",
      },
      {
        _key: "wifi-controller-faq-2",
        q: "Do I need strong WiFi near the sprinkler timer?",
        a: "Yes. The controller needs a reliable WiFi signal. If the signal is weak, a WiFi extender may be needed.",
      },
      {
        _key: "wifi-controller-faq-3",
        q: "Can you help me set up the app?",
        a: "Yes. We can install the controller, connect it to WiFi, set up the app, and show you the basics.",
      },
      {
        _key: "wifi-controller-faq-4",
        q: "Does a smart controller help save water?",
        a: "A smart controller can help reduce unnecessary watering by using schedules, rain delays, and weather-based features when available.",
      },
    ],
  },

  {
    ...common,
    _id: "service-rain-sensor-installation",
    popular: false,
    title: "Rain Sensor Installation",
    slug: { _type: "slug", current: "rain-sensor-installation" },
    serviceType: "installation",
    description:
      "Rain sensor installation for sprinkler systems to help prevent unnecessary watering and improve irrigation efficiency during rainy weather.",
    navDescription: "Rain sensor installation",
    details: [
      "Rain sensor installation",
      "Wired or wireless sensor setup",
      "Timer compatibility check",
      "Sensor mounting",
      "Controller connection",
      "Rain shutoff testing",
      "System operation check",
      "Customer walkthrough",
      "Basic maintenance explanation",
      "Final controller test",
    ],
    faqs: [
      {
        _key: "rain-sensor-faq-1",
        q: "What does a sprinkler rain sensor do?",
        a: "A rain sensor helps stop the sprinkler system from running when it has rained enough, reducing water waste.",
      },
      {
        _key: "rain-sensor-faq-2",
        q: "Can you install a wireless rain sensor?",
        a: "Yes. Depending on your controller, we can install either a wired or wireless rain sensor.",
      },
      {
        _key: "rain-sensor-faq-3",
        q: "Does every sprinkler timer support a rain sensor?",
        a: "Not every timer supports every sensor. We check compatibility before installation.",
      },
      {
        _key: "rain-sensor-faq-4",
        q: "Can a rain sensor stop my sprinklers after rain?",
        a: "Yes. Once installed and working correctly, a rain sensor can prevent the system from watering when enough rain has been detected.",
      },
    ],
  },

  {
    ...common,
    _id: "service-new-irrigation-installation",
    popular: false,
    title: "New Irrigation Installation",
    slug: { _type: "slug", current: "new-irrigation-installation" },
    serviceType: "installation",
    description:
      "New irrigation installation for sprinkler zones, PVC piping, valves, rotors, spray heads, controllers, pump relays, and rain sensors.",
    navDescription: "New sprinkler zone installation",
    details: [
      "New irrigation zone layout",
      "PVC pipe installation",
      "Sprinkler head installation",
      "Rotor and spray head setup",
      "Electric valve installation",
      "Valve box setup",
      "Controller connection",
      "Pump start relay compatibility check",
      "Rain sensor compatibility check",
      "System testing and coverage adjustment",
    ],
    faqs: [
      {
        _key: "new-irrigation-faq-1",
        q: "Do you install new sprinkler zones?",
        a: "Yes. We can install new irrigation zones, including pipes, valves, sprinkler heads, and controller setup.",
      },
      {
        _key: "new-irrigation-faq-2",
        q: "Can you upgrade an old sprinkler system?",
        a: "Yes. We can upgrade timers, valves, sprinkler heads, rain sensors, and system layout for better coverage.",
      },
      {
        _key: "new-irrigation-faq-3",
        q: "Do you install valves and valve boxes?",
        a: "Yes. We can install electric sprinkler valves and place them inside a valve box for a cleaner and more serviceable setup.",
      },
      {
        _key: "new-irrigation-faq-4",
        q: "Do you test the sprinkler system after installation?",
        a: "Yes. We test each zone, check pressure, adjust coverage, and confirm the controller is operating correctly.",
      },
    ],
  },
];

async function run() {
  if (!process.env.SANITY_WRITE_TOKEN) {
    throw new Error("Missing SANITY_WRITE_TOKEN");
  }

  for (const service of services) {
    await client.createOrReplace(service as any);
    console.log(`Created or updated: ${service.title}`);
  }

  console.log("Done creating and updating sprinkler services.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});