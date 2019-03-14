+++
title = "Rubg"
description = "Robo Ultimate Battle Ground"
author = ""
tags = []
date = 2019-03-01T19:31:30+05:30
categories = ["Robotics"]
nomenu = "main"
image="<BACKGROUND IMAGE FOR YOUR POST>"
authorAvatar= "author/<YOUR AVATAR>"
profileLink="<WITHOUT HTTP:// PART>"
+++

ARGUS...A secret government agency whose prime objective is to capture world’s most dangerous criminals,
has a unique way to recruit its agents. It selects a group of 6 of its best candidates (depends on number of
participant) and drop them on a distant island, hidden from the common world...ERANGEL. The island is a
challenge in itself, with hidden top class weapons and dangerous terrains. To leave no evidence of itself
behind, ARGUS bombards and destroys different part of the islands at random. The six candidates compete
with each other till death...and the last man surviving is admitted to ARGUS.
You are one of its recruits, and dying is no option for you. Collect your own weapon, destroy your competitors
and earn the glory. So, be prepared for the ultimate battle....the only word of advice we have for you is ...
SURVIVE !!!

## Arena Design

### Island Map

<p align="center">
	<img style="width: 50%" alt="upside down arena" src="/images/Screeenshot_from_2019-03-14_15-17-32.png"></img>
</p>

The yellow ovals are the starting position for the bots. Each of these positions is numbered from 1-6. Before
the game starts, the contestants will pick up chits with the position they are supposed to start with. The blue
area is marked as ocean while the green terrain is the island having total of 8 cities-
1. Pochinki
2. Yasnaya
3. Military Base
4. Novorepnoye
5. Mylta
6. Primorsk
7. Severny
8. Georgopol

### City Map

<p align="center">
	<img style="width: 50%" alt="upside down arena" src="/images/Screeenshot_from_2019-03-14_15-17-42.png"></img>
</p>

1. Each city is comprised of 5 concentric zones (zone 1,2,3,4 labelled in different shades of green above and the red circle is end zone).
2. The entire arena consists of flags marked with some numbers. These flags are equivalent of weapons. These flags are either marked with some common weapons (Skin Coloured) or they are mystery weapons which may contain any weapon(blue coloured).
3. The centre of the arena is the destination point, where the zones will eventually collapse (the red circle).
4. The city also contains some grey blind spot. Any robot inside a blind spot cannot be shot by its enemies.

## Game Description and Rules
At a time there will be 6 players (may vary according to participation) starting as shown above. Each player is given one volunteer from our side who will keep track of his weapons and will ensure fair play. The initial position of players is selected on a lucky draw basis. The island is divided into 8 cities. The cities are destroyed time to time and in random order. Before a city is destroyed, an announcement for the same shall be made and a 5 seconds time will be given. If a robot fails to leave city within the time, it shall be destroyed/ eliminated along side. Once a city is destroyed, it cannot be entered again.

At last only one city remains and the 5 zones it is divided into, start to collapse immediately after
second last city is destroyed.

+ **ZONE 1 will collapse in 35 seconds.**
+ **ZONE 2 will collapse in 25 seconds.**
+ **ZONE 3 will collapse in 15 seconds.**
+ **ZONE 4 will collapse in 10 seconds.**
+ **ZONE 5 will collapse in 5 seconds.**

**There will be a common timer display of 90 seconds.** The players must keep note of time.
The robot must collect weapons. When a robot visits a flag, the volunteer associated with him reveals
the weapon associated with flag. The weapon is said to be collected if the player verbally declares to
select the weapon (this will be confirmed and recorded by the volunteer). A robot can have at most 2
weapons – 1 attacking and 1 defensive (So he must decide if he wants to drop the weapon he already
have or keep it). Once a weapon is selected, the flag is removed from arena, and once it is dropped the
flag is placed again...hence available for other players.

A robot dies when

+ **Fight Death:** If 2 robots have a head on collision, the robot with better weapon (with greater damage) wins and other gets killed.
+ **Ambush Death:** If A hits B directly from behind, then A kills B irrespective of weapons of A and B. (The situation is considered as if B was unaware of A aiming it).
+ **Blast Death:** If a robot fails to exit a city before it is destroyed it is eliminated.
+ **Zone Death:** If a robot fails to exit a zone before it is collapsed it is eliminated. For instance if a player is in zone 1 and 35 seconds are completed, the player will be disqualified.
+ **A robot inside a blind spot can die only of blast death and zone death.**
+ **If none of robots have weapons or they have identical weapons:** Either the robots can try and push the other robot out of safe zone or they can escape.
+ **After a robot is killed:** The weapon he possesses can be looted by the robot which killed it, but within the weapon limit specified.
+ If more than 1 robot reaches the flag almost the same time, they must fight for it with their current weapons. If they don’t have any weapons, the flag shall be rendered useless for 30 seconds, so they must search for other weapons/flags.
 NOTE : In any other situation/collision- No robot will be killed/eliminated.
