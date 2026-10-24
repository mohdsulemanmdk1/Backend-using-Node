import fs from "fs"
import {program} from 'commander'
import path from "path"



let filePath = path.join(import.meta.dirname,"data","Text.txt")
let data = fs.readFileSync(filePath,"utf8")


program
.name("wordCli")
        .description("CLI used to get the number of words , letters and lines in any file ")
        .version("1.0.0")


        program
        .command("letters")
        .description("shows the number of letters present in a file")
        .argument("<filePath>","file path")
        .action(()=>{
           
            console.log("the number of letters are ",data.length )
         })
         
         program 
                .command("words")
                .description("provides the number of words present in the file")
                .argument("<filePath>","file path")
                .action(()=>{
                  
                    console.log(`the file has ${data.split(" ").length } words`)
                })

        program
        .command("lines")
        .description("provides the lines present in file")
        .argument("<filePath>","file path")
        .action(()=>{
    
            console.log(`the number of lines present in the file is ${data.split("\n").length}`)
        })
    
program.parse()

