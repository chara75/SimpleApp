module simpleapp {
    interface ISimple {
        name: string;
        favoriteColor: string;
        birthday: Date;
    }

    public class Simple implements ISimple {
        public name: string;
        public favoriteColor: string;
        public birthday: Date;

        constructor() {
            
        }
    }
}

