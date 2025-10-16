export default function Weapons() {
  const meleeWeapons = [
    {
      name: 'Dagger',
      type: 'Fast Melee',
      class: 'CROW',
      description: 'Lightning-fast strikes with low damage per hit but exceptional attack speed.',
      strengths: ['Fastest attack speed', 'Great for hit-and-run', 'Low stamina cost'],
      weaknesses: ['Low damage per hit', 'Very short range', 'Requires many strikes to kill']
    },
    {
      name: 'Katana',
      type: 'Fast Melee',
      class: 'Multiple Classes',
      description: 'Balanced melee weapon with good reach and moderate damage.',
      strengths: ['Decent reach', 'Balanced stats', 'Stylish combat'],
      weaknesses: ['Medium damage', 'Not specialized', 'Outclassed by focused builds']
    },
    {
      name: 'Sledgehammer',
      type: 'Heavy Strike',
      class: 'BRICK',
      description: 'Devastating heavy weapon that crushes enemies with massive damage per swing.',
      strengths: ['Highest melee damage', 'Stuns enemies', 'Breaks through armor'],
      weaknesses: ['Slow attack speed', 'High stamina cost', 'Easy to dodge']
    }
  ];

  const rangedWeapons = [
    {
      name: 'Bow',
      type: 'Ranged',
      class: 'LOCKDOWN',
      description: 'Silent long-range weapon perfect for precision eliminations.',
      strengths: ['Silent shots', 'Long range', 'High damage per shot', 'No ammo scarcity'],
      weaknesses: ['Slow fire rate', 'Projectile drop', 'Requires good aim', 'Vulnerable in CQC']
    },
    {
      name: 'Assault Rifles',
      type: 'Ranged',
      class: 'Multiple Classes',
      description: 'Versatile automatic weapons effective at medium range.',
      strengths: ['Full auto fire', 'Good accuracy', 'Versatile range', 'Reliable damage'],
      weaknesses: ['Ammo dependent', 'Loud', 'Attracts attention', 'Moderate recoil']
    },
    {
      name: 'Pistols',
      type: 'Ranged',
      class: 'All Classes',
      description: 'Sidearm weapons for backup and close encounters.',
      strengths: ['Quick draw', 'Light weight', 'Common ammo', 'Good backup'],
      weaknesses: ['Low damage', 'Limited range', 'Small magazine', 'Weak vs armor']
    }
  ];

  const armorTypes = [
    {
      name: 'Heavy Armor',
      class: 'BRICK',
      protection: 'Maximum',
      mobility: 'Low',
      description: 'Maximum protection at the cost of mobility. Can withstand massive damage.'
    },
    {
      name: 'Medium Armor',
      class: 'LOCKDOWN, BARTENDER',
      protection: 'Moderate',
      mobility: 'Moderate',
      description: 'Balanced protection and mobility for versatile playstyles.'
    },
    {
      name: 'Light Armor',
      class: 'CROW',
      protection: 'Minimal',
      mobility: 'Maximum',
      description: 'Minimal protection but maximum speed and agility for hit-and-run tactics.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-[var(--accent)]">Weapons & Gear</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Complete arsenal guide - from fast melee strikes to devastating ranged weapons
        </p>
      </div>

      {/* Important Note */}
      <div className="mb-12 p-6 bg-[var(--card-bg)] border border-[var(--accent)] rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-[var(--accent)]">Class Restrictions</h2>
        <p className="text-gray-300">
          Each character class can only use specific weapons and gear. Plan your loadout according to your chosen class and playstyle.
        </p>
      </div>

      {/* Melee Weapons */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-center">Melee Weapons</h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          Close-quarters combat weapons ranging from lightning-fast daggers to devastating heavy strikes
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {meleeWeapons.map((weapon, index) => (
            <div key={index} className="p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-all">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">{weapon.name}</h3>
                <div className="flex gap-2 mb-2">
                  <span className="px-3 py-1 bg-[var(--background)] border border-[var(--border)] rounded text-sm">
                    {weapon.type}
                  </span>
                  <span className="px-3 py-1 bg-[var(--accent)] text-white rounded text-sm font-semibold">
                    {weapon.class}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{weapon.description}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-green-500">Strengths</h4>
                  <ul className="space-y-1">
                    {weapon.strengths.map((strength, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-500">Weaknesses</h4>
                  <ul className="space-y-1">
                    {weapon.weaknesses.map((weakness, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ranged Weapons */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-center">Ranged Weapons</h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          Distance combat weapons for various engagement ranges and tactical situations
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {rangedWeapons.map((weapon, index) => (
            <div key={index} className="p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-all">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">{weapon.name}</h3>
                <div className="flex gap-2 mb-2">
                  <span className="px-3 py-1 bg-[var(--background)] border border-[var(--border)] rounded text-sm">
                    {weapon.type}
                  </span>
                  <span className="px-3 py-1 bg-[var(--accent)] text-white rounded text-sm font-semibold">
                    {weapon.class}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{weapon.description}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-green-500">Strengths</h4>
                  <ul className="space-y-1">
                    {weapon.strengths.map((strength, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-500">Weaknesses</h4>
                  <ul className="space-y-1">
                    {weapon.weaknesses.map((weakness, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Armor */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-center">Armor Types</h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          Protection levels determine your survivability and mobility in combat
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {armorTypes.map((armor, index) => (
            <div key={index} className="p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{armor.name}</h3>
              <span className="inline-block px-3 py-1 bg-[var(--accent)] text-white rounded text-sm font-semibold mb-4">
                {armor.class}
              </span>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Protection:</span>
                  <span className={`font-semibold ${
                    armor.protection === 'Maximum' ? 'text-green-500' :
                    armor.protection === 'Moderate' ? 'text-yellow-500' :
                    'text-red-500'
                  }`}>{armor.protection}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Mobility:</span>
                  <span className={`font-semibold ${
                    armor.mobility === 'Maximum' ? 'text-green-500' :
                    armor.mobility === 'Moderate' ? 'text-yellow-500' :
                    'text-red-500'
                  }`}>{armor.mobility}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm">{armor.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Loadout Tips */}
      <div className="mb-12 p-8 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">Loadout Strategies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Early Game</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2 mt-1">▸</span>
                <span><strong className="text-white">Minimize Risk:</strong> Use cheap, easily replaced gear</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2 mt-1">▸</span>
                <span><strong className="text-white">Focus on Survival:</strong> Prioritize extraction over kills</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2 mt-1">▸</span>
                <span><strong className="text-white">Build Stash:</strong> Collect materials and basic weapons</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2 mt-1">▸</span>
                <span><strong className="text-white">Avoid PvP:</strong> Run from fights you don't need</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Late Game</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2 mt-1">▸</span>
                <span><strong className="text-white">Optimal Gear:</strong> Use best-in-class weapons and armor</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2 mt-1">▸</span>
                <span><strong className="text-white">Hunt High Value:</strong> Target casino and premium loot</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2 mt-1">▸</span>
                <span><strong className="text-white">Engage PvP:</strong> Confident fights for player loot</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2 mt-1">▸</span>
                <span><strong className="text-white">Craft Specialized:</strong> Custom gear for your playstyle</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Class-Specific Loadouts */}
      <div className="p-8 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">Recommended Class Loadouts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
            <h3 className="text-xl font-bold mb-3">BRICK - Tank</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><strong className="text-white">Weapon:</strong> Sledgehammer</li>
              <li><strong className="text-white">Armor:</strong> Heavy Armor (max protection)</li>
              <li><strong className="text-white">Role:</strong> Front-line fighter, controls choke points</li>
              <li><strong className="text-white">Strategy:</strong> Close distance aggressively, tank damage for team</li>
            </ul>
          </div>

          <div className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
            <h3 className="text-xl font-bold mb-3">CROW - Assassin</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><strong className="text-white">Weapon:</strong> Daggers</li>
              <li><strong className="text-white">Armor:</strong> Light Armor (max mobility)</li>
              <li><strong className="text-white">Role:</strong> Flanker, hit-and-run specialist</li>
              <li><strong className="text-white">Strategy:</strong> Quick strikes, never stay still, escape routes ready</li>
            </ul>
          </div>

          <div className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
            <h3 className="text-xl font-bold mb-3">LOCKDOWN - Sniper</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><strong className="text-white">Weapon:</strong> Bow + Sidearm</li>
              <li><strong className="text-white">Armor:</strong> Medium Armor (balanced)</li>
              <li><strong className="text-white">Role:</strong> Long-range DPS, overwatch</li>
              <li><strong className="text-white">Strategy:</strong> Control sightlines, pick off targets, avoid close combat</li>
            </ul>
          </div>

          <div className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
            <h3 className="text-xl font-bold mb-3">BARTENDER - Support</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><strong className="text-white">Weapon:</strong> Versatile (Assault Rifle recommended)</li>
              <li><strong className="text-white">Armor:</strong> Medium Armor</li>
              <li><strong className="text-white">Role:</strong> Healer, team enabler</li>
              <li><strong className="text-white">Strategy:</strong> Stay alive to heal team, craft cocktails, support combat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
