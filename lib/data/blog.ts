import { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "best-time-to-visit-smoky-mountains",
    title: "The Best Time to Visit the Smoky Mountains: A Season-by-Season Guide",
    eyebrow: "Local Timing Guide",
    excerpt:
      "Wildflowers in spring, tubing in summer, Dollywood lit up for Christmas - here's what each season actually looks like, so you can pick the trip you actually want.",
    readTime: "5 min read",
    publishedAt: "2026-12-17",
    heroImage:
      "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=1600&q=80&auto=format&fit=crop",
    heroImageAlt: "Sunset light over layered Smoky Mountain ridgelines",
    ctaGrid: true,
    ctaHeadline: "Whichever season you pick, there's a cabin for it",
    ctaBody:
      "A hot tub for chilly December nights, a riverbank for July, a porch for leaf season - browse all three and match the cabin to the trip.",
    body: [
      {
        kind: "p",
        lead: true,
        text: "\"When should we come?\" is really several different questions - do you want wildflowers or waterfalls, tubing or Christmas lights, a quiet week or a festival weekend. There's no single best time to visit the Smokies, but there is a best time for the trip you're actually trying to take.",
      },
      {
        kind: "timeline",
        items: [
          {
            label: "Spring (March-May)",
            title: "Wildflowers, waterfalls, and spring break crowds",
            text: "Spring is when the park's waterfalls run fullest from snowmelt and rain, and wildflowers start carpeting the lower trails. Dollywood typically reopens for its new season in mid-March, which is also when spring break travel picks up - book early if you're coming the weeks around it. Weather swings widely this time of year, so pack for both 70-degree afternoons and chilly mornings.",
          },
          {
            label: "Summer (June-August)",
            title: "Tubing, long days, and peak hiking season",
            text: "This is the park's busiest season and for good reason - long daylight hours, warm water for tubing on the Little River, and every trail and overlook open and accessible. Afternoon thunderstorms are common, so mornings are the better window for hiking. It's also prime time for Dollywood's Splash Country water park if the group wants a day off the trails.",
          },
          {
            label: "Fall & Halloween (September-early November)",
            title: "Foliage season, plus pumpkins and haunted attractions",
            text: "Color rolls downhill over about six weeks - see our fall foliage timing guide for exactly when to book for your elevation of choice. Dollywood runs its Harvest Festival with Great Pumpkin LumiNights through the end of October, and Gatlinburg's haunted attractions (Ripley's Haunted Adventure, Mysterious Mansion) are open for anyone wanting a Halloween-season scare between hikes.",
          },
          {
            label: "Thanksgiving week",
            title: "A quieter week between two busy seasons",
            text: "By Thanksgiving, the park's holiday lights are usually already up but the big Christmas-week crowds haven't arrived yet - a good window if you want festive without packed. Just know that restaurant waits and attraction hours shift around the holiday itself, so check ahead for Thanksgiving Day specifically.",
          },
          {
            label: "Christmas & New Year's",
            title: "Dollywood's Smoky Mountain Christmas and Gatlinburg's Winter Magic",
            text: "Dollywood's Smoky Mountain Christmas runs from early November through early January with millions of lights across the park. In town, Gatlinburg's Winter Magic kicks off in early November with a street festival and nightly Trolley Ride of Lights running into the new year. Expect holiday-week crowds and book cabins well in advance if you want to be here for Christmas or New Year's itself.",
          },
        ],
      },
      {
        kind: "p",
        note: true,
        text: "Exact event dates shift year to year - we'll keep this updated, but always double-check current dates for Dollywood events and Gatlinburg's festival calendar before you lock in a trip built around them.",
      },
    ],
  },
  {
    slug: "toughest-hikes-smoky-mountains",
    title: "The Smokies' Toughest Hikes (For When Easy Isn't the Point)",
    eyebrow: "Trail Guide",
    excerpt:
      "Our family hikes post is for an easy afternoon. These four are for the opposite end of the spectrum - real mileage, real elevation gain, and what to know before you start.",
    readTime: "6 min read",
    publishedAt: "2026-12-10",
    heroImage:
      "https://images.unsplash.com/photo-1781312993981-fbb6843bb21f?w=1600&q=80&auto=format&fit=crop",
    heroImageAlt: "A rocky ridge trail leading toward a distant mountain summit",
    ctaCabinSlug: "chasing-sunset-cabin",
    ctaHeadline: "Start before sunrise, chase the sunset home",
    ctaBody:
      "These are full-day hikes. Chasing Sunset Cabin's porch is exactly where you want to land after one, hot tub included.",
    body: [
      {
        kind: "p",
        lead: true,
        text: "Our family hikes post is for an easy afternoon with kids in tow. These four are for the opposite end of the spectrum - real distance, real elevation gain, and trails that reward hikers who come prepared rather than casual.",
      },
      {
        kind: "trailCards",
        items: [
          {
            name: "Mount LeConte via Alum Cave Trail",
            pills: ["~11 miles round trip", "~2,800 ft gain", "Strenuous"],
            text: "The classic route up one of the park's highest peaks, usually 5-7 hours round trip. Alum Cave Bluffs, about 4.4 miles round trip on its own, makes a solid shorter turnaround if you're not going all the way to the summit. Go the distance and you'll find LeConte Lodge near the top - a rustic, no-electricity lodge that books out roughly a year in advance.",
          },
          {
            name: "Charlies Bunion via the Appalachian Trail",
            pills: ["~8 miles round trip", "~1,640 ft gain", "Strenuous"],
            text: "Starting from Newfound Gap, this route follows the Appalachian Trail out to a rocky outcrop with sweeping views back toward the park. It's a serious day hike, but one of the more straightforward ways to say you've hiked a stretch of the AT.",
          },
          {
            name: "Ramsey Cascades",
            pills: ["~8 miles round trip", "~2,200 ft gain", "Strenuous"],
            text: "The trail to the tallest waterfall in the park - about 90-100 feet - and the steady climb makes it a genuine workout even before the final mile, which turns steep, rocky, and root-covered on the approach to the falls. Dogs and bikes aren't allowed on this one.",
          },
          {
            name: "Chimney Tops",
            pills: ["~4 miles round trip", "~1,400 ft gain", "Steep for its length"],
            text: "The shortest trail on this list but don't let that fool you - it's a steep climb packed into a short distance. Worth knowing before you go: the final pinnacle has been closed since the 2016 wildfire and remains closed today. The park built a new overlook short of the old summit, which is now the official end of the trail.",
          },
        ],
      },
      {
        kind: "p",
        label: "Before you go:",
        text: "Cell service is unreliable to nonexistent on all four of these trails, so download maps ahead of time and tell someone your plan. Start early - afternoon thunderstorms are common, especially in summer, and these are long enough days that an early start matters. And check the park's current trail conditions page before you commit: trails in this park do close for storm damage and rehab work from time to time, sometimes for months, so it's worth a quick check the week of your hike.",
      },
      {
        kind: "p",
        note: true,
        text: "Looking for something shorter with the family? Our family hikes near Sevierville post covers four easier trails, no technical climbing required.",
      },
    ],
  },
  {
    slug: "cosby-tn-quiet-smokies-entrance",
    title: "Cosby, TN: The Smokies' Other Quiet Entrance",
    eyebrow: "Day Trip Guide",
    excerpt:
      "No crowds, a genuinely good waterfall hike, and a drive most visitors never make. Here's what's worth the detour to Cosby.",
    readTime: "4 min read",
    publishedAt: "2026-12-03",
    heroImage:
      "https://images.unsplash.com/photo-1595206824341-35200e6ed939?w=1600&q=80&auto=format&fit=crop",
    heroImageAlt: "A quiet waterfall tumbling through a green forest",
    ctaCabinSlug: "take-me-to-the-river-cabin",
    ctaHeadline: "A creekside hike, then a creekside porch",
    ctaBody:
      "Take Me To The River Cabin is an easy drive from the Cosby side of the park - come back from Hen Wallow Falls to your own stretch of water.",
    body: [
      {
        kind: "p",
        lead: true,
        text: "Mention Cosby to most Gatlinburg visitors and you'll get a blank look. It sits on the park's northeastern edge, reached by its own quiet entrance off TN-32 rather than through downtown Gatlinburg - plan on an extra 20-30 minutes past Gatlinburg to get there, and you'll have one of the park's better waterfall hikes with a fraction of the crowds.",
      },
      {
        kind: "venueGroup",
        category: "What to do",
        items: [
          {
            name: "Hen Wallow Falls via Gabes Mountain Trail",
            pills: ["~4.4 miles round trip", "90-ft waterfall", "Fewer crowds"],
            text: "The main reason to make the drive: a roughly 4.4-mile round-trip hike from the Cosby Campground to a 90-foot waterfall, on a trail that sees a fraction of the traffic you'd find on the Gatlinburg side of the park.",
          },
          {
            name: "Cosby Campground & Picnic Area",
            pills: ["Trailhead", "Shaded picnic sites"],
            text: "The starting point for Gabes Mountain Trail and several other backcountry routes, with a shaded picnic area if you'd rather just bring lunch and sit by the creek than hike.",
          },
          {
            name: "The drive in on TN-32",
            pills: ["Scenic", "Quiet"],
            text: "No traffic lights, no outlet malls - just a winding mountain road in through farmland and forest. It's a different first impression of the Smokies than the Parkway strip, and part of why this side of the park feels so different.",
          },
        ],
      },
      {
        kind: "p",
        note: true,
        text: "Cosby and Townsend are the park's two low-key entrances - opposite sides of the Smokies, same quiet-trails, fewer-crowds appeal. If Cosby's hike leaves you wanting more of the same, our Townsend guide covers the other side.",
      },
    ],
  },
  {
    slug: "townsend-tn-quiet-side-of-the-smokies",
    title: "Townsend, TN: The Quiet Side of the Smokies",
    eyebrow: "Day Trip Guide",
    excerpt:
      "No traffic lights, no taffy shops - just Cades Cove, a five-star cave, and a river made for tubing. Here's why Townsend is worth the drive from your cabin.",
    readTime: "5 min read",
    publishedAt: "2026-11-26",
    heroImage:
      "https://images.unsplash.com/photo-1661288407022-a6a9e94d4da6?w=1600&q=80&auto=format&fit=crop",
    heroImageAlt: "A quiet country road along Cades Cove with Smoky Mountain views",
    ctaCabinSlug: "chasing-sunset-cabin",
    ctaHeadline: "A quieter home base for your Townsend day",
    ctaBody:
      "Chasing Sunset Cabin keeps you close enough for an easy drive to Townsend, with a quiet porch to come back to after.",
    body: [
      {
        kind: "p",
        lead: true,
        text: "Townsend sits on the quiet side of the park - no traffic lights, no mini-golf, no taffy machines in the window. If Pigeon Forge and Gatlinburg start to feel like a lot, it's about a 30-40 minute drive from Sevierville and worth the trip.",
      },
      {
        kind: "venueGroup",
        category: "What to do",
        items: [
          {
            name: "Cades Cove (via the Townsend entrance)",
            pills: ["11-mile loop", "Less traffic this way"],
            text: "The same 11-mile loop road everyone drives for wildlife and early-settler history, but entering from the Townsend side means less backed-up traffic before you even reach the loop. Closed to cars on Wednesday mornings in season for cyclists and walkers.",
          },
          {
            name: "Tuckaleechee Caverns",
            pills: ["AAA Five-Star", "3 miles from downtown"],
            text: "Tennessee's only AAA Five-Star cave attraction, about 3 miles from downtown Townsend. Guided tours walk through chandelier and totem-pole rock formations, well below the summer heat.",
          },
          {
            name: "Little River & the Townsend Wye",
            pills: ["Tubing", "Swimming"],
            text: "Where the Little River and Middle Prong meet - smooth rock shelves, cool water, and Townsend's classic summer tubing and swimming spot, just inside the park boundary.",
          },
        ],
      },
      {
        kind: "p",
        label: "Worth knowing before you go:",
        text: "Townsend has far fewer restaurants and shops than Pigeon Forge or Gatlinburg, so it's more of a day-trip stop than a full day - pair a morning at Tuckaleechee with an afternoon driving Cades Cove.",
      },
      {
        kind: "p",
        note: true,
        text: "If Townsend's pace is what you're after, Cosby - the park's other low-key entrance, on the opposite side near Gatlinburg - has the same kind of quiet trails and far fewer crowds.",
      },
    ],
  },
  {
    slug: "wears-valley-tn-things-to-do",
    title: "Wears Valley, TN: Ziplines, Horses, and the Valley Between Pigeon Forge and Townsend",
    eyebrow: "Local Area Guide",
    excerpt:
      "Open farmland, mountain views, and none of the Parkway traffic - here's what to do in the valley locals call one of the Smokies' best-kept secrets.",
    readTime: "5 min read",
    publishedAt: "2026-11-19",
    heroImage:
      "https://images.unsplash.com/photo-1780728955928-2d5542bdf0cb?w=1600&q=80&auto=format&fit=crop",
    heroImageAlt: "A farm valley between forested mountain ridges at sunset",
    ctaCabinSlug: "the-wth-cabin",
    ctaHeadline: "Close to the valley, close to everything else",
    ctaBody:
      "The WTH Cabin puts you minutes from Wears Valley Road, with Pigeon Forge and the park entrance both within easy reach.",
    body: [
      {
        kind: "p",
        lead: true,
        text: "Wears Valley sits between Pigeon Forge and Townsend, and it's often called one of the Smokies' best-kept secrets - open farmland, mountain views, and almost none of the Parkway traffic.",
      },
      {
        kind: "venueGroup",
        category: "What to do",
        items: [
          {
            name: "Wears Valley Zipline Adventures",
            pills: ["Long course", "Half-day"],
            text: "One of the longer zipline courses in the area, strung across the valley's hillsides - a solid half-day activity that doesn't require a park entrance.",
          },
          {
            name: "CLIMB Works Smoky Mountains",
            pills: ["Zipline", "Aerial bridges"],
            text: "Zipline and aerial-bridge courses through the treetops, with off-road sections for a different pace than a straight zip run.",
          },
          {
            name: "Horseback riding",
            pills: ["Harper Bros. Mountain", "Waldens Creek Stables"],
            text: "Harper Bros. Mountain and Waldens Creek Stables both run guided trail rides in the area - a few outfits even let you ride into the national park itself.",
          },
        ],
      },
      {
        kind: "p",
        note: true,
        text: "Wears Valley is mostly cabins and open land rather than restaurants and shops, so it's best paired with a day in Pigeon Forge or Townsend rather than visited on its own.",
      },
    ],
  },
  {
    slug: "things-to-do-pigeon-forge-gatlinburg",
    title: "The Best Things to Do in Pigeon Forge & Gatlinburg (Beyond the Cabin)",
    eyebrow: "Attractions Guide",
    excerpt:
      "From go-kart tracks and mountain coasters to Dollywood and the spots only locals bother with - here's how to fill the days between hikes.",
    readTime: "6 min read",
    publishedAt: "2026-11-12",
    heroImage:
      "https://images.unsplash.com/photo-1786352500091-8c03c5caf7f3?w=1600&q=80&auto=format&fit=crop",
    heroImageAlt: "A mountain coaster cart overlooking Smoky Mountain ridgelines",
    ctaCabinSlug: "take-me-to-the-river-cabin",
    ctaHeadline: "Home base for your Pigeon Forge days",
    ctaBody:
      "Take Me To The River Cabin keeps you close enough to The Island and Dollywood for an easy drive, with a quiet riverbank to come back to afterward.",
    body: [
      {
        kind: "p",
        lead: true,
        text: "Hiking and cabin time are the whole point of a Smokies trip, but everyone needs a rain day or a change of pace. Here's how we'd spend it, grouped by what you're actually after.",
      },
      {
        kind: "venueGroup",
        category: "Thrills for the kids",
        items: [
          {
            name: "The Track",
            pills: ["Wild Woody coaster", "Karts by age/height"],
            text: "Home to Wild Woody, a three-story wooden go-kart and coaster hybrid, plus several kart tracks sorted by age and height so younger kids aren't stuck in the parking lot.",
          },
          {
            name: "Adventure Raceway",
            pills: ["3-story spiral", "Bumper boats"],
            text: "An elevated wooden track with a three-story spiral, bumper boats, and karts that stay open into the evening.",
          },
          {
            name: "Mountain coasters",
            pills: ["Gravity-powered", "5+ in the area"],
            text: "Pigeon Forge and Gatlinburg are covered in them: the Smoky Mountain Alpine Coaster and Rocky Top Mountain Coaster in Pigeon Forge, Ripley's Mountain Coaster and Moonshine Mountain Coaster in Gatlinburg, and SkyLand Ranch's coaster and canopy walks in Sevierville. Each one is a slightly different ride down the hillside.",
          },
        ],
      },
      {
        kind: "venueGroup",
        category: "The big-name attractions",
        items: [
          {
            name: "Dollywood",
            pills: ["160 acres", "50+ rides & shows"],
            text: "160 acres of rides, shows, and the Wildwood Grove family area, plus the separate Splash Country water park next door - worth a full day on its own.",
          },
          {
            name: "Anakeesta",
            pills: ["Mountaintop gondola", "6 attractions, 1 ticket"],
            text: "A gondola ride up a Gatlinburg mountainside to six attractions under one ticket, including the Treetop Skywalk and AnaVista Tower.",
          },
          {
            name: "The Island in Pigeon Forge",
            pills: ["Free to walk", "200ft Ferris wheel"],
            text: "Free to walk around - 40-plus shops, bumper cars, an arcade, the Alcatraz East Crime Museum, and the 200-foot Great Smoky Mountain Wheel lit up after dark.",
          },
        ],
      },
      {
        kind: "venueGroup",
        category: "Only the locals bother with",
        items: [
          {
            name: "Greenbrier",
            pills: ["Quiet park entrance", "Swimming holes"],
            text: "A quieter entrance to the national park about 6 miles from Gatlinburg, with swimming holes and trailheads (Porters Creek, Ramsey Cascades) that stay far less crowded than Cades Cove.",
          },
          {
            name: "Wears Valley",
            pills: ["Low-key", "No Parkway traffic"],
            text: "The low-key valley between Pigeon Forge and Townsend - open farmland and mountain views without the Parkway traffic.",
          },
          {
            name: "Metcalf Bottoms & Tremont",
            pills: ["Picnic & wading"],
            text: "Peaceful, easy-to-reach picnic and wading spots inside the park that most first-time visitors drive right past.",
          },
        ],
      },
      {
        kind: "p",
        note: true,
        text: "Dollywood and Anakeesta both require tickets and shift their hours seasonally, so it's worth checking each park's own site before you build a day around one.",
      },
    ],
  },
  {
    slug: "where-to-eat-in-gatlinburg",
    title: "Where to Eat in Gatlinburg - A Local's Restaurant Guide",
    eyebrow: "Restaurant Guide",
    excerpt:
      "Pancakes, pit barbecue, tableside steaks, and trout dinners - here's where we actually send guests when they ask where to eat on the Parkway.",
    readTime: "6 min read",
    publishedAt: "2026-11-05",
    heroImage:
      "https://images.unsplash.com/photo-1755207143391-2b51278bbfe0?w=1600&q=80&auto=format&fit=crop",
    heroImageAlt: "The Gatlinburg Parkway lined with shops and restaurants on a sunny day",
    ctaCabinSlug: "chasing-sunset-cabin",
    ctaHeadline: "A short drive from every spot on this list",
    ctaBody:
      "Chasing Sunset Cabin keeps you minutes from the Parkway, so you can actually relax between dinners.",
    body: [
      {
        kind: "p",
        lead: true,
        text: "The Parkway has one of the highest concentrations of restaurants per block of anywhere in the Smokies - which is great until you're standing on the sidewalk trying to pick one. Here's where we actually send guests, organized by what you're in the mood for.",
      },
      {
        kind: "venueGroup",
        category: "Pancake houses",
        items: [
          {
            name: "Pancake Pantry",
            pills: ["Est. 1960", "Cash only", "Expect a line"],
            text: "Tennessee's original pancake house, and the one that started the Parkway's whole pancake-house reputation. Weekend mornings mean a line out the door - they don't take cards, so bring cash.",
          },
          {
            name: "Log Cabin Pancake House",
            pills: ["Shorter wait"],
            text: "A reliable second option a short walk away, known for classics like French toast and chocolate-chip pancakes, usually without the same wait as the Pantry.",
          },
        ],
      },
      {
        kind: "venueGroup",
        category: "Pit barbecue",
        items: [
          {
            name: "Bennett's Pit Bar-B-Que",
            pills: ["Kid-friendly", "Arcade on-site"],
            text: "Slow-smoked meats with a full arcade and play area attached, which makes it an easy pick with kids in tow.",
          },
          {
            name: "Calhoun's",
            pills: ["Riverside patio", "Groups"],
            text: "Award-winning baby back ribs and a patio on the river - a good call for a bigger group that can't agree on one thing.",
          },
        ],
      },
      {
        kind: "venueGroup",
        category: "Steak & trout",
        items: [
          {
            name: "The Peddler Steakhouse",
            pills: ["Est. 1976", "Tableside cart", "Salad bar"],
            text: "The Parkway's best-known steakhouse. A peddler wheels a cart tableside so you pick your own cut, and the salad bar is as much a draw as the steak. The building itself dates to 1958.",
          },
          {
            name: "Smoky Mountain Trout House",
            pills: ["Open 3-9pm", "45+ years"],
            text: "Rainbow trout and seafood, served for more than 45 years. Opens at 3pm, which makes it a solid choice for a later dinner after a full day in the park.",
          },
        ],
      },
      {
        kind: "p",
        note: true,
        text: "Hours and open days shift with the season, especially at the smaller, family-run spots - worth a quick call before you walk down.",
      },
      {
        kind: "p",
        label: "One more stop for the sweet tooth:",
        text: "Ole Smoky Candy Kitchen has been pulling salt water taffy on the Parkway since 1950 - you can watch it happen through the window before you buy a bag.",
      },
    ],
  },
  {
    slug: "when-to-see-fall-foliage-smoky-mountains",
    title: "When to See Fall Foliage in the Smoky Mountains - A Local Timing Guide",
    eyebrow: "Local Timing Guide",
    excerpt:
      "The honest answer to \"what's the best weekend for color\" depends on how high up you go. Here's how it rolls downhill over six weeks - and which weekend to book.",
    readTime: "4 min read",
    publishedAt: "2026-10-29",
    heroImage:
      "https://images.unsplash.com/photo-1793129074330-68112ecc73ab?w=1600&q=80&auto=format&fit=crop",
    heroImageAlt: "Autumn trees in red and gold overlooking the Smoky Mountains",
    ctaCabinSlug: "take-me-to-the-river-cabin",
    ctaHeadline: "See peak color from the riverbank",
    ctaBody:
      "Take Me To The River Cabin sits right where the valley color peaks last - book late October into early November and watch it from your own bank.",
    body: [
      {
        kind: "p",
        lead: true,
        text: "\"When's the best weekend for fall colors?\" is the question we get more than any other, and the honest answer is: it depends on how high up you go.",
      },
      {
        kind: "p",
        text: "The Smokies have one of the longest, most drawn-out color seasons in the country, precisely because the park's elevation ranges from about 875 feet to 6,643 feet at Clingmans Dome. Color doesn't arrive all at once - it rolls downhill over roughly six weeks.",
      },
      {
        kind: "timeline",
        items: [
          {
            label: "Mid-to-late September",
            title: "High country",
            text: "Up on Clingmans Dome, Newfound Gap Road, and the balds along the Appalachian Trail, yellows and reds in the mountain ash and birch start well before anyone down in the valley notices a change.",
          },
          {
            label: "Early-to-mid October",
            title: "Mid-elevation",
            text: "Color kicks in along Roaring Fork Motor Nature Trail, Cades Cove, and the drive up to Newfound Gap. This is usually when the park gets its heaviest crowds of the year, because the colors are dramatic and the weather is still mild.",
          },
          {
            label: "Late October-early November",
            title: "Valley & riverbanks - our turn",
            text: "The lower elevations - Sevierville, Pigeon Forge, Gatlinburg, and the river valleys where our cabins sit - hit peak color last. Oaks and hickories tend to hold on longest, running through deep reds, oranges, and bronze rather than the brighter yellows you see higher up.",
          },
        ],
      },
      {
        kind: "p",
        label: "So which weekend should you book?",
        text: "If you want the dramatic high-elevation reds and don't mind company, aim for the second or third weekend of October. If you'd rather have a quieter trip with fewer crowds and still catch excellent color right outside your door, late October into the first week of November is often the better call - and it's when our own cabins' hillsides and riverbanks look their best.",
      },
      {
        kind: "p",
        note: true,
        text: "Color timing shifts year to year with rainfall and temperature, so for exact conditions close to your trip, the park's fall foliage prediction map and ranger reports are the most reliable source - we're happy to point guests to it once dates are closer.",
      },
    ],
  },
  {
    slug: "smoky-mountains-parking-tag-guide",
    title: "The Smoky Mountains Parking Tag - What Every Guest Needs to Know Before They Go",
    eyebrow: "Visitor Guide",
    excerpt:
      "The park itself is free to enter - your car isn't. Here's what the parking tag costs, where to get one, and the questions we hear every season.",
    readTime: "4 min read",
    publishedAt: "2026-10-22",
    heroImage:
      "https://images.unsplash.com/photo-1776617900964-f32497a6988a?w=1600&q=80&auto=format&fit=crop",
    heroImageAlt: "Great Smoky Mountains National Park entrance sign surrounded by forest",
    ctaCabinSlug: "the-wth-cabin",
    ctaHeadline: "Plan your park days from right outside Sevierville",
    ctaBody:
      "The WTH Cabin puts you minutes from the park entrance, so tag in hand, you're on the trail before the lots fill up.",
    body: [
      {
        kind: "p",
        lead: true,
        text: "If you're planning a trip to Great Smoky Mountains National Park, here's something that trips up a lot of first-time visitors: the park itself is free to enter, but your car isn't.",
      },
      {
        kind: "p",
        text: "Since 2023, every vehicle parked in the park for more than 15 minutes needs a parking tag displayed on the dashboard. It's not an entrance fee - the Smokies are one of the only national parks with no gate and no admission charge - but it does fund the trail maintenance, restrooms, and ranger staff that a park visited by over 12 million people a year actually needs.",
      },
      {
        kind: "pricingTiles",
        items: [
          { price: "$5", label: "Per day" },
          { price: "$15", label: "Per week", emphasized: true },
          { price: "$40", label: "Per year" },
        ],
      },
      {
        kind: "p",
        text: "If you're staying with us for a long weekend, the weekly tag is almost always the better deal than buying daily ones. And if you visit the Smokies more than two or three times a year, the annual tag pays for itself fast.",
      },
      {
        kind: "p",
        label: "Where to get one.",
        text: "Tags are sold at visitor centers (Sugarlands, Cades Cove, Oconaluftee), at vending machines in most of the larger parking areas, and online in advance through the Great Smoky Mountains Association so you can skip the line and just display it when you arrive.",
      },
      {
        kind: "qa",
        items: [
          {
            q: "Does my America the Beautiful annual parks pass cover this?",
            a: "No - that pass covers entrance fees at parks that charge them. The Smokies don't charge an entrance fee, so the parking tag is a separate, park-specific program.",
          },
          {
            q: "Do I need one for a quick photo stop?",
            a: "Under 15 minutes, no. Planning to hike, picnic, or linger at an overlook? Yes.",
          },
          {
            q: "Does it apply on the free entrance days the Park Service announces each year?",
            a: "The parking tag requirement still applies - those days waive fees elsewhere, not this program.",
          },
        ],
      },
      {
        kind: "p",
        note: true,
        text: "One more local tip: buy your tag the moment you know your travel dates, especially during leaf season in October and November when the main lots fill early and a lot of your morning can disappear just finding parking. A tag in hand means one less thing to think about once you're here.",
      },
    ],
  },
  {
    slug: "locals-weekend-pigeon-forge-gatlinburg",
    title: "A Local's Weekend in Pigeon Forge & Gatlinburg - Where to Eat, Hike, and Unwind",
    eyebrow: "Local's Itinerary",
    excerpt:
      "Skip the rookie itinerary. Here's the weekend we'd actually recommend if you want to feel like a local by Sunday.",
    readTime: "5 min read",
    publishedAt: "2026-10-15",
    heroImage:
      "https://images.unsplash.com/photo-1574779580338-4a0d958fdff1?w=1600&q=80&auto=format&fit=crop",
    heroImageAlt: "Visitors crossing the Gatlinburg SkyBridge above the town",
    ctaCabinSlug: "chasing-sunset-cabin",
    ctaHeadline: "A home base right between it all",
    ctaBody:
      "Chasing Sunset Cabin keeps you minutes from the Parkway and the Old Mill, so you can actually relax between stops.",
    body: [
      {
        kind: "p",
        lead: true,
        text: "Most first-time visitors plan their trip around the big attractions - Dollywood, the Island, the Gatlinburg strip - and that's a great start. But after years of sending guests out the door each morning, here's the weekend we'd actually recommend if you want to feel like a local by Sunday.",
      },
      {
        kind: "timeline",
        items: [
          {
            label: "Friday evening",
            title: "Ease in",
            text: "Skip the drive into the busiest part of the Parkway on your first night. Grab dinner closer to where you're staying, unpack, and get an early look at the mountains from your deck or hot tub before the trip gets busy. The whole point of a cabin over a hotel room is having a quiet place to land - use it.",
          },
          {
            label: "Saturday morning",
            title: "Into the park before 9am",
            text: "Cades Cove and the main overlooks get genuinely crowded by mid-morning, especially on weekends and during leaf season. An early start gets you wildlife sightings (elk and deer are most active at dawn and dusk), easier parking, and cooler hiking temperatures.",
          },
          {
            label: "Saturday afternoon",
            title: "Downtown Gatlinburg on foot",
            text: "Park once and walk the Parkway - candy shops, the aquarium if you've got kids, and the SkyBridge and SkyLift for a view over the whole valley. If you'd rather skip the crowds entirely, the Gatlinburg Arts & Crafts Community loop just outside downtown is a quieter, prettier drive with working artist studios.",
          },
          {
            label: "Saturday night",
            title: "The Old Mill area",
            text: "This is where we send almost every guest who asks for a dinner recommendation. It's a genuinely historic working gristmill with a cluster of restaurants around it - go for the comfort-food classics and leave room for something sweet from the pottery house next door.",
          },
          {
            label: "Sunday",
            title: "Slow morning, one more hike",
            text: "Before you check out, a short trail is a better send-off than one more shopping stretch on the Parkway. Pack a coffee, take the morning slow, and you'll leave wanting to come back - which, honestly, is most of our guests.",
            relatedSlug: "family-hikes-near-sevierville",
          },
        ],
      },
    ],
  },
  {
    slug: "family-hikes-near-sevierville",
    title: "Easy-to-Moderate Family Hikes Near Sevierville",
    eyebrow: "Family Hikes",
    excerpt:
      "No technical climbing, no experienced-hiker required - just four trails short enough for kids, all within about 30-45 minutes of Sevierville.",
    readTime: "5 min read",
    publishedAt: "2026-10-08",
    heroImage:
      "https://images.unsplash.com/photo-1758812775423-02d680b70bf7?w=1600&q=80&auto=format&fit=crop",
    heroImageAlt: "Hikers walking beside a small waterfall on a forest trail",
    ctaCabinSlug: "the-wth-cabin",
    ctaHeadline: "Close enough for a pre-nap hike",
    ctaBody:
      "The WTH Cabin's location near Sevierville makes any of these an easy half-day - back in time for the hot tub.",
    body: [
      {
        kind: "p",
        lead: true,
        text: "You don't need to be an experienced hiker to see some of the best scenery in the Smokies. These are the trails we point families toward most often - short enough for kids, no technical climbing, and all within about a 30-45 minute drive of Sevierville.",
      },
      {
        kind: "trailCards",
        items: [
          {
            name: "Metcalf Bottoms Trail to Little Greenbrier School",
            pills: ["~1.2 miles round trip", "Flat", "Historic schoolhouse"],
            text: "An easy, mostly flat walk from the Metcalf Bottoms picnic area to a one-room schoolhouse built in 1882, still standing in a clearing in the woods. A good pick for an easy half-day with young kids, with a picnic area at the trailhead if you want to make lunch part of the trip.",
          },
          {
            name: "Cataract Falls",
            pills: ["Shortest in the park", "Flat", "Good with toddlers"],
            text: "One of the shortest trails in the park, starting right near Sugarlands Visitor Center. It's a short, mostly flat walk through forest to a small waterfall - a good option if you've got very young kids or you're easing into the trip on your first day.",
          },
          {
            name: "Grotto Falls",
            pills: ["Moderate", "Walk-behind waterfall"],
            text: "A step up in distance but still very manageable, and worth it for one reason: this is the only waterfall in the park you can walk behind. It sits along the Roaring Fork Motor Nature Trail, a scenic one-way loop that's an attraction in its own right even if you don't get out of the car.",
          },
          {
            name: "Cades Cove Loop",
            pills: ["Bike-friendly", "Car-free Wed mornings", "Wildlife"],
            text: "Not a traditional hike, but the 11-mile loop road is closed to vehicles on Wednesday mornings in season, making it one of the best car-free ways to see wildlife and historic cabins at a family pace. Bikes are available to rent at the entrance if you don't want to bring your own.",
          },
        ],
      },
      {
        kind: "p",
        label: "A few things worth knowing before you go:",
        text: "cell service is unreliable to nonexistent inside the park, so download any trail maps ahead of time. Afternoon thunderstorms are common in summer, so mornings are almost always the better call. And bring more water than you think you'll need - even an easy trail feels longer in Tennessee humidity.",
      },
      {
        kind: "p",
        note: true,
        text: "You'll notice Laurel Falls Trail - usually the first easy hike anyone recommends - isn't on this list. It's been closed for rehabilitation work, so we swapped in Metcalf Bottoms above instead. Check the park's current trail conditions page before your trip in case that's changed by the time you visit.",
      },
      {
        kind: "p",
        note: true,
        text: "If you want a printable list with distances and difficulty ratings for all of these, let us know - happy to put one together for guests before check-in.",
      },
    ],
  },
  {
    slug: "what-to-look-for-in-a-smoky-mountain-cabin",
    title: "What to Actually Look for in a Smoky Mountain Cabin",
    eyebrow: "Booking Guide",
    excerpt:
      "Thousands of cabins, and most listing photos blur together. Here's what we'd tell a friend to actually check before booking.",
    readTime: "5 min read",
    publishedAt: "2026-10-01",
    heroImage:
      "https://images.unsplash.com/photo-1754962847548-06ec7fc48de8?w=1600&q=80&auto=format&fit=crop",
    heroImageAlt: "Log cabin porch overlooking a Smoky Mountain ridge",
    ctaGrid: true,
    ctaHeadline: "See what we built around this list",
    ctaBody:
      "Private hot tubs, real fire pits, and genuine river access on one of them - browse all three.",
    body: [
      {
        kind: "p",
        lead: true,
        text: "There are thousands of cabins listed across Sevierville, Pigeon Forge, and Gatlinburg, and from the outside most listing photos start to blur together - a hot tub on a deck, a mountain view, a fire pit. Here's what we'd tell a friend to actually check before booking.",
      },
      {
        kind: "checklist",
        items: [
          {
            title: "Hot tub location, not just existence.",
            text: "Almost every cabin has one. What matters is whether it's private or visible to neighboring cabins and the road, and whether it's covered - an uncovered tub in a rainstorm, or with pollen season in full swing, is a different experience than you'd expect from the photo.",
          },
          {
            title: "Fire pit vs. fireplace vs. both.",
            text: "A real wood-burning fire pit outdoors is a different experience than an electric indoor fireplace, and listings aren't always clear which you're getting. If an evening fire is part of why you're coming, confirm it's wood-burning (and that firewood is provided or easy to buy nearby) rather than assuming.",
          },
          {
            title: "Actual water access, not just a water view.",
            text: "\"River view\" and \"river access\" get used almost interchangeably in listings, but they're very different things. A cabin with direct, walkable access to a riverbank - where kids can wade or you can sit with your feet in the water - is a specific feature worth asking about directly, not assuming from a photo.",
          },
          {
            title: "Who actually answers if something goes wrong.",
            text: "This is the one that doesn't show up in photos at all. A lot of listings are managed by companies with call centers hours away from the property. Ask directly: if the hot tub heater fails at 9pm, who's coming, and how fast? A locally managed cabin usually means a real answer to that question, not a ticket number.",
          },
          {
            title: "Minimum stay and cancellation terms, read before you fall in love with the photos.",
            text: "These vary a lot cabin to cabin and season to season, and they're far easier to check before you're emotionally attached to a listing than after.",
          },
        ],
      },
      {
        kind: "p",
        note: true,
        text: "We built our own three cabins around these exact things - private hot tubs, real fire pits, genuine river access on one of them, and a local team that actually answers the phone - because these were the details we cared about ourselves before we ever hosted a single guest.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  return getSortedBlogPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, limit);
}

export function getRelatedPostsForProperty(propertySlug: string, limit = 3): BlogPost[] {
  return getSortedBlogPosts()
    .filter((p) => p.ctaCabinSlug === propertySlug || p.ctaGrid)
    .slice(0, limit);
}
