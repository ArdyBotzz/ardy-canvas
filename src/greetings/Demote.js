const Greeting = require("./Base");

module.exports = class demote extends Greeting {
    constructor() {
        super();
        this.textTitle = "DEMOTE";
        this.textMessage = "{server}";
        this.colorTitle = "#df0909";
        this.assent = `${__dirname}/../../assets/img/demote.png`;
    }
};
