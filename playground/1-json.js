const fs = require("fs");

const fileData = fs.readFileSync("1-json.json");

const actualFile = JSON.parse(fileData.toString());

const changingData = (dataFile) =>{
    if(typeof dataFile === "object" && Object.keys(dataFile).length){
        dataFile.name = "chinedu",
        dataFile.age = 25,
        dataFile.city = "lagos"
        console.log(dataFile) // Log the modified data;

        const updateData = JSON.stringify(dataFile, null, 2)

        fs.writeFileSync("1-json.json", updateData);

        return dataFile;
    }
    return null;
}

console.log(changingData(actualFile));





// const book = {
//     title: "Ego is the Enemy",
//     author:"Ryan Holiday",
// }

// const jsonBook = JSON.stringify(book);
// fs.writeFileSync("1-json.json", jsonBook);
// const dataBuffer = fs.readFileSync("1-json.json");
// console.log(dataBuffer)
// const dataJSON = dataBuffer.toString()
// console.log(dataJSON);
//? you can access anything from the dataJSON because the contet are in strings, the data are stringified;
// const parseData = JSON.parse(dataJSON);
// console.log(parseData.title)