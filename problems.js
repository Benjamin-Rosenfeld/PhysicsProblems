var IMG = {
  track: "Assets/track.png",
  discgolf: "Assets/discgolf.png",
  chain: "Assets/chain.png",
  flyingpig: "Assets/flyingpig.png",
  curtain_up: "Assets/curtain_up.png",
  curtain_down: "Assets/curtain_down.png",
  tennis: "Assets/tennis.png",
  pool: "Assets/pool.png",
};

// ── Problem data ──────────────────────────────────────────────────────────────
// Each question has:
//   text, unit (display), answer (number or string), tolerance (fraction, e.g. 0.02 = 2%),
//   hints[3]: [hint after fail 1, hint after fail 2, reveal after fail 3]
var problems = [
  {
    id: "track", label: "Proctor / Track", icon: "\u{1F3C3}", difficulty: "medium",
    pctX: 21, pctY: 38,
    section: "1 \u2014 Kinematics", title: "1.1 Around the Track",
    subtitle: "Proctor Field & Track",
    intro: "In 2020 Peter Diebold broke the Weston High School record in the 400 meter race with a time of 49.28 seconds. Reywas decides to race him, but mistakenly starts even with him, while on the outer lane of the track, with an approximate length of 450 meters. After completing the race, Peter wins by 9 seconds.",
    given: ["Peter\u2019s lane: 400 m, time: 49.28 s","Reywas\u2019s lane: 450 m","Peter wins by 9 seconds","Both start from the same position"],
    images: [{src:"track",cls:"full",alt:"Weston HS Track"}],
    questions: [
      {
        text: "During this race, who had the greater average velocity? Enter 1 for Peter, 2 for Reywas, or 0 if they are equal.",
        unit: "",
        answer: 0, tol: 0.1,
        hints: [
          "\u{1F4A1} Hint 1: Average velocity = displacement \u00f7 time. Think carefully about what \u2018displacement\u2019 means for a runner who completes a loop.",
          "\u{1F4A1} Hint 2: Both runners start and finish at the same point on a closed loop, so their net displacement is zero regardless of time.",
          "\u2705 Answer: Both have zero average velocity (displacement = 0 for a complete loop). They are equal \u2014 enter 0."
        ]
      },
      {
        text: "During this race, who had the greater average speed? Enter 1 for Peter, 2 for Reywas.",
        unit: "",
        answer: 1, tol: 0.1,
        hints: [
          "\u{1F4A1} Hint 1: Average speed = total distance \u00f7 total time. Peter ran 400 m in 49.28 s; Reywas ran 450 m in 49.28 + 9 = 58.28 s. Compare the two.",
          "\u{1F4A1} Hint 2: Peter\u2019s speed = 400/49.28 \u2248 8.12 m/s. Reywas\u2019s speed = 450/58.28 \u2248 7.72 m/s.",
          "\u2705 Answer: Peter had the greater average speed (8.12 m/s vs 7.72 m/s). Enter 1."
        ]
      },
      {
        text: "If instead the runners swapped places and repeated the race, who would win and by how many meters? (enter meters, positive = Reywas wins)",
        unit: "m",
        answer: 29.5, tol: 0.03,
        hints: [
          "\u{1F4A1} Hint 1: Each runner keeps their own pace from the first race. Now Peter runs 450 m and Reywas runs 400 m. Find each runner\u2019s time to finish.",
          "\u{1F4A1} Hint 2: Reywas finishes 400 m in 400/7.721 \u2248 51.80 s. In that same time, Peter has covered 8.117 \u00d7 51.80 \u2248 420.5 m of his 450 m. He still has 29.5 m to go.",
          "\u2705 Answer: Reywas wins. When Reywas crosses the finish, Peter is still \u224829.5 m short."
        ]
      }
    ]
  },
  {
    id: "discgolf", label: "Disc Golf", icon: "\u{1F94F}", difficulty: "medium",
    pctX: 50, pctY: 44,
    section: "2 \u2014 Force & Translational Dynamics", title: "2.1 Disc Golf Cages",
    subtitle: "Wildcat Woods Disc Golf Course (near Pond & Building A)",
    intro: "Haiasi is playing disc golf on the Wildcat Woods disc golf course, when he gets curious about the static behavior of the disc golf hole. He models the chains of the basket as uniform chains of mass m suspended symmetrically from two supports. At the suspended ends, the chain makes an angle \u03b8 with the vertical.",
    given: ["Chain mass: m (uniform)","Angle with vertical at endpoints: \u03b8","Two symmetric support points"],
    images: [{src:"discgolf",cls:"",alt:"Disc Golf Cage"},{src:"chain",cls:"",alt:"Chain Diagram"}],
    questions: [
      {
        text: "What is the normal (vertical) force from one hook on the chain end?",
        unit: "",
        type: "symbolic",
        answers: ["mg/2","(mg)/2","(1/2)mg","m*g/2","0.5mg","mg*0.5"],
        hints: [
          "\u{1F4A1} Hint 1: The system is in static equilibrium. The two hooks together must support the entire weight mg. By symmetry, what does each hook support?",
          "\u{1F4A1} Hint 2: Each hook supports exactly half the chain\u2019s weight. The normal force is vertical and equals mg/2.",
          "\u2705 Answer: N = mg/2, so the coefficient is 0.5."
        ]
      },
      {
        text: "What is the tension at the lowest point of the chain? (evaluate for \u03b8 = 30\u00b0)",
        unit: "tan(θ)",
        answer: 0.577, tol: 0.015,
        hints: [
          "\u{1F4A1} Hint 1: At the lowest point the chain is horizontal, so the tension there is purely horizontal. At the endpoint, the tension has both vertical and horizontal components.",
          "\u{1F4A1} Hint 2: Vertical component at endpoint = mg/2 = T_end\u00b7cos\u03b8. Horizontal component = T_end\u00b7sin\u03b8 = tension at bottom. So T_bottom = (mg/2)\u00b7tan\u03b8.",
          "\u2705 Answer: T_bottom = (mg/2)\u00b7tan\u03b8. For \u03b8=30\u00b0: tan(30\u00b0) \u2248 0.577."
        ]
      }
    ]
  },
  {
    id: "flyingpig", label: "Room 10 (HS)", icon: "\u{1F416}", difficulty: "medium",
    pctX: 83, pctY: 55,
    section: "3 \u2014 Linear Momentum", title: "3.1 Flying Pigs",
    subtitle: "Room 10, High School Building (near Field 12)",
    intro: "A flying pig of mass m is suspended from the ceiling in room 10 at an initial height h above the ground. The string can hold a maximum tension of F\u2098\u2090\u2093 before snapping. Unfortunately, one of the students, Einra pulls the pig too hard while in an AP Physics lab and the pig falls to the ground and does not rebound.",
    given: ["Pig mass: m","Initial height above ground: h","Maximum string tension: F\u2098\u2090\u2093","Air resistance: negligible","Collision duration: t seconds"],
    images: [{src:"flyingpig",cls:"full",alt:"Room 10 Flying Pig"}],
    questions: [
      {
        text: "What is the minimum force Einra must have applied to snap the string?",
        unit: "",
        type: "symbolic",
        answers: ["fmax-mg","f_max-mg","fmax-mg","(fmax-mg)","fmax - mg","f_max - mg"],
        hints: [
          "\u{1F4A1} Hint 1: The string tension T = mg + F_Einra (Einra pulls the pig downward, so the string must support the pig\u2019s weight plus the applied force... wait, which direction does Einra pull?",
          "\u{1F4A1} Hint 2: If Einra pulls DOWN on the pig, string tension = mg - F. That won\u2019t snap the string. Einra must pull the pig sideways or upward so the effective tension increases. The minimum extra force needed is F_max - mg.",
          "\u2705 Answer: F_min = F_max - mg. For F_max = 2mg: F_min = mg, so the coefficient is 1.0."
        ]
      },
      {
        text: "What is the impulse delivered to the pig by the ground?",
        unit: "N·s",
        answer: 1.0, tol: 0.02,
        hints: [
          "\u{1F4A1} Hint 1: Impulse = change in momentum = m\u00b7\u0394v. What is the pig\u2019s velocity just before hitting the ground? What is it after (no rebound)?",
          "\u{1F4A1} Hint 2: Just before impact: v = \u221a(2gh) downward (kinematics). Just after: v = 0. So \u0394v = \u221a(2gh) upward, and J = m\u221a(2gh).",
          "\u2705 Answer: J = m\u221a(2gh), so the coefficient k = 1."
        ]
      },
      {
        text: "What is the average force exerted on the pig by the ground during the collision?",
        unit: "N",
        answer: 1.0, tol: 0.02,
        hints: [
          "\u{1F4A1} Hint 1: Average force = impulse \u00f7 collision time. You found the impulse in the previous part.",
          "\u{1F4A1} Hint 2: F_avg = J/t = m\u221a(2gh)/t. The coefficient is therefore 1.",
          "\u2705 Answer: F_avg = m\u221a(2gh)/t, coefficient k = 1."
        ]
      }
    ]
  },
  {
    id: "gym", label: "Gym (Building C)", icon: "\u{1F3CB}", difficulty: "easy",
    pctX: 61, pctY: 68,
    section: "4 \u2014 Work, Energy, Power", title: "4.1 Gym Curtain",
    subtitle: "Gymnasium \u2014 Building C",
    intro: "Mr. Yhtraccm needs to bring the gym curtain down to separate the gym into two separate areas. Assume the curtain has mass m and that mass is uniformly distributed throughout the material. If the gym is h meters tall and the curtain is lowered so that it is just long enough to touch both the top and bottom of the gym.",
    given: ["Curtain mass: m (uniformly distributed)","Gym height: h meters","Curtain initially fully raised","Curtain finally spans full height h","Wayland: g = 11.4 N/kg (for part 3)"],
    images: [{src:"curtain_up",cls:"",alt:"Raised Curtain"},{src:"curtain_down",cls:"",alt:"Lowered Curtain"}],
    questions: [
      {
        text: "What is the change in potential energy of the curtain-Earth system?",
        unit: "",
        type: "symbolic",
        answers: ["-mgh/2","-(mgh)/2","-(1/2)mgh","-mgh*0.5","-0.5mgh","-mgh·0.5","mgh/2*-1"],
        hints: [
          "\u{1F4A1} Hint 1: PE = mgh_cm. Find the center of mass height before (curtain fully rolled up at top) and after (curtain spans full height h).",
          "\u{1F4A1} Hint 2: Initially CM is at height h (top). Finally the curtain spans 0 to h uniformly, so CM is at h/2. \u0394PE = mg(h/2 - h).",
          "\u2705 Answer: \u0394PE = mg(h/2 - h) = -mgh/2. Coefficient k = -0.5."
        ]
      },
      {
        text: "How much work do the cables do on the curtain throughout the process?",
        unit: "",
        type: "symbolic",
        answers: ["-mgh/2","-(mgh)/2","-(1/2)mgh","-mgh*0.5","-0.5mgh","-mgh·0.5"],
        hints: [
          "\u{1F4A1} Hint 1: Use the work-energy theorem. The curtain starts and ends at rest (\u0394KE = 0). Two forces do work: gravity and the cables.",
          "\u{1F4A1} Hint 2: W_net = \u0394KE = 0, so W_gravity + W_cables = 0. W_gravity = -\u0394PE = +mgh/2. Therefore W_cables = -mgh/2.",
          "\u2705 Answer: W_cables = -mgh/2. Coefficient k = -0.5."
        ]
      },
      {
        text: "Imagine this process happens in Wayland, where local students believe the gravitational field is 11.4 Newtons per kilogram. Assuming their blissful naivety coincides with reality, would the magnitude of the work done by the cables be greater (1) or less (0) than in a normal town?",
        unit: "(1 or 0)",
        answer: 1, tol: 0.1,
        hints: [
          "\u{1F4A1} Hint 1: W_cables = -mgh/2. If g is larger, what happens to the magnitude of W_cables?",
          "\u{1F4A1} Hint 2: |W_cables| = mgh/2. With g = 11.4 > 9.8, the magnitude increases.",
          "\u2705 Answer: |W_cables| is GREATER in Wayland. Enter 1."
        ]
      }
    ]
  },
  {
    id: "tennis", label: "Tennis Courts", icon: "\u{1F3BE}", difficulty: "hard",
    pctX: 26, pctY: 68,
    section: "5 \u2014 Energy & Momentum of Rotating Systems", title: "5.1 Tennis Serve",
    subtitle: "Tennis Courts (right of Field 3)",
    intro: "Tennis is the greatest racket sport in existence, and Peter Chen is the star player on the Weston High School tennis team. Despite standing a mere 5 foot 5, he possesses a powerful serve, serving the ball at 110 mph imparting a spin of 3000 rpm upon it, which can be modelled as a hollow sphere of 58g with radius 33mm.",
    given: ["Serve speed: 110 mph = 49.17 m/s","Spin: 3000 rpm \u21d2 \u03c9 = 314.2 rad/s","Ball mass: m = 0.058 kg","Ball radius: r = 0.033 m","Model: hollow sphere (I = \u2154mr\u00b2)"],
    images: [{src:"tennis",cls:"full",alt:"Peter Chen Serving"}],
    questions: [
      {
        text: "Translational kinetic energy of the ball immediately after contact.",
        unit: "J",
        answer: 70.1, tol: 0.02,
        hints: [
          "\u{1F4A1} Hint 1: KE_trans = \u00bdmv\u00b2. Convert 110 mph to m/s first (1 mph = 0.44704 m/s).",
          "\u{1F4A1} Hint 2: v = 110 \u00d7 0.44704 = 49.17 m/s. KE_trans = 0.5 \u00d7 0.058 \u00d7 49.17\u00b2.",
          "\u2705 Answer: KE_trans = 0.5 \u00d7 0.058 \u00d7 2417.7 \u2248 70.1 J."
        ]
      },
      {
        text: "Total kinetic energy (translational + rotational) of the ball.",
        unit: "J",
        answer: 72.2, tol: 0.02,
        hints: [
          "\u{1F4A1} Hint 1: KE_rot = \u00bdI\u03c9\u00b2. For a hollow sphere, I = (2/3)mr\u00b2. Convert 3000 rpm to rad/s: \u03c9 = 3000 \u00d7 2\u03c0/60.",
          "\u{1F4A1} Hint 2: I = (2/3)(0.058)(0.033)\u00b2 = 4.21\u00d710\u207b\u2075 kg\u00b7m\u00b2. \u03c9 = 314.2 rad/s. KE_rot = 0.5 \u00d7 4.21\u00d710\u207b\u2075 \u00d7 314.2\u00b2 \u2248 2.08 J.",
          "\u2705 Answer: KE_total = 70.1 + 2.08 \u2248 72.2 J."
        ]
      },
      {
        text: "Speed of the point at the bottom of the ball at the moment it reaches the ground (topspin).",
        unit: "m/s",
        answer: 38.8, tol: 0.02,
        hints: [
          "\u{1F4A1} Hint 1: For a rolling/spinning ball, each point\u2019s velocity = v_cm + \u03c9\u00d7r (vector sum). For topspin moving forward, which direction does the bottom of the ball rotate?",
          "\u{1F4A1} Hint 2: With topspin, the bottom of the ball moves backward relative to the center. So v_bottom = v_cm - \u03c9r (both in the forward direction).",
          "\u2705 Answer: v_bottom = 49.17 - 314.2\u00d70.033 = 49.17 - 10.37 \u2248 38.8 m/s forward."
        ]
      }
    ]
  },
  {
    id: "pool", label: "Pool (Building A)", icon: "\u{1F3CA}", difficulty: "easy",
    pctX: 54, pctY: 31,
    section: "6 \u2014 Oscillations", title: "6.1 Standing Waves in the Pool",
    subtitle: "Weston Middle School Pool \u2014 Building A",
    intro: "Mr. McLaughlin is worried that Wayland may take down our Weston Glow in swimming this season. So, he devises a new workout plan that requires students to swim in a rhythmic fashion. In doing so, he realizes that standing waves appear in lane lines floating on the water. Given that the pool has length l.",
    given: ["Pool length: l","He observes n waves in an interval of t seconds","Both ends are fixed (nodes)"],
    images: [{src:"pool",cls:"full",alt:"WMS Pool"}],
    questions: [
      {
        text: "What are the three smallest wavelengths he could be observing? Enter the largest of the three (the fundamental).",
        unit: "",
        type: "symbolic",
        answers: ["2l","2*l","l*2"],
        hints: [
          "\u{1F4A1} Hint 1: For standing waves fixed at both ends, the pool must fit an integer number of half-wavelengths: l = n\u00b7(\u03bb/2), giving \u03bb_n = 2l/n for n = 1, 2, 3\u2026 The three smallest wavelengths correspond to which values of n?",
          "\u{1F4A1} Hint 2: Smallest wavelengths = largest n. But the question asks what wavelengths he \u2018could be observing\u2019 \u2014 the three simplest observable modes are n=1,2,3, giving \u03bb = 2l, l, 2l/3.",
          "\u2705 Answer: The three smallest wavelengths are 2l (n=1), l (n=2), and 2l/3 (n=3). The largest of these is 2l."
        ]
      },
      {
        text: "What is the second of the three smallest wavelengths?",
        unit: "",
        type: "symbolic",
        answers: ["l","1*l","l*1"],
        hints: [
          "\u{1F4A1} Hint 1: Use \u03bb_n = 2l/n. For n=2, what is \u03bb?",
          "\u{1F4A1} Hint 2: \u03bb\u2082 = 2l/2 = l. The pool fits exactly one complete wavelength.",
          "\u2705 Answer: \u03bb\u2082 = l."
        ]
      },
      {
        text: "What is the third of the three smallest wavelengths?",
        unit: "",
        type: "symbolic",
        answers: ["2l/3","(2l)/3","2*l/3","(2/3)l","(2/3)*l"],
        hints: [
          "\u{1F4A1} Hint 1: Use \u03bb_n = 2l/n with n=3.",
          "\u{1F4A1} Hint 2: \u03bb\u2083 = 2l/3. The pool fits exactly 1.5 wavelengths.",
          "\u2705 Answer: \u03bb\u2083 = 2l/3."
        ]
      },
      {
        text: "He observes n waves in an interval of t seconds. What is the largest of the three smallest wave speeds he could be observing?",
        unit: "",
        type: "symbolic",
        answers: ["2ln/t","2l*n/t","2*l*n/t","(2ln)/t","2ln/t"],
        hints: [
          "\u{1F4A1} Hint 1: Wave speed v = \u03bb \u00d7 f. The observed frequency is f = n/t. Pair each wavelength (\u03bb = 2l, l, 2l/3) with this frequency to find three possible speeds.",
          "\u{1F4A1} Hint 2: v\u2081 = 2l \u00d7 (n/t) = 2ln/t, v\u2082 = l \u00d7 (n/t) = ln/t, v\u2083 = (2l/3) \u00d7 (n/t) = 2ln/3t. The largest is v\u2081.",
          "\u2705 Answer: The three smallest wave speeds are 2ln/3t, ln/t, and 2ln/t. The largest is 2ln/t."
        ]
      },
      {
        text: "What is the second of the three smallest wave speeds?",
        unit: "",
        type: "symbolic",
        answers: ["ln/t","l*n/t","(ln)/t","l*n/t"],
        hints: [
          "\u{1F4A1} Hint 1: v = \u03bb \u00d7 f = \u03bb \u00d7 (n/t). Use the second wavelength \u03bb\u2082 = l.",
          "\u{1F4A1} Hint 2: v\u2082 = l \u00d7 (n/t) = ln/t.",
          "\u2705 Answer: v\u2082 = ln/t."
        ]
      },
      {
        text: "What is the smallest of the three smallest wave speeds?",
        unit: "",
        type: "symbolic",
        answers: ["2ln/3t","(2ln)/3t","2*l*n/(3*t)","2ln/(3t)","(2/3)ln/t"],
        hints: [
          "\u{1F4A1} Hint 1: v = \u03bb \u00d7 f = \u03bb \u00d7 (n/t). Use the third wavelength \u03bb\u2083 = 2l/3.",
          "\u{1F4A1} Hint 2: v\u2083 = (2l/3) \u00d7 (n/t) = 2ln/3t.",
          "\u2705 Answer: v\u2083 = 2ln/3t."
        ]
      }
    ]
  }
];

