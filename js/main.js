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
        constructor(job, mp){
            super(job);
            this.mp = mp;
        }

        showMp() {
            return `${this.job}のMPは${this.mp}です。`;
        }
    }



}
