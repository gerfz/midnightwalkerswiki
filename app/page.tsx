'use client';

import Link from 'next/link';
import { useState } from 'react';
import { floorLootPools, getFloorItems } from '@/data/items';

export default function Home() {
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allFloors = [
    { floor: 'B1F', name: 'PARKING LOT' },
    { floor: '1F', name: 'SHOPPING CENTER A' },
    { floor: '2F', name: 'SHOPPING CENTER B' },
    { floor: '3F', name: 'HOSPITAL SURGERY' },
    { floor: '4F', name: 'BROADCASTING STATION' },
    { floor: '5F', name: 'CONSTRUCTION ZONE' },
    { floor: '6F', name: 'OFFICE' },
    { floor: '7F', name: 'BOTANICAL GARDEN' },
    { floor: '8F', name: 'HOSPITAL RECEPTION' },
    { floor: '9F', name: 'BROADCASTING STATION' },
    { floor: '10F', name: 'CONSTRUCTION ZONE' },
    { floor: '11F', name: 'FITNESS CENTER' },
    { floor: '12F', name: 'CASINO' },
    { floor: '13F', name: 'HOTEL LOBBY' },
    { floor: '14F', name: 'HOTEL GUEST FLOOR' },
    { floor: '15F', name: 'PUB' },
  ];

  const itemRarities = [
    { name: 'Junk', color: '#6b7280', description: 'Worthless items' },
    { name: 'Common', color: '#9ca3af', description: 'Basic equipment' },
    { name: 'Uncommon', color: '#22c55e', description: 'Decent gear' },
    { name: 'Rare', color: '#3b82f6', description: 'Valuable items' },
    { name: 'Epic', color: '#a855f7', description: 'Premium loot' },
    { name: 'Legendary', color: '#eab308', description: 'Best in class' },
  ];

  const vendors = [
    { name: 'Rabbit Jack', role: 'Casino Runner', description: 'A hacker who runs the casino in the Liberty Grand Center' },
    { name: 'The Armsmith', role: 'Weapons & Armor', description: 'A vendor who sells weapons and weapon-related items' },
    { name: 'The Armorer', role: 'Armor Specialist', description: 'A vendor who sells vests and armor-related items' },
    { name: 'The Pharmacist', role: 'Medical Supplies', description: 'A vendor who sells medical supplies' },
    { name: 'The Collector', role: 'Materials', description: 'A vendor who sells various materials' },
  ];

  // Filter floors based on search query
  const filteredFloors = allFloors.filter((floor) => {
    if (!searchQuery.trim()) return true;

    const lootPool = floorLootPools.find(f => f.floor === floor.floor);
    if (!lootPool) return false;

    const query = searchQuery.toLowerCase();
    const floorItems = getFloorItems(floor.floor);

    // Search in floor name, tags, and item names
    return (
      floor.name.toLowerCase().includes(query) ||
      floor.floor.toLowerCase().includes(query) ||
      lootPool.primaryTags.some(tag => tag.toLowerCase().includes(query)) ||
      floorItems.some(item => item.name.toLowerCase().includes(query))
    );
  });

  const questTypes = [
    { name: 'Elimination Quests', description: 'Kill specific enemies or players', reward: 'XP, Currency, Rare Items' },
    { name: 'Extraction Quests', description: 'Extract specific items from designated floors', reward: 'Unique Gear, Materials' },
    { name: 'Survival Quests', description: 'Survive for a certain duration on specific floors', reward: 'Consumables, XP Boost' },
    { name: 'Collection Quests', description: 'Collect and deliver rare materials', reward: 'Crafting Materials, Currency' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-950/30 via-black to-red-950/20 border border-red-900/30 p-8 mb-6">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMCwgMCwgMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          <div className="relative">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Project Started: 16.10.2025
                  </span>
                  <span className="text-gray-600">•</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Last Update: 16.10.2025
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl font-black mb-2 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-2xl">
                  THE MIDNIGHT WALKERS
                </h1>
                <p className="text-xl text-red-400 font-semibold mb-1">Hardcore PvPvE Extraction Shooter</p>
                <p className="text-sm text-gray-400">Early Access: November 20, 2025</p>
              </div>
              <div className="flex gap-3">
                <Link href="/characters" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all hover:scale-105 shadow-lg shadow-red-900/50">
                  View Classes
                </Link>
                <Link href="/mechanics" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg transition-all hover:scale-105">
                  Learn Mechanics
                </Link>
              </div>
            </div>
          </div>
        </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">

        {/* Left Column - Quests & Quick Nav */}
        <div className="xl:col-span-1 space-y-6">
          {/* Quest System */}
          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[var(--accent)]">QUEST SYSTEM</h2>
              <span className="px-2 py-1 bg-gray-600/20 text-gray-400 border border-gray-600/30 rounded text-[9px] font-bold uppercase">
                Upcoming
              </span>
            </div>
            <div className="space-y-3">
              {questTypes.map((quest, idx) => (
                <div key={idx} className="p-4 bg-[var(--background)] border border-[var(--border)] rounded hover:border-[var(--accent)] transition-all">
                  <h3 className="font-bold text-white mb-1">{quest.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{quest.description}</p>
                  <div className="text-xs text-green-500">
                    <strong>Rewards:</strong> {quest.reward}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[var(--accent)]">QUICK GUIDES</h2>
              <span className="px-2 py-1 bg-gray-600/20 text-gray-400 border border-gray-600/30 rounded text-[9px] font-bold uppercase">
                Upcoming
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/characters" className="group">
                <div className="p-4 bg-[var(--background)] border border-[var(--border)] rounded hover:border-[var(--accent)] transition-all">
                  <h3 className="font-bold group-hover:text-[var(--accent)] transition-colors mb-1">
                    Character Classes →
                  </h3>
                  <p className="text-sm text-gray-400">4 unique classes with special abilities</p>
                </div>
              </Link>
              <Link href="/mechanics" className="group">
                <div className="p-4 bg-[var(--background)] border border-[var(--border)] rounded hover:border-[var(--accent)] transition-all">
                  <h3 className="font-bold group-hover:text-[var(--accent)] transition-colors mb-1">
                    Game Mechanics →
                  </h3>
                  <p className="text-sm text-gray-400">Extraction, gas system, progression</p>
                </div>
              </Link>
              <Link href="/weapons" className="group">
                <div className="p-4 bg-[var(--background)] border border-[var(--border)] rounded hover:border-[var(--accent)] transition-all">
                  <h3 className="font-bold group-hover:text-[var(--accent)] transition-colors mb-1">
                    Weapons & Gear →
                  </h3>
                  <p className="text-sm text-gray-400">Complete arsenal and loadouts</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Column - Vendors & Game Info */}
        <div className="xl:col-span-1 space-y-6">
          {/* Vendors */}
          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[var(--accent)]">VENDORS</h2>
              <span className="px-2 py-1 bg-gray-600/20 text-gray-400 border border-gray-600/30 rounded text-[9px] font-bold uppercase">
                Upcoming
              </span>
            </div>
            <div className="space-y-3">
              {vendors.map((vendor, idx) => (
                <div key={idx} className="p-4 bg-[var(--background)] border border-[var(--border)] rounded hover:border-[var(--accent)] transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-white">{vendor.name}</h3>
                    <span className="text-xs px-2 py-1 bg-[var(--accent)] text-white rounded">
                      {vendor.role}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{vendor.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Game Modes */}
          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[var(--accent)]">GAME MODES (PvPvE)</h2>
              <span className="px-2 py-1 bg-gray-600/20 text-gray-400 border border-gray-600/30 rounded text-[9px] font-bold uppercase">
                Upcoming
              </span>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-[var(--background)] border-l-4 border-green-500 rounded">
                <h3 className="font-bold text-white mb-2">ROOKIE</h3>
                <p className="text-xs text-gray-400 mb-2">Max Gear Score: 250</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Beginner-friendly mode to learn the game</li>
                  <li>• Common to Rare items drop</li>
                  <li>• Easier zombies, not difficult to defeat</li>
                </ul>
              </div>

              <div className="p-4 bg-[var(--background)] border-l-4 border-blue-500 rounded">
                <h3 className="font-bold text-white mb-2">SURVIVAL</h3>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Adapted survivors earn more rewards</li>
                  <li>• Uncommon to Epic items drop</li>
                  <li>• Stronger zombies and specialty zombies appear</li>
                </ul>
              </div>

              <div className="p-4 bg-[var(--background)] border-l-4 border-red-500 rounded">
                <h3 className="font-bold text-white mb-2">HARDCORE</h3>
                <p className="text-xs text-gray-400 mb-2">Required Level: 15</p>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Crazed survivors risk lives for greater gains</li>
                  <li>• Uncommon to Legendary items drop</li>
                  <li>• Strongest zombies, very difficult to survive</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Character Classes Preview */}
          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[var(--accent)]">CLASSES</h2>
              <span className="px-2 py-1 bg-gray-600/20 text-gray-400 border border-gray-600/30 rounded text-[9px] font-bold uppercase">
                Upcoming
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 bg-[var(--background)] rounded text-center border border-[var(--border)] hover:border-[var(--accent)] transition-all">
                <p className="font-bold text-sm">BRICK</p>
                <p className="text-xs text-gray-400">Tank</p>
              </div>
              <div className="p-3 bg-[var(--background)] rounded text-center border border-[var(--border)] hover:border-[var(--accent)] transition-all">
                <p className="font-bold text-sm">CROW</p>
                <p className="text-xs text-gray-400">Assassin</p>
              </div>
              <div className="p-3 bg-[var(--background)] rounded text-center border border-[var(--border)] hover:border-[var(--accent)] transition-all">
                <p className="font-bold text-sm">LOCKDOWN</p>
                <p className="text-xs text-gray-400">Sniper</p>
              </div>
              <div className="p-3 bg-[var(--background)] rounded text-center border border-[var(--border)] hover:border-[var(--accent)] transition-all">
                <p className="font-bold text-sm">BARTENDER</p>
                <p className="text-xs text-gray-400">Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - All Floors */}
        <div className="xl:col-span-1">
          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-[var(--accent)]">FLOOR ROTATIONS</h2>
              <span className="px-2 py-1 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded text-[9px] font-bold uppercase">
                In Progress
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-4">
              Game alternates between two floor sets every 5 minutes
            </p>

            {/* Search Input */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search items... (e.g., Bandage, Wire, Medkit)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-[var(--background)] border border-[var(--border)] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-2 text-xs text-gray-400 hover:text-[var(--accent)] transition-colors"
                >
                  Clear search
                </button>
              )}
            </div>

            {/* Rotation Group A: 8F - 15F */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-600/50 to-transparent"></div>
                <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider">Rotation A: 8F - 15F</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-600/50 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 gap-1.5">
                {[...filteredFloors].filter(f => {
                  const floorNum = parseInt(f.floor);
                  return floorNum >= 8 && floorNum <= 15;
                }).sort((a, b) => {
                  return parseInt(b.floor) - parseInt(a.floor); // Sort descending (15F at top, 8F at bottom)
                }).map((floor) => {
                const lootPool = floorLootPools.find(f => f.floor === floor.floor);
                const isSelected = selectedFloor === floor.floor;

                return (
                  <div
                    key={floor.floor}
                    onClick={() => setSelectedFloor(isSelected ? null : floor.floor)}
                    className={`p-3 bg-gradient-to-r from-[var(--background)] to-[var(--card-bg)] border rounded-lg transition-all cursor-pointer group hover:scale-[1.01] ${
                      isSelected ? 'border-red-600 bg-red-950/20' : 'border-[var(--border)] hover:border-red-600/50'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-600/30 flex items-center justify-center shrink-0">
                        <span className="font-black text-red-500 text-xs">{floor.floor}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        {/* Floor Name + Theme Tag on same line */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide leading-tight">{lootPool?.floorName || floor.name}</p>
                          {lootPool && lootPool.primaryTags.length > 0 && (
                            <>
                              {lootPool.primaryTags.map((tag, idx) => {
                                // Theme colors based on tag type
                                let colorClasses = 'bg-gray-600/20 text-gray-400 border-gray-600/30'; // default
                                if (tag === 'Medicine') {
                                  colorClasses = 'bg-green-600/20 text-green-400 border-green-600/30';
                                } else if (tag === 'Casino Supply') {
                                  colorClasses = 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30';
                                } else if (tag === 'Vehicle Part') {
                                  colorClasses = 'bg-orange-600/20 text-orange-400 border-orange-600/30';
                                } else if (tag === 'Building Material') {
                                  colorClasses = 'bg-slate-600/20 text-slate-400 border-slate-600/30';
                                }

                                return (
                                  <span
                                    key={idx}
                                    className={`px-1.5 py-0.5 rounded text-[9px] font-bold border uppercase ${colorClasses}`}
                                  >
                                    {tag}
                                  </span>
                                );
                              })}
                            </>
                          )}
                        </div>

                        {/* Common Items - Single row only, no wrapping */}
                        {lootPool && lootPool.commonItems.length > 0 && (
                          <div className="mt-1.5 relative h-[22px] overflow-hidden">
                            <div className="flex gap-1 items-center">
                              {(() => {
                                const items = getFloorItems(floor.floor);
                                // Show items + 1 extra that will be cut off to indicate more
                                const estimatedVisible = 6;
                                const showCount = items.length > estimatedVisible ? estimatedVisible + 1 : items.length;
                                return items.slice(0, showCount).map((item, idx) => (
                                  <span
                                    key={idx}
                                    className="px-1.5 py-0.5 bg-red-600/20 text-red-400 rounded text-[9px] font-semibold whitespace-nowrap flex-shrink-0"
                                  >
                                    {item.name}
                                  </span>
                                ));
                              })()}
                            </div>
                            {/* Gradient overlay with +N more */}
                            {(() => {
                              const items = getFloorItems(floor.floor);
                              const estimatedVisible = 6;
                              const hiddenCount = items.length - estimatedVisible - 1; // -1 for the half-showing item
                              if (hiddenCount > 0) {
                                return (
                                  <div className="absolute top-0 right-0 h-full bg-gradient-to-l from-[var(--card-bg)] via-[var(--card-bg)] to-transparent pl-16 pr-0 flex items-center pointer-events-none">
                                    <span className="text-[9px] text-gray-400 font-bold">
                                      +{hiddenCount} more
                                    </span>
                                  </div>
                                );
                              }
                              return null;
                            })()}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Expanded View - Shows Item Details */}
                    {isSelected && lootPool && (
                      <div className="mt-3 pt-3 border-t border-red-600/30">
                        <p className="text-xs text-gray-400 mb-3">{lootPool.description}</p>
                        {lootPool.commonItems.length > 0 && (
                          <div>
                            <p className="text-[10px] text-gray-500 mb-2 font-bold">DROPS:</p>
                            <div className="flex flex-wrap gap-2">
                              {getFloorItems(floor.floor).map((item, idx) => (
                                <span
                                  key={idx}
                                  className={`px-2 py-1 bg-black/30 rounded text-[10px] font-semibold ${
                                    item.questItem ? 'text-yellow-400' : 'text-gray-300'
                                  }`}
                                >
                                  {item.name}{item.questItem && ' ★'}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              </div>
            </div>

            {/* Rotation Group B: B1F - 7F */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-600/50 to-transparent"></div>
                <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider">Rotation B: B1F - 7F</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-600/50 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 gap-1.5">
                {[...filteredFloors].filter(f => {
                  const floorNum = f.floor === 'B1F' ? -1 : parseInt(f.floor);
                  return floorNum >= -1 && floorNum <= 7;
                }).sort((a, b) => {
                  const aNum = a.floor === 'B1F' ? -1 : parseInt(a.floor);
                  const bNum = b.floor === 'B1F' ? -1 : parseInt(b.floor);
                  return bNum - aNum; // Sort descending (7F at top, B1F at bottom)
                }).map((floor) => {
                const lootPool = floorLootPools.find(f => f.floor === floor.floor);
                const isSelected = selectedFloor === floor.floor;

                return (
                  <div
                    key={floor.floor}
                    onClick={() => setSelectedFloor(isSelected ? null : floor.floor)}
                    className={`p-3 bg-gradient-to-r from-[var(--background)] to-[var(--card-bg)] border rounded-lg transition-all cursor-pointer group hover:scale-[1.01] ${
                      isSelected ? 'border-red-600 bg-red-950/20' : 'border-[var(--border)] hover:border-red-600/50'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-600/30 flex items-center justify-center shrink-0">
                        <span className="font-black text-red-500 text-xs">{floor.floor}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        {/* Floor Name + Theme Tag on same line */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide leading-tight">{lootPool?.floorName || floor.name}</p>
                          {lootPool && lootPool.primaryTags.length > 0 && (
                            <>
                              {lootPool.primaryTags.map((tag, idx) => {
                                // Theme colors based on tag type
                                let colorClasses = 'bg-gray-600/20 text-gray-400 border-gray-600/30'; // default
                                if (tag === 'Medicine') {
                                  colorClasses = 'bg-green-600/20 text-green-400 border-green-600/30';
                                } else if (tag === 'Casino Supply') {
                                  colorClasses = 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30';
                                } else if (tag === 'Vehicle Part') {
                                  colorClasses = 'bg-orange-600/20 text-orange-400 border-orange-600/30';
                                } else if (tag === 'Building Material') {
                                  colorClasses = 'bg-slate-600/20 text-slate-400 border-slate-600/30';
                                }

                                return (
                                  <span
                                    key={idx}
                                    className={`px-1.5 py-0.5 rounded text-[9px] font-bold border uppercase ${colorClasses}`}
                                  >
                                    {tag}
                                  </span>
                                );
                              })}
                            </>
                          )}
                        </div>

                        {/* Common Items - Single row only, no wrapping */}
                        {lootPool && lootPool.commonItems.length > 0 && (
                          <div className="mt-1.5 relative h-[22px] overflow-hidden">
                            <div className="flex gap-1 items-center">
                              {(() => {
                                const items = getFloorItems(floor.floor);
                                // Show items + 1 extra that will be cut off to indicate more
                                const estimatedVisible = 6;
                                const showCount = items.length > estimatedVisible ? estimatedVisible + 1 : items.length;
                                return items.slice(0, showCount).map((item, idx) => (
                                  <span
                                    key={idx}
                                    className="px-1.5 py-0.5 bg-red-600/20 text-red-400 rounded text-[9px] font-semibold whitespace-nowrap flex-shrink-0"
                                  >
                                    {item.name}
                                  </span>
                                ));
                              })()}
                            </div>
                            {/* Gradient overlay with +N more */}
                            {(() => {
                              const items = getFloorItems(floor.floor);
                              const estimatedVisible = 6;
                              const hiddenCount = items.length - estimatedVisible - 1; // -1 for the half-showing item
                              if (hiddenCount > 0) {
                                return (
                                  <div className="absolute top-0 right-0 h-full bg-gradient-to-l from-[var(--card-bg)] via-[var(--card-bg)] to-transparent pl-16 pr-0 flex items-center pointer-events-none">
                                    <span className="text-[9px] text-gray-400 font-bold">
                                      +{hiddenCount} more
                                    </span>
                                  </div>
                                );
                              }
                              return null;
                            })()}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Expanded View - Shows Item Details */}
                    {isSelected && lootPool && (
                      <div className="mt-3 pt-3 border-t border-red-600/30">
                        <p className="text-xs text-gray-400 mb-3">{lootPool.description}</p>
                        {lootPool.commonItems.length > 0 && (
                          <div>
                            <p className="text-[10px] text-gray-500 mb-2 font-bold">DROPS:</p>
                            <div className="flex flex-wrap gap-2">
                              {getFloorItems(floor.floor).map((item, idx) => (
                                <span
                                  key={idx}
                                  className={`px-2 py-1 bg-black/30 rounded text-[10px] font-semibold ${
                                    item.questItem ? 'text-yellow-400' : 'text-gray-300'
                                  }`}
                                >
                                  {item.name}{item.questItem && ' ★'}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Item Rarity System */}
      <div className="bg-gradient-to-br from-[var(--card-bg)] to-[var(--background)] border border-[var(--border)] rounded-xl p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            ITEM RARITY SYSTEM
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {itemRarities.map((rarity, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div
                className="p-4 rounded-xl border-2 transition-all hover:scale-105 hover:shadow-xl"
                style={{
                  borderColor: rarity.color,
                  background: `linear-gradient(135deg, ${rarity.color}15 0%, ${rarity.color}05 100%)`
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-12 h-12 rounded-full mb-3 flex items-center justify-center font-black text-xl shadow-lg"
                    style={{
                      backgroundColor: `${rarity.color}30`,
                      color: rarity.color,
                      boxShadow: `0 0 20px ${rarity.color}40`
                    }}
                  >
                    {rarity.name[0]}
                  </div>
                  <h3
                    className="font-black text-sm mb-1 tracking-wide"
                    style={{ color: rarity.color }}
                  >
                    {rarity.name.toUpperCase()}
                  </h3>
                  <p className="text-xs text-gray-400">{rarity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-[var(--background)] border border-[var(--accent)]/30 rounded-lg">
          <p className="text-sm text-gray-300 text-center">
            <strong className="text-[var(--accent)]">Mode-Based Drops:</strong> Higher difficulty modes (Survival, Hardcore) increase chances of better rarity items.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg">
        <p className="text-xs text-gray-400 text-center mb-2">
          This is a personal fan project and is not affiliated with or endorsed by <strong className="text-gray-300">Oneway Ticket Studio</strong>.
        </p>
        <p className="text-xs text-gray-500 text-center">
          For questions or feedback, contact me on Discord: <strong className="text-[var(--accent)]">gz38</strong>
        </p>
      </div>
    </div>
    </div>
  );
}