// ── State ──────────────────────────────────────────────────────────────────────
var state = {}; // keyed by "problemId_qIndex": { attempts, solved }
problems.forEach(function(p) {
  p.questions.forEach(function(q, qi) {
    state[p.id + "_" + qi] = { attempts: 0, solved: false };
  });
});
var solvedProblems = {};

// ── Utilities ──────────────────────────────────────────────────────────────────
function checkAnswer(userVal, q) {
  if (q.type === "symbolic") {
    var v = userVal.trim().toLowerCase().replace(/\s+/g, "").replace(/[*\u00d7]/g, "");
    return q.answers.some(function(a) {
      return v === a.toLowerCase().replace(/\s+/g, "").replace(/[*\u00d7]/g, "");
    });
  }
  var u = parseFloat(userVal);
  if (isNaN(u)) return false;
  return Math.abs(u - q.answer) / (Math.abs(q.answer) || 1) <= q.tol;
}

// ── Render dots ────────────────────────────────────────────────────────────────
function renderDots() {
  var layer = document.getElementById("dotLayer");
  layer.innerHTML = "";
  problems.forEach(function(p, i) {
    var dot = document.createElement("div");
    dot.className = "problem-dot " + p.difficulty;
    dot.id = "dot_" + p.id;
    dot.style.left = p.pctX + "%";
    dot.style.top  = p.pctY + "%";
    dot.setAttribute("role","button");
    dot.setAttribute("tabindex","0");
    dot.setAttribute("aria-label", p.title);
    dot.innerHTML =
      '<div class="dot-ring" style="animation-delay:' + (i*0.45) + 's">' +
        '<span class="dot-icon">' + p.icon + '</span>' +
      '</div>' +
      '<div class="dot-label">' + p.label + '</div>';
    dot.addEventListener("click",  function() { openModal(p); });
    dot.addEventListener("keydown", function(e) { if (e.key==="Enter"||e.key===" ") openModal(p); });
    layer.appendChild(dot);
  });
  updateProgress();
}

