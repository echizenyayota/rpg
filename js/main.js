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

    // class DragonFantasyMp extends DragonFantasy {
    //     constructor(name, job, hp, mp){ // Bobの職業は戦士。現在のMPは0です。
    //         super(name, job, hp);
    //         this.mp = mp;
    //     }
    //
    //     showMp() {
    //         return `${this.name}の職業は${this.job}。現在のMPは${this.mp}です。`;
    //     }
    // }
    //

    // const fighter = new DragonFantasyMp('Bob', '戦士', '200', '0');
    // console.log(fighter.showMp());

    // class DragonFantasyMp extends DragonFantasy {
    //     constructor(mp){ // Bobの職業は戦士。現在のMPは0です。
    //         super('Bob', '戦士', 200);
    //         this.mp = mp;
    //     }
    //
    //     showMp() {
    //         return `${this.name}の職業は${this.job}。現在のMPは${this.mp}です。`;
    //     }
    // }
    //
    // const fighter = new DragonFantasyMp(0);
    // console.log(fighter.showMp());

    class DragonFantasyMp extends DragonFantasy {
        constructor(mp){ // undefinedの職業はundefined。現在のMPはBobです(ダメな例。子クラスが親クラスを上書きしている)
            super();
            this.mp = mp;
        }

        showMp() {
            // 子クラスが上書きしているためthis.nameとthis.jobが定義されていない状態
            return `${this.name}の職業は${this.job}。現在のMPは${this.mp}です。`;
        }
    }

    // this.mpがDragonFantasyのthis.nameを上書きしているため'Bob'しか引数を取っていない
    const fighter = new DragonFantasyMp('Bob', '戦士', 200, 0);
    console.log(fighter.showMp());


}
