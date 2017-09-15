import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZALGOZ HE COMES ON A PALE PONY, BEWAR ... ARRRRGGGGHHHHH';
  x = 1000;
  y = 33/1.01;
  arr = ['a','b','I HEART ANGULAR!!1'];
  myemail = 'lEiF@gMaIl.CoM'
  jsonobj = [{ this: "is" }, { a: "test" }];
  monster = [{
    "name": "Giant Wasp",
    "size": "Medium",
    "type": "beast",
    "subtype": "",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 13,
    "hit_dice": "3d8",
    "speed": "10 ft., fly 50 ft., swim 50 ft.",
    "strength": 10,
    "dexterity": 14,
    "constitution": 10,
    "intelligence": 1,
    "wisdom": 10,
    "charisma": 3,
    "damage_vulnerabilities": "",
    "damage_resistances": "",
    "damage_immunities": "",
    "condition_immunities": "",
    "senses": "passive Perception 10",
    "languages": "",
    "challenge_rating": "1/2",
    "actions": [
      {
        "name": "Sting",
        "desc": "Sting. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        "attack_bonus": 4,
        "damage_dice": "1d6",
        "damage_bonus": 2
      }
    ]
  }];
  ninjas = ["Leif", "Blaze", "Charissa", "Daniel"];
  ninjamsg = "HOLY CRAP!!!!";

  clickedButton() {
    console.log("ZALGOZ HE COMES");
  }
}