function updateProgress() {
  var row = document.getElementById("progressRow");
  row.innerHTML = "";
  problems.forEach(function(p) {
    var pip = document.createElement("div");
    pip.className = "prog-pip" + (solvedProblems[p.id] ? " done" : "");
    pip.title = p.title;
    row.appendChild(pip);
    // Also update dot
    var dot = document.getElementById("dot_" + p.id);
    if (dot && solvedProblems[p.id]) dot.classList.add("solved");
  });
}

// ── Open modal ────────────────────────────────────────────────────────────────
function openModal(p) {
  var tag = document.getElementById("modalTag");
  tag.innerHTML = p.section;
  tag.className = "modal-tag " + p.difficulty;
  document.getElementById("modalTitle").innerHTML = p.title;
  document.getElementById("modalSubtitle").textContent = p.subtitle;

  var imgsHtml = "";
  if (p.images && p.images.length) {
    imgsHtml = '<div class="problem-images">';
    p.images.forEach(function(img) {
      imgsHtml += '<img loading="lazy" src="' + IMG[img.src] + '" alt="' + img.alt + '" class="' + img.cls + '">';
    });
    imgsHtml += "</div>";
  }

  var givenHtml = '<div class="given-box"><strong>Given</strong><ul>' +
    p.given.map(function(g) { return "<li>\u2022 " + g + "</li>"; }).join("") +
    "</ul></div>";

  var questionsHtml = p.questions.map(function(q, qi) {
    var key = p.id + "_" + qi;
    var s = state[key];
    return buildQuestion(p, q, qi, s);
  }).join("");

  document.getElementById("modalBody").innerHTML =
    '<p class="modal-intro">' + p.intro + "</p>" +
    imgsHtml + givenHtml + questionsHtml;

  // Attach events
  p.questions.forEach(function(q, qi) {
    attachQuestionEvents(p, q, qi);
  });

  document.getElementById("modalOverlay").classList.add("active");
}

