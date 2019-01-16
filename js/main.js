'use strict';
{

    class DragonFantasy {
        constructor(name, job, hp) {
            this.name = name;
            this.job = job;
            this.hp = hp;
        }

        show() {
            return `${this.name}の職業は${this.job}。現在のHPは${this.hp}です。`;
        }
    }

    const hero = new DragonFantasy('Tom', '勇者', '100');
    console.log(hero.show());

    class DragonFantasyMp extends DragonFantasy {
        constructor(name, job, hp, mp){
            super(name, job, hp);
            this.mp = mp;
        }

        showMp() {
            return `${this.name}の職業は${this.job}。現在のMPは${this.mp}です。`;
        }
    }

    const fighter = new DragonFantasyMp('Bob', '戦士', '200', '0');
    console.log(fighter.showMp());


}
