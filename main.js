var challenges = [
    {"Steel-less Battalion": "You must play this run without armour of any form."},
    {"Dora’s Backpack": " Your ENTIRE LOADOUT must fit within a SCAV backpack. Weapons, armour, meds/stims, ammo/mags, secure items, etc. must fit within the bag. Attachments for your chosen weapon are part of the gun and are not included in the backpack. (EDIT: The secure items must only fit in the backpack, they do not have to stay there for the raid. They can be returned to your secure case once they are accounted for. No one wants to needlessly lose a S I C C Case.)"},
    {"Cement Shoes": " When you spawn into the raid, you must wait 5 mins before moving or preforming an action (example being taking painkillers)."},
    {"Down to the Wire": " You must remain in the raid for the entirety of the timer. The timer must read less than 4 mins before extract can occur."},
    {"Guns, Germs, and Steel": " The year is 1815. Your loadout may only consist of a bolt-action rifle and ammo (Guns), a sling bag, a melee weapon (Steel), one army bandage, and one injector (Germs). Rifles must be reloaded bullet-by-bullet, no additional magazines may be brought in."},
    {"Guns, Germs, and Steel+": " Same as above, however there is to be no internal magazines. Each round must be loaded individually using the inventory screen."},
    {"You Have Become What You Always Hated…": " Hatchling Run."},
    {"John Pestily": " You are doing a John Wick run on Factory. Your loadout includes: An Altyn + Visor, Gzhel-K, a Five-Seven, all the injectors your body can handle. Certain elements of this loadout may vary based on individuals cash supply. Basic Formula however is: Helmet, Armour, Pistol, Injectors."},
    {"John Pestily+": " Same as above. However, you are only allowed to use a Five-Seven and all the injectors your body can handle."},
    {"Fire Sale": " Interchange Run."},
    {"Back When Things Weren’t So Complicated": " You must do a Customs run; however, you may not use any part of the map that is part of “The Expansion”. You may engage into “The Expansion” but you may not go into it."},
    {"If You’re Going to the Store…": " You must run Interchange. However, you may not leave the map without the following in your backpack: 2x Bolts of Fabric, 2x Pieces of Tech, 2x Building Supplies, 1x Tool, 1x Medical Item, 1x Knife from a dead SCAV."},
    {"SCAVS Are Friends, Not Food": " During this raid, you may not shoot at or kill SCAVS. Raiders and SCAV Bosses are not SCAV, they are psychopaths and are not included."},
    {"Park Ranger": " During this raid your ENTIRE LOADOUT, must only comprise of things purchased from Jaeger. Guns, Attachments, Ammo, Clothes, Bags, Meds…Everything."},
    {"Family Picnic": " You must do a raid on Customs. However, before you can leave the map, you must go to SCAV Boat Extract campfire and consume 1x Drink, 1x Food, 1x Candy Bar. You must be sitting or prone while consuming."},
    {"Million Dollar Man": " If you die at all, within the next three raids, you are done Tarkov for today."},
    {"No Food After Midnight": " You may not pick-up or consume any food or beverages for the entirety of your raid."},
    {"Magnum P.I.": " Tom Selleck may have the only mustache out there that can rival Sequisha’s. Put on a mustache, dress like it’s the 80’s, and grab yourself a Colt 1911. No bags. No armour. Only the ‘stache to protect you."},
    {"Civilians on Patrol": " Your loadout may only be constructed using items that the AVERAGE gun owner, looking at you America, would have access to. Think basic firearms license."},
    {"Master Roshi": " You are doing a Shoreline run. You must go to SCAV Island and drop ONE of the following items on the doorstep: a piece of food (hand-delivered) or something to play video games on (Tetriz or a G-Phone)."},
    {"Don’t Spend It All In One Place": " Your ENTIRE LOADOUT must not exceed $70,000 Roubles. If you are using items from your stash, use their approximate retail value."},
    {"Mom and Dad Are Fighting Again…": " You may not use any item sold by Prapor or Therapist. They aren’t talking to each other and just need to be left alone for a raid."},
    {"Did You Change The Clocks?": " You have 10 mins until the raid ends. Once 10 mins has passed head straight for the exit."},
    {"History of Warfare": "Fight through the ages over a multi-run adventure. Your weapons are as follows: Mosin-Nagant (1891) > PPSH (1941) > SKS (1944) > AKM (1959) > AK-74+Variants (1970) > M4A1 (1994) > MPX (2013). You can use whatever weapons you wish for this challenge, as long as there is a timeline you are following."},
    {"Like Tears in the Rain": "You must run Shoreline at night while it’s raining. Climb to the roof of resort and leap from the roof onto the ambulance by sky bridge. Once your legs are broken and you basically dead, hunt down the android known as Sanitar. You may not use injectors or health items after leaping from the roof. This must be done within 25 mins of the raid start. Unless you spawn in the Northwest on a Tuesday after 7:00pm PST then it must be done within 20 mins."},
    {"Who Will Save the World?": "Dress as soviets in Afghanistan: 6b43 Zabralo, unmodded ak74, tank helmet."},
    {"Black Hawk DOwn": "Cosplay as delta force in Mogadishu."},

    {"American Sniper": "Bring a sniper rifle to any map, setup in a location and stay there until you die or are killed."},
    {"Friendly Fire": "(In a group) At the start of the raid, everyone has 15 seconds to spread out, after that you must fight until there is only 1 man left standing."},
]

function new_challenge() {
    var num_challenges = challenges.length;
    var random = Math.floor(Math.random() * num_challenges);

    return challenges[random];
}

function present_challenge(chal) {
    var name = Object.keys(chal)[0];
    document.getElementById("strat-name").innerHTML = name;

    var desc = chal[Object.keys(chal)[0]];
    var desc_element = document.getElementById("strat-desc");
    if (desc.length > 150) {
        desc_element.classList.add("justify-text");
    }
    else {
        desc_element.classList.remove("justify-text");
    }
    desc_element.innerHTML = desc;
}

function button_press() {
    present_challenge(new_challenge());
}