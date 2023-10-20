import abstractVIew from "./abstractVIew.js";

export default class extends abstractVIew {
    constructor() {
        super();
        this.setTitle("Create Record");
    }

    async getHtml() {
        return `
        <form action="" method="post" id="createRecordForm">
            <h2 class="h2-form">Create Record</h2>
            <div class="form-box-container">
                <label for="jobDate">Date</label>
                <input class="input-date-time" type="date" name="jobDate" id="jobDate" required>
            </div>
            <div class="form-box-container">
                <label for="startTime">Start time</label>
                <input class="input-date-time" type="time" name="startTime" id="startTime" required>
            </div>
            <div class="form-box-container">
                <label for="endTime">End time</label>
                <input class="input-date-time" type="time" name="endTime" id="endTime" required>
            </div>
    
            <fieldset>
                <h3>Lunch</h3>
                <div>
                    <input type="radio" name="lunch" id="noLunch" value="0">
                    <label class="labelRadio" for="noLunch">No</label>
                </div>
                <div>
                    <input type="radio" name="lunch" id="yesLunch" value="30">
                    <label class="labelRadio" for="yesLunch">30</label>
                </div>
            </fieldset>
            <fieldset>
                <h3>Description</h3>
    
                <div>
                    <input type="radio" name="description" id="setUp" value="Set Up" required>
                    <label class="labelRadio" for="setUp">Set Up</label>
                </div>      
                <div>
                    <input type="radio" name="description" id="shop" value="Shop">
                    <label class="labelRadio" for="shop">Shop</label>
                </div>
                <div>
                    <input type="radio" name="description" id="takeDown" value="Take Down">
                    <label class="labelRadio" for="takeDown">Take Down</label>
                </div>
                <div>
                    <input type="radio" name="description" id="wearhouse" value="Wearhouse">
                    <label class="labelRadio" for="wearhouse">Wearhouse</label>
                </div>            
            </fieldset>
            <div class="form-box-container">
                <label for="client">Client</label>
                <input type="text" class="input-text" name="client" id="client" placeholder="Name" required>
            </div>
            <input class="btn-primary" type="submit" value="Submit">
        </form>
        `;
    }
}