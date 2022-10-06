const items = {
    "items":[
    {"id":"5bc1ab93b919f200c18c10f0","trading_tax":8000,"sub_icon":null,"icon_format":"port","tags":["mod","rare","primary","sniper"],"url_name":"sharpshooter","mod_max_rank":10,"rarity":"rare","icon":"items/images/en/sharpshooter.82008706e945ec2bf7c88a0587ae404d.png","thumb":"items/images/en/thumbs/sharpshooter.82008706e945ec2bf7c88a0587ae404d.128x128.png","item_name":"Sharpshooter","description":"On Headshot Kill:\n+15 Energy","wiki_link":"https://warframe.fandom.com/wiki/Sharpshooter","drop":[]},
    {"rarity":"rare","sub_icon":null,"icon_format":"port","tags":["mod","rare","primary","rifle"],"thumb":"items/images/en/thumbs/cautious_shot.5bdfa8a36260ba57f16bc865b2be61b6.128x128.png","trading_tax":8000,"id":"5bc1ab94b919f200c18c10f2","mod_max_rank":10,"url_name":"cautious_shot","icon":"items/images/en/cautious_shot.5bdfa8a36260ba57f16bc865b2be61b6.png","item_name":"Cautious Shot","description":"+100% chance to reduce the Stagger effect from self-imposed Radial Attacks","wiki_link":"https://warframe.fandom.com/wiki/Cautious_Shot","drop":[]},
    {"trading_tax":8000,"id":"5bc1ab93b919f200c18c10f1","thumb":"items/images/en/thumbs/power_donation.22caa7911fc0c4ffd7cc69ca9327ce72.128x128.png","icon":"items/images/en/power_donation.22caa7911fc0c4ffd7cc69ca9327ce72.png","tags":["mod","rare","aura"],"mod_max_rank":5,"icon_format":"port","rarity":"rare","sub_icon":null,"url_name":"power_donation","item_name":"Power Donation","description":"-30% Ability Strength\n+30% Ability Strength of Squadmates","wiki_link":"https://warframe.fandom.com/wiki/Power_Donation","drop":[]},
    {"sub_icon":null,"thumb":"items/images/en/thumbs/vigorous_swap.acdc8dc20f09463f5e36bb98a4e043e3.128x128.png","icon_format":"port","rarity":"rare","icon":"items/images/en/vigorous_swap.acdc8dc20f09463f5e36bb98a4e043e3.png","tags":["mod","warframe","rare"],"id":"5bc1ab92b919f200c18c10ed","url_name":"vigorous_swap","mod_max_rank":10,"trading_tax":8000,"item_name":"Vigorous Swap","description":"On Equip:\n+165% Damage for 3s","wiki_link":"https://warframe.fandom.com/wiki/Vigorous_Swap","drop":[]},
    {"rarity":"rare","sub_icon":null,"icon_format":"port","tags":["mod","warframe","rare"],"thumb":"items/images/en/thumbs/rolling_guard.0b2c9bf665adf399d17197c4902615d7.128x128.png","trading_tax":8000,"id":"5bc1ab92b919f200c18c10ee","mod_max_rank":10,"url_name":"rolling_guard","icon":"items/images/en/rolling_guard.0b2c9bf665adf399d17197c4902615d7.png","item_name":"Rolling Guard","description":"On Dodge:\nBecome invulnerable for 3s and remove all Status Effects. 7s cooldown.","wiki_link":"https://warframe.fandom.com/wiki/Rolling_Guard","drop":[]},
    {"mod_max_rank":10,"rarity":"rare","sub_icon":null,"icon":"items/images/en/preparation.f41baaf0f6a981eac9583d5b4cda7162.png","trading_tax":8000,"tags":["mod","rare","warframe"],"url_name":"preparation","icon_format":"port","thumb":"items/images/en/thumbs/preparation.f41baaf0f6a981eac9583d5b4cda7162.128x128.png","id":"5e7caa01267539063de48c3e","item_name":"Preparation","description":"+100% Maximum Energy is filled on Spawn","wiki_link":"https://warframe.fandom.com/wiki/Preparation","drop":[]},
    {"trading_tax":8000,"id":"5e7caa01267539063de48c3f","thumb":"items/images/en/thumbs/aerial_ace.ecfa92c3a9687561c98a5ef27bf843b5.128x128.png","icon":"items/images/en/aerial_ace.ecfa92c3a9687561c98a5ef27bf843b5.png","tags":["mod","rare","rifle","primary"],"mod_max_rank":5,"icon_format":"port","rarity":"rare","sub_icon":null,"url_name":"aerial_ace","item_name":"Aerial Ace","description":"On Kill:\nRefresh Double Jump up to 6x while Airborne.","wiki_link":"https://warframe.fandom.com/wiki/Aerial_Ace","drop":[]},
    {"sub_icon":null,"mod_max_rank":10,"icon":"items/images/en/mending_shot.ad5ba71f5bb163a491800032f1fe2591.png","trading_tax":8000,"icon_format":"port","id":"5e7caa01267539063de48c3c","rarity":"rare","tags":["mod","rare","primary","rifle_(no_aoe)"],"url_name":"mending_shot","thumb":"items/images/en/thumbs/mending_shot.ad5ba71f5bb163a491800032f1fe2591.128x128.png","item_name":"Mending Shot","description":"Shoot Health Orbs to obtain them with +110% extra effect.","wiki_link":"https://warframe.fandom.com/wiki/Mending_Shot","drop":[]},
    {"thumb":"items/images/en/thumbs/energizing_shot.8e0c1b01dba24357b770fe970d57c459.128x128.png","mod_max_rank":10,"icon_format":"port","trading_tax":8000,"id":"5e7caa02267539063de48c40","tags":["mod","rare","secondary","pistol_(no_aoe)"],"sub_icon":null,"rarity":"rare","icon":"items/images/en/energizing_shot.8e0c1b01dba24357b770fe970d57c459.png","url_name":"energizing_shot","item_name":"Energizing Shot","description":"Shoot Energy Orbs to obtain them with +110% extra effect.","wiki_link":"https://warframe.fandom.com/wiki/Energizing_Shot","drop":[]},
    {"id":"60e5b8fd4794450053e99948","trading_tax":8000,"sub_icon":null,"icon_format":"port","tags":["mod","rare","primary","shotgun"],"url_name":"galvanized_acceleration","mod_max_rank":10,"rarity":"rare","icon":"items/images/en/galvanized_acceleration.940aef6227855f74835eaa62c0671fa1.png","thumb":"items/images/en/thumbs/galvanized_acceleration.940aef6227855f74835eaa62c0671fa1.128x128.png","item_name":"Galvanized Acceleration","description":"+30% Projectile Speed/Beam Length\nOn Kill:\r+30% Projectile Speed/Beam Length for 10s. Stacks up to 2x.","wiki_link":null,"drop":[]},
    {"id":"60e5b8fd4794450053e99944","trading_tax":8000,"sub_icon":null,"icon_format":"port","tags":["mod","rare","primary","rifle"],"url_name":"galvanized_aptitude","mod_max_rank":10,"rarity":"rare","icon":"items/images/en/galvanized_aptitude.4efa17fe5ff1b28b63d47f786a4680ef.png","thumb":"items/images/en/thumbs/galvanized_aptitude.4efa17fe5ff1b28b63d47f786a4680ef.128x128.png","item_name":"Galvanized Aptitude","description":"+80% Status Chance\nOn Kill:\n+40% Direct Damage per Status Type affecting the target for 20s. Stacks up to 2x.","wiki_link":null,"drop":[]},
    {"sub_icon":null,"thumb":"items/images/en/thumbs/galvanized_chamber.d33b025e74a9afe9a90404ec8308df63.128x128.png","icon_format":"port","rarity":"rare","icon":"items/images/en/galvanized_chamber.d33b025e74a9afe9a90404ec8308df63.png","tags":["mod","rare","primary","rifle"],"id":"60e5b9014794450053e99961","url_name":"galvanized_chamber","mod_max_rank":10,"trading_tax":8000,"item_name":"Galvanized Chamber","description":"+80% Multishot\nOn Kill:\n+30% Multishot for 20s. Stacks up to 5x.","wiki_link":null,"drop":[]},
    {"url_name":"galvanized_crosshairs","thumb":"items/images/en/thumbs/galvanized_crosshairs.9366d80f8e8db9216eb77d9975dab06c.128x128.png","icon":"items/images/en/galvanized_crosshairs.9366d80f8e8db9216eb77d9975dab06c.png","trading_tax":8000,"id":"60e5b8fe4794450053e9994d","icon_format":"port","rarity":"rare","tags":["mod","rare","secondary","pistol"],"mod_max_rank":10,"sub_icon":null,"item_name":"Galvanized Crosshairs","description":"On Headshot:\n+120% Critical Chance when Aiming for 12s\nOn Headshot Kill:\n+40% Critical Chance when Aiming for 12s. Stacks up to 5x.","wiki_link":null,"drop":[]},
    {"url_name":"galvanized_diffusion","thumb":"items/images/en/thumbs/galvanized_diffusion.95f3194b73e688fda9383851b7f09d63.128x128.png","icon":"items/images/en/galvanized_diffusion.95f3194b73e688fda9383851b7f09d63.png","trading_tax":8000,"id":"60e5b8fc4794450053e99941","icon_format":"port","rarity":"rare","tags":["mod","rare","secondary","pistol"],"mod_max_rank":10,"sub_icon":null,"item_name":"Galvanized Diffusion","description":"+110% Multishot\nOn Kill:\n+30% Multishot for 20s. Stacks up to 4x.","wiki_link":null,"drop":[]},
    {"thumb":"items/images/en/thumbs/galvanized_hell.b411e995f8116a7ac6adbce1128b7689.128x128.png","mod_max_rank":10,"icon_format":"port","trading_tax":8000,"id":"60e5b8fb4794450053e9993d","tags":["mod","rare","primary","shotgun"],"sub_icon":null,"rarity":"rare","icon":"items/images/en/galvanized_hell.b411e995f8116a7ac6adbce1128b7689.png","url_name":"galvanized_hell","item_name":"Galvanized Hell","description":"+110% Multishot\nOn Kill:\n+30% Multishot for 20s. Stacks up to 4x.","wiki_link":null,"drop":[]},
    {"url_name":"galvanized_savvy","thumb":"items/images/en/thumbs/galvanized_savvy.9ed8a3cd9bcddc9b48ca6a28c5e56682.128x128.png","icon":"items/images/en/galvanized_savvy.9ed8a3cd9bcddc9b48ca6a28c5e56682.png","trading_tax":8000,"id":"60e5b9004794450053e9995b","icon_format":"port","rarity":"rare","tags":["mod","rare","primary","shotgun"],"mod_max_rank":10,"sub_icon":null,"item_name":"Galvanized Savvy","description":"+80% Status Chance\nOn Kill:\n+40% Direct Damage per Status Type affecting the target for 20s. Stacks up to 2x.","wiki_link":null,"drop":[]},
    {"mod_max_rank":10,"rarity":"rare","sub_icon":null,"icon":"items/images/en/galvanized_scope.40e96c1ddd7156854a1d5fc84ab986ce.png","trading_tax":8000,"tags":["mod","rare","primary","rifle"],"url_name":"galvanized_scope","icon_format":"port","thumb":"items/images/en/thumbs/galvanized_scope.40e96c1ddd7156854a1d5fc84ab986ce.128x128.png","id":"60e5b8fd4794450053e99947","item_name":"Galvanized Scope","description":"On Headshot:\n+120% Critical Chance when Aiming for 12s\nOn Headshot Kill:\n+40% Critical Chance when Aiming for 12s. Stacks up to 5x.","wiki_link":null,"drop":[]},
    {"sub_icon":null,"thumb":"items/images/en/thumbs/galvanized_shot.0ddad1d822cf2b02257890bdb6f81fdd.128x128.png","icon_format":"port","rarity":"rare","icon":"items/images/en/galvanized_shot.0ddad1d822cf2b02257890bdb6f81fdd.png","tags":["mod","rare","secondary","pistol"],"id":"60e5b8ff4794450053e99953","url_name":"galvanized_shot","mod_max_rank":10,"trading_tax":8000,"item_name":"Galvanized Shot","description":"+80% Status Chance\nOn Kill:\n+40% Direct Damage per Status Type affecting the target for 14s. Stacks up to 3x.","wiki_link":null,"drop":[]},
    {"url_name":"ayatan_zambuka_sculpture","thumb":"items/images/en/thumbs/ayatan_zambuka_sculpture.cfee4edb2f9ecbfef1a427dcd791847b.128x128.png","icon":"items/images/en/ayatan_zambuka_sculpture.cfee4edb2f9ecbfef1a427dcd791847b.png","trading_tax":4000,"id":"5dbe9b087ea27b0ffe3ca269","icon_format":"land","tags":["ayatan_sculpture"],"mod_max_rank":3,"sub_icon":null,"item_name":"Ayatan Zambuka Sculpture","description":"This kinetic Orokin sculpture springs to life when filled with Ayatan Stars. It may also be a source of Endo.","wiki_link":"https://warframe.fandom.com/wiki/Ayatan_Sculpture","drop":[]},
    {"sub_icon":null,"thumb":"items/images/en/thumbs/archgun_riven_mod_(veiled).fd671126fd4051e8e3addc13ae56d1f0.128x128.png","icon_format":"port","rarity":"common","icon":"items/images/en/archgun_riven_mod_(veiled).fd671126fd4051e8e3addc13ae56d1f0.png","tags":["common","riven_mod","mod"],"id":"5cc4816afc2db2099c1804cd","url_name":"arch_gun_riven_mod_(veiled)","trading_tax":2000,"item_name":"Archgun Riven Mod (Veiled)","description":"","wiki_link":"http://warframe.wikia.com/wiki/Riven_Mods","drop":[]}
]
}
export default items;