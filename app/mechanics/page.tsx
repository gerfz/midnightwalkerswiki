export default function Mechanics() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-[var(--accent)]">Game Mechanics</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Master the core systems that define The Midnight Walkers experience
        </p>
      </div>

      {/* Extraction System */}
      <div className="mb-12 p-8 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">Extraction System</h2>
        <div className="space-y-4 text-gray-300">
          <p className="text-lg">
            The extraction system is the heart of The Midnight Walkers. Everything you collect during a raid is at risk until you successfully extract.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-green-500">Success</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Keep all loot collected during the raid</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Store items in your personal stash</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Sell on dark web marketplace</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Use materials for crafting</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-red-500">Failure (Death)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Lose all gear and loot from current raid</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Items can be looted by other players</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Start next raid with basic equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Stashed items remain safe</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-6 bg-[var(--background)] border border-[var(--accent)] rounded-lg">
            <h3 className="text-xl font-bold mb-3">How to Extract</h3>
            <ol className="space-y-3">
              <li className="flex">
                <span className="text-[var(--accent)] font-bold mr-3">1.</span>
                <span>Use your scanner to locate escape pods - it will beep and guide you in the right direction</span>
              </li>
              <li className="flex">
                <span className="text-[var(--accent)] font-bold mr-3">2.</span>
                <span>Navigate to the escape pod location while avoiding gas, zombies, and other players</span>
              </li>
              <li className="flex">
                <span className="text-[var(--accent)] font-bold mr-3">3.</span>
                <span>Secure the area around the extraction point</span>
              </li>
              <li className="flex">
                <span className="text-[var(--accent)] font-bold mr-3">4.</span>
                <span>Activate the escape pod and defend until extraction completes</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Poison Gas System */}
      <div className="mb-12 p-8 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">Poison Gas System</h2>
        <div className="space-y-4 text-gray-300">
          <p className="text-lg">
            A unique environmental threat that creates constant pressure and prevents camping strategies.
          </p>

          <div className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yellow-500">How It Works</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">⚠</span>
                <div>
                  <strong className="text-white">Random Floor Selection:</strong> Every few minutes, a random floor is selected
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">⚠</span>
                <div>
                  <strong className="text-white">Gas Spread:</strong> Deadly poison gas floods the entire floor
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">⚠</span>
                <div>
                  <strong className="text-white">Forced Movement:</strong> Players must use elevators or stairs to escape
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-3 mt-1">⚠</span>
                <div>
                  <strong className="text-white">Lethal Damage:</strong> Staying in gas deals continuous damage until death
                </div>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
              <h3 className="text-xl font-bold mb-3">Strategic Implications</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2 mt-1">▸</span>
                  <span>Cannot camp in one location indefinitely</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2 mt-1">▸</span>
                  <span>Forces player encounters at elevators/stairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2 mt-1">▸</span>
                  <span>Creates time pressure for looting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2 mt-1">▸</span>
                  <span>Rewards map knowledge and mobility</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
              <h3 className="text-xl font-bold mb-3">Survival Tips</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Always know where the nearest stairs are</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Watch for gas warnings and timers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Don't over-commit to looting before gas hits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Expect ambushes at elevator/stair entrances</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mb-12 p-8 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">Floor Navigation</h2>
        <div className="space-y-4 text-gray-300">
          <p className="text-lg">
            Liberty Grand Center is a 15-story vertical mega-complex. Mastering vertical movement is essential for survival.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Elevators</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2">▸</span>
                  <span><strong>Fast:</strong> Quick travel between floors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2">▸</span>
                  <span><strong>Risky:</strong> High player traffic and ambush points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2">▸</span>
                  <span><strong>Limited:</strong> Restricted elevator locations per floor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2">▸</span>
                  <span><strong>Tactical:</strong> Can be camped or trapped</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Stairs</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2">▸</span>
                  <span><strong>Slower:</strong> Takes longer to travel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2">▸</span>
                  <span><strong>Safer:</strong> Less predictable routes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2">▸</span>
                  <span><strong>Flexible:</strong> More entry/exit options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--accent)] mr-2">▸</span>
                  <span><strong>Escape:</strong> Better for evading pursuit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Progression Systems */}
      <div className="mb-12 p-8 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">Progression Systems</h2>

        <div className="space-y-6">
          <div className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Personal Stash</h3>
            <p className="text-gray-300 mb-4">
              Your secure storage for successfully extracted items. Items in your stash are safe even if you die in future raids.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2">▸</span>
                <span>Store weapons, armor, and consumables</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2">▸</span>
                <span>Organize your inventory between raids</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2">▸</span>
                <span>Build loadouts for different situations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2">▸</span>
                <span>Accumulate wealth and resources over time</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Dark Web Marketplace</h3>
            <p className="text-gray-300 mb-4">
              The game's player-driven economy where you can buy, sell, and trade items with other players.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2">▸</span>
                <span>Trade items you don't need for currency</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2">▸</span>
                <span>Purchase specific gear for your playstyle</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2">▸</span>
                <span>Market prices fluctuate based on supply/demand</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2">▸</span>
                <span>Essential for acquiring rare items</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Crafting System</h3>
            <p className="text-gray-300 mb-4">
              Convert raw materials into powerful weapons, armor, and consumables.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2">▸</span>
                <span>Scavenge materials during raids</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2">▸</span>
                <span>Craft weapons, armor, and items</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2">▸</span>
                <span>Create specialized equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent)] mr-2">▸</span>
                <span>BARTENDER can craft healing cocktails</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Liberty Grand Center */}
      <div className="mb-12 p-8 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">Liberty Grand Center</h2>
        <p className="text-lg text-gray-300 mb-6">
          A 15-story mega-complex with themed floors offering unique loot and challenges.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-[var(--background)] border border-[var(--border)] rounded-lg">
            <h3 className="font-bold text-lg mb-2">Hospital</h3>
            <p className="text-sm text-gray-400">Medical supplies and healing items</p>
          </div>
          <div className="p-4 bg-[var(--background)] border border-[var(--border)] rounded-lg">
            <h3 className="font-bold text-lg mb-2">Shopping Mall</h3>
            <p className="text-sm text-gray-400">General loot and equipment</p>
          </div>
          <div className="p-4 bg-[var(--background)] border border-[var(--border)] rounded-lg">
            <h3 className="font-bold text-lg mb-2">Casino</h3>
            <p className="text-sm text-gray-400">High-value loot with high risk</p>
          </div>
          <div className="p-4 bg-[var(--background)] border border-[var(--border)] rounded-lg">
            <h3 className="font-bold text-lg mb-2">Various Floors</h3>
            <p className="text-sm text-gray-400">12 more themed locations to explore</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-[var(--background)] border border-[var(--accent)] rounded-lg">
          <p className="text-gray-300">
            <strong className="text-white">Pro Tip:</strong> Each floor type has unique loot tables. Learn which floors contain the gear you need for your class and playstyle.
          </p>
        </div>
      </div>

      {/* Tips */}
      <div className="p-8 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-[var(--accent)]">Essential Survival Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Solo Play</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Avoid unnecessary fights - prioritize extraction</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Use stairs more than elevators to avoid ambushes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Listen for audio cues - footsteps, gunfire, zombies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Know when to cut losses and extract early</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Memorize map layouts and extraction points</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Team Play</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Coordinate class composition before raid</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Always have a BARTENDER for healing support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Share loot based on class needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Cover different angles when moving floors</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Stick together - numbers are your advantage</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