function buildQuestion(p, q, qi, s) {
  var key = p.id + "_" + qi;
  var maxAttempts = 3;
  var remaining = maxAttempts - s.attempts;
  var disabled = s.solved || remaining <= 0;

  var pipsHtml = "";
  for (var i = 0; i < maxAttempts; i++) {
    var cls;
    if (s.solved && i === s.attempts - 1) cls = "pip correct";
    else if (i < s.attempts - (s.solved ? 1 : 0)) cls = "pip used";
    else cls = "pip active";
    pipsHtml += '<div class="' + cls + '"></div>';
  }

  var attemptsLabel = s.solved ? "\u2705 Solved!" :
    (remaining <= 0 ? "No attempts remaining \u2014 see answer below" :
    remaining + " attempt" + (remaining===1?"":"s") + " remaining");

  var feedbackHtml = "";
  if (s.solved) {
    feedbackHtml = '<div class="q-feedback correct show">\u2705 Correct! Well done.</div>';
  } else if (s.attempts > 0 && s.attempts < maxAttempts) {
    feedbackHtml = '<div class="q-feedback hint show" id="fb_' + key + '">\u274C Incorrect. ' + q.hints[s.attempts-1] + '</div>';
  } else if (s.attempts >= maxAttempts) {
    feedbackHtml = '<div class="q-feedback revealed show" id="fb_' + key + '">' + q.hints[maxAttempts-1] + '</div>';
  } else {
    feedbackHtml = '<div class="q-feedback" id="fb_' + key + '"></div>';
  }

  return '<div class="q-block ' + p.difficulty + '" id="qblock_' + key + '">' +
    '<div class="q-statement"><span class="q-num">Q' + (qi+1) + '</span>' + q.text + '</div>' +
    '<div class="q-answer-area">' +
      '<div class="q-attempts">' +
        '<div class="attempt-pips">' + pipsHtml + '</div>' +
        '<span>' + attemptsLabel + '</span>' +
      '</div>' +
      '<div class="q-input-row">' +
        '<input class="q-input' + (s.solved?" correct":remaining<=0?" wrong":"") + '" id="inp_' + key + '" type="' + (q.type==="symbolic"?"text":"number") + '" ' + (q.type==="symbolic"?"":"step=\"any\" ") + 'placeholder="' + (q.type==="symbolic"?"e.g. mg/3\u2026":"Your answer\u2026") + '"' + (disabled?" disabled":"") + ' value="' + (s.solved||remaining<=0?(q.type==="symbolic"?q.answers[0]:q.answer):"") + '">' +
        '<span class="q-unit">' + q.unit + '</span>' +
        '<button class="q-submit" id="btn_' + key + '"' + (disabled?" disabled":"") + '>Check</button>' +
      '</div>' +
      feedbackHtml +
    '</div>' +
  '</div>';
}

