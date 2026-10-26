export type ServiceFaq = { question: string; answer: string };
export type ServiceBenefit = { title: string; description: string };
export type Service = {
  slug: string;
  name: string;
  summary: string;
  image: string;
  imageAlt: string;
  paragraphs: [string, string];
  signs: string[];
  process: [{ title: string; description: string }, { title: string; description: string }, { title: string; description: string }];
  benefits: [ServiceBenefit, ServiceBenefit, ServiceBenefit];
  faqs: [ServiceFaq, ServiceFaq, ServiceFaq];
  related: string[];
  metaFocus: string;
};

export const SERVICES: Service[] = [
  {
    slug: "emergency-drain-cleaning",
    name: "Emergency Drain Cleaning",
    summary: "Clear a sudden drain backup and get water moving again before it spreads into the room.",
    image: "/assets/images/drain-cleaning.png",
    imageAlt: "Emergency drain cleaning in Chadron, Nebraska",
    paragraphs: [
      "A backed-up sink, tub, floor drain, or main line can quickly disrupt a home or business. We start by identifying which fixtures are affected and whether the blockage appears to be local or farther down the drain system.",
      "After the line is assessed, the clearing method is matched to the material and condition of the pipe. We avoid relying on harsh chemical cleaners that can damage plumbing and explain when a camera inspection or additional repair may be warranted.",
    ],
    signs: ["Water rises in a sink, tub, or floor drain instead of clearing.", "More than one fixture backs up at the same time.", "A drain gives off persistent sewer odors or gurgles after use.", "A blockage returns soon after a temporary clearing."],
    process: [
      { title: "Locate the backup", description: "We ask which fixtures are involved, check accessible drains, and identify immediate overflow risks." },
      { title: "Choose a safe clearing method", description: "The blockage location and visible pipe condition guide the equipment and next steps." },
      { title: "Clear and confirm flow", description: "We test the affected fixtures and explain any repeat-backup signs that deserve follow-up." },
    ],
    benefits: [
      { title: "Faster disruption control", description: "Prompt attention can limit water exposure and help restore use of the affected room." },
      { title: "Cause-focused service", description: "We distinguish a single-fixture clog from a shared or main-line issue before choosing a fix." },
      { title: "Practical next steps", description: "If the line needs more than clearing, you get an explanation of the inspection or repair options." },
    ],
    faqs: [
      { question: "Should I use a chemical drain opener before calling?", answer: "It is safer to avoid chemical openers, especially when a drain is fully blocked or several fixtures are affected. The liquid can remain in the line and create a hazard during service." },
      { question: "How do I know whether the blockage is in the main drain?", answer: "Several fixtures backing up together, especially on a lower level, can point to a shared line. A plumber can check the symptoms and determine whether camera inspection is useful." },
      { question: "Is emergency drain service available after hours?", answer: "Yes. Emergency service is available 24/7. Call (402) 882-9595 and describe the backup, affected fixtures, and any active overflow." },
    ],
    related: ["sewer-line-camera-inspection", "high-pressure-hydro-jetting", "main-line-leak-detection"],
    metaFocus: "Get help with sudden backups, slow drains, and recurring clogs",
  },
  {
    slug: "water-heater-repair",
    name: "Water Heater Repair",
    summary: "Diagnose hot-water problems and restore reliable performance with a repair suited to the unit.",
    image: "/assets/images/water-heater.png",
    imageAlt: "Water heater repair in Chadron, Nebraska",
    paragraphs: [
      "A water heater that runs cold, takes too long to recover, or makes new noises may need a repair, maintenance, or replacement assessment. We check the unit’s visible connections and operating symptoms before recommending a path.",
      "Mineral deposits can affect heating equipment in northwest Nebraska, but similar symptoms may come from a failed component, thermostat, burner, or electrical issue. A proper diagnosis helps avoid replacing parts that are still working and identifies safety concerns early.",
    ],
    signs: ["Hot water runs out sooner than it used to.", "The tank makes popping, rumbling, or hissing sounds.", "Water around the base or connections appears damp.", "Hot water is discolored, inconsistent, or has an unusual odor."],
    process: [
      { title: "Review the symptoms", description: "We note the heater type, age if known, fuel source, and when the hot-water issue began." },
      { title: "Inspect the equipment", description: "Accessible controls, connections, venting, and signs of leakage or mineral buildup are checked." },
      { title: "Repair or plan replacement", description: "You receive the available repair options and any maintenance steps that fit the unit’s condition." },
    ],
    benefits: [
      { title: "Reliable diagnosis", description: "We look at system symptoms and the heater itself rather than guessing from one sign." },
      { title: "Safety-first inspection", description: "Visible venting, fuel, electrical, and leak concerns are considered as part of the visit." },
      { title: "Clear equipment choices", description: "If repair is not the best value, we explain replacement considerations without pressure." },
    ],
    faqs: [
      { question: "Can hard water damage a water heater?", answer: "Mineral scale can collect in a tank or on heating components and may contribute to noise or reduced efficiency. A water test and equipment inspection help determine whether scale is involved." },
      { question: "Should I turn off a leaking water heater?", answer: "If it is safe, use the nearby water shutoff and follow the manufacturer’s instructions for the fuel or electrical supply. Keep clear of hot water and call for help if the leak is active." },
      { question: "When is replacement preferable to repair?", answer: "Age, tank condition, repair history, parts availability, and the cost of the current fault all matter. An inspection helps compare the options for your specific heater." },
    ],
    related: ["tankless-water-heater-install", "main-line-leak-detection", "whole-home-repiping"],
    metaFocus: "Restore hot water for everyday use",
  },
  {
    slug: "tankless-water-heater-install",
    name: "Tankless Water Heater Installation",
    summary: "Plan an on-demand water-heating upgrade around the household’s flow, fuel, and venting needs.",
    image: "/assets/images/tankless-water-heater.png",
    imageAlt: "Tankless water heater installation in Chadron, Nebraska",
    paragraphs: [
      "A tankless heater can provide hot water on demand, but the right unit depends on simultaneous fixture use, incoming water temperature, fuel capacity, electrical requirements, and venting. We review those conditions before installation is planned.",
      "Water quality also matters. Mineral content can affect maintenance intervals, so we discuss filtration or descaling access when appropriate. The goal is a correctly sized system with service clearances and connections that suit the home.",
    ],
    signs: ["Your existing heater is near the end of its useful service life.", "The household wants to compare a compact on-demand system with a storage tank.", "Hot-water use patterns have changed after a remodel or household change.", "You are planning an upgrade and need to check gas, electrical, or venting capacity."],
    process: [
      { title: "Assess household demand", description: "We review fixture count, peak use, incoming water conditions, and the current heater setup." },
      { title: "Confirm installation needs", description: "Fuel or electrical capacity, vent route, condensate handling, and service access are considered." },
      { title: "Install and test", description: "The new system is connected, checked for proper operation, and reviewed with you for routine care." },
    ],
    benefits: [
      { title: "Right-sized equipment", description: "A load review helps avoid selecting a unit that cannot keep up with the home’s peak demand." },
      { title: "Planned service access", description: "Clearances and maintenance needs are considered before the installation location is finalized." },
      { title: "Water-quality awareness", description: "Local mineral conditions can be factored into the discussion of upkeep and descaling." },
    ],
    faqs: [
      { question: "Will a tankless heater provide unlimited hot water?", answer: "It heats water as it flows, but each model has a maximum flow and temperature rise. Sizing should account for how many showers or appliances may run together." },
      { question: "Can an older home support a tankless unit?", answer: "Possibly, but gas line capacity, electrical service, venting, and space need to be checked. The existing system should be evaluated before choosing equipment." },
      { question: "Does hard water change tankless heater maintenance?", answer: "Mineral content may affect descaling frequency. Testing the water and following the equipment manufacturer’s maintenance schedule helps protect the heat exchanger." },
    ],
    related: ["water-heater-repair", "gas-line-repair-and-service", "whole-home-repiping"],
    metaFocus: "Explore a properly sized on-demand heater with installation requirements reviewed",
  },
  {
    slug: "main-line-leak-detection",
    name: "Main Line Leak Detection",
    summary: "Narrow down hidden water loss and locate the affected supply line before repairs begin.",
    image: "/assets/images/leak-detection.png",
    imageAlt: "Main water line leak detection in Chadron, Nebraska",
    paragraphs: [
      "A hidden water leak can show up as an unexplained utility change, damp flooring, wall staining, or a water meter that continues moving when fixtures are off. We begin with the visible evidence and the layout of the home’s supply system.",
      "The goal is to narrow down the likely location before opening finished surfaces. Once the source is identified, we explain the access and repair options and whether a fixture, branch, or main supply line is involved.",
    ],
    signs: ["The water meter moves while all fixtures are closed.", "A wall, floor, or cabinet stays damp without an obvious spill.", "Water pressure drops or changes in more than one room.", "The pump or water system cycles more often than normal."],
    process: [
      { title: "Map the symptoms", description: "We note affected areas, water source, meter behavior, and any recent plumbing changes." },
      { title: "Narrow the leak location", description: "Accessible shutoffs and line routes are checked to focus the search before repair access is chosen." },
      { title: "Explain repair options", description: "After the likely source is confirmed, we outline a targeted fix and any follow-up testing." },
    ],
    benefits: [
      { title: "Less exploratory disruption", description: "A focused assessment can help reduce unnecessary openings in walls or floors." },
      { title: "Water-loss awareness", description: "Early attention can limit ongoing loss and prevent a small leak from spreading into finishes." },
      { title: "Repair matched to the line", description: "The material, location, and accessibility guide the repair plan rather than a one-size approach." },
    ],
    faqs: [
      { question: "How can I check whether a leak is still active?", answer: "If the meter is accessible, turn off fixtures and appliances that use water, then observe whether the meter continues to move. Do not enter a wet or unsafe utility area; call if you are unsure." },
      { question: "Can leak detection find a pipe inside a wall?", answer: "An inspection can use symptoms, access points, and the known pipe route to narrow the location. The exact method depends on the building and line material." },
      { question: "Do you repair the line after locating a leak?", answer: "Yes, once the cause and access are understood, we can explain available repair options and complete the agreed plumbing work." },
    ],
    related: ["whole-home-repiping", "emergency-drain-cleaning", "water-heater-repair"],
    metaFocus: "Locate unexplained water loss before moisture spreads through the home",
  },
  {
    slug: "toilet-repair-and-replacement",
    name: "Toilet Repair and Replacement",
    summary: "Stop leaks, running water, and weak flushing with a repair or fixture replacement that fits.",
    image: "/assets/images/toilet-repair.png",
    imageAlt: "Toilet repair and replacement in Chadron, Nebraska",
    paragraphs: [
      "A toilet that keeps running, rocks at the base, or flushes poorly can waste water and signal a worn part or connection problem. We check the fixture, shutoff, supply line, and visible seal area before deciding whether a repair is enough.",
      "When replacement makes more sense, we review rough-in dimensions, drain alignment, and the household’s needs so the new fixture fits the existing bathroom. A careful installation includes checking for leaks and confirming a consistent flush.",
    ],
    signs: ["The tank refills on its own between flushes.", "Water appears around the base or supply connection.", "The toilet rocks, clogs repeatedly, or flushes weakly.", "Cracks, corrosion, or repeated repairs make replacement worth comparing."],
    process: [
      { title: "Check the fixture", description: "We inspect the tank parts, shutoff, supply line, base, and flush performance." },
      { title: "Compare repair and replacement", description: "The fixture condition and bathroom connection determine the practical options." },
      { title: "Complete and test", description: "After the repair or install, we check for leaks, stability, and proper flushing." },
    ],
    benefits: [
      { title: "Reduce ongoing water waste", description: "Correcting a running toilet can stop constant refilling and lower unnecessary water use." },
      { title: "Secure connections", description: "Supply and base connections are checked as part of a repair or replacement visit." },
      { title: "A fixture that fits", description: "Dimensions and drain alignment are considered before a new toilet is selected." },
    ],
    faqs: [
      { question: "Why does my toilet run after the tank fills?", answer: "A worn flapper, fill valve, or adjustment issue is common, but the parts should be checked before replacement. Persistent running can waste a significant amount of water." },
      { question: "Can a rocking toilet be repaired without replacing it?", answer: "Sometimes. The floor, flange, and mounting need inspection because rocking may indicate a loose connection or a damaged base area." },
      { question: "What should I measure before choosing a replacement toilet?", answer: "The rough-in distance from the wall to the floor bolts and the available clearance are useful. A plumber can verify these and confirm the drain connection." },
    ],
    related: ["bathroom-plumbing-remodels", "kitchen-faucet-and-sink-service", "emergency-drain-cleaning"],
    metaFocus: "Fix a running toilet, leaking base, or weak flush with a fitting repair",
  },
  {
    slug: "kitchen-faucet-and-sink-service",
    name: "Kitchen Faucet and Sink Service",
    summary: "Repair a dripping faucet, loose connection, or slow kitchen sink before cabinet damage spreads.",
    image: "/assets/images/kitchen-faucet.png",
    imageAlt: "Kitchen faucet and sink plumbing service in Chadron, Nebraska",
    paragraphs: [
      "A kitchen faucet drip, loose handle, leaking supply hose, or sink that drains slowly can interrupt everyday use. We inspect the faucet, shutoffs, sink drain, and accessible cabinet connections to see whether the issue is at the fixture or farther along.",
      "If a new faucet or sink is part of the plan, we check mounting style, hole spacing, drain fittings, and the condition of the shutoffs. That helps the replacement work fit the existing counter and plumbing without overlooking hidden moisture under the cabinet.",
    ],
    signs: ["The faucet drips after it is shut off or the handle feels loose.", "Water collects inside the sink cabinet or around a supply line.", "The basin drains slowly despite routine cleaning of the strainer.", "A replacement faucet does not match the current mounting or connections."],
    process: [
      { title: "Inspect the sink area", description: "We check faucet operation, shutoffs, supply lines, drain fittings, and signs of cabinet moisture." },
      { title: "Identify the needed work", description: "The cause may be a cartridge, hose, drain assembly, connection, or a fixture replacement." },
      { title: "Repair and leak-check", description: "After service, we run the faucet and drain while checking accessible connections for leaks." },
    ],
    benefits: [
      { title: "Protect the cabinet", description: "Finding a small supply or drain leak early can limit moisture damage beneath the sink." },
      { title: "Better daily function", description: "A smooth-operating faucet and clear sink make routine kitchen use easier." },
      { title: "A compatible replacement", description: "Mounting and plumbing connections are reviewed before a fixture is installed." },
    ],
    faqs: [
      { question: "Can a dripping kitchen faucet be repaired instead of replaced?", answer: "Often, depending on the faucet model and condition. A worn cartridge or seal may be serviceable, while corrosion or unavailable parts can make replacement more practical." },
      { question: "Why does water smell under my kitchen sink?", answer: "Odors can come from a dry trap, drain buildup, a loose connection, or another source. Check for visible leaks and call if the smell persists or appears sewer-like." },
      { question: "Can you install a faucet I have already purchased?", answer: "We can review the faucet type and sink configuration. Confirming hole spacing, mounting, and shutoff condition before the visit helps avoid surprises." },
    ],
    related: ["garbage-disposal-repair", "emergency-drain-cleaning", "bathroom-plumbing-remodels"],
    metaFocus: "Stop faucet drips and protect the cabinet from hidden sink leaks",
  },
  {
    slug: "garbage-disposal-repair",
    name: "Garbage Disposal Repair",
    summary: "Troubleshoot a jammed, noisy, or leaking disposal and protect the kitchen drain connection.",
    image: "/assets/images/garbage-disposal.png",
    imageAlt: "Garbage disposal repair in Chadron, Nebraska",
    paragraphs: [
      "A humming disposal that will not spin, a unit that trips its reset, or water under the sink can have several causes. We inspect the unit and its drain connections, then determine whether a safe reset, repair, or replacement is appropriate.",
      "Disposals are not designed for every kind of food waste. During service, we can explain use habits that reduce jams and check that the sink drain and dishwasher connection are routed and sealed correctly.",
    ],
    signs: ["The disposal hums but the grinding plate does not turn.", "The unit trips its reset or breaker repeatedly.", "Water appears around the disposal body or drain flange.", "A persistent odor remains after the splash guard and sink are cleaned."],
    process: [
      { title: "Make the area safe", description: "We confirm the power is controlled and inspect the disposal without reaching into the grinding chamber." },
      { title: "Check unit and connections", description: "The reset, mounting, discharge, and dishwasher connections are reviewed for the source of trouble." },
      { title: "Repair or replace", description: "We test the unit and drain after service and explain care that can help prevent another jam." },
    ],
    benefits: [
      { title: "Safe troubleshooting", description: "The service approach avoids unsafe hand access and checks power before work begins." },
      { title: "Fewer repeat jams", description: "The cause and everyday use habits are discussed, not just the immediate symptom." },
      { title: "Dry cabinet connections", description: "Accessible seals and drain fittings are checked to catch leaks under the sink." },
    ],
    faqs: [
      { question: "What should I do if the disposal only hums?", answer: "Turn it off promptly to avoid overheating. Do not put a hand into the unit; use the manufacturer’s safe reset or jam-clearing instructions only if you are comfortable, otherwise call for service." },
      { question: "Can a leaking disposal be repaired?", answer: "It depends on whether the leak is at a replaceable connection, sink flange, or the disposal housing. The source needs to be identified before deciding between repair and replacement." },
      { question: "Can a disposal cause a slow kitchen drain?", answer: "Yes, buildup or an obstruction in the discharge connection can affect drainage. The sink trap and downstream line may also be involved, so the full drain path should be checked." },
    ],
    related: ["kitchen-faucet-and-sink-service", "emergency-drain-cleaning", "sewer-line-camera-inspection"],
    metaFocus: "Restore a jammed disposal and check the sink drain for leaks or blockages",
  },
  {
    slug: "sewer-line-camera-inspection",
    name: "Sewer Line Camera Inspection",
    summary: "See inside a drain or sewer line to locate recurring blockages and guide the repair plan.",
    image: "/assets/images/sewer-camera.png",
    imageAlt: "Sewer line camera inspection in Chadron, Nebraska",
    paragraphs: [
      "When clogs recur or several fixtures are affected, a camera inspection can show what is happening inside an accessible drain or sewer line. The view may reveal buildup, a break, an obstruction, or another condition that needs attention.",
      "A camera does not fix the line by itself, but it can make the next decision more informed. We explain what the footage shows, where the concern appears, and whether cleaning, a repair, or additional evaluation is a reasonable next step.",
    ],
    signs: ["A sewer or main drain backs up more than once.", "Several fixtures gurgle or drain slowly at the same time.", "A blockage returns shortly after clearing.", "You need to understand a line’s condition before planning other plumbing work."],
    process: [
      { title: "Review line symptoms", description: "We identify the affected fixtures, cleanout access, and history of previous backups." },
      { title: "Inspect the accessible line", description: "A camera is guided through the line to look for obstruction or visible damage." },
      { title: "Explain findings", description: "We discuss what the inspection revealed and which cleaning or repair options fit the condition." },
    ],
    benefits: [
      { title: "Visual information", description: "A direct view can help distinguish buildup from a more serious line concern." },
      { title: "Focused recommendations", description: "The next step can be based on observed line conditions rather than repeated guesswork." },
      { title: "Useful planning detail", description: "Inspection findings can help guide a repair conversation before disruptive work is considered." },
    ],
    faqs: [
      { question: "Does a sewer camera inspection locate every underground leak?", answer: "A camera shows the interior of an accessible line, but it may not identify every leak or condition outside the pipe. The findings are interpreted with the symptoms and site layout." },
      { question: "Should a line be cleaned before the camera goes in?", answer: "Sometimes. Heavy debris can limit visibility, so the plumber may recommend clearing a path first or using a different inspection approach." },
      { question: "Will I see what the camera finds?", answer: "The inspection findings are explained to you, including the location and visible condition of the line, so repair choices can be discussed clearly." },
    ],
    related: ["emergency-drain-cleaning", "high-pressure-hydro-jetting", "main-line-leak-detection"],
    metaFocus: "Inspect recurring sewer problems and choose repairs with better information",
  },
  {
    slug: "high-pressure-hydro-jetting",
    name: "High-Pressure Hydro Jetting",
    summary: "Use a controlled water jet to remove suitable buildup after the drain line is evaluated.",
    image: "/assets/images/hydro-jetting.png",
    imageAlt: "High-pressure hydro jetting for drains in Chadron, Nebraska",
    paragraphs: [
      "Hydro jetting uses specialized water pressure to remove grease, scale, and other buildup from a suitable drain line. It can be a useful option for stubborn or recurring obstructions, but the pipe condition must be assessed before the equipment is used.",
      "We review the line history and available inspection information, then determine whether jetting is appropriate for the material and condition. If a camera inspection or a different clearing method is safer, that alternative is explained before work begins.",
    ],
    signs: ["A commercial or household drain repeatedly collects grease or residue.", "Mechanical clearing restores flow only for a short time.", "A line has heavy buildup that is limiting its usable opening.", "You want to compare cleaning options after a camera inspection."],
    process: [
      { title: "Assess pipe suitability", description: "We review the line type, access, prior issues, and whether an inspection is needed first." },
      { title: "Select jetting approach", description: "Nozzle and pressure are chosen for the pipe and type of buildup, when jetting is appropriate." },
      { title: "Flush and verify", description: "The line is checked for restored flow and follow-up recommendations are shared." },
    ],
    benefits: [
      { title: "Broad interior cleaning", description: "Jetting can clear residue along more of the pipe wall than a point-only clearing method." },
      { title: "Condition-based use", description: "The method is only recommended after the line is considered suitable for pressurized cleaning." },
      { title: "Reduced repeat buildup", description: "Removing accumulated material can help extend the time before the same obstruction returns." },
    ],
    faqs: [
      { question: "Is hydro jetting safe for every drain pipe?", answer: "No. Pipe material, age, condition, and access matter. An inspection helps determine whether the line can tolerate the cleaning method." },
      { question: "How is hydro jetting different from a drain snake?", answer: "A snake usually opens a path through an obstruction, while jetting uses water to clean residue from more of the pipe interior. The right method depends on the blockage and pipe." },
      { question: "Can hydro jetting remove tree roots?", answer: "Jetting may clear some root material, but it does not repair a root entry point or damaged pipe. The line should be inspected so the underlying condition is addressed." },
    ],
    related: ["sewer-line-camera-inspection", "emergency-drain-cleaning", "commercial-plumbing-maintenance"],
    metaFocus: "Compare controlled jet cleaning for recurring buildup in suitable drain lines",
  },
  {
    slug: "whole-home-repiping",
    name: "Whole-Home Repiping",
    summary: "Replace aging supply lines with a planned approach when repeated repairs no longer make sense.",
    image: "/assets/images/repiping.png",
    imageAlt: "Whole-home repiping service in Chadron, Nebraska",
    paragraphs: [
      "Repeated leaks, poor flow, discolored water, or widespread corrosion may indicate that a home’s supply piping needs more than another isolated repair. Repiping replaces selected or broader sections of the system after the layout and existing materials are reviewed.",
      "We discuss access, fixture locations, shutoffs, and how work can be staged to limit disruption. A clear scope helps homeowners compare a targeted repair with a full or phased replacement and understand what surfaces may need restoration afterward.",
    ],
    signs: ["Leaks have appeared in more than one area of the home.", "Galvanized or visibly corroded lines are restricting flow.", "Repairs are becoming more frequent and affect older piping.", "Water discoloration returns after the line has been flushed."],
    process: [
      { title: "Review the plumbing system", description: "We identify pipe materials, leak history, shutoffs, fixtures, and the areas that are accessible." },
      { title: "Plan the replacement scope", description: "The work is mapped by room or branch, including access needs and expected service interruptions." },
      { title: "Install and test new lines", description: "New piping is connected and pressure-tested, with fixture operation checked before closeout." },
    ],
    benefits: [
      { title: "A system-wide view", description: "The repair plan considers the history and condition of multiple pipe sections together." },
      { title: "Less repeat patching", description: "Replacing deteriorated sections can reduce reliance on a series of isolated emergency repairs." },
      { title: "Planned disruption", description: "A defined scope helps set expectations for access, water shutoffs, and work sequencing." },
    ],
    faqs: [
      { question: "Does every older home need whole-home repiping?", answer: "No. Pipe material, condition, leak frequency, flow, and water quality all matter. An inspection helps determine whether one section or a broader replacement is appropriate." },
      { question: "Will water be shut off during repiping?", answer: "Temporary shutoffs are usually part of plumbing work. The schedule and affected areas depend on the layout and scope, and should be discussed before installation starts." },
      { question: "Can repiping be completed in phases?", answer: "In some homes, work can be staged by branch or area. The layout, access, and condition of existing lines determine whether phased work is practical." },
    ],
    related: ["main-line-leak-detection", "water-heater-repair", "bathroom-plumbing-remodels"],
    metaFocus: "Plan replacement for aging pipes, repeat leaks, or widespread corrosion",
  },
  {
    slug: "sump-pump-installation",
    name: "Sump Pump Installation",
    summary: "Install or replace a sump pump to move collected water away from a lower level.",
    image: "/assets/images/sump-pump.png",
    imageAlt: "Sump pump installation and service in Chadron, Nebraska",
    paragraphs: [
      "A sump pump helps move water collected in a basin away from a basement or lower level. The right setup depends on where water enters, the basin condition, discharge route, available power, and how the home handles runoff.",
      "We assess the pit and existing discharge before recommending a new pump or replacement. The conversation can include float operation, check valves, discharge protection, and a backup plan suited to the property’s risk and utility setup.",
    ],
    signs: ["The existing pump runs often, cycles rapidly, or makes a new noise.", "Water remains in the basin after a pump cycle.", "The basement shows dampness around the pit or lower walls.", "A pump has no clear discharge route or stops during an outage."],
    process: [
      { title: "Inspect the basin and discharge", description: "We check the pit, pump condition, outlet path, and accessible power supply." },
      { title: "Select a practical setup", description: "Pump capacity, float, check valve, and backup options are considered for the site." },
      { title: "Install and test the cycle", description: "The pump is operated through a test cycle and the discharge path is checked." },
    ],
    benefits: [
      { title: "Better water management", description: "A working pump can move collected water away before it accumulates in a lower area." },
      { title: "Installation matched to the pit", description: "The basin and discharge route are reviewed before equipment is selected." },
      { title: "Clear maintenance advice", description: "You learn what to check routinely and when a backup or replacement is worth considering." },
    ],
    faqs: [
      { question: "How often should a sump pump be tested?", answer: "Follow the pump manufacturer’s instructions and test it periodically, especially before seasons when water is more likely. Keep the discharge outlet clear and confirm the float moves freely." },
      { question: "Does a sump pump need a battery backup?", answer: "A backup can be useful where outages could coincide with water entry, but the right option depends on the home, pump, and electrical setup." },
      { question: "Why does a sump pump keep cycling?", answer: "A high water level, float issue, check-valve problem, or discharge returning to the pit can cause repeated cycles. Inspection can identify the source." },
    ],
    related: ["main-line-leak-detection", "outdoor-and-garden-plumbing", "emergency-drain-cleaning"],
    metaFocus: "Protect a lower level with a pump setup that fits the basin and discharge",
  },
  {
    slug: "gas-line-repair-and-service",
    name: "Gas Line Repair and Service",
    summary: "Address gas-piping concerns with a safety-first inspection and qualified repair planning.",
    image: "/assets/images/gas-line.png",
    imageAlt: "Gas line service and inspection in Chadron, Nebraska",
    paragraphs: [
      "Gas piping supplies appliances such as water heaters, ranges, and furnaces. A damaged connection, improper support, or suspected leak is a safety concern that should be treated carefully and never tested with an open flame.",
      "We review the reported issue, accessible piping, appliance connections, and work scope before repair. If you smell gas or hear hissing, leave the area, avoid switches or flames, and contact your gas utility or emergency services from a safe location before calling for plumbing service.",
    ],
    signs: ["A gas odor or hissing is present near an appliance or line.", "An appliance connection is loose, corroded, or visibly damaged.", "A new gas appliance needs a compatible connection reviewed.", "You need a line checked after plumbing or remodeling work."],
    process: [
      { title: "Establish immediate safety", description: "If an active leak is suspected, occupants should leave and contact the gas utility or emergency responders first." },
      { title: "Inspect accessible piping", description: "Once the area is safe, the reported connection and service scope are reviewed." },
      { title: "Repair and verify", description: "Agreed work is completed and the system is checked using appropriate procedures." },
    ],
    benefits: [
      { title: "Safety-led response", description: "The first priority is proper emergency action when a gas leak is suspected." },
      { title: "Careful connection review", description: "Accessible piping and appliance connections are assessed before work is selected." },
      { title: "Clear coordination", description: "We explain when the utility or emergency service should be involved before a plumbing repair." },
    ],
    faqs: [
      { question: "What should I do if I smell gas inside?", answer: "Leave immediately, do not operate lights, switches, or appliances, and avoid flames. From a safe location, contact your gas utility or emergency services. Do not re-enter until it is declared safe." },
      { question: "Can I use a flame to check a gas connection?", answer: "No. Never use a flame to test for a leak. If you suspect a leak, leave the area and contact the gas utility or emergency services from outside." },
      { question: "Can plumbing service connect a new gas appliance?", answer: "The connection needs to be reviewed for appliance requirements, line capacity, shutoff, and local rules. Contact us with the appliance details before installation." },
    ],
    related: ["tankless-water-heater-install", "water-heater-repair", "commercial-plumbing-maintenance"],
    metaFocus: "Get a safety-first assessment for gas piping or appliance connections",
  },
  {
    slug: "bathroom-plumbing-remodels",
    name: "Bathroom Plumbing Remodels",
    summary: "Coordinate fixture and pipe changes so a bathroom update works as well as it looks.",
    image: "/assets/images/bathroom-remodel.png",
    imageAlt: "Bathroom plumbing remodel service in Chadron, Nebraska",
    paragraphs: [
      "A bathroom remodel may change a vanity, shower, tub, toilet, or the location of water and drain lines. Planning the plumbing before finishes are selected can prevent surprises with rough-in dimensions, venting, access, and shutoffs.",
      "We review the existing layout and the proposed fixtures, then coordinate supply, drain, and connection needs with the project scope. If the remodel reveals older piping or a hidden leak, we explain the additional work before expanding the plan.",
    ],
    signs: ["A new shower, tub, or vanity will change fixture locations.", "The project needs new shutoffs, drains, or supply routes.", "Existing fixtures leak, clog, or no longer meet household needs.", "You want plumbing details reviewed before tile or cabinetry is installed."],
    process: [
      { title: "Review the existing room", description: "We note the current fixtures, access points, pipe routes, and any visible concerns." },
      { title: "Coordinate rough-in details", description: "Fixture specifications and planned locations are compared with supply, drain, and vent requirements." },
      { title: "Connect and test fixtures", description: "After installation, we check each fixture, drain, and shutoff before the work is complete." },
    ],
    benefits: [
      { title: "Fewer finish-stage surprises", description: "Early plumbing review helps surface fit and access questions before walls close." },
      { title: "A layout that works", description: "Fixture placement is considered alongside drainage, supply routing, and daily use." },
      { title: "Tested connections", description: "New fixtures and accessible joints are checked for leaks and proper operation." },
    ],
    faqs: [
      { question: "When should plumbing be planned during a bathroom remodel?", answer: "Before walls, tile, or cabinetry are finalized. Early review helps confirm rough-in dimensions, pipe access, and whether a proposed fixture layout is workable." },
      { question: "Can I move a shower or toilet to a different wall?", answer: "Possibly, but drain slope, venting, floor structure, and access can affect what is practical. The room and building layout need to be assessed before finalizing the design." },
      { question: "Do you install customer-selected bathroom fixtures?", answer: "We can review fixture specifications and compatibility with the planned connections. Providing product details early helps confirm fit and installation requirements." },
    ],
    related: ["toilet-repair-and-replacement", "kitchen-faucet-and-sink-service", "whole-home-repiping"],
    metaFocus: "Coordinate bathroom rough-in, fixture connections, drains, and shutoffs",
  },
  {
    slug: "commercial-plumbing-maintenance",
    name: "Commercial Plumbing Maintenance",
    summary: "Plan routine plumbing checks to reduce avoidable interruptions for local businesses.",
    image: "/assets/images/commercial-plumbing.png",
    imageAlt: "Commercial plumbing maintenance in Chadron, Nebraska",
    paragraphs: [
      "A plumbing issue at a business can affect restrooms, kitchens, tenants, and daily operations. A maintenance visit can focus on the fixtures, shutoffs, drains, and water-heating equipment most important to the building’s use.",
      "We discuss operating hours, access requirements, and any recurring trouble before recommending a maintenance scope. For a current leak or backup, the first priority is limiting the disruption and identifying which parts of the building are affected.",
    ],
    signs: ["Drains or restrooms have recurring slowdowns or backups.", "Fixtures leak, run continuously, or need frequent attention.", "A water heater or utility connection has inconsistent performance.", "Maintenance needs to be scheduled around tenants or business hours."],
    process: [
      { title: "Review building needs", description: "We note the type of business, affected areas, service history, and access constraints." },
      { title: "Set a practical scope", description: "Priority fixtures and equipment are identified so maintenance fits the property’s use." },
      { title: "Document findings", description: "After the visit, we summarize observed issues and recommended follow-up in plain language." },
    ],
    benefits: [
      { title: "Less avoidable downtime", description: "Routine attention can surface small problems before they interrupt normal building use." },
      { title: "Work around operations", description: "Scheduling and access are discussed with the building’s occupied hours in mind." },
      { title: "Prioritized findings", description: "You can distinguish urgent repairs from maintenance items that can be planned." },
    ],
    faqs: [
      { question: "Can maintenance be scheduled outside business hours?", answer: "We can discuss timing and access when you call. Availability depends on the requested work, building needs, and the service schedule." },
      { question: "What areas should a commercial plumbing check include?", answer: "It depends on the property. Restrooms, kitchens, floor drains, shutoffs, water heaters, and any recurring trouble spots are common priorities." },
      { question: "Can you respond to an active business plumbing emergency?", answer: "Emergency service is available 24/7. Call (402) 882-9595, explain the affected area, and let us know whether water is actively leaking or backing up." },
    ],
    related: ["emergency-drain-cleaning", "high-pressure-hydro-jetting", "gas-line-repair-and-service"],
    metaFocus: "Keep business plumbing dependable with planned inspections and clear priorities",
  },
  {
    slug: "outdoor-and-garden-plumbing",
    name: "Outdoor and Garden Plumbing",
    summary: "Repair and prepare hose bibs, outdoor faucets, and garden water connections for seasonal use.",
    image: "/assets/images/outdoor-plumbing.png",
    imageAlt: "Outdoor and garden plumbing service in Chadron, Nebraska",
    paragraphs: [
      "Outdoor faucets, garden lines, and exterior water connections take on seasonal wear. A dripping hose bib may waste water, while a line left full through freezing weather can split and leak after temperatures rise.",
      "We inspect the visible faucet, shutoff, and accessible connections, then discuss winter preparation or repair. For irrigation systems and outbuildings, details about the layout and water source help identify the right isolation points.",
    ],
    signs: ["An exterior faucet drips or leaks into the wall when turned on.", "A hose bib has reduced flow or a damaged handle.", "You are unsure which valve shuts off an outdoor line.", "A garden or irrigation connection needs repair before seasonal use."],
    process: [
      { title: "Locate the outdoor connection", description: "We identify the faucet, interior shutoff if present, and any accessible branch piping." },
      { title: "Check for damage and fit", description: "The faucet, seals, mounting, and visible line are reviewed for leaks or freeze damage." },
      { title: "Repair and prepare", description: "We complete agreed work and explain how to isolate or drain the connection seasonally." },
    ],
    benefits: [
      { title: "Season-ready fixtures", description: "Outdoor connections can be checked before summer watering or winter temperatures arrive." },
      { title: "Reduced hidden leak risk", description: "Inspecting the faucet and shutoff can catch water entering a wall or utility area." },
      { title: "Clear shutoff guidance", description: "Knowing which valve controls an exterior line makes seasonal preparation easier." },
    ],
    faqs: [
      { question: "Should I leave a garden hose connected during winter?", answer: "No. Disconnect hoses before freezing weather and follow the faucet manufacturer’s directions for draining. A trapped hose can prevent the faucet from draining correctly." },
      { question: "What if an outdoor faucet leaks inside the wall?", answer: "Stop using the faucet and close its interior shutoff if you can identify it safely. Water inside a wall can cause damage, so arrange an inspection promptly." },
      { question: "Can you repair a frost-free hose bib?", answer: "Often, depending on the damage and access. The faucet length, mounting, and internal shutoff condition should be checked before selecting replacement parts." },
    ],
    related: ["sump-pump-installation", "main-line-leak-detection", "emergency-drain-cleaning"],
    metaFocus: "Protect outside faucets and garden connections from leaks and seasonal freezes",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
