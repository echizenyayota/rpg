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

}