function attachQuestionEvents(p, q, qi) {
  var key = p.id + "_" + qi;
  var btn = document.getElementById("btn_" + key);
  var inp = document.getElementById("inp_" + key);
  if (!btn || !inp) return;

  function submit() {
    var s = state[key];
    if (s.solved || s.attempts >= 3) return;
    s.attempts++;
    var correct = checkAnswer(inp.value, q);
    if (correct) {
      s.solved = true;
      inp.classList.add("correct"); inp.classList.remove("wrong");
      inp.disabled = true; btn.disabled = true;
      var fb = document.getElementById("fb_" + key);
      if (fb) { fb.className = "q-feedback correct show"; fb.innerHTML = "\u2705 Correct! Well done."; }
      // update pips and label
      refreshQuestion(p, q, qi, s);
      // check if all questions solved
      checkProblemSolved(p);
    } else {
      inp.classList.add("wrong"); inp.classList.remove("correct");
      var remaining = 3 - s.attempts;
      var fb = document.getElementById("fb_" + key);
      if (remaining === 0) {
        inp.disabled = true; btn.disabled = true;
        if (fb) { fb.className = "q-feedback revealed show"; fb.innerHTML = q.hints[2]; }
      } else {
        if (fb) { fb.className = "q-feedback hint show"; fb.innerHTML = "\u274C Incorrect. " + q.hints[s.attempts-1]; }
      }
      refreshQuestion(p, q, qi, s);
    }
  }

  btn.addEventListener("click", submit);
  inp.addEventListener("keydown", function(e) { if (e.key==="Enter") submit(); });
}

