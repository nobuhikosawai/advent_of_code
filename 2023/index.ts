import yargs from "yargs/yargs";
import { Main } from "./src/types";

const argv = await yargs(process.argv.slice(2))
  .usage("$0 -p 1 day1")
  .options({
    sample: {
      type: "boolean",
      alias: "s",
      default: false,
      demandOption: false,
    },
    part: { type: "number", alias: "p", demandOption: true },
  })
  .help()
  .alias("h", "help").argv;

if (argv._[0]) {
  const { main }: { main: Main } = await import(`./src/${argv._[0]}`);
  if (argv.part === 1) {
    main.part1(argv.sample);
  } else if (argv.part === 2) {
    main.part2(argv.sample);
  }
}
