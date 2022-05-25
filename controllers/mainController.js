const path = require('path');
const mainController = {
    index: (req,res) => {
        res.sendfile(path.join(__dirname,'../views/home.html'));
    }

}

module.export= mainController;