The game continues until only 1 robot survives. The last robot standing wins !!!

## Rules for participants
Participants are not allowed to move inside arena and/or touch any of the objects on arena. In case of a wired
bot, the participants must make sure that the wires do not come in path of other players or disturb the arena
in any way.

### Weapons
In total there are 15 guns and 3 shields. Each gun has a limit on ammo. A gun with ammo 2 can kill only 2 bots.
A gun with ammo 1 can kill only 1 bot. A gun with 0 ammo has 0 damage.

Any player can possess at most 2 weapons 1 attacking and 1 defensive weapon. The total strength any player
has is the damage of respective weapon combination. The player with higher damage can kill the player with
lower damage in a fight.
Weapon Combination and Damage :

| Shield | Weapon ID | Weapon      | Ammo | Net Damage |
|--------|-----------|-------------|------|------------|
| 0      | 1         | Cross Bow   | 2    | 1          |
| 0      | 2         | P-18C       | 2    | 2          |
| 0      | 3         | R-1895      | 2    | 3          |
| 0      | 4         | P-92        | 2    | 4          |
| 0      | 5         | s0686       | 2    | 5          |
| 0      | 6         | S-12K       | 2    | 5          |
| 0      | 7         | Vector      | 2    | 7          |
| 0      | 8         | Thomson SMG | 2    | 8          |
| 0      | 9         | UMP-9       | 1    | 9          |
| 0      | 10        | AKM         | 1    | 19         |
| 0      | 11        | M-416       | 1    | 20         |
| 0      | 12        | AUG         | 1    | 21         |
| 0      | 13        | KAR-98K     | 1    | 34         |
| 0      | 14        | M-24        | 1    | 35         |
| 0      | 15        | AWM         | 1    | 35         |

| Shield | Weapon ID | Weapon      | Ammo | Net Damage |
|--------|-----------|-------------|------|------------|
| 1      | 1         | Cross Bow   | 2    | 10         |
| 1      | 2         | P-18C       | 2    | 11         |
| 1      | 3         | R-1895      | 2    | 12         |
| 1      | 4         | P-92        | 2    | 13         |
| 1      | 5         | s0686       | 2    | 14         |
| 1      | 6         | S-12K       | 2    | 15         |
| 1      | 7         | Vector      | 2    | 16         |
| 1      | 8         | Thomson SMG | 2    | 17         |
| 1      | 9         | UMP-9       | 1    | 18         |
| 1      | 10        | AKM         | 1    | 31         |
| 1      | 11        | M-416       | 1    | 32         |
| 1      | 12        | AUG         | 1    | 33         |
| 1      | 13        | KAR-98K     | 1    | 40         |
| 1      | 14        | M-24        | 1    | 41         |
| 1      | 15        | AWM         | 1    | 42         |

| Shield | Weapon ID | Weapon      | Ammo | Net Damage |
|--------|-----------|-------------|------|------------|
| 2      | 1         | Cross Bow   | 2    | 22         |
| 2      | 2         | P-18C       | 2    | 23         |
| 2      | 3         | R-1895      | 2    | 24         |
| 2      | 4         | P-92        | 2    | 25         |
| 2      | 5         | s0686       | 2    | 26         |
| 2      | 6         | S-12K       | 2    | 27         |
| 2      | 7         | Vector      | 2    | 28         |
| 2      | 8         | Thomson SMG | 2    | 29         |
| 2      | 9         | UMP-9       | 1    | 30         |
| 2      | 10        | AKM         | 1    | 34         |
| 2      | 11        | M-416       | 1    | 35         |
| 2      | 12        | AUG         | 1    | 36         |
| 2      | 13        | KAR-98K     | 1    | 43         |
| 2      | 14        | M-24        | 1    | 44         |
| 2      | 15        | AWM         | 1    | 45         |

**There is a special flag for Immunity.** If a robot collects the immunity flag, it’s first death will be
compensated. However, the immunity can be used only once. The total number of weapons, type of weapons will all be made known on site.

## Constraints on robots

+ Height:
+ Length:
+ Width:
+ Weight :
+ Type: Manual (Wired and Wireless)
+ Length of Wire : radius of arena
+ Power Supply :

## Constraints on teams 
+ Number of Members:
+ Approximate Participation fees:
