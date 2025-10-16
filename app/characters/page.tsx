export default function Characters() {
  const characters = [
    {
      name: 'BRICK',
      role: 'Tank Warrior',
      description: 'The heavy hitter of the team. BRICK specializes in close-quarters combat with devastating melee attacks and unmatched survivability.',
      weapon: 'Sledgehammer',
      armor: 'Heavy Armor',
      playstyle: 'Front-line tank that can absorb massive damage while dishing out devastating melee strikes. Perfect for aggressive players who want to control choke points.',
      strengths: [
        'Highest survivability',
        'Devastating melee damage',
        'Can wear heavy armor',
        'Controls close-range encounters'
      ],
      weaknesses: [
        'Limited at range',
        'Slower movement speed',
        'Vulnerable to ranged attacks',
        'Requires close positioning'
      ]
    },
    {
      name: 'CROW',
      role: 'Assassin',
      description: 'Swift and deadly. CROW excels at quick, precise strikes and fast-paced combat with exceptional mobility.',
      weapon: 'Daggers',
      armor: 'Light Armor',
      playstyle: 'Hit-and-run assassin focused on mobility and quick kills. Ideal for players who prefer stealth and aggressive flanking maneuvers.',
      strengths: [
        'Highest mobility',
        'Fast attack speed',
        'Excellent for flanking',
        'Quick escapes'
      ],
      weaknesses: [
        'Lower health pool',
        'Light armor only',
        'Risky playstyle',
        'Less forgiving of mistakes'
      ]
    },
    {
      name: 'LOCKDOWN',
      role: 'Sniper',
      description: 'Master of ranged combat. LOCKDOWN dominates from a distance with precision bow attacks and tactical positioning.',
      weapon: 'Bow',
      armor: 'Medium Armor',
      playstyle: 'Long-range specialist who controls sightlines and picks off enemies from safety. Best for tactical players who plan their engagements.',
      strengths: [
        'Superior range',
        'High damage per shot',
        'Safe engagement distance',
        'Controls sightlines'
      ],
      weaknesses: [
        'Vulnerable in close quarters',
        'Requires good aim',
        'Slower fire rate',
        'Limited in tight spaces'
      ]
    },
    {
      name: 'BARTENDER',
      role: 'Support',
      description: 'The team\'s lifeline. BARTENDER crafts powerful cocktails that provide healing and buffs, keeping the squad alive.',
      weapon: 'Mixed Weapons',
      armor: 'Medium Armor',
      playstyle: 'Support class that enables team survival through healing cocktails and buffs. Essential for team-based strategies and long raids.',
      strengths: [
        'Healing capabilities',
        'Team buffs',
        'Versatile equipment options',
        'Force multiplier in groups'
      ],
      weaknesses: [
        'Resource dependent',
        'Less combat-focused',
        'Requires team coordination',
        'Needs crafting materials'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-[var(--accent)]">Character Classes</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Choose your playstyle. Each of the 4 character classes features unique perks, weapon restrictions, and tactical advantages.
        </p>
      </div>

      <div className="mb-12 p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-[var(--accent)]">Class System Overview</h2>
        <div className="text-gray-300 space-y-3">
          <p>
            The Midnight Walkers features a class-based system where each character has distinct advantages and limitations:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Each class has unique perks that define their playstyle</li>
            <li>Weapon and gear restrictions are class-specific</li>
            <li>Classes complement each other in team compositions</li>
            <li>Choose based on your preferred combat style and role</li>
          </ul>
        </div>
      </div>

      <div className="space-y-8">
        {characters.map((char, index) => (
          <div key={index} className="p-8 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-all">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h2 className="text-4xl font-bold mb-2">{char.name}</h2>
                <p className="text-xl text-[var(--accent)] font-semibold">{char.role}</p>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col gap-2">
                <div className="px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded">
                  <span className="text-sm text-gray-400">Primary Weapon:</span>
                  <p className="font-semibold">{char.weapon}</p>
                </div>
                <div className="px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded">
                  <span className="text-sm text-gray-400">Armor Type:</span>
                  <p className="font-semibold">{char.armor}</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 text-lg">{char.description}</p>

            <div className="mb-6 p-4 bg-[var(--background)] border border-[var(--border)] rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[var(--accent)]">Playstyle</h3>
              <p className="text-gray-300">{char.playstyle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-500">Strengths</h3>
                <ul className="space-y-2">
                  {char.strengths.map((strength, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-red-500">Weaknesses</h3>
                <ul className="space-y-2">
                  {char.weaknesses.map((weakness, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-red-500 mr-2 mt-1">✗</span>
                      <span>{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">Team Composition Tips</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            <strong className="text-white">Balanced Trio:</strong> BRICK (front-line), LOCKDOWN (ranged support), and BARTENDER (healing) creates a well-rounded team capable of handling most situations.
          </p>
          <p>
            <strong className="text-white">Aggressive Composition:</strong> BRICK + 2 CROW assassins for fast, overwhelming pressure and high mobility.
          </p>
          <p>
            <strong className="text-white">Defensive Setup:</strong> LOCKDOWN + BARTENDER + BRICK for sustained firefights with healing support and strong defensive positions.
          </p>
          <p>
            <strong className="text-white">Solo Play:</strong> All classes are viable solo. BRICK offers survivability, CROW provides escape options, LOCKDOWN enables safe engagements, and BARTENDER brings self-sufficiency.
          </p>
        </div>
      </div>
    </div>
  );
}
