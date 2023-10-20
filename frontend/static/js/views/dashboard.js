import abstractVIew from "./abstractVIew.js";

export default class extends abstractVIew {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h2>Dashboard</h2>
        `;
    }
}