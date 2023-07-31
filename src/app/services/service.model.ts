// Basic Item representation

export class Item {
    public title: string;
    public desc: string;
    public icon: string;

    constructor(title: string, desc: string, icon: string) {
        this.title = title;
        this.desc = desc;
        this.icon = icon;
    }
}


// Basic Service representation

export class Service {
    
    public title: string;
    public desc: string;
    public img: string;
    public items: Item[];
    public code?: string;

    constructor(title: string, desc: string, img: string, items: Item[]) {
        this.title = title;
        this.desc = desc;
        this.img = img;
        this.items = items;
    }

}
