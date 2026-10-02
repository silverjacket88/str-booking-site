export type Part = { text: string; italic?: boolean };
export type QAPair = { q: Part[]; a: string };

function p(text: string): Part[] {
  return [{ text }];
}

// Keyed 0 = Sunday ... 6 = Saturday (matches getEasternWeekday).
export const weekdayConversations: Record<number, QAPair[]> = {
  // Monday — Monday blues, dreaming of escape
  1: [
    { q: p("Monday again?"), a: "Perfect day to start planning your escape." },
    { q: p("Back to the grind?"), a: "The mountains don't have a grind. Just a view." },
    { q: p("Need something to look forward to?"), a: "A cabin with your name on it works." },
    { q: p("Counting down the days already?"), a: "No judgment here. We do too." },
    { q: p("Monday meetings got you down?"), a: "Somewhere, a hot tub is heating up just for you." },
    { q: p("Wishing you were anywhere else?"), a: "The Smokies are a good anywhere." },
    { q: [{ text: "Daydreaming" }, { text: " at your desk?" }], a: "Mountain views do that to people." },
    { q: p("Is it Friday yet?"), a: "Not yet. But a getaway helps the wait." },
    { q: p("What's on your mind today?"), a: "Probably a porch, a view, and zero alarms." },
    { q: p("Need a reason to smile today?"), a: "You just found one. Let's plan your escape." },
  ],
  // Tuesday — midweek wanderlust
  2: [
    { q: p("Still think it's Monday?"), a: "Close. Just one more day to go." },
    { q: p("Feeling the midweek slump?"), a: "A mountain view cures that." },
    { q: p("Daydreaming about somewhere else?"), a: "The Smokies are a great somewhere." },
    { q: p("What would make today better?"), a: "Booking your next getaway, probably." },
    { q: p("Craving a change of scenery?"), a: "We've got a few. Mountain, river, or both." },
    { q: [{ text: "Taco" }, { text: " Tuesday or " }, { text: "cabin", italic: true }, { text: " Tuesday?" }], a: "Why not both? Bring tacos to the cabin." },
    { q: p("Need a mental vacation?"), a: "Start with a real one. We'll wait." },
    { q: p("Stuck in a routine?"), a: "A hot tub under the stars breaks that fast." },
    { q: p("Wishing today was a weekend?"), a: "Every day feels like one here." },
    { q: p("What's your happy place?"), a: "Ours has a porch and a mountain view." },
  ],
  // Wednesday — hump day, but scenic
  3: [
    { q: p("Halfway through the week?"), a: "Halfway to the weekend. Start looking at cabins." },
    { q: p("Is it hump day already?"), a: "Yep. Downhill to Friday from here." },
    { q: p("Need a midweek pick-me-up?"), a: "A view like ours works better than coffee." },
    { q: p("Made it to Wednesday?"), a: "Reward yourself. Book the getaway." },
    { q: p("Running on fumes this week?"), a: "A hot tub and mountain air will fix that." },
    { q: p("Wednesday dragging?"), a: "Not as much as it would without a trip to look forward to." },
    { q: p("What gets you through hump day?"), a: "Knowing the weekend — and the Smokies — are close." },
    { q: p("Ready for a change of scenery yet?"), a: "We've got cabins to spare." },
    { q: p("Is the week almost over?"), a: "Almost. Start planning the reward." },
    { q: p("What's the move this weekend?"), a: "Might we suggest a cabin in the Smokies?" },
  ],
  // Thursday — close to the weekend
  4: [
    { q: p("It's Thursday — what are you doing this weekend?"), a: "If it's not the Smokies, we'd love to change your mind." },
    { q: p("Almost there — feel it?"), a: "The weekend's close. So is your next getaway." },
    { q: p("One more day to go?"), a: "One more day until mountain views. Worth it." },
    { q: p("Thursday thoughts?"), a: "Mostly about hot tubs and fire pits, if we're honest." },
    { q: p("Weekend plans coming together?"), a: "They could include a cabin. Just saying." },
    { q: p("Can you feel Friday coming?"), a: "We can. Pack light, we'll handle the rest." },
    { q: p("Thursday — the quiet before the weekend?"), a: "Or the start of booking your escape." },
    { q: p("What would make this weekend great?"), a: "A porch, a view, and zero notifications." },
    { q: p("Still deciding on weekend plans?"), a: "Decide fast. Good cabins go quick." },
    { q: p("Is it the weekend yet?"), a: "Almost. Get ahead of it — book today." },
  ],
  // Friday — happy Friday, weekend launch
  5: [
    { q: p("Happy Friday — what's the plan?"), a: "Disappearing to the Smokies. Booking a cabin up there. See you guys." },
    { q: p("Made it to Friday!"), a: "Just in time to book a cabin for the weekend." },
    { q: p("Big plans tonight?"), a: "Packing. We're heading for the mountains." },
    { q: p("Friday feeling good?"), a: "Even better with a cabin booked." },
    { q: p("What's everyone doing this weekend?"), a: "We heard the Smokies are calling." },
    { q: p("Clocking out early today?"), a: "Should've. The mountains are waiting." },
    { q: p("Friday vibes?"), a: "Hot tub, fire pit, zero plans. That kind of vibe." },
    { q: p("Who's ready for the weekend?"), a: "Us. We're already halfway to the cabin." },
    { q: p("Got weekend plans yet?"), a: "We do. A porch with a view. See you Monday." },
    { q: p("Last thing before the weekend?"), a: "Booking the cabin. Don't forget that part." },
  ],
  // Saturday — out and gone
  6: [
    { q: p("It's Saturday — where'd everyone go?"), a: "The Smokies, probably. See you guys, we're leaving too." },
    { q: p("Big Saturday plans?"), a: "Porch, coffee, mountain view. Already living it." },
    { q: p("Who's out of town this weekend?"), a: "We are. Saturday in the Smokies, no regrets." },
    { q: p("Saturday morning thoughts?"), a: "Mostly just this view. Worth the drive." },
    { q: p("Where's the best place to be on a Saturday?"), a: "A cabin deck, hands down." },
    { q: p("Anyone still in town this weekend?"), a: "Not us. Catch you Monday — we're in the mountains." },
    { q: p("What's a perfect Saturday look like?"), a: "This. Exactly this view." },
    { q: p("Saturday plans better than ours?"), a: "Doubtful. We're by the fire pit already." },
    { q: p("Taking the weekend off?"), a: "Fully. Smokies, hot tub, silence." },
    { q: p("Living your best Saturday?"), a: "Absolutely. Ask us again from the hot tub." },
  ],
  // Sunday — weekend recap, reluctant to leave
  0: [
    { q: p("Happy Sunday — how was your weekend?"), a: "Great, thanks. Been holed up in a mountain cabin enjoying this view." },
    { q: p("Sunday scaries setting in?"), a: "Not here. Just one more coffee on this porch." },
    { q: p("How do you spend a Sunday right?"), a: "Slowly. Preferably with a mountain view." },
    { q: p("Weekend treating you well?"), a: "Extremely. Haven't left the hot tub much." },
    { q: p("Dreading Monday already?"), a: "A little less after a weekend like this." },
    { q: p("Best part of your weekend?"), a: "Honestly, just this view. Hard to top." },
    { q: p("Sunday reset or Sunday scramble?"), a: "Reset. Mountain air has a way of doing that." },
    { q: p("Ready to head back to reality?"), a: "Not really. One more night by the fire pit, please." },
    { q: p("How was the escape?"), a: "Perfect. Already planning the next one." },
    { q: p("Last thoughts before the week starts?"), a: "This view. We'll be back soon." },
  ],
};

