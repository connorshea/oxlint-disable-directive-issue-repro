#!/usr/bin/env node

// If I try to apply the "disable rule for whole file" fix here,
// it will go to the top of the file. I want to keep the
// `#!/usr/bin/env node` line as the first thing in the file
// so the file is valid.
console.log("this isn't allowed :)");