function refreshQuestion(p, q, qi, s) {
  var key = p.id + "_" + qi;
  var block = document.getElementById("qblock_" + key);
  if (!block) return;
  var maxAttempts = 3;
  var remaining = maxAttempts - s.attempts;
  var pipsHtml = "";
  for (var i = 0; i < maxAttempts; i++) {
    var cls;
    if (s.solved && i === s.attempts - 1) cls = "pip correct";
    else if (i < s.attempts - (s.solved ? 1 : 0)) cls = "pip used";
    else cls = "pip active";
    pipsHtml += '<div class="' + cls + '"></div>';
  }
  var attemptsLabel = s.solved ? "\u2705 Solved!" :
    (remaining <= 0 ? "No attempts remaining" :
    remaining + " attempt" + (remaining===1?"":"s") + " remaining");
  var pipsEl = block.querySelector(".attempt-pips");
  var labelEl = block.querySelector(".q-attempts span");
  if (pipsEl) pipsEl.innerHTML = pipsHtml;
  if (labelEl) labelEl.textContent = attemptsLabel;
}

function checkProblemSolved(p) {
  var allSolved = p.questions.every(function(q, qi) {
    return state[p.id + "_" + qi].solved;
  });
  if (allSolved) {
    solvedProblems[p.id] = true;
    updateProgress();
  }
}

// ── Close modal ───────────────────────────────────────────────────────────────
document.getElementById("modalClose").addEventListener("click", function() {
  document.getElementById("modalOverlay").classList.remove("active");
});
document.getElementById("modalOverlay").addEventListener("click", function(e) {
  if (e.target === document.getElementById("modalOverlay"))
    document.getElementById("modalOverlay").classList.remove("active");
});
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") document.getElementById("modalOverlay").classList.remove("active");
});

renderDots();
