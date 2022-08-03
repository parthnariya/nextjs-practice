import fs from 'fs'
import path from 'path'
function handler (req,res) {
    if (req.method === 'POST') {
        const {email,feedback} = req.body;
        const feedbackObj = {
            id:new Date().toISOString(),
            email:email,
            text : feedback
        }

        //store data in data file
        const filePath = path.join(process.cwd(),'data','feedback.json')
        const oldFileData = fs.readFileSync(filePath);
        const oldFileJsonData = JSON.parse(oldFileData);
        oldFileData.push(feedbackObj);
        fs.writeFileSync(filePath,JSON.stringify(oldFileJsonData))
    }
    res.status(200).json({message: 'this is api response'});
}