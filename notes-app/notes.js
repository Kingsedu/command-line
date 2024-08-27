import chalk from 'chalk';
import fs from "fs"

    export const getNotes = () =>{
        return "Your notes......."
    }

    export const addNotes = function (title, body){
    const notes = loadNotes();
    const duplicateNote = notes.find((note)=> note.title === title)
    if(!duplicateNote){
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(duplicateNote)
        console.log(chalk.bgMagenta('notes added successfully'))
    }else{
        console.log('Note title taken')
    }
}

    export const loadNotes = function(){
        try{
            const dataBuffer = fs.readFileSync("notes.json");
            const dataJSON = dataBuffer.toString();
            return JSON.parse(dataJSON)
        }
        catch(e){
            return [];
        }
        
    }

    export const saveNotes = function (notes){
        const dataJSON = JSON.stringify(notes);
        fs.writeFileSync("notes.json", dataJSON);
    }

    export const removeNotes = function(title){
        const notes = loadNotes();
        const notesToRemove = notes.filter(note => note.title === title)
        const newNotes = notes.filter(note => note.title !== title);
        if(notes.length === newNotes.length){
            //no note was removed,
            console.log(chalk.bgRed("No note found with that title"))
        }else{
            saveNotes(newNotes)
            console.log(chalk.bgGreen(`Note '${title}' removed`))
        }

    }

    export const listNotes = () =>{
        const notes = loadNotes();
        if(notes.length > 0){
            return notes.forEach((note)=>{
                console.log(chalk.greenBright(note.title))
                console.log(chalk.yellowBright(note.body))
                console.log("---")
            })
        }
    }

    export const readNote = (title) =>{
        const notes = loadNotes();
        const note = notes.find((note)=> note.title === title)
        if(note){
        console.log(chalk.bgBlueBright(`Found the note with title ${title}`));
        }
        else{
            console.log(chalk.bgRed("No note found with that title"))
        }

    }





