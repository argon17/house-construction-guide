export const guide = {
  eyebrow: "House construction framework - Bihar city",
  title: "A phase-by-phase house building guide for Bihar cities.",
  summary:
    "This framework turns a complex build into a readable sequence, from land checks and plan approvals to structure, services, finishing, and handover. Use the phase tabs to move through the process and keep track of where you are.",
  phases: [
    {
      id: "land-and-legal",
      navLabel: "1. Land & legal",
      phaseLabel: "Phase 1",
      title: "Land & legal",
      description:
        "Before anything else, your land title must be clean. In Bihar, disputes over plot ownership are common and can halt construction mid-way. Get these sorted before spending a rupee on design.",
      items: [
        {
          tone: "warn",
          title: "Title verification",
          body: "Hire a lawyer to trace ownership for 30+ years. Check for encumbrances, court cases, mortgages, or disputes.",
          tag: { tone: "warn", text: "Must-do first" }
        },
        {
          tone: "info",
          title: "Plot demarcation",
          body: "Get official measurement by a licensed surveyor. Boundary disputes with neighbors are one of the most common construction headaches.",
          tag: { tone: "info", text: "Before design" }
        },
        {
          tone: "info",
          title: "Land use classification",
          body: "Confirm the plot is classified as residential. Agricultural land requires conversion permission (Bhumi Sudhar); skip this and your approval will be rejected."
        },
        {
          tone: "success",
          title: "Registry & mutation",
          body: "Ensure the plot is registered in your name and mutation (Dakhil Kharij) is done. Required for bank loans and building permits.",
          tag: { tone: "success", text: "Paperwork" }
        },
        {
          tone: "success",
          title: "Plot selection tips",
          body: "Choose land higher than road level because Bihar floods seasonally. Check proximity to water and electricity lines. Verify there are no railway, highway, or river setback zones."
        },
        {
          tone: "warn",
          title: "FAR & zone check",
          body: "Floor Area Ratio and setback rules vary by city. Patna BPAS has zone maps. Know these before designing because they dictate how much you can actually build.",
          tag: { tone: "warn", text: "City-specific" }
        }
      ],
      documents: {
        title: "Documents to collect",
        items: [
          "Sale deed / Patta / Registry papers",
          "Dakhil Kharij (mutation certificate)",
          "Jamabandi (land records) from Bhumi portal",
          "Encumbrance certificate from sub-registrar office",
          "NOC if near flood zone, highway, or railway"
        ]
      }
    },
    {
      id: "budget",
      navLabel: "2. Budget",
      phaseLabel: "Phase 2",
      title: "Budget planning",
      description:
        "Bihar construction costs are often quoted as a single Rs per sq.ft number, but that hides too much. Break the budget into structure, finishing, interiors, fees, and external works, then add a 20-25% buffer from day one.",
      items: [
        {
          tone: "info",
          title: "Typical cost breakup",
          body: "Civil structure: about 45-50% | Finishes (tiles, paint, doors): about 20-25% | Electrical + plumbing: about 10-12% | Architect + approvals: about 5% | External works, utilities, and contingency: the rest."
        },
        {
          tone: "warn",
          title: "Hidden costs to plan",
          body: "Borewell, water tank, boundary wall, gate, septic tank, rainwater harvesting, landscaping, meter deposit, kitchen work, wardrobes, and lighting are all easy to forget.",
          tag: { tone: "warn", text: "Often forgotten" }
        },
        {
          tone: "success",
          title: "Payment structure",
          body: "Never pay contractors in a lump sum. Use milestone-based payments: foundation complete -> 20%, slab cast -> 20%, brickwork -> 15%, plastering -> 15%, finishing -> 20%, handover -> 10%.",
          tag: { tone: "success", text: "Critical" }
        },
        {
          tone: "warn",
          title: "Do not compare raw Rs per sq.ft",
          body: "A low quoted rate is meaningless unless scope is defined. Always ask what is excluded: approvals, consultant fees, waterproofing, compound wall, gates, tanks, electrical fixtures, and interiors.",
          tag: { tone: "warn", text: "Scope first" }
        },
        {
          tone: "info",
          title: "When to build",
          body: "October to March is ideal across Bihar. Avoid starting foundation or slab work before monsoon. Rain delays curing and creates waterlogging on site."
        },
        {
          tone: "success",
          title: "Contract type options",
          body: "Turnkey means the contractor handles everything. Material + labour means you buy materials and they build. A mixed model often works best: let the contractor coordinate routine materials, but verify or directly buy major items where substitutions hurt later."
        }
      ]
    },
    {
      id: "approvals",
      navLabel: "3. Approvals",
      phaseLabel: "Phase 3",
      title: "Approvals & permits",
      description:
        "In Bihar cities, building without an approved plan can result in demolition orders. The Bihar Building Bylaws 2022 govern construction, and many cities now use online single-window systems such as BPAS.",
      items: [
        {
          tone: "danger",
          title: "Building plan approval",
          body: "Submit to your local authority. In Patna, this is the BPAS portal. In other cities, it is usually the respective Nagar Parishad or Nagar Palika. An architect must prepare and submit the drawings.",
          tag: { tone: "danger", text: "Mandatory" }
        },
        {
          tone: "warn",
          title: "Key bylaws to know",
          body: "Setback rules, FAR, height limits, and ground coverage restrictions all shape the design before construction starts."
        },
        {
          tone: "info",
          title: "NOCs required",
          body: "Water supply NOC, electricity connection NOC, fire safety NOC for larger homes, airport authority NOC near airports, and environmental clearance for larger plots may apply."
        },
        {
          tone: "success",
          title: "Completion certificate",
          body: "After construction, get a completion or occupancy certificate from the municipal authority. Without it, utility connections can become difficult.",
          tag: { tone: "success", text: "Post-construction" }
        },
        {
          tone: "info",
          title: "Structural engineer certificate",
          body: "For G+1 and above, Bihar typically requires structural calculations signed by a licensed civil engineer, plus periodic site supervision reports."
        },
        {
          tone: "warn",
          title: "Appeals process",
          body: "If your plan is rejected, appeal with revised drawings or supporting documentation. A local architect who knows the approval norms can save months."
        }
      ],
      documents: {
        title: "Documents needed for approval",
        items: [
          "Site plan, floor plans, and elevations by a licensed architect",
          "Structural drawings and calculations by a licensed engineer",
          "Land ownership proof (registry, mutation)",
          "Soil test report for projects that require it",
          "Identity proof of owner"
        ]
      }
    },
    {
      id: "team",
      navLabel: "4. Team",
      phaseLabel: "Phase 4",
      title: "Building your team",
      description:
        "House construction is not just about materials. The team executing the work has an outsized impact on quality, cost, and schedule. The safest sequence is usually architect first, engineer next, contractor after drawings and approvals are taking shape.",
      items: [
        {
          tone: "info",
          title: "Architect",
          body: "Designs the house, prepares drawings for approval, and coordinates between civil and structural scopes. Hire this role before the contractor starts shaping the plan informally on site.",
          tag: { tone: "info", text: "First hire" }
        },
        {
          tone: "info",
          title: "Structural engineer",
          body: "Designs the foundation, columns, beams, and slabs. If you may add another floor later, tell the engineer now because future expansion has to be designed into the structure from the start.",
          tag: { tone: "info", text: "Critical" }
        },
        {
          tone: "success",
          title: "Civil contractor",
          body: "Check at least three references from completed projects. Visit the sites. Ask about delays. Get a written contract with scope, material specs, penalties, and milestone payments.",
          tag: { tone: "success", text: "Verify references" }
        },
        {
          tone: "success",
          title: "Specialist subcontractors",
          body: "Electrical, plumbing, waterproofing, and tiling usually need specialists, even when a main contractor says they handle everything."
        },
        {
          tone: "warn",
          title: "Material control",
          body: "Do not blindly let one contractor or one supplier control all procurement. Take 2-3 quotes for major items, verify delivered quantity, and avoid bringing too much material to site too early.",
          tag: { tone: "warn", text: "Reduce leakage" }
        },
        {
          tone: "warn",
          title: "Questions to ask the contractor",
          body: "Ask about defect liability period, whether concrete is ready-mix or site-mix, what work will be subcontracted, how material wastage is tracked, and whether milestone-based payments are acceptable."
        },
        {
          tone: "warn",
          title: "Contract must-haves",
          body: "Include material brand and grade specifications, a timeline with a penalty clause, a milestone payment schedule, delivery and wastage rules, and a defect warranty period.",
          tag: { tone: "warn", text: "Get it in writing" }
        }
      ]
    },
    {
      id: "soil-and-foundation",
      navLabel: "5. Soil & foundation",
      phaseLabel: "Phase 5",
      title: "Soil testing & foundation",
      description:
        "Your foundation is what keeps the house standing for decades. Soil testing is often skipped, but it is one of the highest-value checks you can buy before construction begins. In Bihar, this phase also has to respond to road level, drainage, and flood risk.",
      items: [
        {
          tone: "danger",
          title: "Soil testing",
          body: "Typical costs are around Rs 10,000-50,000. A soil report tells you safe bearing capacity, groundwater level, soil type, and required foundation depth.",
          tag: { tone: "danger", text: "Never skip" }
        },
        {
          tone: "info",
          title: "What the soil test tells you",
          body: "Load-bearing capacity, groundwater table depth, soil type, settlement risk, and whether strip footing, raft, or piles are more suitable."
        },
        {
          tone: "info",
          title: "Foundation types",
          body: "Strip footing suits many residential plots with good soil. Raft helps on weaker soil. Pile foundations are used on very soft or waterlogged sites."
        },
        {
          tone: "success",
          title: "Foundation construction steps",
          body: "Typical order: excavation -> PCC layer -> steel reinforcement -> foundation concrete pour -> backfilling and compaction."
        },
        {
          tone: "warn",
          title: "Plinth height and road level",
          body: "Do not set the finished floor casually. In many Bihar localities, owners regret keeping the house too close to road level. Keep the plinth safely above current road level and think about future road raising too.",
          tag: { tone: "warn", text: "Bihar-specific" }
        },
        {
          tone: "success",
          title: "Quality check at this stage",
          body: "Inspect steel placement before the pour, check the concrete grade, confirm drainage direction around the plinth, and make sure curing happens long enough before loading the structure.",
          tag: { tone: "success", text: "Supervise closely" }
        }
      ]
    },
    {
      id: "structure",
      navLabel: "6. Structure",
      phaseLabel: "Phase 6",
      title: "Structure: columns, beams, slabs",
      description:
        "This is the RCC skeleton of the house. Once cast, mistakes are expensive or impossible to fix. It is worth being highly present during this phase.",
      items: [
        {
          tone: "info",
          title: "The RCC frame",
          body: "Columns carry loads vertically, beams tie the frame together, and slabs form floors and ceilings. Masonry usually fills the frame rather than carrying the main load, so do not let site improvisation alter the frame casually."
        },
        {
          tone: "danger",
          title: "Concrete grade matters",
          body: "Use the grade specified by the structural engineer and pay close attention to water-cement ratio. Too much water is one of the most common quality failures.",
          tag: { tone: "danger", text: "Quality control" }
        },
        {
          tone: "warn",
          title: "Steel quality",
          body: "Use ISI-certified TMT bars from reputable dealers and verify the brand and markings before material is accepted on site. If the contractor buys steel, you should still verify what was delivered.",
          tag: { tone: "warn", text: "Verify brand" }
        },
        {
          tone: "success",
          title: "Curing is crucial",
          body: "Concrete gains strength by staying moist. Skipping proper curing is a quiet but serious structural risk.",
          tag: { tone: "success", text: "Do not skip" }
        },
        {
          tone: "info",
          title: "Build for future floors only if planned now",
          body: "If the family may go from single-floor to G+1 later, columns, footings, and reinforcement strategy must be designed for that now. Retrofitting that intent later is far costlier and riskier."
        },
        {
          tone: "info",
          title: "Brick and masonry",
          body: "Red clay bricks are common, but fly ash bricks and AAC blocks can perform better in several cases. Material choice should align with structural design and climate goals."
        }
      ],
      documents: {
        title: "Site inspection checklist at this stage",
        items: [
          "Steel bar size and spacing matches structural drawings",
          "Cover blocks are used to maintain required steel cover",
          "Shuttering is tight and does not leak concrete",
          "Concrete is poured continuously where required by the engineer",
          "Curing starts early and continues for the recommended duration"
        ]
      }
    },
    {
      id: "services",
      navLabel: "7. Services",
      phaseLabel: "Phase 7",
      title: "Services: MEP, plumbing, electrical, waterproofing",
      description:
        "Services go inside the walls and slabs before the surfaces are closed up. Changes after plastering and tiling are expensive, so coordination matters here. This phase is also where drainage, earthing, and waterproofing discipline quietly save years of frustration.",
      items: [
        {
          tone: "info",
          title: "Electrical planning",
          body: "Plan every switch, socket, light, fan, AC point, CCTV point, and internet point before plastering. Use certified fire-resistant wiring and do not treat proper earthing as an optional extra."
        },
        {
          tone: "info",
          title: "Plumbing layout",
          body: "Plan inlet, outlet, and drainage slopes before wall chasing begins. Good plumbing depends on layout discipline more than improvisation."
        },
        {
          tone: "danger",
          title: "Waterproofing",
          body: "Bathrooms, terraces, kitchens, and vulnerable external walls need proper waterproofing systems and written warranty coverage. Exterior plaster and waterproofing should not be left behind while interiors race ahead.",
          tag: { tone: "danger", text: "Warranty item" }
        },
        {
          tone: "warn",
          title: "Water supply",
          body: "Municipal supply can be inconsistent, so plan for a sump, overhead tank, and backup strategy where needed.",
          tag: { tone: "warn", text: "Plan backup supply" }
        },
        {
          tone: "success",
          title: "Sewage & drainage",
          body: "Where city sewer is not available, design the septic system properly and make sure external drainage moves water away from the foundation. Poor site drainage is one of the most expensive 'small' mistakes owners discover later."
        },
        {
          tone: "success",
          title: "Roofing",
          body: "A flat RCC roof should still have proper slope, drainage points, waterproofing, and a heat-conscious finish."
        }
      ]
    },
    {
      id: "finishing",
      navLabel: "8. Finishing",
      phaseLabel: "Phase 8",
      title: "Finishing: plastering, flooring, painting",
      description:
        "Finishing is where material quality becomes visible every day. Cheap finishes can look acceptable at handover and disappoint quickly in use.",
      items: [
        {
          tone: "info",
          title: "Plastering",
          body: "Internal and external plaster both need correct thickness, curing, and timing. Rushed work shows up later as cracks and uneven walls."
        },
        {
          tone: "info",
          title: "Flooring options",
          body: "Vitrified tiles remain a practical default, while marble and granite raise cost and maintenance. Bathrooms and outdoor zones should use anti-skid finishes."
        },
        {
          tone: "warn",
          title: "Doors & windows",
          body: "Choose durable systems with consistent fabrication quality. Factory-made options are often more reliable than improvised site work.",
          tag: { tone: "warn", text: "Compare vendors" }
        },
        {
          tone: "success",
          title: "Paint selection",
          body: "Use exterior paint suited to hot and wet conditions and make sure the substrate gets proper putty, primer, and topcoats.",
          tag: { tone: "success", text: "Climate-aware" }
        },
        {
          tone: "success",
          title: "Grille & safety",
          body: "Budget for grills, gates, boundary walls, and outdoor lighting early so these do not become late surprises. Many owners wrongly discover these only after the main structure is finished."
        },
        {
          tone: "info",
          title: "Fixtures, kitchen, and wardrobes",
          body: "Finalize DB setup, switchboards, light fixtures, fans, AC units, kitchen scope, wardrobes, and safety devices such as MCBs and earth-leakage protection. These frequently sit outside the contractor's base quote."
        }
      ]
    },
    {
      id: "final-checks",
      navLabel: "9. Final checks",
      phaseLabel: "Phase 9",
      title: "Final checks & handover",
      description:
        "Before accepting the house, do a full punch-list walk. Once you move in, getting defects corrected becomes much harder, and the loose ends people ignore here usually become the longest arguments later.",
      items: [
        {
          tone: "info",
          title: "Punch list inspection",
          body: "Walk every room and test every switch, socket, tap, flush, door, and window. Keep a written snag list and hold back final payment until the agreed items are cleared."
        },
        {
          tone: "danger",
          title: "Completion certificate",
          body: "Apply for the occupancy or completion certificate and keep as-built drawings aligned with any changes made during construction.",
          tag: { tone: "danger", text: "Legal requirement" }
        },
        {
          tone: "success",
          title: "Utility connections",
          body: "Prepare the final paperwork needed for permanent electricity, water, and other services so activation is not delayed."
        },
        {
          tone: "warn",
          title: "Defect liability period",
          body: "Get the defect period in writing for civil work and waterproofing, including how issues will be reported and fixed.",
          tag: { tone: "warn", text: "Get it in writing" }
        },
        {
          tone: "success",
          title: "Documents to collect at the end",
          body: "Collect as-built drawings, warranties, layout drawings, completion paperwork, the contractor warranty letter, and a final record of material brands and installed systems."
        },
        {
          tone: "info",
          title: "Snagging",
          body: "Look for tile lippage, paint drips, poor alignment, loose fixtures, finish defects, terrace drainage issues, and seepage signs. Photos help close arguments quickly."
        }
      ]
    },
    {
      id: "common-traps",
      navLabel: "10. Common traps",
      phaseLabel: "Watch out",
      title: "Common traps for first-time builders",
      description:
        "These are the mistakes that can cost months and serious money. Most of them are avoidable with planning, documentation, and regular supervision.",
      items: [
        {
          tone: "danger",
          title: "Skipping the soil test",
          body: "Neighbor experience is not enough. Soil varies even across small distances, and the cost of cracks later can dwarf the cost of a test.",
          tag: { tone: "danger", text: "Top mistake" }
        },
        {
          tone: "danger",
          title: "No written contract",
          body: "Verbal agreements break down fast when quality, delays, or payment disputes appear. Put material specs, milestones, timelines, and warranties in writing.",
          tag: { tone: "danger", text: "Very common" }
        },
        {
          tone: "warn",
          title: "Paying too much upfront",
          body: "Large advance payments increase risk and reduce leverage if work quality slips or the contractor disappears."
        },
        {
          tone: "warn",
          title: "Choosing the cheapest quote",
          body: "Low bids often hide thinner steel, weaker concrete, or lower-grade finishes. Compare quotes on an item-rate basis where possible."
        },
        {
          tone: "warn",
          title: "Buying too much material too early",
          body: "Bulk deliveries feel efficient, but they often create wastage, theft, and supplier lock-in. Bring materials in planned batches tied to the actual work sequence."
        },
        {
          tone: "warn",
          title: "Not visiting the site enough",
          body: "Critical stages such as excavation, steel work, slab pours, and service rough-ins need active supervision from the owner or a trusted professional."
        },
        {
          tone: "info",
          title: "Changing the plan mid-construction",
          body: "Late changes compound cost and delay. Decisions made before excavation are almost always cheaper than decisions made after framing starts.",
          tag: { tone: "info", text: "Budget killer" }
        },
        {
          tone: "info",
          title: "Rushing curing time",
          body: "Contractor speed should not win over structural performance. Concrete needs time and moisture to reach strength safely."
        },
        {
          tone: "success",
          title: "Keep a site diary",
          body: "A dated photo log plus notes of verbal agreements is one of the best low-effort protections you can give yourself during a build.",
          tag: { tone: "success", text: "Do this" }
        }
      ]
    }
  ]
};
