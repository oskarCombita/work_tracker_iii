import abstractVIew from "./abstractVIew.js";

export default class extends abstractVIew {
    constructor() {
        super();
        this.setTitle("Create Team Member");
    }

    async getHtml() {
        return `
        <form method="post" id="createTeamMemberForm">
        <h2 class="form">Create Team Member</h2>
        <div class="form-box-container">
            <label for="teamMember">Name</label>
            <input type="text" class="input-text" name="teamMember" id="teamMember" placeholder="Name" required>
        </div>
        <div class="form-box-container">
            <label for="setUpRate">Set Up Rate</label>
            <input type="number" class="input-text" name="setUpRate" id="setUpRate" placeholder="Rate value" required>
        </div>
        <div class="form-box-container">
            <label for="shopRate">Shop Rate</label>
            <input type="number" class="input-text" name="shopRate" id="shopRate" placeholder="Rate value" required>
        </div>
        <!-- <div class="form-box-container">
            <label for="taxes">Taxes Percent</label>
            <input type="number" step="0.01" class="input-text" name="taxes" id="taxes" placeholder="Taxes value" required>
            <p>Value withheld to cover taxes.</p>
        </div> -->
        <input class="btn-primary" type="submit" value="Create">
    </form>
        `;
    }
}