export const holidayConversations: Record<string, QAPair[]> = {
  thanksgiving: [
    { q: p("Thanksgiving coming up — hosting this year?"), a: "Or escaping it entirely. A cabin works for both." },
    { q: p("Need a break before the holiday chaos?"), a: "Book it now, thank yourself later." },
    { q: p("Turkey day plans set yet?"), a: "Ours involve a mountain view instead of dish duty." },
  ],
  christmas: [
    { q: p("Dreaming of a cabin Christmas?"), a: "Fire pit, hot tub, mountain views. We can make that happen." },
    { q: p("Need to escape the holiday madness?"), a: "The Smokies are quiet enough to actually hear yourself think." },
    { q: p("What's on your Christmas list?"), a: "A cabin booking would do nicely." },
  ],
  easter: [
    { q: p("Easter plans with the family?"), a: "A cabin in the Smokies fits the whole crew." },
    { q: p("Spring in the mountains sound nice?"), a: "It does. Fire pits and dogwoods — a great combo." },
    { q: p("Egg hunt indoors or out this year?"), a: "Our decks have plenty of hiding spots." },
  ],
  springbreak: [
    { q: p("Spring break plans locked in?"), a: "If not, the Smokies still have room." },
    { q: p("Beach or mountains this spring break?"), a: "Mountains. Hot tubs beat sunburn." },
    { q: p("Kids off school soon?"), a: "Good thing there's a game room waiting." },
  ],
  summer: [
    { q: p("Summer plans coming together?"), a: "They should include a river cabin." },
    { q: p("Hot enough for you yet?"), a: "The river right outside your cabin says no." },
    { q: p("Ready for a summer escape?"), a: "The Smokies stay cool. Book before they fill up." },
  ],
};
