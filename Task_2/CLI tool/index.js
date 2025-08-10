import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs";

const program = new Command();

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter Course Title",
  },
  {
    type: "number",
    name: "price",
    message: "Enter Course Price",
  },
];

const jsonFile = "course.json";

program
  .name("Courses-Manger")
  .description("CLI to make courses")
  .version("1.0.0");

program
  .command("add")
  .alias("a")
  .description("Add a Course")
  .action(() => {
    inquirer.prompt(questions).then((answers) => {
      if (fs.existsSync(jsonFile)) {
        fs.readFile(jsonFile, "utf8", (err, fileContent) => {
          if (err) {
            console.log("Error", err);
            process.exit();
          }
          const fileContentAsJson = JSON.parse(fileContent);
          fileContentAsJson.push(answers);
          fs.writeFileSync(
            jsonFile,
            JSON.stringify(fileContentAsJson),
            "utf-8"
          );
        });
      } else {
        fs.writeFileSync(jsonFile, JSON.stringify([answers]), "utf-8");
        console.log("Add Course Done");
      }
    });
  });

program
  .command("list")
  .alias("l")
  .description("List all courses")
  .action(() => {
    if (fs.existsSync(jsonFile)) {
      const courses = JSON.parse(fs.readFileSync(jsonFile, "utf8") || "[]");
      if (courses.length === 0) {
        console.log("No courses found.");
      } else {
        console.log("Courses:");
        console.table(courses);
      }
    } else {
      console.log("No courses found.");
    }
  });

program.parse(process.argv);
